import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import PortfolioPage from './components/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ResumePage from './pages/ResumePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	return (
		<Router>
			<Header />
			<div className="content-wrapper"></div>
			<Routes>
				<Route path="/" element={<AboutPage />} />
				<Route path="/portfolio" element={<PortfolioPage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="/resume" element={<ResumePage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
