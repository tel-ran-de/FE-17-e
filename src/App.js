import React, {useState} from "react";

import Persons from "./components/Persons";
import NewPerson from "./components/NewPerson";

const personsInitials = [
  "Anastasia",
  "Vladimir",
  "Anna",
  "Dmitriy",
  "Daulet",
  "Mariya",
  "Alexey",
  "Saida",
  "Elvira"
];

function App() {
  
  const [persons, setPersons] = useState(personsInitials)

  const addMember = (newMember) => {
    setPersons([...persons, newMember])
  }

  return (
    <div className="container">
      <div className="w-50 mx-auto pt-5">
        <div className="card shadow p-2">
          <NewPerson onAdd={addMember} />
          <h3 className="card-title text-center">
            Our Mafia!
          </h3>
          <Persons persons={persons} />
        </div>
      </div>
    </div>
  );
}

export default App;


// getPersons([mnvksdjfhjsh])

// getPersons(persons) {console.log(persons[0])}