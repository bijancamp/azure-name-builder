import { Body1, Button, Title2, makeStyles } from '@fluentui/react-components';
import { Link } from 'react-router';

const useStyles = makeStyles({
  container: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    margin: 0,
    textAlign: 'center',
  },
  paragraph: {
    margin: 0,
    textAlign: 'center',
  },
  generateThePerfectNameLink: {
    marginTop: '5px',
  },
});

function NotFoundPage() {
  const styles = useStyles();

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
      <Link to="/" className={styles.generateThePerfectNameLink}>
        <Button appearance="primary">Generate the Perfect Name</Button>
      </Link>
    </div>
  );
}

export default NotFoundPage;
