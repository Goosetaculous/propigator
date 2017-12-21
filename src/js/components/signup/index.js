import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Header from '../../shared/header';
import Footer from "../../shared/footer";
import FlatButton from 'material-ui/FlatButton';
import {DatePicker} from "material-ui";

class Signup extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="signup_wrap" >
                        <Card style={{padding:"20px"}}>
                            <CardHeader title="Sign Up" showExpandableButton={false}/>
                            <TextField
                                hintText="First Name"
                                floatingLabelText="First Name"/>
                            <br/>
                            <TextField
                                hintText="Last Name"
                                floatingLabelText="Last Name"/>
                            <br/>
                            <br/>
                            <DatePicker hintText="Birthday" openToYearSelection={true}/>
                            <TextField
                                hintText="Email"
                                floatingLabelText="Email"/>
                            <br/>
                            <TextField
                                hintText="Password"
                                type="password"
                                floatingLabelText="Password"/>

                            <CardActions>
                                <FlatButton label="Signup"/>
                            </CardActions>
                            <span>Already Registered?</span>
                            <CardActions>
                                <FlatButton label="Log In" href="/login"/>
                            </CardActions>
                        </Card>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Signup;