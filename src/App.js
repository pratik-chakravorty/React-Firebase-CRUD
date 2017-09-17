import React, { Component } from 'react';

import base from './base';

import './style.css'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [],
      editing:false,
      index:null,
      loading:true
    }
    this.handleAdd = this.handleAdd.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.edit = this.edit.bind(this);
  }

  handleAdd(e) {
    e.preventDefault()
    let value = this.getInput.value;
    let newItems = this.state.items;
    newItems.push(value);
    this.setState({
      items:newItems
    })
    this.getInput.value = ''
  }

  handleRemove(index) {
    let newItems = this.state.items;
    newItems.splice(index,1);
    this.setState({
      items:newItems
    })
  }

  handleEdit(index) {
      this.setState({
        index:index,
        editing:true
      })
      this.getInput.value = this.state.items[index]

  }

  edit(e) {
      e.preventDefault();
      let index = this.state.index;
      let newItems = this.state.items;
      newItems[index] = this.getInput.value;
      this.setState({
        items:newItems,
        editing:false
      })
      this.getInput.value = '';
  }

  componentDidMount() {
    base.syncState('items',{
      context:this,
      state:'items',
      asArray:true,
      then() {
        this.setState({loading:false})
      }
    })
  }

  render() {
    if(this.state.editing) {
      var form = <form onSubmit={this.edit}>
                      <div className="input-field">
                    <input placeholder="Edit Item"type="text" required id="add_items" ref={(input)=>this.getInput = input} />

                    </div>
                    <button className="button">Edit</button>
                 </form>
    } else {
      var form = <form onSubmit={this.handleAdd}>
      <div className="input-field">
    <input type="text" placeholder="Add Items" required id="add_items" ref={(input)=>this.getInput = input} />
    </div>
        <button className="button">Add</button>
      </form>
    }
     return (
      <div>
          {form}
        <ul>
        {this.state.loading? <h3>Loading List...</h3>:this.state.items.map((item,index)=>{
          return <li key={index}>{item}<span className="separater"></span><button className="button_small" onClick={()=>this.handleEdit(index)}>Edit</button><button className="button_small delete" disabled={this.state.editing} onClick={()=>this.handleRemove(index)}>X</button></li>
        })}
        </ul>
      </div>
    )
  }
}
export default App;
