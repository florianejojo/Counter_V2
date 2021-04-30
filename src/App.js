import { useState } from "react";
import "./App.css";
import Counter from "./Counter";

const addCounter = (tab, setTab) => {
    const newTab = [...tab];
    newTab.push(<Counter />);
    setTab(newTab);
};

function App() {
    const [tab, setTab] = useState([<Counter />]);
    const [counterNb, setCounterNb] = useState(1);

    return (
        <div className="container">
            <div>
                {counterNb < 3 && (
                    <button
                        id="addCounter"
                        onClick={() => {
                            console.log(counterNb);
                            addCounter(tab, setTab);
                            setCounterNb(counterNb + 1);
                        }}
                    >
                        Add counter
                    </button>
                )}
            </div>

            <div>{tab}</div>
        </div>
    );
}

export default App;
