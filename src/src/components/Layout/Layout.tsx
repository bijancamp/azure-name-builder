import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import React from 'react';
import { makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  layout: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    backgroundColor: '#fafcfc',
    display: 'flex',
    flex: '1',
    flexDirection: 'column',
    padding: '32px 24px',
    '@media (max-width: 480px)': {
      paddingLeft: '18px',
    },
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout component that provides consistent structure across all pages.
 * Includes header, main content area, and footer.
 */
function Layout({ children }: LayoutProps) {
  const styles = useStyles();

  return (
    <div className={styles.layout}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
