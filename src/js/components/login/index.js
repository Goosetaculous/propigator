import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';

import FlatButton from 'material-ui/FlatButton';

class Login extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div
                style={{
                backgroundColor: "white",
                width: "50%",
                padding: "5px"
            }}>
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
                    <CardText expandable={false}>
                        Best site ever.
                    </CardText>
                </Card>
            </div>
        )
    }
}

export default Login;