import React from 'react'

const PokeCard = ({pokemon}) => {
  
  const {id, img, type} = pokemon;
  const name = pokemon.name.toUpperCase();

  const colors = {
    bug: '#f8d5a3',
    electric: '#FCF7DE',
    dark: '#044286',
    dragon: '#97b3e6',
    fairy: '#fceaff',
    fighting: '#E6E0D4',
    fire: '#FDDFDF',
    flying: '#F5F5F5',
    ghost: '#663388',
    grass: '#DEFDE0',
    ground: '#f4e7da',
    ice: '#DEF3FD',
    normal: '#F5F5F5',
    poison: '#98d7a5',
    psychic: '#eaeda1',
    rock: '#d5d5d4',
    steel: 'gray',
    water: '#DEF3FD',
  }

  return (
    <div className="poke-card" style={{backgroundColor: colors[type] }}>
      <figure><img src={img} alt={name} title={name} /></figure>
      <div>#{id}</div>
      <div><strong>{name}</strong></div>
      <div><em>{type}</em></div>
    </div>
  )
}

export default PokeCard
