import React, { Component, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import votingOptions from './components/votingOptions'
import Text from './components/Text';


const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    marginTop: '2vh'
  },
  container: {
    display:"flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "stretch",
    padding: theme.spacing(2),
  },
  card: {
    border: 'none',
    height: '95%',
    width: '99%',
  },
  titleText: {
    fontWeight: "bold",
    fontFamily: 'Roboto',
    textAlign: '-webkit-center',
  },
  explainedText: {
    fontFamily: 'Roboto',
    color: "textSecondary",
    textAlign: "justify",
  },
  result:{
    height: '30vw',
    align: 'center',
    width: '100%'
  },
  resultText:{
    fontWeight: "bold",
    fontFamily: 'Roboto',
    fontSize:'25vw ',
  }
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
      {votingOptions.map(votingOption => (
        <Grid item key={votingOption.name} sm={6} >
          <Card variant="outlined" className={classes.card}>
            <CardActionArea onClick={() => props.onDecision(votingOption)}>
              <CardContent>
                <Typography gutterBottom component="h5" variant="h5" className={classes.titleText}  >
                  {/* {votingOption.name} */}

                  <Text content={votingOption.name} symbol={votingOption.symbol} color={votingOption.color}></Text>

                </Typography>
                <Typography color="textSecondary" component="p" className={classes.explainedText}>{votingOption.explained}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </>
  )
}

function App() {
  const classes = useStyles();
  const [name, setName] = useState(null);
  const [symbol, setSymbol] = useState(null);
  const [color, setColor] = useState(null);

  if (name===null) {
    return (
        <Lista onDecision={(decision) => [setSymbol(decision.symbol), setName(decision.name), setColor(decision.color)]} />
    );
  } else { 
    return (
      <>
      <p align="right">
        <Button variant="contained" onClick={()=>setName(null)}>Back</Button>
      </p>
      <Card variant="outlined" className={classes.result} style={{ background: color }}>
        <Typography gutterBottom component="h1" variant="h1" align='center' className={classes.resultText}>
          <Text content={symbol} />
        </Typography>
      </Card>
      </>
      )
    }
}

export default App;