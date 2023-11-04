import { Counter } from "./components/Counter.module";
import './index.scss';
import { Routes, Route, Link} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async"
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import { Suspense } from "react";

const App = () => {
    return (
        <div className="app">
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync/>}/>
                    <Route path={'/about'} element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;