import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Header from '../../shared/header';
import Footer from "../../shared/footer";
import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="login_wrap" >
                        <Card style={{padding:"20px"}}>
                            <CardHeader title="Log In" showExpandableButton={false}/>
                            <TextField
                                hintText="Email"
                                floatingLabelText="Email"/>
                            <br/>
                            <TextField
                                hintText="Password"
                                type="password"
                                floatingLabelText="Password"/>

                            <CardActions>
                                <FlatButton label="Login"/>
                            </CardActions>
                            <a href="#">Forgot password?</a>
                            <CardActions>
                                <FlatButton label="Sign Up" href="/signup"/>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Login;