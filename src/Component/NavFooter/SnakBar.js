import React, { useEffect } from 'react'
import { CiWarning } from 'react-icons/ci'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

function SnakBar({show,message,setShow}) {
useEffect(()=>{
    if(show){
        setTimeout(()=>{
            setShow(false)
        },3000)
        // eslint-disable-next-line
    } },[show])  
  return (
    <div className={`${message?.succes?"bg-success":"bg-danger"} ${show?"snakbar_active":""} snakbar_main`}>
        <em>{message?.message}</em>
        {message?.succes?<IoMdCheckmarkCircleOutline />:
        <CiWarning />}
    </div>
  )
}

export default SnakBar