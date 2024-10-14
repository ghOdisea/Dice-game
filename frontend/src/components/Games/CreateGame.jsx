import { useState } from 'react';
import { useStateValue } from "../Players/AppProvider";
import Dices from './Dices';

export default function CreateGame(){

    const [dice1, setDice1] = useState(0);
    const [dice2, setDice2] = useState(0);
    const {state,dispatch} = useStateValue();
    
    const handleSubmit = async (event) => {
    const url = `http://localhost:3000/api/games/${state.id}`
        
    event.preventDefault(); 
    try{
        const response = await fetch(url,{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            }
        });
        if (response.ok){
            const data = await response.json()
            console.log(data)
            if (data ) {
                console.log("dados"+data.dice1,data.dice2)
                setDice1(data.dice1)
                setDice2(data.dice2)
                dispatch({
                    type: 'GETDICEVAL',
                    payload: data
                })
                console.log('Partida creada con éxito')
                } else {
                console.log(url)
                console.log('Error al crear la partida')
                }
            }  
    }catch(error){
        console.log(error)
    }

    }

    return (
        <div className='NewPlayer'>
        <h1>Te sientes con suerte? 🎲🎲</h1>
            <div className="login-form">
                <form onSubmit={handleSubmit}>
                    <button type="submit">Nueva partida</button>
                </form>
            </div>
            <Dices />
            <section className='results'>
                
            </section>
        </div>
  )
}
