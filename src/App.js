import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import NotFound from './components/NotFound/NotFound';
import Layout from './components/Layout/Layout';
import Login from './screens/Login/Login';
import { NowShowing } from './screens/NowShowing/NowShowing';
import Home from './screens/Home/Home';
import { Movies } from './screens/Movies/Movies';

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/allMovies" element={<Layout><Movies /></Layout>} />
        <Route path="/showTime" element={<ProtectedRoute><Layout><NowShowing /></Layout></ProtectedRoute>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
