import React from 'react'

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export default (props) => {
  console.log(props.number)
  let currMonth = months[props.number % 12];
  let currYear = Math.floor(props.number/12) + 11;
  return (
    <div className='label' style={{left: `${100*props.number/59}%`}}>
      <span>{currMonth} '{currYear}</span>
      <svg width="100%" height="100%" viewBox="0 0 16 8" style={{fillRule:'evenodd', clipRule:'evenodd', strokeLinejoin:'round', strokeMiterlimit:'1.41421'}}>
        <path d="M8,8l-8,-8l16,0l-8,8Z" style={{fill:'#222'}}/>
      </svg>
    </div>
  )
}