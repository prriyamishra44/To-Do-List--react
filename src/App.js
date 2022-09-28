
import './App.css';
import {useState} from 'react';
import List from './List'


function App() {
  const[currentItem, setCurrentItem] = useState(null);
  const[itemList, updateItemList]= useState([]);

  const onChangeHandler= e =>{
    
    setCurrentItem(e.target.value);

  };
  const addItemsToList=()=>{
    updateItemList([...itemList, {item: currentItem, key: Date.now()}]);
    setCurrentItem("")
  };
  return (
    <div className="App">
      <header className="App-header">
      <h1 className='Heading'> To-Do-List</h1>
        <div className='Wrapper'>
          
          <div className='Input-Wrapper'>
            <input value={currentItem} onChange={onChangeHandler}/>
           
            <button onClick={addItemsToList}>
              Add
            </button>
          </div>
          <List itemList={itemList} updateItemList={updateItemList}/>
        </div>
      </header>
    </div>
  );
}

export default App;
