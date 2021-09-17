import { useState } from 'react'

export default function Counter() {
    const [counter, setCounter] = useState(0);
    function increment() {
        setCounter(counter + 1);

        console.log('Increment ' + counter);

    }
    return (
        <div>
            <h2>{counter}</h2>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}
