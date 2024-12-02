import React from 'react'
import { useRouteError } from 'react-router'

function ErrorPage() {
  const error =useRouteError();
  console.log(error)

  return (
    <>
    <div className='h-48 w-52 bg-red-600'>
    <h1>Something went wrong.</h1>
    
    <h1>{error.status}</h1>
    <h1>{error.internal}</h1>
    </div>
    {console.log(error)}
    <div>
      
    </div>
    </>
  )
}

export default ErrorPage