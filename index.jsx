import {useState} from 'react'
import './index.css'

const EditableTextInput = () => {
  const [save, setSave] = useState(true)
  const toggeleSave = () => {
    setSave(prev => !prev)
  }
  return (
    <div className="container">
      <div class="cont">
        <h1 className="heading">Editable Text Input</h1>
        <input type="text" className={save ? 'border' : 'noborder'} />
        <button type="button" className="button" onClick={toggeleSave}>
          {save ? 'Save' : 'Edit'}
        </button>
      </div>
    </div>
  )
}
export default EditableTextInput
