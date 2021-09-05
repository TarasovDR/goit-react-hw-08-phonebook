// import SubTitle from 'components/SubTitle';

// export default function HomePage() {
//   return <SubTitle text="For save contacts" />;
// }

import React from 'react';

const styles = {
  container: {
    minHeight: 'calc(100vh - 40px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 400,
    fontSize: 40,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Your phone book</h1>
  </div>
);

export default HomeView;
