import { Editor } from '@trantor/editor'
import { func } from '@trantor/utils'
import './index.css'

export const App = () => {
  func()
  return (
    <div className="app">
      helloworld
      <Editor />
    </div>
  )
}
