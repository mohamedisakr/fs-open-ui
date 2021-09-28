import logo from './logo.svg'
import './App.css'

const Hello = (props) => {
  const {name, age} = props
  return (
    <div className="App">
      <header className="App-header">
        Hello {name}, you are {age} years old
      </header>
    </div>
  )
}
const App = () => {
  const name = 'el 3afreet el 2ara3'
  const age = '44'
  return (
    <div>
      <Hello name={name} age={age} />
    </div>
  )
}

export default App

{
  /* <img src={logo} className="App-logo" alt="logo" />
<p>
  Edit <code>src/App.js</code> and save to reload.
</p>
<a
  className="App-link"
  href="https://reactjs.org"
  target="_blank"
  rel="noopener noreferrer"
>
  Learn React
</a> */
}
