import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    return (
        <>
            < nav className="flex items-center justify-between px-[5vw] h-16 bg-blue-500">
                <h1>BlogSide</h1>
                <div className="links">
                    <Link to="/" className="px-10">Home</Link>
                    <Link to="/blogs" className="px-10">Blogs</Link>
                    <Link to="/"className="px-10">Explore</Link>
                    <Link to="/contact" className="px-10">Developer contact</Link>
                </div>
            </nav>
        </>
    )
}


export default Navbar