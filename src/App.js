import "./App.css"
import { Navbar } from "./Components"
import { Footer } from "./Components"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./Pages"
import { Projects } from "./Pages"
import { Documents } from "./Pages"
import { Contact } from "./Pages"

const App = () => {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}></Route>
                    <Route path="/projects" element={<Projects/>}></Route>
                    <Route path="/documents" element={<Documents/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                </Routes>
            </Router>
            <Footer/>
        </>
    )
}

export default App