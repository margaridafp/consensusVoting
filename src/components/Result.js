import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  symbolCircle: {
    borderRadius: '50%',
    width: '200px',
    height: '200px',
    padding: '8px',
    color: 'white',
    fontSize: '100px',
    lineHeight: '199px',
    textAlign: 'center',
    margin: 'auto',
  },
}));

function ResultText(props) {
  const classes = useStyles();
  return <div
    className={classes.symbolCircle}
    style={{background: props.color}}>
    {props.symbol}
  </div>;
}

export default ResultText
;
