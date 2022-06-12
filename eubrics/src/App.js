import React from "react";
import { 
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Login from "./Components/LoginForm";


import "./Index.css"
import Home from "./Components/Home";
import Register from "./Components/RegisterForm";
import Todos from "./Components/Todos";
import Making from "./Components/Pages/Making";
import Thinking from "./Components/Pages/Thinkng";
import Influencing from "./Components/Pages/Influencing";
import Managing from "./Components/Pages/Managing";
import Driving from "./Components/Pages/Driving";



const App = () => {
    return( 
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Login" element={<Login />} />
                <Route path="/Register" element={<Register />} />
                <Route path="/Todos" element={<Todos />} />
                <Route path="/Making" element={<Making />} />
                <Route path="/Thinking" element={<Thinking />} />
                <Route path="/Influencing" element={<Influencing />} />
                <Route path="/Managing" element={<Managing />} />
                <Route path="/Driving" element={<Driving />} />
            </Routes>
        </Router>
    )
}

export default App