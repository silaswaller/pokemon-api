import axios from 'axios';
import {useEffect, useState} from 'react';


const PokemonApi = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios
        .get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=807")
        .then(response => {
            console.log("SUCCESS")
            console.log(response.data)
            setApiData(response.data.results)
        })
        .catch(err => {
            console.log("ERROR")
            console.log(err.response)
        })
    },
    []
);
    return (
        <div>
            {apiData.map((pokemon, index) => (
                <div key={index}>{pokemon.name}</div>
            ))}
        </div>
    )
}

export default PokemonApi;