import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "../Home";
import { AddData } from "../Add";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <header className="App-header">
                <Link to="/home">Home</Link>
                <Link to="/add">Add</Link>
            </header>

            <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="add" element={<AddData />} />
                <Route path="*" element={<p>Can't fint the page</p>} />

            </Routes>
        </BrowserRouter>
    );
};