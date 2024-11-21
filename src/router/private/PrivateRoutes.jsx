// // PrivateRoutes.jsx
// import { Navigate, Outlet } from 'react-router-dom';
// import { useAuthStore } from '../../hooks';

// export const PrivateRoutes = ({children, rols, pathNavigate }) => {
//   const { user, Logout } = useAuthStore();

//   if (!user) return Logout();

//   if (!rols.includes(user.payload.rol)) return <Navigate to={pathNavigate} />;

//   return children ? children : <Outlet/>;
// };
