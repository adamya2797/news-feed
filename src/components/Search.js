
import React, {Component} from 'react';
import '../App.css'

class Search extends Component{

    state ={
        searchValue: null,
        errorMessage: null
    }

    constructor(){
        super();
        this.state.searchValue= null
    }
    render(){

        return (
            <div  className="search">
                <input type="text" placeholder="Search...." onChange = {this.handleChange}/>
                <button type="submit" onClick={this.handleSearch} >Search</button>
                <h4 id="error">{this.state.errorMessage}</h4>
            </div>
        )
    }

    handleChange = (e) => {
      
        this.setState({
            searchValue: e.target.value
        })
    }


    handleSearch = ()=>{
        if(this.state.searchValue === null || this.state.searchValue === ""){
            this.setState({
                errorMessage: "search can't be empty"
            })
        }
        else{ 
            this.setState({
                errorMessage: null
            })
            this.props.onSearch(this.state.searchValue);
        }
       
    }

    

}


export default Search;