import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TheoryPage from './pages/TheoryPage';
import Home from './App'; // or wherever your homepage component is

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/theory" element={<TheoryPage />} />
            </Routes>
        </Router>
    );
};

export default AppRouter;