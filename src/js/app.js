import React, {Component} from "react";
import Home from "./components/home/index";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <MuiThemeProvider>
                <Home/>
            </MuiThemeProvider>
        )
    }
}

export default App;