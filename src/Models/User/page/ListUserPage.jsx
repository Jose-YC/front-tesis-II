import { useUserStore, usePaginateStore } from '../../../hooks';
import { ListLayoutPage, Paginate } from '../../../layout/LoggedIn';
import { ListUser } from '../components/ListUser';

export const ListUserPage = () => {
    const { startGetUsers, startGetSearchUsers, DeleteUser } =  useUserStore();
    const { data, currentPage, totalPages, searchPage,
            createPageURL, handleInputChange, generatePagination } =  usePaginateStore(startGetUsers, startGetSearchUsers);
    const allPages = generatePagination(currentPage, totalPages);

  return (
    <ListLayoutPage 
    searchParams = {searchPage}
    currentPage={currentPage} 
    totalPages={totalPages} 
    handleInputChange={handleInputChange}
    to={'/user/create'} 
    models={'Usuarior'}>
        <ListUser data={data} DeleteUser={DeleteUser} />
        <Paginate
          allPages={allPages} 
          createPageURL={createPageURL} 
          currentPage={currentPage}
          totalPages={totalPages}/> 
    </ListLayoutPage>
  )
}
