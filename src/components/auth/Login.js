import React from 'react'
import { Button, makeStyles, TextField } from '@material-ui/core'

const useStyles = makeStyles( theme => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: '100vh',
        // backgroundColor: theme.palette.secondary.main
    },
    field: {
        margin: theme.spacing(2,0)
    }
}))

export default function Login() {
    const classes = useStyles()
    return (
        <form 
        // onSubmit={}
        className={classes.root}
        >
            <TextField 
            type="email"
            className={classes.field}
            label="Email"
            placeholder="Email.... "
            />
            <TextField 
            type="password"
            className={classes.field}
            label="Password"
            placeholder="Password.... "
            />
            <Button 
            variant="contained"
            color="primary"
            className={classes.field}
            type="submit"
            >
                Login
            </Button>
        </form>
    )
}
