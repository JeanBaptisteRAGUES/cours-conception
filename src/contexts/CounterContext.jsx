import { createContext, use, useCallback, useEffect, useState } from 'react';

export const CounterContext = createContext(null);

export default function CounterContextProvider({ children }) {
	const [counter, setCounter] = useState(Number.parseInt(localStorage.counter, 10) || 0);

    useEffect(() => {
        localStorage.counter = counter;
    }, [counter]);

    const increment = useCallback(() => {
        setCounter(innerCounter => innerCounter + 1);
    }, []);

	return (
		<CounterContext.Provider value={{
			counter,
			setCounter,
            increment,
		}}>
			{children}
		</CounterContext.Provider>
	);
}