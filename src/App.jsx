import { useState } from 'react';
import { Homepage, Reservation, MySessions } from './components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    
    <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/reservation/:CourseTitle/:price" element={<Reservation/>}/>
        <Route path="mysessions" element={<MySessions/>}></Route>
    </Routes>
  
  );
};

export default App;
