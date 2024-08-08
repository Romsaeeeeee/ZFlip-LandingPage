import Topbar from "./component/Topbar"
import MainPage from "./pages/MainPage"


function App() {


  return (
    <div className='h-screen w-screen flex flex-col overflow-x-hidden'>
      <Topbar />
      <MainPage />
    </div>
  )
}

export default App
