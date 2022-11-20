import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import User from './pages/User'
import PageError from './pages/PageError'
import Header from './components/Header'
import Footer from './components/Footer'
import PrivateRoute from './pages/PrivateRoute'
import './style/App.css'

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<User />} />
        </Route>
        <Route path="*" element={<PageError />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
