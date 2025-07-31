import { Body1, Title2, makeStyles } from '@fluentui/react-components';

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
      <Title2 as="h1" style={{ margin: 0 }}>
        Generate Names
      </Title2>
      <Body1 as="p" style={{ margin: 0 }}>
        {"The Harmeet—he's going to 💙 this when it's done."}
      </Body1>
    </div>
  );
}

export default GenerateNamesPage;
