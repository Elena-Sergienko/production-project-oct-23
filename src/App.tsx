import { Counter } from "./components/Counter.module";
import './index.scss';
import { Routes, Route, Link} from "react-router-dom";
import AboutPage from "./pages/AboutPage/AboutPage"
import MainPage from "./pages/MainPage/MainPage";

const App = () => {
    return (
        <div className="app">
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>

            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about'} element={<AboutPage/>}/>
            Hello success!
            </Routes>
        </div>
    )
}

export default App;