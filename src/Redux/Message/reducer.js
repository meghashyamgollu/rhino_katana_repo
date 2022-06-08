import { CHANGE_MESSAGE } from "./action";

const initState = {
    message : ""
}

export const messageReducer = (state = initState, {type, payload}) => {
    switch(type){
        case CHANGE_MESSAGE:
            return {
                message : payload
            }

        default:
            return state;
    }
}