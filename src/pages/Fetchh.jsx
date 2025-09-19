import React, { useEffect, useState } from 'react'

function Fetchh(){
    
    const[pokemon, setPokemon] = useState([])

    async function fetchData() {
       try{
         const response = await fetch("https://pokeapi.co/api/v2/pokemon?offset=20&limit=20")
         const result = await response.json()
         console.log(result.results)
         setPokemon(result.results)
       }
       catch(errors){
        console.error("check for errors:",errors)
       }
    }
    useEffect(()=>{
        fetchData()
    },[])

    return (
        <div>
           <h1>pokemon</h1>
            <ul>
                {pokemon.map((p,index)=>(
                    <li Key={index}>{p.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Fetchh