import React,{Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import selectBook from './../actions/index'; // ACTION CREATOR


// This is going to be my Container or Smart Component as opposed to the Dumb Component: 
// Smart Component: A smart component has a direct connection to the state produced by REDUX.

class BookList extends Component{
    renderList(){
        //Let's pretend that this component is wired with the store and it get's the list of books via props:: Soon we'll do that though.Let's assume list of books is in props

        return this.props.books.map((book)=>{
            return (
                <li
                  onClick={()=>this.props.sb(book)} // This is working on onClick event so by default no action is passed, I mean the payload in our action creator actions/index.js will only be available once the list is clicked by default no payload and also no book will be available for book_detail.We will need to set condition in book_detail.js, to use this.props.book
                  key={book.title} 
                  className="list-group-item">
                  {book.title}
                </li>
            )
        });
    }
    
    render(){
        
        return(
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}


// mapStateToProps() function allows us to get the specific piece of state from our store which has been made available by the connect method
function mapStateToProps(state){
    // Whatever is returned from here will show up as props inside of this BookList component ^^^ 
    return{
        books:state.books
    }
}

// mapDispatchTOProps makes sure that the action is dispatched to all the reducers via dispatch callback:
function mapDispatchToProps(dispatch){
    // Whatever is returned from mapDispatchToProps() i-e., sb [the action creator function] is  made available as props to this CONTAINER.And we can then call the actionCreator using this.props.sb() to call our actioncreator.
    return bindActionCreators({sb:selectBook},dispatch);

    // Here sb is our action creator which we can call in our CONTAINER NOW, using props. for example. onClick of <li onClick={this.props.sb(book)}> 
}


export default connect(mapStateToProps,mapDispatchToProps)(BookList); // Container it is !!! And a Container is aware of the state available in the REDUX