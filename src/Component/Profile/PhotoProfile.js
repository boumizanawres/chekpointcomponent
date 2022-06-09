import React from 'react'
import myprofil from './PhProfile.JPG'
const PhotoProfile = () => {
    const styleph={width:'80px', height:'80px'}
  return (
    <div className='PhPro'>
        <img style={styleph} src={myprofil} alt='photoprofile'/>
    </div>
  )
}

export default PhotoProfile