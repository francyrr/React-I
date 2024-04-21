import React from 'react'
import Button from 'react-bootstrap/Button';


const Tags = ({vari, txt}) => {
  return (
    <>
         <Button className="btn" variant={vari}>{txt}</Button>
    </>
  )
}

export default Tags