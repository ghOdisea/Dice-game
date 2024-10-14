import { useState } from 'react';

export default function CreatePlayer(){

    const [name, setName] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); 
    
    const url = "http://localhost:3000/api/players"
    fetch(url,{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        }, 
        body: JSON.stringify({ name })
    })
    .then( response => response.json() )
    .then( data => { 
        console.log(data)
        setName('')
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
                    <h2>Crea un jugador</h2>
                    <input
                    type="text"
                    placeholder="Escribe tu nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
  )
}
