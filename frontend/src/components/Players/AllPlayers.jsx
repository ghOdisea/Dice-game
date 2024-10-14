import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function AllPlayers(){

  const [rankings, setRanking] = useState([]);

  useEffect(()=> {
    const url = "http://localhost:3000/api/players"
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
    <div className='totalPlayers'>
      <h1>Listado de jugadores 👤</h1>
      <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="center">Id</TableCell>
          <TableCell align="center">Nombre deljugador</TableCell>
          <TableCell align="center">Partidas ganadas</TableCell>
          <TableCell align="center">Total de partidas</TableCell>
          <TableCell align="center">Fecha de registro</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rankings.map((ranking) => (
          <TableRow
            key={ranking.id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell align="center">{ranking.id}</TableCell>
            <TableCell align="center">{ranking.name}</TableCell>
            <TableCell align="center">{ranking.victories}</TableCell>
            <TableCell align="center">{ranking.totalGames}</TableCell>
            <TableCell align="center">{ranking.registrationDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
  </>
  )
}
