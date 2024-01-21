
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

}

export default App;
