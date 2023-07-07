// eslint-disable-next-line import/no-extraneous-dependencies
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Layout from './components/Layout';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route
          path="*"
          element={<div>If page not found it goes here</div>}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
