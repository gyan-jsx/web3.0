import {  Welcome} from "./components";
import {MassComponent} from './maincomponents'


import 'react-coinbase-commerce/dist/coinbase-commerce-button.css';

import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => (
  <div className="bg:[#000]">
  

  <BrowserRouter>


<Routes>
<Route path="/" element={<MassComponent />} exact />
  <Route path="/welcome" element={<Welcome />} exact />

  </Routes>

  </BrowserRouter>
			

  </div>
);

export default App;