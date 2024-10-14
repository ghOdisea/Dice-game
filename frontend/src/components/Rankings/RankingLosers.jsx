import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function RankingLosers(){

  const [rankings, setRanking] = useState([]);

  useEffect(()=> {
    const url = "http://localhost:3000/api/ranking/losers"
    fetch(url,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    }
    })
    .then( response => response.json() )
    .then( data => { 
      setRanking(data)
    })
    .catch(( error ) => {
    console.log(error)
    })
  }, [])

  return (
    <>
    <div>
      <h1>Últimas posiciones... ⬇️ </h1>
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Nombre del jugador</TableCell>
          <TableCell align="right">Id del Jugador</TableCell>
          <TableCell align="right">Porcentaje de victorias</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rankings.map((ranking) => (
          <TableRow
            key={ranking.Player_ID}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">{ranking.Player_name}</TableCell>
            <TableCell align="right">{ranking.Player_ID}</TableCell>
            <TableCell align="right">{ranking.Succes_Rate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </>
  )
}

