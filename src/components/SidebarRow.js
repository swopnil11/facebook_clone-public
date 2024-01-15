import { Avatar } from '@mui/material'
import React from 'react'

export default function SidebarRow({src, Icon, title}) {
  return (
    <div className="sidebarRow">
        {src && <Avatar src={src} />}
        {Icon && <Icon />}
        <h4>{title}</h4>
    </div>
  )
}
