import React from 'react'
import { useAppContext } from '../context/appContext'

const Alert = () => {
  const { alertType, alertText } = useAppContext()
  return (
      <div className={`alert alert-${alertType}`}>
        <p style={{textAlign: "center", marginTop: "0px"}}>{alertText}</p></div>
  )
}

export default Alert