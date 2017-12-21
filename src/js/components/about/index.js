import React, {Component} from "react";
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import Header from '../../shared/header';
import Footer from "../../shared/footer";
import FlatButton from 'material-ui/FlatButton';

class About extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header />
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="about_wrap" >
                        <Card>
                            <CardHeader
                                style={{textAlign:"center"}}
                                textStyle={{paddingRight:"0px"}}
                                titleStyle={{fontSize:"20px"}}
                                title="About Us" showExpandableButton={false}/>
                            <CardText>
                                Propigator was co-founded in 2016 with a straightforward objective: Use our times of involvement to give a superior method to homeowners to offer their homes. Make the procedure drastically more proficient. Remove all complications and stress from the process. Be prepared to move as quickly as the property holders require. What's more, obviously, do everything with state of the art technology.
                                <br/>
                                <br/>
                                Welcome to Propigator.
                                <br/>
                                <br/>
                                Snap. Sold. Move.
                            </CardText>
                        </Card>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default About;