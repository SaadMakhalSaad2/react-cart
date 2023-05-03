import './App.css'
import Category from './components/Category'
import 'bootstrap/dist/css/bootstrap.css'
import FinalOrder from './components/FinalOrder'
import { useState } from 'react'

function App() {
  const [sidesSelection, setSidesSelection] = useState('')
  const [eggSelection, setEggSelection] = useState('')
  const [juiceSelection, setJuiceSelection] = useState('')

  const [state, setState] = useState({})


  const onSelected = (value, type) => {
    console.log(type + ' ' + value)
    if(type === 'sides'){
      setSidesSelection(value)
    }
    if(type === 'egg-type'){
      setEggSelection(value)
    }
    if(type === 'juice'){
      setJuiceSelection(value)
    }
  }
  
  return (
    <div className="body">
      <h1 className="m-2">Breakfast for TODAY!</h1>

      <div className="d-flex text-center">
        <Category
          onSelected={onSelected}
          title="Sides"
          type='sides'
          options={['Toast', 'English Muffin', 'Bagel', 'Croassant']}
        />
        <Category
          onSelected={onSelected}
          title="Egg Type"
          type='egg-type'
          options={['Scrambled', 'Sun Side Up', 'Over Easy', 'Poached']}
        />
        <Category
          onSelected={onSelected}
          title="Juice"
          type='juice'
          options={['Orange', 'Grape Fruit', 'Grape', 'Apple']}
        />
      </div>
      <FinalOrder selections={[sidesSelection, eggSelection, juiceSelection]} />
    </div>
  )
}

export default App
