import { Text, Title2, makeStyles } from '@fluentui/react-components';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    padding: '32px 24px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width: 480px)': {
      padding: '32px 20px',
    },
  },
});

function GenerateNamesPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title2>Generate Names</Title2>
      <Text>The Harmeet—he&apos;s going to 💙 this when it&apos;s done.</Text>
    </div>
  );
}

export default GenerateNamesPage;
