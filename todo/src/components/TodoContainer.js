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
        this.props.addTodo(this.state.newMember);
        this.setState({ newTodo: '' });
    };

    render(){
        return (
            <>
                <div>

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