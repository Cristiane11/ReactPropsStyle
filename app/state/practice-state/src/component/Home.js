import React from 'react';
import reactDom from 'react-dom';

function Home(){

    const arrayToDo =["Lavar Roupa", "Cozinhar","Pintar","Dancar"]
    const increaseTodo = arrayToDo.map(item => <p>{item}</p>)
   
    function addItem(){
        const newAdd =` Todo $ {arrayToDo.length + 1}` 
    }
    return(
        <div>
            <button> Add item</button>
        </div>
    )
}
export default Home;