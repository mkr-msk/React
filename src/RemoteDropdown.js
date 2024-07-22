import { useState, useEffect } from "react";

function RemoteDropdown() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
        fetch("//www.swapi.tech/api/people")
            .then((res) => res.json())
            .then((data) => data.results)
            .then((characters) => characters.map(({ name }) => name))
            .then((names) => setOptions(names));
    }, []);

    return (
        <select>
            {options.map((option) => (
                <option key={option}>{option}</option>
            ))}
        </select>
    );
}

export default RemoteDropdown;