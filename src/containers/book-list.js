import React,{Component} from 'react';

import {connect} from 'react-redux';


// This is going to be my Container or Smart Component as opposed to the Dumb Component: 
// Smart Component: A smart component has a direct connection to the state produced by REDUX.

class BookList extends Component{
    renderList(){
        //Let's pretend that this component is wired with the store and it get's the list of books via props:: Soon we'll do that though.Let's assume list of books is in props

        return this.props.books.map((book)=>{
            return (
                <li key={book.title} className="list-group-item">{book.title}</li>
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

function mapStateToProps(state){
    // Whatever is returned from here will show up as props inside of this BookList component ^^^ 

    return{
        books:state.books
    }
}

export default connect(mapStateToProps)(BookList); // Container it is !!! And a Container is aware of the state available in the REDUX