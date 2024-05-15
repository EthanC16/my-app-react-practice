import './App.css'
import { useState } from 'react'
import Person from './Person'
// import {Airbnb} from './task/airbnb'
// import Netflix from './task/netflix/netflix'
// import StateComponent from './StateComponent';
// import {BBC} from './task/bbc'
// import Counter from './Counter'
import Form from './Controlled/Forms'




// const App = () => {
//  const [persons, setPersons] = useState([
//   {name: 'Bob', age: 50},
//   {name: 'Billy', age: 55},
//   {name: 'Brian', age: 60}
//  ])
//  return (
//   <div className="App">
//     <div>
//      {persons.map((person) => {
//       return <Person
//       name={person.name}
//       age={person.age}
//       />
//      })}
//     </div>
//   </div>
//  )
// }

// const App = () => {
//   const [netflixLineup, setNetflixLineup] = useState([
//     { url: "./task/netflix/1899.jpg", alt: "1899 poster" },
//     { url: "./task/netflix/Dark.jpg", alt: "Dark poster" },
//     { url: "./task/netflix/Strangerthings.jpg", alt: "Stranger things poster" },
//     { url: "./task/netflix/Wednesday.jpg", alt: "Wednesday poster" },
//     { url: "./task/netflix/Witcher.jpg", alt: "Witcher poster" }
//   ]);

//   return (
//     <div className='project'>
//       {netflixLineup.map((netflixImages) => (
//         <Netflix url={netflixImages.url} alt={netflixImages.alt} />
//       ))}
//     </div>
//   );
// };

const App = () => {
  const [persons, setPersons] = useState([])
  const [nameInput, setNameInput] = useState ('')
  const [ageInput, setAgeInput] = useState('')

  const handleClick = (index) => {
    let storedPeople = [...persons]
    storedPeople.splice(index, 1)
    setPersons(storedPeople)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setPersons([...persons, {name: nameInput, age: parseInt(ageInput),},])
    setNameInput('')
    setAgeInput('')
  }
  return (
    <div>
    <h1>Introduction to React</h1>
    <Form handleSubmit={handleSubmit} nameInput={nameInput} setNameInput={setNameInput} setAgeInput={setAgeInput} ageInput={ageInput}    />
    {persons.map((person, index) => {
      return (
        <Person name={ person.name } age={ person.age } key ={ index } handleClick={ () => handleClick(index)} />
      )
    })}
    </div>
  )
}


export default App;
