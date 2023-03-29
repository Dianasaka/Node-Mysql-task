import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { VisitCount } from "./VisitCount";
import { isPropertyAssignment } from "typescript";

export const MainRouter = (props: any) => {
    return (
        <BrowserRouter>
            <header className="App-header">
                <Link to="/">Home</Link>
                <Link to="/basa">Something</Link>
            </header>

            {props.children}

            <VisitCount />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="*" element={<p>Puslapis rastas</p>} />
            </Routes>


        </BrowserRouter>
    )
}
