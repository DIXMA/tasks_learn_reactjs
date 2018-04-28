import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation'
import TodoForm from './components/forms/TodoForms'

import {todo} from './todo.json'

class App extends Component {
    constructor() {
        super();
        this.state = {
            todo
        };

        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    handleAddTodo(todo) {
        this.setState({
            todo: [...this.state.todo, todo]
        });
    }

    removetodo(index) {
        if (window.confirm('Are you sure, you want to delete it?')) {
            this.setState({
                todo: this.state.todo.filter((e, i) => {
                    return i !== index
                })
            });
        }
    }

    render() {
        const todos = this.state.todo.map((item, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                        <div className="card-header">
                            <h3>{item.title}</h3>
                            <span className="badge badge-pill badge-danger ml-2">
                                {item.priority}
                            </span>
                        </div>
                        <div className="card-body">
                            <p>{item.description}</p>
                            <p>
                                <mark>{item.responsible}</mark>
                            </p>
                        </div>
                        <div className="card-footer">
                            <button className="btn btn-danger" onClick={this.removetodo.bind(this, i)}>
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )
        });

        return (
            <div className="App">
                <Navigation title="Tasks" count_tasks={this.state.todo.length}/>

                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-4 text-center">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <TodoForm onAddTodo={this.handleAddTodo}/>
                        </div>
                        <div className="col-md-8">
                            <div className="row">
                                {todos}
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default App;
