import { useState } from "react";

import Menu from "./Menu/Menu";
import Gallery from "./Gallery/Gallery";
import TodoApplication from "./TodoApplication";
import RemoteDropdown from "./RemoteDropdown";
import StopWatch from "./StopWatch";
import BlogPost from "./BlogPost";

import "./App.css";

function App() {
    const todoApplication_items = [
        { task: "Feed the plants", done: false, index: 0 },
        { task: "Water the dishes", done: false, index: 1 },
        { task: "Clean the cat", done: false, index: 2 },
    ];

    const [showWatch, setShowWatch] = useState(false);

    return (
        <>
            <header>
                <Menu />
            </header>

            <main>
                <article>
                    <h1>Animals</h1>
                    <Gallery />
                    <BlogPost title="First post" body={
                        <p>Welcome to my cool website.</p>
                    } />
                </article>
                <aside>
                    <TodoApplication initialList={todoApplication_items} />
                    <RemoteDropdown />

                    <p>
                        <button onClick={() => setShowWatch((b) => !b)}>Toggle watch</button>
                        {showWatch && <StopWatch />}
                    </p>
                </aside>
            </main>
        </>
    );
}

export default App;