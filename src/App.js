import React, { Fragment, Component } from "react";
import Link from "./Link";
import ShoppingCart from "./ShoppingCart/ShoppingCart";
import Select from "./Select";
import Breeds from "./Breeds";

class App extends Component {
    render() {
        const shoppingCart_items = [1, 2, 3];
        const user = {
            creditcard: true, 
            address: true
        }

        const select_items = ["apples", "pears", "playstations"];

        const dog_list = [
            { breed: "Chuhuahua", description: "Cute breed of dog." },
            { breed: "Corgi", description: "Cute breed of dog." },
            { breed: "Cumberland Sheepdog", description: "Extinct breed of dog." },
        ];

        return (
            <Fragment>
                <Link url="//react.dev"><strong>React</strong></Link>
                <Link url="//vuejs.org">Vue</Link>

                <ShoppingCart items={shoppingCart_items} user={user} />

                <Select items={select_items} />

                <Breeds list={dog_list} />
            </Fragment>
        );
    }
}

export default App;