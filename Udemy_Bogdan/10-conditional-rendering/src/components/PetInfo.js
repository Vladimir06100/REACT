function PetInfo(props) {
  console.log(props)
  // либо сразу в параметрах
  const {animal, age, hasPet} = props;
  const text = hasPet ? `My ${animal} is ${age} years old` : 'I don\'t have an animal';
  return <h1>{text}</h1>;
}

export default PetInfo;