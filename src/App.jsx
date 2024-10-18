import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy , Suspense} from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Loader from './components/Loader'
const DisplayNews = lazy(() => import('./components/DisplayNews'))
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/categories/:category' element={
            <Suspense fallback={<Loader/>} >
            <DisplayNews />
            </Suspense>
            } />
        </Routes>
      </Router>
    </>
  )
}

export default App
