import { Body1, Link, Title2, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  title: {
    margin: 0,
  },
  paragraph: {
    margin: 0,
  },
});

function AboutPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title2 as="h1" className={styles.title}>
        About
      </Title2>
      <Body1 as="p" className={styles.paragraph}>
        Azure Name Builder helps you and your organization name your Azure
        resources.
      </Body1>
      <Body1 as="p" className={styles.paragraph}>
        Check out{' '}
        <Link
          href="https://github.com/bijancamp/azure-name-builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          the GitHub repository
        </Link>{' '}
        to learn more and contribute.
      </Body1>
    </div>
  );
}

export default AboutPage;
