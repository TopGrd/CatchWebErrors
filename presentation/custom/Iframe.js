import React from 'react'

export default ({ src, style }) => (
  <iframe
    src={src}
    style={{ width: '80vw', height: '50vh', border: 0, minWidth: 1200, ...style }}
    sandbox="allow-scripts allow-same-origin"
  />
)
