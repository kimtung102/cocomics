import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/HomePage/Home';
import Ranking from '~/pages/Ranking/Ranking';
import ComicInfo from './pages/ComicInfo/ComicInfo';
import UserPage from './pages/UserPage/UserPage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ranking" element={<Ranking />} />
                    <Route path="/user" element={<UserPage />} />
                    <Route path="/comic" element={<ComicInfo />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
