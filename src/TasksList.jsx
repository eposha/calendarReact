import React from "react";
import CreateTaskInput from "./CreateTaskInput";
import Task from "./Task";
import {
  createTask,
  fetchTasksList,
  updateTask,
  deleteTask
} from "./tasksGateway";

class TasksList extends React.Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.fetchTasks();
  }

  fetchTasks = () => {
    fetchTasksList().then(tasksList =>
      this.setState({
        tasks: tasksList
      })
    );
  };

  onCreate = text => {
    // +1. Create task obj
    // +2. Post object to server
    // +3. Fetch list from server
    // const { tasks } = this.state;
    const newTask = {
      text,
      done: false
    };

    createTask(newTask).then(() => this.fetchTasks());

    // const updatedTasks = tasks.concat(newTask);
    // this.setState({
    //   tasks: updatedTasks
    // });
  };

  handleTaskStatusChange = id => {
    // + 1. Find task in a list
    // + 2. Toggle done value
    // + 3. Save updated list

    // const task = this.state.tasks.find(task => task.id === id);  ---> bad practice do not use it
    // task.done = !task.done;

    // 1. find task in state by id
    // 2. Create updated task
    // 3. Update task on server
    // 4. Fetch updated tasks list

    const { done, text } = this.state.tasks.find(task => task.id === id);
    const updatedTask = {
      text,
      done: !done
    };
    updateTask(id, updatedTask).then(() => this.fetchTasks());
  };

  handleTaskDelete = id => {
    // 1. Filter tasks
    // 2. Update state

    deleteTask(id).then(() => this.fetchTasks());
  };

  render() {
    const sortedList = this.state.tasks.slice().sort((a, b) => a.done - b.done);
    return (
      <div className="todo-list">
        <CreateTaskInput onCreate={this.onCreate} />
        <ul className="list">
          {sortedList.map(task => (
            <Task
              key={task.id}
              {...task}
              onDelete={this.handleTaskDelete}
              onChange={this.handleTaskStatusChange}
            />
          ))}
        </ul>
      </div>
    );
  }
}

export default TasksList;
