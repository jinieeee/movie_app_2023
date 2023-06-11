import React from "react";
import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from './components/Navigation';
import Detail from "./routes/Details";


function App() {
  return (
    <HashRouter>
      <Navigation />
      <Routes>
        {/* exact props 없어도 가능 */}
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/movie-detail" Component={Detail} />
      </Routes>
    </HashRouter>
    );
}

export default App;