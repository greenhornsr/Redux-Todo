import React from 'react';
import { connect } from 'react-redux';

import { addTodo, toggleTodo } from '../actions'


class TodoContainer extends React.Component{
    state = {
        newTodo: '',
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    toggleTodo = id => {
        this.props.toggleTodo(id)
        // console.log(this.props)
    }

    render(){
        return (
            <>  
                <div>
                    <form onSubmit={this.addTodo}>
                        <input type='text' value={this.state.newTodo} onChange={this.handleChanges} placeholder="Add something to do!" />
                        <button>Add More To Do</button>
                    </form>
                </div>
                <div>
                    {this.props.todos.map((todo, index) => {
                        return  <h3 onClick={() => this.toggleTodo(index)} key={index}>{todo.value}</h3>
                    })}
                </div>
            </>
        )
    }     
}

const mapStateToProps = state => {
    console.log(state)
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps, { addTodo, toggleTodo }
)(TodoContainer);