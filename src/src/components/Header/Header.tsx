import { Title3, makeStyles } from '@fluentui/react-components';
import { CloudWordsFilled } from '@fluentui/react-icons';

const useStyles = makeStyles({
  header: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #e1e1e1',
    display: 'flex',
    height: '64px',
    justifyContent: 'space-between',
    padding: '0 24px',
  },
  branding: {
    alignItems: 'center',
    display: 'flex',
    gap: '12px',
  },
  navigation: {
    alignItems: 'center',
    display: 'flex',
    gap: '16px',
  },
});

/**
 * Header component with branding and navigation.
 * Placeholder implementation - will be enhanced in task 3.
 */
function Header() {
  const styles = useStyles();

  return (
    <header className={styles.header}>
      <div className={styles.branding}>
        <CloudWordsFilled />
        <Title3>Azure Name Builder</Title3>
      </div>
      <nav className={styles.navigation}>
        {/* Navigation will be implemented in task 3 */}
      </nav>
    </header>
  );
}

export default Header;
