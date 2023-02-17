import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'

function App() {
  const [name,setName] = useState('');
  const [list,setList] = useState([]);
  const [isEditing,setİsEditing] = useState(false);
  const [editID,setEditID] = useState(null);
  const [alert,setAlert] = useState({show: false, msg:'', type: ''});
 
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name){
      // display alert
      showAlert(true, 'danger', 'please enter value')   
    } else if (name && isEditing) {
      // deal wit edit
    } else { 
      showAlert(true, 'succes', 'item added too the list')
      const newItem = { id: new Date().getTime().toString(),
      title:name }
      setList([...list, newItem])
      setName('')
    }    
  }

  const showAlert = (show = false, type = '', msg = '') => {
    showAlert({ show, type, msg })
  }
  const clearList = () => {
    showAlert(true, 'danger', 'empty list')
    setList([])
  }
  return (
    
    <section className='section-center'>
       <form className='grocery-form' onSubmit={handleSubmit}>
         {alert.show && < Alert />}
         <h3>grocery bud</h3>
         <div className="form-control">
            <input 
              type="text" 
              className='grocery' 
              placeholder='e.g. eggs' 
              value={name} 
              onChange= {(e) => setName(e.target.value)} 
             />
            <button type='submit' className='submit-btn'>
              {isEditing ? 'edit' : 'submit'}
            </button>
         </div>
       </form>
       <div className="grocery-container">
         <List />
         <button className='clear-btn' onClick={clearList}>
          clear items
         </button>
       </div>
    </section>
  ) 
  }

export default App
