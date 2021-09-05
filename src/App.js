import { useEffect, Suspense, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Container from '@material-ui/core/Container';

import AppBar from 'components/AppBar';
import Loader from 'components/Loader/Loader';
import PrivateRoute from 'components/PrivateRoute';
import PublicRoute from 'components/PublicRoute';
import { fetchCurrentUser } from 'redux/operations/auth-operations';
import { getIsFetchingCurrent } from 'redux/selectors/auth-selectors';

const HomePage = lazy(() => import('views/HomePage'));
const RegisterPage = lazy(() => import('views/RegisterPage'));
const LoginPage = lazy(() => import('views/LoginPage'));
const ContactsPage = lazy(() => import('views/ContactsPage'));

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
