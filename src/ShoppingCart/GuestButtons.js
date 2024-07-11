import React, { Fragment, Component } from "react";

class GuestButtons extends Component {
    render() {
        return (
            <Fragment>
                <button>Login</button>
                <button disabled={!this.props.canCheckout}>Checkout as guest</button>
            </Fragment>
        );
    }
}

export default GuestButtons;