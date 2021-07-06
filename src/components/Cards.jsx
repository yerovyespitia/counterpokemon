import React, { useEffect, useState } from "react";
import axios from "axios";
import CardSyntax from "./CardSyntax";

const Cards = ({pokemon}) => {

 const [allPokemon] = useState([pokemon.url]);
 const [showPokemon, setShowPokemon] = useState([])

  useEffect(() => {
    allPokemon.map((poke) => (
      axios.get(`${poke}`)
      .then(res => setShowPokemon([res.data]))
    ))
  }, [allPokemon]);

 return (
  <>
   {
     showPokemon.map((p, i) => (
       <CardSyntax pokemon={p} key={i}/>
     ))
   }
  </>
 )
}

export default Cards