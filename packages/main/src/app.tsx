import { Editor } from '@trantor/editor'
import { dark_theme, light_theme } from '@trantor/style'
import { func } from '@trantor/utils'
import { useState } from 'react'
import { app_container } from './index.css'

export const App = () => {
  func()
  const [theme, setTheme] = useState(light_theme)
  return (
    <div className={theme}>
      <div className={app_container}>
        helloworld
        <Editor />
        <button
          onClick={() =>
            setTheme(theme === light_theme ? dark_theme : light_theme)
          }
        >
          toggle theme
        </button>
      </div>
    </div>
  )
}
