import React from 'react';
import { Cal } from './components';
import { Route, Routes } from 'react-router-dom';

import {
  Month, 
  Day
} from './components'

function AppRoutes() {

  return (
    <div className="App-Routes">
        <Routes>

            <Route path='/' element={<Month />} />
            {/* <Route path='/year' element={<Year />} /> */}

            <Route path='/1' element={<Month />} />
            <Route path='/1/:id' element={<Day />} />

            <Route path='/2' element={<Month />} />
            <Route path='/2/:id' element={<Day />} />

            <Route path='/3' element={<Month />} />
            <Route path='/3/:id' element={<Day />} />

            <Route path='/4' element={<Month />} />
            <Route path='/4/:id' element={<Day />} />

            <Route path='/5' element={<Month />} />
            <Route path='/5/:id' element={<Day />} />

            <Route path='/6' element={<Month />} />
            <Route path='/6/:id' element={<Day />} />

            <Route path='/7' element={<Month />} />
            <Route path='/7/:id' element={<Day />} />

            <Route path='/8' element={<Month />} />
            <Route path='/8/:id' element={<Day />} />

            <Route path='/9' element={<Month />} />
            <Route path='/9/:id' element={<Day />} />

            <Route path='/10' element={<Month />} />
            <Route path='/10/:id' element={<Day />} />

            <Route path='/11' element={<Month />} />
            <Route path='/11/:id' element={<Day />} />

            <Route path='/12' element={<Month />} />
            <Route path='/12/:id' element={<Day />} />
            
        </Routes>
    </div>
  );
}

export default AppRoutes;