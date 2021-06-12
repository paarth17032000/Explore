import React from 'react'
import PollSummary from './PollSummary'
import {  makeStyles, Grid} from'@material-ui/core'

const useStyles = makeStyles({
    root: {
      // display;
    },
    card: {
      maxWidth: 346,
      height: 226
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  });

export default function PollList(props) {
    // console.log(1111,props)
    const {polls} = props
    const classes = useStyles();
    return (
        <Grid container spacing={3} className={classes.root}>
           {polls.map((poll) => {
               return(
                <PollSummary key={poll.id} poll={poll} />
               )
           })} 
        </Grid>
    )
}

