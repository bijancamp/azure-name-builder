import { Link, Text, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  footer: {
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderTop: '1px solid #e1e1e1',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 'auto',
    padding: '16px 24px',
  },
});

/**
 * Footer component with copyright and attribution.
 */
function Footer() {
  const styles = useStyles();

  return (
    <footer className={styles.footer}>
      <Text size={200}>
        © 2025{' '}
        <Link
          href="https://bijancamp.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bijan Camp
        </Link>{' '}
        · Built with 💙 for Azure pros
      </Text>
    </footer>
  );
}

export default Footer;
