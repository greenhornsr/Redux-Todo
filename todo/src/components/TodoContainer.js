import React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions'


class TodoContainer extends React.Component{
    state = {
        newTodo: '',
    }

    handleChanges = e => {
        this.setState({ newTodo: e.target.value });
    };

    addTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ newTodo: '' });
    };

    render(){
        return (
            <>
                <div>
                    <input type='text' value={this.state.newTodo} onChange={this.handleChanges} placeholder="Add something to do!" />
                    <button onClick={this.addTodo}>Add More To Do</button>
                </div>
            </>
        )
    }     
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    };
};

export default connect(
    mapStateToProps, { addTodo }
)(TodoContainer);