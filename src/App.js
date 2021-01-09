import {Grid, Typography} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import {makeStyles} from '@material-ui/core/styles';
import React, {useState} from 'react';

import Text from './components/Text';
import votingOptions from './components/votingOptions';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: theme.spacing(2),
  },
  card: {
    border: 'none',
    height: '99%',
    width: '99%',
  },
  titleText: {
    fontWeight: 'bold',
    fontFamily: 'Arial',
  },
  explainedText: {
    fontFamily: 'Arial',
    color: 'textSecondary',
    textAlign: 'justify',
  },
  result: {
    height: '30vw',
    align: 'center',
    width: '100%',
  },
  resultText: {
    fontWeight: 'bold',
    fontFamily: 'Arial',
    fontSize: '25vw ',
  },
}));

function Lista(props) {
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      {votingOptions.map((votingOption) => (
        <Grid item key={votingOption.name} sm={6} >
          <Card
            variant="outlined"
            className={classes.card}
            style={{background: votingOption.color}}>
            <CardActionArea onClick={() => props.onDecision(votingOption)}>
              <CardContent>
                <Typography gutterBottom
                  align="center"
                  component="h5"
                  variant="h5"
                  className={classes.titleText} >
                  {/* {votingOption.name} */}

                  <Text
                    content={votingOption.name}
                    symbol={votingOption.symbol}>

                  </Text>

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
  );
}

function App() {
  const classes = useStyles();
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
        <p align="right">
          <Button variant="contained" onClick={()=>setName(null)}>Back</Button>
        </p>
        <Card
          variant="outlined"
          className={classes.result}
          style={{background: color}}>
          <Typography gutterBottom
            component="h1"
            variant="h1"
            align='center'
            className={classes.resultText}>
            <Text content={symbol} />
          </Typography>
        </Card>
      </>
    );
  }
}

export default App;
