import React, {useContext} from 'react'
import { UserContext } from '../Context/UserContext'

const OurClients = () => {
  const { text } = useContext(UserContext)
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default OurClients