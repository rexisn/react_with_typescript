import './App.css'
import Home from './pages/Home'
import Newblog from './pages/Newblog'
import {BrowserRouter, Route , Routes ,Link} from 'react-router-dom'
import Blogs from './pages/Blogs'
import Singleblog from './pages/Singleblog'
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter >
    <div className="App overflow-hidden">
      <Navbar />
      <Routes>
        <Route path='/blogs' element={<Blogs />}/>
        <Route  path='/' element = {<Home />}/>
        <Route  path='/new' element = {<Newblog />}/>
        <Route  path='/blogs/:id' element = {<Singleblog />}/>
      </Routes>
    </div>
    </BrowserRouter>
  )
}

export default App
