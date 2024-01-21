
import React from 'react';
import './App.css';
const tasks = [
  {id: 1,
  title: "Dunning",
  description: "order comppleted"
},
{id: 2,
  title: "Dunning",
  description: "order comppleted"
},
{id: 3,
  title: "Dunning",
  description: "order comppleted"
},
]


class App extends React.Component 
{
  
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      taskList: tasks, 
       
    }
  }
  displayCompleted =status => {
    if(status){
      return this.setStatus({viewCompleted:true})
    }
    return this.setStatus({viewCompleted:false})

  }
    rennderTabList = () => {
      return (
        <div className='my-5 tab-list'>
          <span
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? 'active': ''}>
            Completed

          </span>
          <span
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? '': 'active'}>
            Incompleted

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
        <li key = {item.id} className='list-group-item d-flex justify-content-between align-items-center'
        >
          <span className={`todo-title mr-2 ${this.state.viewCompleted ? "completed-todo" : ""}`}
          title={item.title}>
            {item.title}
          </span>
          <span>
            <button className='btn btn-info mr-2'>Edit</button>
            <button className='btn btn-daner mr-2'>Delete</button>


          </span>
        </li>
      ))
    
    
    }

  
    render(){
      return (
        <div>
          <main className='context'>
            <h1 className='text-black text-uppercase text-center m-4'> Task Manager </h1>
            <h1 className='row'>
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
            </h1>
          </main>
        </div>
      )
    }


}

export default App;
