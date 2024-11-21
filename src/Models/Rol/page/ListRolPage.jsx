import { useRolStore, usePaginateStore } from "../../../hooks";
import { ListLayoutPage, Paginate } from "../../../layout/LoggedIn";
import { ListRol } from "../components/ListRol";



export const ListRolPage = () => {

    const { startGetRol, startGetSearchRol, DeleteRol } =  useRolStore(); 
    const { data, currentPage, totalPages, searchPage, 
            createPageURL, handleInputChange, generatePagination } =  usePaginateStore(startGetRol, startGetSearchRol);
    const allPages = generatePagination(currentPage, totalPages);
    
  return (
    <ListLayoutPage 
    searchParams = {searchPage}
    currentPage={currentPage} 
    totalPages={totalPages} 
    handleInputChange={handleInputChange}
    to={'/rol/create'} 
    models={'Rol'}>
       <ListRol data={data} DeleteRol={DeleteRol}/>
       <Paginate
        allPages={allPages} 
        createPageURL={createPageURL} 
        currentPage={currentPage}
        totalPages={totalPages}/> 
    </ListLayoutPage>
  )
}
