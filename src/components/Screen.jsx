import React, {useState, useEffect} from 'react';
import Loader from './Loader';
import axios from 'axios';
import PokeCard from './PokeCard';


const Screen = () => {
  const [pokemon, setPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPokemonDetail = async url => {
    const response = await axios.get(url);
    console.log(response);
    const {name, id, types, sprites} = response.data;
    return {id, name, type: types[0].type.name, img: sprites.front_default}
  }

  const searchPokedex = async url => {
    setIsLoading(true);
    try{
      const response = await axios.get(url);
      const results = response.data.results;
      const detailRequests = results.map(async r => await fetchPokemonDetail(r.url))

      await Promise.all(detailRequests).then(detailResults => {
        setPokemon([...pokemon, ...detailResults]);
      })


    }catch(e){
      console.error(e)
    } finally{
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    searchPokedex(url)
  }, []);

  const renderPokemon = () => pokemon.map(p => <div key={p.id}><PokeCard pokemon={p} /></div>);

  return (
    <section id="screen">
      <div id="pokedex">{renderPokemon()}</div>
      {isLoading && <Loader />}
    </section>
  );
};

export default Screen;
