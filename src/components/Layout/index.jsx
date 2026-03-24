import { Link, Outlet } from 'react-router';

export default function Layout() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <Outlet />
        </>
    )
}