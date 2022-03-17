import { SET_THEME } from "../constants/actionTypes/layoutType";

const layoutReducer=(state, {payload, type})=>{
    switch(type){
        case SET_THEME:
            return{
                ...state,
                layout:{
                    ...state.layout,
                    theme:payload,
                },
            };
        default:
            return state;
    }
};
export default layoutReducer;