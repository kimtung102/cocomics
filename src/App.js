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
                    <Route path="/comic/:bookName/:bookId" element={<ComicInfo />} />
                    <Route path="/comic/:bookName/:bookId/:chapter" element={<ReadingPage />} />
                    <Route path="/category/:name" element={<h1>Trang Thể loại</h1>} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
