import React, {Component} from 'react'
import { SignUp } from '../../redux/actions.js/authActions'
import { Button, TextField, Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { compose } from '@material-ui/system'
import { connect } from 'react-redux'

const styles = theme => ({
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
})

class RegisterPage extends Component{
    constructor(props){
        super(props)
        this.state={
            email: '',
            password: '',
            firstName: '',
            lastName: ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state)
        this.props.SignUp(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render(){
        // const classes = useStyles()
        const {classes, signUpError} = this.props
        // console.log('signup', this.props)
        return (
            <form 
            onSubmit={this.handleSubmit}
            className={classes.root}
            >
                <TextField 
                type="text"
                className={classes.field}
                name="firstName"
                label="First Name"
                placeholder="Enter First Name.... "
                onChange={this.handleChange}
                />
                <TextField 
                type="text"
                className={classes.field}
                name="lastName"
                label="Last Name"
                placeholder="Enter Last Name.... "
                onChange={this.handleChange}
                />
                <TextField 
                type="email"
                className={classes.field}
                name="email"
                label="Email"
                placeholder="Email...."
                onChange={this.handleChange}
                />
                <TextField 
                type="password"
                className={classes.field}
                name="password"
                label="Password"
                placeholder="Password...."
                onChange={this.handleChange}
                />
                <Button 
                variant="contained"
                color="primary"
                type="submit"
                className={classes.field}
                >
                    Sign Up
                </Button>
                { signUpError ? (
                    <Typography variant="h4" color="error">
                        {signUpError}
                    </Typography>
                ) : null }
            </form>
        )
    }
    
}

const mapStateToProps = (state) => {
    return{
        signUpError: state.auth.signUpError
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        SignUp: (credentials) => dispatch(SignUp(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles, {withTheme: true})(RegisterPage))
