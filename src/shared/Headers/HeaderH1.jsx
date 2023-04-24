import React from 'react'
import c from "./HeaderH1.module.css"

const HeaderH1 = (props) => {
  return (
    <div className={c.header}>{props.children}</div>
  )
}

export default HeaderH1