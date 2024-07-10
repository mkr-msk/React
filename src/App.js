import React, { Fragment, Component } from "react";
import Link from "./Link";

class App extends Component {
    render() {
        return (
            <Fragment>
                <h1>Hello <em>world!</em></h1>

                <Link url="//react.dev"><strong>React</strong></Link>
                <Link url="//vuejs.org">Vue</Link>
                <Link url="//angular.io">Angular</Link>
            </Fragment>
        );
    }
}

export default App;