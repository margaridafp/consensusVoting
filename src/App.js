import {Grid, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';

import ResultText from './components/Result';
import Text from './components/Text';
import votingOptions from './components/votingOptions';

const useStyles = makeStyles((theme) => ({
  title: {
    textAlign: 'center',
    marginTop: '2vh',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: theme.spacing(2),
  },
  card: {
    border: 'none',
    height: '95%',
    width: '99%',
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: '-webkit-center',
  },
  explainedText: {
    fontFamily: 'Roboto',
    color: 'textSecondary',
    textAlign: 'center',
  },
  resultCircle: {
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    padding: '8px',
    color: 'white',
  },
}));

function Lista(props) {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h5"
        className={classes.title}
        gutterBottom>
        SUBMIT YOUR VOTE
      </Typography>
      <Grid container className={classes.container}>
        {votingOptions.map((votingOption) => (
          <Grid item key={votingOption.name} sm={6} >
            <Card variant="outlined" className={classes.card}>
              <CardActionArea onClick={() => props.onDecision(votingOption)}>
                <CardContent>
                  <Typography gutterBottom
                    component="h5"
                    variant="h5"
                    className={classes.titleText} >
                    <Text
                      content={votingOption.name}
                      symbol={votingOption.symbol}
                      color={votingOption.color}/>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    component="p"
                    className={classes.explainedText}>
                    {votingOption.explained}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

function App() {
  const [name, setName] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [color, setColor] = useState(null);

  if (name===null) {
    return (
      <Lista
        onDecision={(decision) => [
          setSymbol(decision.symbol),
          setName(decision.name),
          setColor(decision.color)]
        } />
    );
  } else {
    return (
      <>
        <p align="left">
          <Button onClick={()=>setName(null)}>{'\u2329'} Back</Button>
        </p>
        <ResultText symbol={symbol} color={color} />
      </>
    );
  }
}

export default App;
