import { SET_THEME } from "../../constants/actionTypes/layoutType";

const setThemeForLayout =(name) =>(dispatch) =>{
    dispatch({
        type: SET_THEME,
        payload: name,
    })
}

export const layoutAction={
    setThemeForLayout,
};