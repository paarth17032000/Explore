import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent,Typography, makeStyles, CardActions, Button, Grid} from'@material-ui/core'

const useStyles = makeStyles({
    root: {
      textDecoration: 'none'
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

export default function SInglePollDetails({poll}) {
    const classes = useStyles()
    return (
      <Grid item xs={12} sm={6} md={4} lg={3} 
      className={classes.root}
      component={Link} 
      to={`/poll/${poll.id}`}   
      >
        <Card className={classes.card} variant="outlined">
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {poll.id}
                </Typography>
                <Typography variant="h5" component="h2">
                    {poll.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
      </Grid>
    )
}
