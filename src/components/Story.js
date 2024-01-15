import { Avatar } from '@mui/material'
import React from 'react'

export default function Story({image, profileSrc, title}) {
  return (
    <div style={{backgroundImage: `url(${image})`}} className="story">
        <Avatar className="story_avatar" src={profileSrc} />
        <h4>{title}</h4>
    </div>
  )
}
