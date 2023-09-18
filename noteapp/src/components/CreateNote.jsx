import React from 'react'

const CreateNote = ({inputText, setInputText, saveHandler}) => {
    const char=100
    const charLimit=char-inputText.length
  return (
    <div className='note'>
     <textarea 
     cols={10} 
     rows={5} 
     placeholder='Type....' 
     maxLength={100}
     value={inputText} 
     onChange={(e)=>setInputText(e.target.value)}
     ></textarea>
     <div className='note-footer'>
        <span className='label'>{charLimit} Left</span>
        <button className='note-save' onClick={saveHandler}>Save</button>
     </div>
    </div>
  )
}

export default CreateNote