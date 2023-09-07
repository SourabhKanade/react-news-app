import { Typography } from '@mui/material'
import React from 'react'

function error() {
  
  return (
    <>
      <Typography style={{marginTop: "12em",
    fontSize: "19px",
    color: "red"}}>Rate limit exceeded, Please try to reload page again in few minutes</Typography>
    </>
  )
}

export default error