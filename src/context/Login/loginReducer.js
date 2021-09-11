import {
  SAVE_USER,
  SAVE_QUESTIONS,
  FINISH_GAME,
  ADD_EARNINGS
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

        case ADD_EARNINGS:
            return {
                ...state,
                earnings: action.payload
            }

        case FINISH_GAME:
            return{
                ...state,
                questions:[]
            }    
        default:
            return state;
    }
}