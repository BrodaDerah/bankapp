<<<<<<< HEAD
const HeaderBox = ({ type = "title", title, subtext, user }: HeaderBoxProps) => {
=======
import React from 'react'

const HeaderBox = ({type = "title", title, subtext, user}: HeaderBoxProps) => {
>>>>>>> c9e8cf8aaa033d58c055d64e9093caeea0157902
  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
          <span className="text-bankGradient">
            &nbsp;{user}
          </span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>
    </div>
  )
}

export default HeaderBox