import { Component } from "react";

class Alert extends Component {
    render() {
        return (
            <p>
                {this.props.isError && '⚠'}
                {this.props.children}
                {this.props.isError && '⚠'}
            </p>
        );
    }
}

export default Alert;