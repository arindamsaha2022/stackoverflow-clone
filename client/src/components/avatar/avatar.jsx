import React from 'react'

const avatar = ({children, backgroundColor, px, py, color, borderRadius, fontSize, cursor}) => {
  const style = {
    backgroundColor,
    padding: `${py} ${px}` ,
    color: color || "black" ,
    borderRadius,
    fontSize,
    textAlign: "center" ,
    cursor: cursor || null ,
    textDecoration: "none"
   
  }
  return (
    <div style={style} >
      {children}

    </div>
  )
}

export default avatar