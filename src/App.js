import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '~/pages/Home';
import Ranking from '~/pages/Ranking';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/ranking" element={<Ranking />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
