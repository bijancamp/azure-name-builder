import { Body1, Title2, makeStyles } from '@fluentui/react-components';

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

function GenerateNamesPage() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Title2 as="h1" className={styles.title}>
        Generate Names
      </Title2>
      <Body1 as="p" className={styles.paragraph}>
        {"The Harmeet—he's going to 💙 this when it's done."}
      </Body1>
    </div>
  );
}

export default GenerateNamesPage;
