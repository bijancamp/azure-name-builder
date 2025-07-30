import { Body2, Link, Title2, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: '13px',
    paddingLeft: '24px',
    paddingRight: '24px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 480px)': {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  title: {
    marginBottom: '15px',
  },
  paragraph: {
    marginTop: '5px',
    marginBottom: '10px',
  },
});

function AboutPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title2 className={styles.title} as="h1">
        About
      </Title2>
      <Body2 className={styles.paragraph} as="p">
        Azure Name Builder helps you and your organization name your Azure
        resources.
      </Body2>
      <Body2 className={styles.paragraph} as="p">
        Check out{' '}
        <Link
          href="https://github.com/bijancamp/azure-name-builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          the GitHub repository
        </Link>{' '}
        to learn more and contribute.
      </Body2>
    </div>
  );
}

export default AboutPage;
