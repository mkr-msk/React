import React, { Component } from "react";
import UserButtons from "./UserButtons";
import GuestButtons from "./GuestButtons";

class ShoppingCart extends Component {
    render() {
        const hasItems = this.props.items.length > 0;
        const isLoggedIn = this.props.user !== null;
        const isAvailable = this.props.items.every((item) => !item.outOfStock);
        const canCheckout = hasItems && isAvailable;

        return isLoggedIn ? (
            <UserButtons user={this.props.user} canCheckout={canCheckout} />
        ) : (
            <GuestButtons canCheckout={canCheckout} />
        );
    }
}

export default ShoppingCart;