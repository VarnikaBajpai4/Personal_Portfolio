import React from 'react'

export const PixelClock = () => {
  const [now, setNow] = React.useState(new Date())
  React.useEffect(() => { const t = setInterval(()=> setNow(new Date()), 1000); return () => clearInterval(t) }, [])
  const pad = (n) => n.toString().padStart(2, '0')
  return <span>{pad(now.getHours())}:{pad(now.getMinutes())}:{pad(now.getSeconds())}</span>
}
