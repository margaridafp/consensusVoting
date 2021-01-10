import {makeStyles} from '@material-ui/core/styles';
import React from 'react';

const useStyles = makeStyles((theme) => ({
  symbolCircle: {
    borderRadius: '50%',
    width: '28px',
    height: '28px',
    padding: '8px',
    color: 'white',
  },
}));

function Text(props) {
  const classes = useStyles();
  return (
    <>
      <div
        className={classes.symbolCircle}
        style={{background: props.color}}>
        {props.symbol}
      </div>
      <div style={{paddingTop: '1vh'}}>{props.content}</div>
    </>
  )
  ;
}

export default Text;
