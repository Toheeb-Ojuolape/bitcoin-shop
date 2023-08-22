import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Home from './views/Home/Home'
import "./App.css"
import { Toaster } from 'react-hot-toast'

function App() {

  return (
    <>
     <Toaster />
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
