
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from "./features/Auth/Login";
import PageNotfound from './features/Auth/PageNotfound';
// import Register from "./features/Auth/Register";
// import ForgotPassword from './features/Auth/ForgotPassword';
// import ResetPassword from './features/Auth/ResetPassword';
import ProtectedRoute from "./features/Auth/ProtectedRoute";
import AdminRouters from './Routers/AdminRouters';
import SellerRouters from './Routers/SellerRouters';
import BuyerRouters from './Routers/BuyerRouters';
import Signup from './features/Auth/Signup';

function App() {
  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/signup" element={<Signup />} />
        {/*<Route path="/forgotPassword" element={<ForgotPassword/>} />
        <Route path="/resetPassword" element={<ResetPassword/>} /> */}
        {/* Admin Routes */}
        <Route path='/admin/*' element={<ProtectedRoute>
          <AdminRouters />
        </ProtectedRoute>} />
        <Route path='/seller/*' element={<ProtectedRoute>
          <SellerRouters />
        </ProtectedRoute>} />
        <Route path='/buyer/*' element={<ProtectedRoute>
          <BuyerRouters />
        </ProtectedRoute>} />
        <Route path='/*' element={
          <PageNotfound />
        } />
      </Routes>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
}

export default App;

