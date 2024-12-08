import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { AuthPage } from '../auth';
import { LayoutPage } from '../layout/LoggedIn';
import { useAuthStore } from '../hooks';

import { ListUserPage, CreateUserPage, UpdateUserPage, ListRolPage,
         UserProfilePage, CreateRolPage, UpdateRolPage, ProductGrid,
         ProductDescription, CreateSalePage, ListOrdenPage, OrdenPage,
         ListSalePage, ListMeasuresPage, ListClientPage, ListSupplierPage,
         ListCategoryPage,
         CreateMeasuresPage,
         UpdateMeasurePage,
         UpdateClientPage,
         CreateClientPage,
         CreateSupplierPage,
         UpdateSupplierPage,
         UpdateProductPage,
         CreateProductPage,
         DetailsOrdenPage,
         CreateCategoryPage,
         StreamlitApp
       } from '../Models';
import { ListProductPage } from '../Models/Product/page/ListProductPage';
import { UpdateProductItemPage } from '../Models/Product/page/UpdateProductItemPage';
import { Dashboard } from '../Models/Dashbord/Dashboard';
import { ReportEstrategico } from '../Models/Dashbord/page/ReportEstrategico';
import { ReportOperativo } from '../Models/Dashbord/page/ReportOperativo';
import { ReportTactico } from '../Models/Dashbord/page/ReportTactico';
import { DetailsSalesPage } from '../Models/Venta/page/DetailsSalesPage';
import { UpdateCategoryPage } from '../Models/Category/page/UpdateCategoryPage';

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
                          <Route path="/dashboard" element={ <Dashboard/> } />
                          
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

                          <Route path="/product">
                            <Route index element={ <ListProductPage/> } />
                            <Route path="create" element={ <CreateProductPage/> } />
                            <Route path="edit/:id" element={ <UpdateProductPage/> } />
                            <Route path="details">
                              <Route path="edit/:product_id/:measures_id" element={ <UpdateProductItemPage/> } />
                            </Route>
                            <Route path="catalogo">
                              <Route index element={ <ProductGrid/> } />
                              <Route path=":id" element={ <ProductDescription/> } />
                            </Route>
                          </Route>

                          <Route path="/orden">
                            <Route index element={ <ListOrdenPage/> } />
                            <Route path=":id" element={ <DetailsOrdenPage/> } />
                            <Route path="create" element={ <OrdenPage/> } />
                          </Route>

                          <Route path="/sale">
                            <Route index element={ <ListSalePage/> } />
                            <Route path=":id" element={ <DetailsSalesPage/> } />
                            <Route path="create" element={ <CreateSalePage/> } />
                          </Route>

                          <Route path="/measure">
                            <Route index element={ <ListMeasuresPage/> } />
                            <Route path="create" element={ <CreateMeasuresPage/> } />
                            <Route path="edit/:id" element={ <UpdateMeasurePage/> } />
                          </Route>
                          <Route path="/streamlit" element={ <StreamlitApp/> } />

                          

                          <Route path="/category">
                            <Route index element={ <ListCategoryPage/> } />
                            <Route path="create" element={ <CreateCategoryPage/> } />
                            <Route path="edit/:id" element={ <UpdateCategoryPage/> } />
                          </Route>
     
                          <Route path="/client">
                            <Route index element={ <ListClientPage/> } />
                            <Route path="create" element={ <CreateClientPage/> } />
                            <Route path="edit/:id" element={ <UpdateClientPage/> } />
                          </Route>

                          <Route path="/supplier">
                            <Route index element={ <ListSupplierPage/> } />
                            <Route path="create" element={ <CreateSupplierPage/> } />
                            <Route path="edit/:id" element={ <UpdateSupplierPage/> } />
                          </Route>

                          <Route path="/report">
                            <Route path="estrategico" element={ <ReportEstrategico/> } />
                            <Route path="operativo" element={ <ReportOperativo/> } />
                            <Route path="tactico" element={ <ReportTactico/> } />
                           
                          </Route>
                    
                      
                          <Route path="/*" element={ <Navigate to="/" /> } />
                      </>
                    )
            }
   </Routes>
  )
}
  