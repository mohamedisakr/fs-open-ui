import './App.css'
import CustomerList from './pagination-customers/CustomerList'

// const Hello = (props) => {
//   const {name, age} = props
//   return (
//     <div className="App">
//       <header className="App-header">
//         Hello {name}, you are {age} years old
//       </header>
//     </div>
//   )
// }
const App = () => {
  // const name = 'el 3afreet el 2ara3'
  // const age = '44'
  return (
    <div>
      {/* <Hello name={name} age={age} /> */}
      <CustomerList></CustomerList>
    </div>
  )
}

export default App
