import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import Container from '@material-ui/core/Container';

import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Title from 'components/Title';
import selectors from 'redux/selectors/contacts-selectors';

export default function ContactsPage(params) {
  const loading = useSelector(selectors.isLoading);
  return (
    <Container maxWidth="md" title="Phonebook">
      <ToastContainer autoClose={3000} />
      <Title text="Phonebook" />
      <ContactForm />
      <Title text="Contacts" />
      <Filter />
      <ContactList />
      {loading && (
        <Loader type="Audio" color="#00ff9d" height={80} width={80} />
      )}
    </Container>
  );
}
