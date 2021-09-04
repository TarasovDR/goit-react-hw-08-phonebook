// import SubTitle from 'components/SubTitle';

// export default function HomePage() {
//   return <SubTitle text="For save contacts" />;
// }

import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Your phone book</h1>
  </div>
);

export default HomePage;
