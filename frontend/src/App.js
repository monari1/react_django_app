
import React from 'react';
import './App.css';
import CustomModal from './components/Modal';
import { Modal } from 'reactstrap';
const tasks = [
  {id: 1,
  title: "Call CLients",
  description: "Calling clients overdue",
  completed: false
},
{id: 2,
  title: "Dunning",
  description: "order completed",
  completed: true
},
{id: 3,
  title: "order release",
  description: "check out order complete",
  completed: false
},
]


class App extends React.Component 
{
  
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      viewCompleted: false,
      taskList: tasks, 
      activeItem: {
        title: "",
        description: "",
        completed: false
      },
      taskList: tasks, 
       
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    })
  }
  handleSubmit = item => {
    this.toggle()
    alert('Saved' + JSON.stringify(item))
  }
  handleDelete = item => {
    alert('Deleted' + JSON.stringify(item))
  }
  createItem = () => {
    const item = {title: "", modal: !this.state.modal}
    this.setState({activeItem: item, modal: !this.state.modal})
  }
  editItem = item => {
    this.setState({activeItem: item, modal: !this.state.modal})
  }
  


  displayCompleted =status => {
    if(status){
      return this.setState({viewCompleted:true})
    }
    return this.setState({viewCompleted:false})

  }
    rennderTabList = () => {
      return (
        <div className='my-5 tab-list'>
         
          <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? '': 'active'}>
            Incompleted
          </span>
          <span 
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? 'active': ''}>
            Completed
          </span>
        

        </div>
      )
  
    }
    renderItems =() => {
      const {viewCompleted} = this.state;
      const newItems = this.state.taskList.filter(
        item => item.completed === viewCompleted
      ); 

      return newItems.map(item => (
        <li key ={item.id} className='list-group-item d-flex justify-content-between align-items-center'>
          <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
          title={item.title}>
            {item.title}
          </span>
          <span>
            <button className='btn btn-info mr-2'>Edit</button>
            <button className='btn btn-danger mr-2'>Delete</button>
          </span>
        </li>
      ))
    
    
    }

  
    render(){
      return (
        <div>
          <main className='content p-3 mb-2 bg-info'>
            <h1 className='text-white text-uppercase text-center m-4'> Task Manager </h1>
            <div className='row'>
              <div className='col-md-6 col-sm-10 mx-auto p-0'>
                <div className='card p-3'> 
                <div>
                  <button className='btn btn-warning'>Add Task</button>
                </div>
                {this.rennderTabList()}
                <ul className='list-group list-group-flush'>
                  {this.renderItems()}
                </ul>
                </div>
              </div>
            </div>
            <footer className='my-3 mb-2 bg-info text-white text-center'>
              Copyright 2024 &copy; All rights reserved
            </footer>
            {this.state.modal ? (
              <Modal activeItem={this.state.activeItem} 
              toggle={this.toggle} 
              onSave = {this.handleSubmit} />  
            ) : null}
          </main>
        </div>
      )
    }


}

export default App;
