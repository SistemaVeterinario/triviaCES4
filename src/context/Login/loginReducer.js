import {
  SAVE_USER,
  SAVE_QUESTIONS
} from '../../types';

export default (state, action) => {
    switch (action.type) {
        case SAVE_USER:
            return {
                ...state,
                user: action.payload
            }
        case SAVE_QUESTIONS:
            return {
                  ...state,
                questions: action.payload
            } 
        default:
            return state;
    }
}