import React, { useEffect } from 'react';
import { AuthCheck, ForgotPassword, Home, Login, PaymentCard, PaymentQrcode, PersonalOffice, Profile, ProfileBlank, Register, Settings, Withdraw, WithdrawFinally } from './pages';
import {
  Routes,
  Route,
  Navigate,
  Outlet
} from "react-router-dom";
import { SavePwd } from './components';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { checkToken, login, selectCurrentToken } from './features/reducers/authSlice';
import Cookies from 'js-cookie';

function App() {

  const { token } = useAppSelector(selectCurrentToken);
  const dispatch = useAppDispatch();
  const dgtipToken = Cookies.get("accessToken");

  useEffect(() => {
    if (token) {
      dispatch(checkToken({ accessToken: token as string }))
    }
  }, [dispatch, token])

  const RequireAuth = () => {
    return token ? <Navigate to={"/personal-office"} replace /> : <Login />
  }

  const RequireProfile = () => {
    return token ? <Outlet /> : <Navigate to={"/"} replace />
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    if (dgtipToken) {
      dispatch(login({ accessToken: dgtipToken }));
    }
  }, []);

  return (
    <Routes>
      <Route path='/auth' element={token ? <Navigate to={"/"} replace /> : <AuthCheck />} />
      <Route path='/login' element={<RequireAuth />} />
      <Route path='/signup' element={token ? <Navigate to={"/personal-office"} replace /> : <Register />} />
      <Route path='/forgot/password' element={token ? <Navigate to={"/"} replace /> : <ForgotPassword />} />
      <Route path='/reset/password/:resetToken' element={token ? <Navigate to={"/"} replace /> : <SavePwd />} />
      <Route path='/'>
        <Route index element={<Home />} />
        <Route path='personal-office' element={token ? <PersonalOffice /> : <Navigate to={"/"} replace />} />
        <Route path='profile/' element={<RequireProfile />}>
          <Route index element={<Profile />} />
          <Route path='settings' element={<Settings />} />
          <Route path='register/account' element={<Withdraw />} />
          <Route path='withdraw' element={<WithdrawFinally />} />
          <Route path='payment-qrcode' element={<PaymentQrcode />} />
          <Route path='payment-card' element={<PaymentCard />} />
          <Route path='blank' element={<ProfileBlank />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
