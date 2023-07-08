import './App.css'
import Post from './Post'
import Header from './Header'
import Login from './pages/Login'
import Layout from './Layout'
import Index from './pages/Index'
import { Routes, Route } from 'react-router-dom'
import Register from './pages/Register'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Index />} />
        <Route path={'/login'} element={<Login />} />
        <Route path={'/register'} element={<Register />} />
      </Route>
    </Routes>
  )
}

export default App
