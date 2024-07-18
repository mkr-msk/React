import Menu from "./Menu/Menu";
import Gallery from "./Gallery/Gallery";
import TodoApplication from "./TodoApplication";

import "./App.css";

function App() {
    const todoApplication_items = [
        { task: "Feed the plants", done: false, index: 0 },
        { task: "Water the dishes", done: false, index: 1 },
        { task: "Clean the cat", done: false, index: 2 },
    ];

    return (
        <>
            <header>
                <Menu />
            </header>

            <main>
                <article>
                    <h1>Animals</h1>
                    <Gallery />
                </article>
                <aside>
                    <TodoApplication initialList={todoApplication_items} />
                </aside>
            </main>
        </>
    );
}

export default App;