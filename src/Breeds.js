import React, { Fragment, Component } from "react";

class Breeds extends Component {
    render() {
        return (
            <dl>
                {this.props.list.map(({ breed, description }) => (
                    <Fragment key={breed}>
                        <dt>{breed}</dt>
                        <dd>{description}</dd>
                    </Fragment>
                ))}
            </dl>
        );
    }
}

export default Breeds;