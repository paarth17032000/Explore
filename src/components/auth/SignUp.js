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

export default function SignUp() {
    const classes = useStyles()
    return (
        <form 
        // onSubmit={}
        className={classes.root}
        >
            <TextField 
            type="text"
            className={classes.field}
            label="First Name"
            placeholder="Enter First Name.... "
            />
            <TextField 
            type="text"
            className={classes.field}
            label="Last Name"
            placeholder="Enter Last Name.... "
            />
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
            type="submit"
            className={classes.field}
            >
                Sign Up
            </Button>
        </form>
    )
}
