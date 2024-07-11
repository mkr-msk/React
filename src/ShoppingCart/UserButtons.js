import React, { Fragment, Component } from "react";

class UserButtons extends Component {
    render() {
        const hasCreditCard = this.props.user.creditcard !== null;
        const hasAddress = this.props.user.address !== null;
        const disabled = !this.props.canCheckout;

        return hasCreditCard ? (
            <Fragment>
                <button disabled={disabled}>Checkout</button>
                {hasAddress && (
                    <button disabled={disabled}>One-click buy</button>
                )}
            </Fragment>
        ) : (
            <button>Add credit card</button>
        );
    }
}

export default UserButtons;