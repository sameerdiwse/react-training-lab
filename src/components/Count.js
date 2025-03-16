import { useState } from "react";
export function SetCount()
{
    const [count, setCount] = useState(0);
    return(
    <button onClick={() => setCount(count+1) } >Will you Click me {count} </button>
    );
}