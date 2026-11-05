
import './App.css';
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Calculator from "./pages/Calculator";
import Product from "./pages/Product";
import Login from './pages/Login';
import SignUp from './pages/signup';
import Game from './pages/Game';

function App() {
    return (
        <BrowserRouter basename={import.meta.env.BASE_URL}>
            <header className="site-header">
                <nav className="menus" aria-label="Main navigation">
                    <Link to="/" className="brand" aria-label="Morrow home">
                        morrow<span aria-hidden="true">.</span>
                    </Link>
                    <div className="menu-links">
                        <NavLink to="/" end className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            Home
                        </NavLink>
                        <NavLink to="/about" className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            About
                        </NavLink>
                        <NavLink to="/product" className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            Shop
                        </NavLink>
                        <NavLink to="/calculator" className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            Calculator
                        </NavLink>
                        <NavLink to="/login" className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            Login
                        </NavLink>
                        <NavLink to="/signup" className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            Sign up
                        </NavLink>
                        <NavLink to="/game" className={({ isActive }) => `menu${isActive ? ' menu-active' : ''}`}>
                            Game
                        </NavLink>
                    </div>
                </nav>
            </header>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/calculator" element={<Calculator />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/game" element={<Game />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;
