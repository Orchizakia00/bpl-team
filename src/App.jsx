import './App.css'
import Home from './components/home/Home'

function App() {

  return (
    <div className="bg-[url('https://wallpaperswide.com/download/bangladesh_national_cricket_team-wallpaper-1600x900.jpg')] ">
      <h1 className='text-3xl text-center font-bold'>BPL Team Maker</h1>
      <div className='p-20'>

        <div className='w-4/5'>
          <Home></Home>
        </div>

        

      </div>
    </div>
  )
}

export default App
