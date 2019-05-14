import { FIRST_ACTION } from '../actions'

const initialState = {
        todos: {}
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case FIRST_ACTION:
            return {
                ...state
            }
    }
}

export default reducer