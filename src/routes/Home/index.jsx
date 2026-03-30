import { useContext, useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router";
import { CounterContext } from "../../contexts/CounterContext";

export default function Home() {
    const {
        counter,
        setCounter,
    } = useContext(CounterContext);
    const [count2, setCount2] = useState(0);
    const location = useLocation();

    const data = useMemo(() => [
        { 
            id: 1, 
            name: "Axel",
            isActive: true
        },
        { 
            id: 2, 
            name: "Foo",
            isActive: true
        },
        { 
            id: 3, 
            name: "Bar",
            isActive: false
        },
    ], []);

    useEffect(() => {
        document.title = `Counter ${counter}`;
        console.log(location);
    }, [counter]);

    return (
        <div>
            <h1>Home</h1>
            <input 
                type="button" 
                value="Press me!" 
                onClick={() => setCounter(prevCounter => prevCounter + 1)} 
            />
            <span>Counter : {counter}</span>

            <input 
                type="button" 
                value="Press me!" 
                onClick={() => setCount2(prevCount => prevCount + 1)} 
            />
            <span>Counter : {count2}</span>

            <ul>
                {data.map((obj) => 
                <li key={obj.id}>
                    {obj.name}
                    {obj.isActive && <b> (active) </b>}
                </li>)}
            </ul>
        </div>
    )
}