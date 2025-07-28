import { Button, Text, Title1, makeStyles } from '@fluentui/react-components';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px',
    textAlign: 'center',
  },
});

function NotFoundPage() {
  const styles = useStyles();
  const navigate = useNavigate();

  const handleGoHome = () => {
    void navigate('/');
  };

  return (
    <div className={styles.container}>
      <Title1>404 - Page Not Found</Title1>
      <Text>
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you
        back to the name generator.
      </Text>
      <Button appearance="primary" onClick={handleGoHome}>
        Go to Generate Names
      </Button>
    </div>
  );
}

export default NotFoundPage;
