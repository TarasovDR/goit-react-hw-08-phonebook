import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { Switch, Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { fetchCurrentUser } from 'redux/operations/auth-operations';
import { getIsFetchingCurrent } from 'redux/selectors/auth-selectors';

import AppBar from 'components/AppBar';
import Container from 'components/Container';
import Loader from 'components/Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';

const HomePage = lazy(
  async () =>
    await import('views/HomePage' /* webpackChunkName: "home-page" */),
);

const RegisterPage = lazy(
  async () =>
    await import('views/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(
  async () =>
    await import('views/LoginPage' /* webpackChunkName: "login-page" */),
);

const ContactsPage = lazy(
  async () =>
    await import('views/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrent = useSelector(getIsFetchingCurrent);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);
  return (
    <Container maxWidth="md">
      {isFetchingCurrent ? (
        <Loader />
      ) : (
        <>
          <AppBar />

          <Switch>
            <Suspense fallback={<Loader />}>
              <PublicRoute exact path="/">
                <HomePage />
              </PublicRoute>
              <PublicRoute path="/register" restricted>
                <RegisterPage />
              </PublicRoute>
              <PublicRoute path="/login" restricted redirectTo="/contacts">
                <LoginPage />
              </PublicRoute>
              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsPage />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
};

export default App;
