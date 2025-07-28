import { Text, Title1, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px',
  },
});

function AboutPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1>About Azure Name Builder</Title1>
      <Text>
        Learn about the Azure Name Builder tool, its features, and how it can
        help your organization maintain consistent naming conventions for Azure
        resources.
      </Text>
    </div>
  );
}

export default AboutPage;
