import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  numberCircle: {
    borderRadius: '50%',
    width: '32px',
    height: '32px',
    padding: '8px',
    color: 'white',
},
}));

function Text(props) {
  const classes = useStyles();
    return (
    <>
    <div className={classes.numberCircle} style={{ background: props.color }}>{props.symbol}</div>
    <div style={{paddingTop: '1vh'}}>{props.content}</div>
    </>  
    )}

export default Text