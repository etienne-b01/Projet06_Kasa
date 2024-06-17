import ReactDOM from "react-dom/client"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import About from "./components/About"
import Home from "./components/Home"
import Error from "./components/Error"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    )
}  

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
