import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import Calculator from './components/Calculator';
import Quote from './components/Quote';
import Home from './components/Home';
import Layout from './components/Layout';
import Error from './components/Error';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route index path="home" element={<Home />} />
        <Route path="calculator" element={<Calculator />} />
        <Route path="quote" element={<Quote />} />
        <Route
          path="*"
          element={<Error />}
        />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
