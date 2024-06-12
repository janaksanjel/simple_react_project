import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Newsopenpage from './page/Newsopenpage';
import Home from './page/Home';
import About from './page/About';
import News from '../NewsPageOpen/News';
import Features from '../NewsPageOpen/Features';
import Innovation from '../NewsPageOpen/Innovation';
import Sport from '../NewsPageOpen/Sport';
import Business from '../NewsPageOpen/Business';
import Earth from '../NewsPageOpen/Earth';
import Culture from '../NewsPageOpen/Culture';



export class Secetion extends Component {
  render() {
    return (
      
        <Routes>
          <Route path="/" element={<Home/>} />
         
          <Route path="/news/:news_id" element={<Newsopenpage />} />
          <Route path='/Aboutus' element={<About/>}/>
          <Route path='/news' element={<News/>}/>
          <Route path='/features' element={<Features/>}/>
          <Route path='/Innovation' element={<Innovation/>}/>
          <Route path='/Sport' element={<Sport/>}/>
          <Route path='/Business' element={<Business/>}/>
          <Route path='/Earth'    element={<Earth/>}/>
          <Route path='/Culture' element={<Culture/>}/>
         
          
        </Routes>
      
    );
  }
}

export default Secetion;
