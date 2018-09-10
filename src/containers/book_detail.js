import React,{Component} from 'react';
import {connect} from 'react-redux';


class BookDetail extends Component{
    render(){
        if(!this.props.book){
            return (<div>Please Select a book to get its details</div>)
        }
        return(
            <div className="col-sm-8">
                <h3>Currently Active Book is :</h3>
                <h4>TITLE : {this.props.book.title}</h4>
                <h4>Pages : {this.props.book.pages}</h4>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
           book:state.activeBook // The activeState is available as props to the container now. we have to use this.props.book
    }
}

export default  connect(mapStateToProps)(BookDetail); 
// " Yai ban Gaya Ji Hamara Container ": DECODE: So here is our Container Created