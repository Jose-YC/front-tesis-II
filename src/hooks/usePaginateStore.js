import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { onDeclareVariables, onIsLoading, onResetData } from '../store';
import { useDebouncedCallback } from 'use-debounce';
import { useNotification } from './useNotification';

export const usePaginateStore = (startGet, startGetSearch) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get('page')) || 1;
  const searchPage = searchParams.get('search') || '';
  const {data, currentGroup, totalPages, isLoding, error} = useSelector(state => state.paginate);
  const { AddNotification } = useNotification()

  useEffect(() => {
    !searchPage ? 
    setSearchParams({ page: currentPage}) :
    setSearchParams({ page: currentPage, search: searchPage});
    return () => {
      dispatch(onResetData());
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(onResetData());
  }, [searchPage, currentGroup]);

  useEffect(() => {
      if (data[currentPage]) return;
      AxiosData(); 
  }, [currentPage, dispatch, searchPage, totalPages]);
  
  const AxiosData = async () => {
    dispatch(onIsLoading({isLoding: true}));
    try {
      const result = await (
        !searchPage ? 
          startGet(currentPage, currentGroup): 
          startGetSearch(currentPage, currentGroup, searchPage)
        );
      dispatch(onDeclareVariables({data: result.data.data, total: result.data.total, currentPage}));

    } catch (error) {
      console.log(error);
      AddNotification({type: 'error', message: error.message, duration: 10000})
    } finally {
      dispatch(onIsLoading({isLoding: false}));
    }
  };  
  
  const generatePagination = (currentPage, totalPages) => {
    if (totalPages == 0) return [0];
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    if (currentPage <= 3) return [1, 2, 3, '...', totalPages - 1, totalPages];
    if (currentPage >= totalPages - 2) return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
    return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages,];
  };

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    return `${window.location.pathname }?${params.toString()}`;
  };

  const handleInputChange = useDebouncedCallback((value) => {
    const newParams = new URLSearchParams(searchParams);
    !value ? newParams.delete('search') : newParams.set('search', value);
    newParams.set('page', 1);
    setSearchParams(newParams); 
  }, 600); 

  return {
    data: data[currentPage], 
    currentPage, 
    currentGroup, 
    totalPages, 
    isLoding, 
    error,
    searchPage,
    handleInputChange,
    generatePagination,
    createPageURL,
  }
}
