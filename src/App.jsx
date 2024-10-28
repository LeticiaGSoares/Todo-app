import React, {useState} from 'react'
import styled, {ThemeProvider} from 'styled-components'
import theme from './assets/theme.js'
import components from './assets/components/index.js'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  const toggleTheme = () => setIsDarkMode(!isDarkMode)

  return (
    <ThemeProvider theme={isDarkMode ? theme.darkTheme : theme.lightTheme}>

    </ThemeProvider>
  )
}

export default App
