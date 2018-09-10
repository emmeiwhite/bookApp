// The state passed as the first argument is not the application state but it is only the state the reducer is responsible for.!!!
export default function ActiveBookReducer(state=null,action){
    // Every time an action gets despatched from our application it is sent to every reducer.
    switch(action.type){
        case "BOOK_SELECTED":
            return action.payload;// Return that book which was selected
        default:
            return state; //If action was anything else, we simply return state
        // We need to make sure to write a code here, when the action doesn't concern about this particular reducer.The above statement cares for this.
        // Since I am returning a default state to some value now, and this goes to the activeBook, It should be used there !!!
    } 
}