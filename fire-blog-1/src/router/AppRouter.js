import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Register from '../pages/Register'
import Login from '../pages/Login'
import NewBlog from '../pages/NewBlog'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="Register" element={<Register />} />
        <Route path="Login" element={<login />} />
        <Route path="NewBlog" element={<NewBlog />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
