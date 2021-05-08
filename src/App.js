import logo from './logo.svg'
import './App.css'
import { useEffect, useState } from 'react'
import Quotes from './Quotes'

function App () {
  console.log('ComponentWillMount: Esto se ejecuta antes de renderizar')
  const [state, setState] = useState(0)
  const [stateTwo, setStateTwo] = useState('')
  useEffect(() => {
    console.log(
      'ComponentDidMount: Solo se ejecuta 1 vez cuando el componente termina de montarse'
    )
  }, []) // <--- Aqui esta vacio

  useEffect(() => {
    console.log(
      'ComponentDidUpdate: Se va a ejecutar cada que cambie el estado indicado'
    )
    // setState(prev => prev + 1)
    if (state > 2) {
      setStateTwo('Modifique estado a dentro de useEffect')
    }

    console.log(state)

    // console.log(stateTwo)

    return () => {
      console.log('ComponentWillUnmount: se desmonto')
    }
  }, [state]) // <--- Aqui tiene la variable de estado

  return (
    <div className='App'>
      <button onClick={() => setState(state + 1)}>{state}</button>
      <h1>{stateTwo}</h1>
      <Quotes />
    </div>
  )
}

export default App
