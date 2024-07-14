import React, { Fragment } from "react";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Breeds from "./Breeds";
import Menu from "./Menu/Menu";

import "./App.css";

function App() {
    const shoppingCart_items = [1, 2, 3];
    const user = {
        creditcard: true,
        address: true
    }

    const dog_list = [
        { breed: "Chuhuahua", description: "Cute breed of dog." },
        { breed: "Corgi", description: "Cute breed of dog." },
        { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." },
    ];

    return (
        <Fragment>
            <main>
                <Menu />
            </main>

            <ShoppingCart items={shoppingCart_items} user={user} />

            <Breeds list={dog_list} />

        </Fragment>
    );
}

export default App;