import { useState } from 'react'
export default function Counter({ initial = 0 }) {
    const [count, setCount] = useState(initial)

    return (
        <div style={{
            padding: 30
        }}>
            <button style={{ color: "black", backgroundColor: "green", margin: 10 }} aria-label="decrement" onClick={() => setCount(count - 1)}>
                -
            </button>
            <span data-cy="counter">{count}</span>
            <button style={{ color: "black", backgroundColor: "green", margin: 10 }} aria-label="increment" onClick={() => setCount(count + 1)}>
                +
            </button>
        </div>
    )
}