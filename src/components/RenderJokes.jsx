import React from 'react';
//-------------------------------IMPORTS--------------------------------------



const RenderJokes = (props) => {
    
    const jokez = [...props.jokes];
    
    console.log("searchTerm", props.searchTerm);
    
    return (
        <ul className="jokes-list">
            {
                (jokez.length <= 0 && props.searchTerm !== '' && props.isSearching) 
                && 
                <li>No Results Found</li>
            }
            {(jokez.length > 0) && jokez.map((item) => <li key={item.id}>{item.joke}</li>)}
        </ul>
    )
};







//-------------------------------EXPORTS--------------------------------------
export default RenderJokes;


// {props.jokes.map((item) => <li key={item.id}>{item.joke}</li>)}