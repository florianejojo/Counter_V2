import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

const addCounter = (tab, setTab, count, setCount) => {
    const newTab = [...tab];
    newTab.push(<Counter count={count} setCount={setCount} />);
    setTab(newTab);
};

function App() {
    const [count, setCount] = useState(0);
    const [tab, setTab] = useState([
        <Counter count={count} setCount={setCount} />,
        ,
    ]);

    return (
        <div className="container">
            <button
                id="addCounter"
                onClick={() => {
                    addCounter(tab, setTab, count, setCount);
                }}
            >
                Add counter
            </button>
            <div>{tab}</div>
            {/* <Counter count={count} setCount={setCount} /> */}
        </div>
    );
}

export default App;
