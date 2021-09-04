import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Container from 'components/Container';
import Filter from 'components/Filter';
import Section from 'components/Section';
import Title from 'components/Title';
import selectors from 'redux/selectors/contacts-selectors';

export default function ContactsPage(params) {
  const loading = useSelector(selectors.isLoading);
  return (
    <Section>
      <Container>
        <ToastContainer autoClose={3000} />
        <Title text="Phonebook" />
        <ContactForm />
        <Title text="Contacts" />
        <Filter />
        <ContactList />
        {loading && (
          <Loader type="Audio" color="#3f51b5" height={80} width={80} />
        )}
      </Container>
    </Section>
  );
}
