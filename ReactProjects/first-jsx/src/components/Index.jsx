import React from 'react';

export default function Index() {
    
   const myName = "Mark Lin"

   const fruits = [
       "pineapple",
       "dragon fruit",
       "strawberry",
       "passion fruit",
       "jackfruit",
       "apple"
   ]

   const newFruits = fruits.map((fruit) => fruit + "s")
   

    return(
        <div>
            <h1>Hello World! {myName}</h1>
            <h2>Things I need to do:</h2>
            <ul>
                <li>Learn React</li>
                <li>Climb Mt. Everest</li>
                <li>Run a marathon</li>
                <li>Feed the dogs</li>
            </ul>

            <h2>my favorite fruits :</h2>
            <ul>
                {/* {fruits.map((fruit, idx) => {return <li key={idx}> {fruit}</li>})} */}
                {newFruits.map((fruit, idx) => {return <li onClick={()=> console.log(idx)} key={idx}>{fruit}</li>})}
            </ul>
            
        </div>
    );
};


