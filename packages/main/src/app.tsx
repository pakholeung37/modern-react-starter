import { Editor } from '@trantor/editor'
import { light_theme } from '@trantor/style'
import { func } from '@trantor/utils'
import { app_container } from './index.css'

export const App = () => {
  func()
  return (
    <div className={light_theme}>
      <div className={app_container}>
        helloworld
        <Editor />
      </div>
    </div>
  )
}
