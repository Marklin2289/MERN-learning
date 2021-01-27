import React, { useState } from "react";

function PersonCard(props) {
  const [currentAge, setCurrentAge] = useState(props.age);
//   const haveBirthday = () => {
//     setCurrentAge(currentAge + 1);
//   };

  return (
    <div>
      <h2>
        {props.lastName}, {props.firstName}
      </h2>
      <p>Age: {props.age}</p>
      <p>Hair Color: {props.hairColor}</p>
      <button onClick={()=>setCurrentAge(currentAge + 1)}>Have birthday</button>
    </div>
  );
}

export default PersonCard;