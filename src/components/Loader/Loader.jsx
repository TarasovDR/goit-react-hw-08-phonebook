import Spinner from 'react-loader-spinner';

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import { LoaderWrap } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrap>
      <Spinner
        type="Bars"
        color="#00ff9d"
        height={120}
        width={120}
        timeout={3000}
      />
    </LoaderWrap>
  );
};

export default Loader;
