// import {render} from "react-dom";
// import App from "./App";
// import {BrowserRouter} from "react-router-dom"

// render(
//     <BrowserRouter>
//     <div>
//         <App/>
//     </div>
//     </BrowserRouter>,
    
//     document.getElementById('root')
// )

// fixed: "react-dom.development.js:86 Warning: ReactDOM.render is no longer supported in React 18. Use createRoot instead."
// https://stackoverflow.com/questions/71668256/deprecation-notice-reactdom-render-is-no-longer-supported-in-react-18#:~:text=)%3B%0A%0AreportWebVitals()%3B-,For%20Typescript,-Credit%20from%20comment
import ReactDOM from "react-dom/client";
import App from "./App";
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <BrowserRouter>
    <div>
        <App/>
    </div>
    </BrowserRouter>,
    )
