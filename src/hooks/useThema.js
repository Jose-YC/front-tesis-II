import React, { useEffect, useState } from 'react'

export const useThema = () => {
    const [colorMode, setColorMode] = useState(() => {
          
      return 'light'
    });

    useEffect(() => {
        const mode = window.document.body.classList;
        colorMode === 'dark' ? mode.add('dark') : mode.remove('dark') ;
    }, [colorMode])

    const handleChangeTheme = () => {
      setColorMode(prevColorMode => prevColorMode === 'light' ? 'dark' : 'light')
    }

    
  return { 
    colorMode,
    handleChangeTheme
  }
}
