
import './App.css'
import LineChart from './components/LineChart/LineChart'
import PriceOpsions from './components/PriceOptions/PriceOptions'
import NavBer from './components/navBer/NavBer'

function App() {

  return (
    <>
      <NavBer></NavBer>
      <h1 className='text-7xl '>Vite + React</h1>
      <PriceOpsions></PriceOpsions>
      <LineChart></LineChart>

    </>
  )
}

export default App
