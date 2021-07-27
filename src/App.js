
import React from 'react';


class App extends React.Component {
  state={
    todos:[
      {id:0, task:'buy groceries',done:false},
      {id:1,task:'fix the printer', done:false}
    ],
    newTask:""
  }

  handleAdd=()=>{ 
    this.setState({
    todos:[...this.state.todos,{id:Math.floor(Math.random() * 101),task:this.state.newTask,done:false}],newTask:""
    })
    
}
  
  handleDelete=(id)=>{ this.setState({todos:this.state.todos.filter(x=>x.id!==id)})}

  handleDone=(id)=>{ this.setState({todos:this.state.todos.map(x=>id===x.id?{...x,done:!x.done}:x)})}


  render() {
    return (
      <div className="App">
        <input 
          value={this.state.newTask} 
          onChange={(e)=>this.setState({newTask:e.target.value})}
          type='text'/>
        <button onClick={this.handleAdd}>add</button>
        <ul>

        {this.state.todos.map(x=>
          <li key={x.id}>
            <span style={{textDecoration: x.done? 'line-through':null}}>{x.task}</span>
            <button onClick={()=>this.handleDelete(x.id)}>delete</button>
            <button onClick={()=>this.handleDone(x.id)}>done</button>
          </li>) 
        }
        </ul>
        
      </div>
    );
  }
}

export default App;
