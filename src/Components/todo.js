import React, { Component } from 'react'

export default class Todo extends Component {
    constructor(){
        super();
        this.state ={
            tasks :[ {task:"Check Mails",id:1},{task:"Check Calls",id:2},{task:"Search something new",id:3}],
            currTask:'',
        }
    }
    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({
            currTask:e.target.value 
        })
    }

    handleSubmit=()=>{
        this.setState({
            tasks:[...this.state.tasks,{task:this.state.currTask,id:this.state.tasks.length}],
            currTask:''
        })
    }

    handleDelete=(id)=>{
        let ar = this.state.tasks.filter((taskObj)=>{
            return taskObj.id!= id
        })
        this.setState({
           tasks: [...ar]
          })
        
    }

  render() {
    return (
      <div>
        <input type="text" value={this.state.currTask} onChange={this.handleChange} />  
        <button onClick={this.handleSubmit}>Submit</button>
        <ul>
        {
            this.state.tasks.map((taskObj)=>(
            <li key = {taskObj.id}>
                <p>{taskObj.task}</p>
                <button onClick={()=>this.handleDelete(taskObj.id)} > Delete </button>
            </li>
            ))
         }    
         </ul>
            
      </div>
    )
  }
}
