import React from 'react';
import '../styles/SearchForm.css';
//-------------------------------IMPORTS--------------------------------------



const SearchForm = (props) => {
    const onSubmit = (e) => {
        e.preventDefault();
        props.onFormSubmit();
    }


    return (
        <div>
            <form onSubmit={onSubmit} className="search-form">
                <input 
                    type="text" 
                    placeholder="Search a joke term..." 
                    onChange={(e) => props.onSearchValueChange(e.target.value)}
                />
                
                <div>
                    <button disabled={props.isSearching}>
                        Search
                    </button>
                    
                    <button 
                        onClick={props.onSingleSearchClick} 
                        disabled={props.isSearching}
                        >I'm Feeling Funny
                    </button>
                    
                    <button 
                        type="reset" 
                        value="Clear All" 
                        onClick={() => props.onClearForm()}
                        >Clear All
                    </button>
                </div>
            </form>
            
            
        </div>
    )
};







//-------------------------------EXPORTS--------------------------------------
export default SearchForm;
