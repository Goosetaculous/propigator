import React, {Component} from "react";
import Header from '../../shared/header';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import { withRouter } from 'react-router-dom';

class Property extends Component {
    constructor(props) {
        super(props);
        this.state = { address: null };
    }

    render() {
        return (
            <div className="home">
                <Header/>
                <div>
                    <img className="main_img" src={require('../../../assets/images/bg_main.jpg')} />
                    <div className="search_wrap">
                        <Card>
                            <CardHeader
                                title="Without Avatar"
                                subtitle={this.state.address}
                                actAsExpander={true}
                                showExpandableButton={true}
                            />
                            <CardActions>
                                <FlatButton label="Action1" />
                                <FlatButton label="Action2" />
                            </CardActions>
                            <CardText expandable={true}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                                Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                                Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                            </CardText>
                        </Card>
                        );
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Property);