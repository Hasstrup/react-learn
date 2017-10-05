import React, { Component } from 'react';
import ReactDOM from 'react-dom';


//creating the component
class TodoComponent extends Component {
      constructor(props) {
        super(props);
        this.state = {
          todos: ['we had mad fun', 'honestly we did', 'damn you react'],
          age: 30
        }}; //ends constructor

  render(){
    var todos = this.state.todos; //this replicates the state so that you leave the initial to be the way it is
    todos = todos.map(function(item, index){ //this carries the content from the statearray
        return (
          <Todoitem item={item} key={index} onDelete={this.onDelete}/>
        );
    })
    return(
      <div>
          <h1> Hello Jackie </h1>
          <p> Are you doing great </p>
          <p> {this.props.name}</p>
          <ul> {todos}</ul>
        </div>
    );
  }//ends render
  //custom function
  onDelete = (item) =>  {
    var updatedTodos = this.state.todos.filter(function(val, index){
        return item !== val
      });
      this.setState({
        todos: updatedTodos
      });
    }//ends ondelete function
}//ends Todo component

//Creating toDoItem component
class Todoitem extends Component {
    render(){
      return(
          <li>
            <div className='todo-item'>
              <span className='item-name'> {this.props.item} </span>
              <span className='item-delete' onClick={this.handleDelete}> x </span>
            </div>
          </li>
      ) }
      handleDelete(){
      this.props.onDelete(this.props.item);
    }
  }

//ends TodoItem component

//putting the component into a the DOM(HTML Page)
ReactDOM.render(<TodoComponent name='Ezekiel' />, document.getElementById('component-wrapper') )
