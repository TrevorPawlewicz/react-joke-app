import React, { Component } from 'react';
import SearchForm from './SearchForm';
import RenderJokes from './RenderJokes';
import '../styles/App.css';
import logo from '../images/google-logo.png' // relative path to image 
//-------------------------------IMPORTS--------------------------------------

class App extends Component {
    state = {
        searchTerm: '',
        jokes: [],
        isFetchingJokes: false,
        isSearching: false
    } // state ---------------------------------------------------------------
    
    clearAll = () => {
        this.setState((prevState) => {
            return { 
                searchTerm: '', 
                jokes: [], 
                isSearching: false 
            };
        });
    }; // clearAll -----------------------------------------------------------
    
    onSearchChange = (value) => {
        this.setState({ searchTerm: value });
    }; // onSearchChange() ---------------------------------------------------
    
    
    searchJokes = (limit = 20) => {
        this.setState(() => { 
            return { isFetchingJokes: true, isSearching: true };
        });
        
        fetch(`https://icanhazdadjoke.com/search?term=${this.state.searchTerm}&limit=${limit}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json'
            }
        })
        .then((response) => response.json())
        .then((json) => {
            const jokes = json.results
            this.setState(() => {
                return { 
                    jokes: jokes,
                    isFetchingJokes: false
                }
             });
        });
    }; // searchJokes() ------------------------------------------------------

    
    
    render() {
        return (
            <div className="App">
                <img className="logo" src={logo} alt="logo"/>
            
                <SearchForm 
                    onFormSubmit={this.searchJokes}
                    onSearchValueChange={this.onSearchChange}
                    isSearching={this.state.isFetchingJokes}
                    onSingleSearchClick={() => this.searchJokes(1)} 
                    onClearForm={this.clearAll}
                />
                
                <RenderJokes 
                    jokes={this.state.jokes} 
                    searchTerm={this.state.searchTerm}
                    isSearching={this.state.isSearching}
                />
            </div>
        );
    } // render --------------------------------------------------------------
}

//-------------------------------EXPORTS--------------------------------------
export default App;
