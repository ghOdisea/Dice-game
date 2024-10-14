import React, { useReducer } from 'react';
import Typed from 'typed.js';
import { Box } from '@mui/material';
import {useStateValue } from '../Players/AppProvider'

export default function Welcome() {

  //const el = React.useRef(null);
  const {state,dispatch} = useStateValue();
/* 
  React.useEffect(() => {
    const typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
 */
  return (
    <Box sx={{ my: 2 }} display="flex" justifyContent="center" alignItems="center">
{/*     <div id="typed-strings">
      <p>Welcome to the dice game {state.user}</p>
    </div>
    <span id="typed"></span> */}
    <h1>Welcome to the dice game {state.user}</h1>
    </Box>
  );
}