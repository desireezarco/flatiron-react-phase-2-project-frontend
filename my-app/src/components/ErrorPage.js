// import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

 function ErrorPage() {
    return (
        <Routes>
        <Route>

            Oops! Page is not found
            Here are some helpful links:
            <Route path="/*" element={ <ErrorPage/> }/>
        </Route>
        </Routes>
    )
}

export default ErrorPage;



// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={ <Home/> }/>
//         </Routes>
//     )
// }