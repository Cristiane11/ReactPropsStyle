import React from 'react';
import reactDom from 'react-dom';

function Home(){

    const [items, setItem]= React.useState(["Lavar Roupa", "Cozinhar","Pintar","Dancar"])
    
    
    function addItem(){
        const newAdd =` Item ${items.length + 1}` 
        setItem(prevState => [...prevState, newAdd])
      
    }
    const increaseTodo = items.map(item => <p key={item}>{item}</p>)
   
    
    
    return(
        <div>
            <button onClick={addItem}> Add item</button>
            {increaseTodo}

        </div>
    )
}
export default Home;