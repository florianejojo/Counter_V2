const Counter = ({ count, setCount }) => {
    return (
        <div className="counter">
            <div>
                <div
                    onClick={() => {
                        setCount(count - 1);
                    }}
                >
                    -
                </div>
                <div id="count">{count}</div>
                <div
                    onClick={() => {
                        setCount(count + 1);
                    }}
                >
                    +
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
