import {
  Body1,
  Link as FluentLink,
  Title2,
  makeStyles,
} from '@fluentui/react-components';
import RouterLink from '../components/RouterLink';

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
        Head over to the <RouterLink to="/">Generate Names</RouterLink> section
        to start naming!
      </Body1>
      <Body1 as="p" className={styles.paragraph}>
        Feel free to{' '}
        <FluentLink
          href="https://github.com/bijancamp/azure-name-builder"
          target="_blank"
          rel="noopener noreferrer"
        >
          explore the project on GitHub
        </FluentLink>
        .
      </Body1>
    </div>
  );
}

export default AboutPage;
