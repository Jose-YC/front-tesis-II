import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthPage } from '../auth';
import { LayoutPage } from '../layout/LoggedIn';
import { useAuthStore } from '../hooks';

import { ListUserPage } from '../Models/User/page/ListUserPage';
import { CreateUserPage } from '../Models/User/page/CreateUserPage';
import { UpdateUserPage } from '../Models/User/page/UpdateUserPage';
import { ListRolPage } from '../Models/Rol/page/ListRolPage';
import { UserProfilePage } from '../Models/Profile/page/UserProfilePage';
import { CreateRolPage } from '../Models/Rol/page/CreateRolPage';
import { UpdateRolPage } from '../Models/Rol/page/UpdateRolPage';
// import { UserAdd, UserList, UserUpdate, Setting } from '../Models/User';

export const AppRouter = () => {

  const {isStatus, CheckAuthToken} = useAuthStore();

  useEffect(() => {
    CheckAuthToken();
  }, [])
   
  if (isStatus === 'checking') {
    return (<h3>cargando...</h3>);
  }

  return (
    <Routes>

{
                ( isStatus === 'not-authenticated')  
                    ? (
                      <>
                          <Route path="/" element={ <AuthPage/> } />
                          <Route path="/*" element={ <Navigate to="/" /> } />
                      </>
                      )
                    : (
                      <>
                          <Route path="/" element={ <LayoutPage/> } />
                          
                          <Route path="/user">
                            <Route index element={ <ListUserPage/> } />
                            <Route path="create" element={ <CreateUserPage/> } />
                            <Route path="edit/:id" element={ <UpdateUserPage/> } />
                            <Route path="profile" element={ <UserProfilePage/> } />
                          </Route>
                          
                          <Route path="/rol">
                            <Route index element={ <ListRolPage/> } />
                            <Route path="create" element={ <CreateRolPage/> } />
                            <Route path="edit/:id" element={ <UpdateRolPage/> } />
                          </Route>

                    
                      
                          <Route path="/*" element={ <Navigate to="/" /> } />
                      </>
                    )
            }
   </Routes>
  )
}
  