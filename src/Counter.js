import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="counter">
            <div>
                <div>
                    {count > 0 && (
                        <div
                            onClick={() => {
                                setCount(count - 1);
                            }}
                        >
                            -
                        </div>
                    )}
                </div>

                <div id="count">{count}</div>
                <div>
                    {count < 10 && (
                        <div
                            onClick={() => {
                                setCount(count + 1);
                            }}
                        >
                            +
                        </div>
                    )}
                </div>
            </div>
            <button
                onClick={() => {
                    setCount(0);
                }}
            >
                Reset
            </button>
        </div>
    );
};

export default Counter;
