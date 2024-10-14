import Dice from "react-dice-roll"
import { Box } from "@mui/material";
import { useStateValue } from "../Players/AppProvider";


export default function Dices(){
    const {state,_} = useStateValue()
    
      return(
        <div className="rolling_dices">
        <h4>Haz click en Nueva partida y luego pulsa los dados para ver los resultados...</h4>
        <Box sx={{ my: 2 }} display="flex" justifyContent="center" alignItems="center" minHeight="10vh" >
        <Dice cheatValue={state.dice1} size = {100} margin={35}/>
        <Dice cheatValue={state.dice2} size = {100} margin={35}/>
        </Box>
        </div>
      )
}