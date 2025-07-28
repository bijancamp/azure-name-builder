import { Text, Title1, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px',
  },
});

function GenerateNamesPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title1>Generate Names</Title1>
      <Text>
        This is where the name generation functionality will be implemented.
        Stay tuned for powerful Azure resource naming tools!
      </Text>
    </div>
  );
}

export default GenerateNamesPage;
