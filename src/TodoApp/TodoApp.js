import React, { Component } from "react";
import "./TodoApp.css";
class TodoApp extends Component {
  state = {
    input: "",
    items: [],
  };
  HandelChange = (event) => {
    this.setState({
      input: event.target.value,
      
    });
    // console.log(this.state.input);
    
  };
  storeItem = (event) => {
    event.preventDefault()
    const { input } = this.state;

    this.setState({
      items:[...this.state.items,input],
      input:""
    })

  };
  deleteItem=(key)=>{
    //  console.log(key);
     const allItem = this.state.items
     allItem.splice(key,1,)
     
     this.setState({
      items:allItem
     })
     
  }

  
  render() {
    const { input ,items} = this.state;
    // console.log(items);
    
    return (
      <div className="todo-container">
        <form className="item-section" onSubmit={this.storeItem}>
          <h1>Todo List</h1>
          <input
            type="text"
            className="input-box"
            placeholder="Enter item...."
            value={input}
            onChange={this.HandelChange}
          />
        </form>
        <ul>
          {items.map((data,index)=>(
            <li key={index}>
              {data}
             <i className="fa-solid fa-trash-can" onClick={()=>this.deleteItem(index)}></i>
             </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default TodoApp;
