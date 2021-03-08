import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

//Required API key from the .env file. 
require("dotenv").config();

const SearchContext = React.createContext();

//This function creates the context provider to establish and export state. 
export const SearchProvider = (props) => {

    const [ inputValue, setInputValue ] = useState('');
    const [ photoData, setPhotoData ] = useState([]);
    const [ noResults, setNoResults] = useState();

    let history = useHistory();

    const onChange = e => {
        e.preventDefault()
        setInputValue(e.target.value);
    }

    const updatePath = (text) => {
        history.push(text);
        history.replace(text);
    }

    async function fetchData(text) {
        
        const apiKey = process.env.REACT_APP_FLICKR_KEY;
        let url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${text}&per_page=24&page=1&format=json&nojsoncallback=1`
    
        const response = await axios.get(url);
    //Awaits response and sets no results state based upon results received. 
        await response.data.photos.photo.length === 0 || response.data.photos.photo.length === undefined ? setNoResults(true) : setNoResults(false);
        setPhotoData(response.data.photos.photo);            
    }

    return(
        <SearchContext.Provider value={{ inputValue, onChange, updatePath, fetchData, photoData, setPhotoData, noResults }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export default SearchContext;