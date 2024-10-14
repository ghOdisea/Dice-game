import { useState } from 'react';

export default function DeleteGames(){

    const [playerID, setPlayerID] = useState('');
    
    const handleSubmit = (event) => {
    const url = `http://localhost:3000/api/games/${playerID}`
        
    event.preventDefault(); 

    fetch(url,{
        method: 'DELETE',
        headers: {
        'Content-Type': 'application/json',
        }
    })
    .then( response => {
        if (response.ok ) {
            alert('Partidas borradas con éxito')
            } else {
            alert('Error al borrar las partidas')
            }
            
    })
    .then( data => { 
        console.log(data)
        setPlayerID('')
    })
    .catch(( error ) => {
        console.log(error)
    })
    }

    return (
        <div className='NewPlayer'>
        <h1>Jugadores 👤</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <h2>Borrar partidas</h2>
                    <input
                    type="text"
                    placeholder="ID del jugador"
                    value={playerID}
                    onChange={(e) => setPlayerID(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
  )
}
