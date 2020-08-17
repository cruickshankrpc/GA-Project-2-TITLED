import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const ApiContext = createContext()

export const ApiProvider = ({ children }) => {
  
  const [artsyInfo, setArtsyInfo] = useState('')
  const ARTSY_ID = process.env.ARTSY_ID
  const ARTSY_PW = process.env.ARTSY_PW
  function refreshToken() {
    console.log('Refresh token')
    axios.post(`https://api.artsy.net/api/tokens/xapp_token?client_id=${ARTSY_ID}&client_secret=${ARTSY_PW}`)
      .then(res => {
        console.log('Token generated', res.data)
        setArtsyInfo(res.data.token)
      })
      .catch(err => console.log(err))
  }
  useEffect(() => {
    refreshToken()
    setInterval(refreshToken, (10080 * 60000))
  }, [])
  return (
    <ApiContext.Provider value={artsyInfo}>
      {children}
    </ApiContext.Provider>
  )
}