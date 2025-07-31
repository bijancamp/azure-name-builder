import { Body1, Button, Title2, makeStyles } from '@fluentui/react-components';
import { useNavigate } from 'react-router';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px',
  },
  title: {
    textAlign: 'center',
    margin: 0,
  },
  paragraph: {
    textAlign: 'center',
    margin: 0,
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
      <Title2 as="h1" className={styles.title}>
        404: Naming Opportunity Detected
      </Title2>
      <Body1 as="p" className={styles.paragraph}>
        {
          "The page you're looking for is as elusive as the perfect Azure resource name."
        }
      </Body1>
      <Button appearance="primary" onClick={handleGoHome}>
        Generate the Perfect Name
      </Button>
    </div>
  );
}

export default NotFoundPage;
