import persons from '../data/persons';
import Person from './Person';

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        return (
          <Person
            key={person.id}
            {...person}
          />
        );
      })}
    </div>
  );
}
export default Persons;

// id={id}
// const { id, firstName, lastName, email, img } = person;

// firstName={firstName}
// lastName={lastName}
// email={email}
// img={img}
