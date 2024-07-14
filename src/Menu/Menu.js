import MenuItem from "./MenuItem";

function Menu () {
    return (
        <nav className="navbar">
            <h1 className="title">TheMenuCompany</h1>
            <ul className="menu">
                <MenuItem label="Home" href="/" />
                <MenuItem label="About" href="/" />
                <MenuItem label="Blog" href="/" target="_blank" />
            </ul>
        </nav>
    );
}

export default Menu;