//import React from 'react'
import './List.css'

function List(props) {
    const deleteitem = key=>{
      const newList = props.itemList.filter(itemObj=>{
        return itemObj.key !== key;
       })
       props.updateItemList(newList);
    };
    
  return (
    <div>
      {props.itemList.map(itemObj => {
        return (
        <div className="Item">
          <p>{itemObj.item}</p>
          <button onClick={()=>deleteitem(itemObj.key)}>X</button>
        </div>
        );
      })}
    </div>
  );
}


export default List;