import { Link, Outlet } from 'react-router';
import { useContext } from 'react';
import { CounterContext } from '../../contexts/CounterContext';

export default function Layout() {
    const {
        counter,
    } = useContext(CounterContext);

    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/search-geographic-api">Search Geographic API</Link></li>
            </ul>
            <Outlet />
            <footer>
                <span>Counter : {counter} </span>
            </footer>
        </>
    )
}