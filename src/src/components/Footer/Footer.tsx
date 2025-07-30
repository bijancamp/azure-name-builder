import { Body1, Link, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  footer: {
    alignItems: 'center',
    backgroundColor: '#1f2937',
    borderTop: '1px solid #e1e1e1',
    color: '#d1d5db',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto',
    padding: '16px 24px',
  },
  footerText: {
    textAlign: 'center',
  },
  authorLink: {
    color: '#a0d2ee',
    textDecoration: 'none',
    fontWeight: '500',
    transition: 'all 0.2s ease-in-out',
    borderBottom: '1px solid transparent',
    ':hover': {
      color: '#b0d8ee',
      borderBottomColor: '#b0d8ee',
      textDecoration: 'none',
    },
    ':hover:focus': {
      color: '#b0d8ee',
      borderBottomColor: '#b0d8ee',
      textDecoration: 'none',
    },
  },
});

/**
 * Footer component with copyright and attribution.
 */
function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Body1 className={styles.footerText}>
        © 2025{' '}
        <Link
          href="https://bijancamp.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.authorLink}
        >
          Bijan Camp
        </Link>{' '}
        · Built with 🩵 for Azure pros
      </Body1>
    </footer>
  );
}

export default Footer;
