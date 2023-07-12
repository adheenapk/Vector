
import {Routes,Route} from 'react-router-dom'
import Home  from './pages/home'

import './App.css'

function App() {


  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home/>}> </Route>
        </Routes>
    </>
  )
}

export default App
