import {useState, useEffect } from 'react';
import yelp from '../api/yelp';


export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const searchApi = async (searchTerm) => {
        console.log('seachApi call') //infinite loop
        try {
        const response = await yelp.get('/search', {
            params: {
                limit:50,
                term: searchTerm,
                location: 'san jose'
            }
        })
        
        setResults(response.data.businesses)
    }catch (err){
        //console.log(err);
        setErrorMessage('Something went wrong');
    }
    };
    //bad code 
    //Call SearchApi when component
    //is first rendered
    //searchApi('pasta') //infinite loop

    //Run once-good 🇨good code 
    useEffect(() => {
        searchApi('pasta')
    }, []);
    return [ searchApi, results, errorMessage ];
};