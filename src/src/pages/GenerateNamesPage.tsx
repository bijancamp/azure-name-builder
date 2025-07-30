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
      <Text>The Harmeet—he&apos;s going to 💙 this when it&apos;s done.</Text>
    </div>
  );
}

export default GenerateNamesPage;
