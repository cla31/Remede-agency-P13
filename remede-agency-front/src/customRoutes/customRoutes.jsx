import React from 'react'
import { Router } from 'react-router-dom'
import { useState } from 'react'
//https://edupala.com/react-router-navigate-outside-component/

const CustomRouter = ({ basename, children, history }) => {
  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  })

  React.useLayoutEffect(() => history.listen(setState), [history])

  return (
    <Router
      basename={basename}
      children={children}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    />
  )
}

export default CustomRouter
