// Action Creator
export default function selectBook(book){ // This book is only available once the action occurs i-e user clicks on the book list. payload:book will return undefined by default as the application starts.
    // console.log("A book clicked is:",book.title);

    // the selectBook function is basically an action creator, it simply returns an action({ type:"", payload:""}) and then the action is sent to the different reducers.
    // LET'S JUST DO IT !!!

    return {
        type:"BOOK_SELECTED",
        payload:book 
        //This is the book being passed to the detail.But this will work only when we click on the listItem.Note, In our reducer_active_book we are returning this payload only. 
        // But we have written the logic here that only when the user clicks on the particular list, that list payload gets available so far. While we are looping the lists,in book_list.js
        // we haveSet the onClick={} event 

        /*What I figured out is : In case the book is not selected, which is the default app launch, We make our reducer to return a default state. Let's try it*** */
    }

}