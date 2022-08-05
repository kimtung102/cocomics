import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/HomePage/Home';
import ComicInfo from './pages/ComicInfo/ComicInfo';
import ReadingPage from './pages/ReadingPage/ReadingPage';
import UserPage from './pages/UserPage/UserPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/comic" element={<ComicInfo />} />
                    <Route path="/reading" element={<ReadingPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
