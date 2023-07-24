import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Registration from './Pages/Registration';
import FormValidationExample from './Pages/Login';
import HomePage from './Pages/HomePage';
import AboutUs from './Pages/AboutUs';
import Income from './Pages/Income';
import Expense from './Pages/Expense';
import Budget from './Pages/Budget';
import Contact from './Pages/Contact';
import Goal from './Pages/Goal';
import Debt from './Pages/Debt';
import Dashboard from './Pages/Dashboard'
import Lending from './Pages/Lending';
import Borrow from './Pages/Borrow';
import Report from './Pages/Report';

function App() {
  return (
      <Routes>
        <Route index path="/" element={<FormValidationExample/>}/>
        <Route path="/Registration" element={<Registration/>}/>
        <Route path="/HomePage" element={<HomePage/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Income" element={<Income/>}/>
        <Route path="/Expense" element={<Expense/>}/>
        <Route path="/Budget" element={<Budget/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/Goal" element={<Goal/>}/>
        <Route path="/Debt" element={<Debt/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
        <Route path='/Lending' element={<Lending/>}/>
        <Route path='/Borrow' element={<Borrow/>}/>
        <Route path='/Report' element={<Report/>}/>
      
      </Routes>
  );
}

export default App;