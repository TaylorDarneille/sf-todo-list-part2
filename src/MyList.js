import './App.css';
import React, { Component } from 'react'
import ListItem from './ListItem';

class MyList extends Component {

  state = {
    taskArray: this.props.theList,
    newItem: ''
  }

  clearList = () => {
    console.log('clearing list?????')
    this.setState({taskArray: []})
  }

  addItem = (e) => {
    e.preventDefault()
    console.log('New item form has been submitted.')
    // let newList = this.state.taskArray
    // newList.push(this.state.newItem)
    // this.setState({
    //   taskArray: newList,
    //   newItem: ''
    // })
    this.setState((prevState, props)=>{
      return {
        taskArray: [...prevState.taskArray, prevState.newItem],
        newItem: ''
      }
    })
  }

  handleChange = (e) => {
    this.setState({newItem: e.target.value})
  }

  render() {
    const toDoItems = this.state.taskArray.map((item, idx)=>{
      return <ListItem task={item} key={idx}/>
    })
    return(
      <>
        <h1>Things I should stop procrastinating:</h1>
        <form onSubmit={this.addItem}>
          <label htmlFor='newItem'>Add a new task:</label>
          <input 
            type='text'
            id='newItem'
            name='newItem'
            onChange={this.handleChange}
            value={this.state.newItem}
          />
          <button type='submit'>Add To List</button>
        </form>
        <ul>
          {toDoItems}
        </ul>
        <button onClick={this.clearList}>Clear All Items</button>
      </>
    )
  }
}

export default MyList;
