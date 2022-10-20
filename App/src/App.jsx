import './App.css'
import Feed from './components/Feed/Feed'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'



function App() {

  return (
    <div className="App">
      <Navbar/>
      <Feed/>
      <Sidebar/>
    </div>
  )
}

export default App
