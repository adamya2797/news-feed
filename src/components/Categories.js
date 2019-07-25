import React, {Component} from 'react';
import '../App.css'

class Categories extends Component{
 

    render(){

        return(
            <div className="categories">
                <h3 className="categoryHead">Categories: </h3>
                <ul>
                    <li onClick={this.clickHandler} data-id="top">Top</li>
                    <li onClick={this.clickHandler} data-id="delhi">City</li>
                    <li onClick={this.clickHandler} data-id="science">Science</li>
                    <li onClick={this.clickHandler} data-id="politics">Politics</li>
                    <li onClick={this.clickHandler} data-id="economy">Economy</li>
                    <li onClick={this.clickHandler} data-id="world">World</li>
                    <li onClick={this.clickHandler} data-id="sports">Sports</li>
                    <li onClick={this.clickHandler} data-id="bollywood">Bollywood</li>
                    
                </ul>

            </div>
        )

    }

    clickHandler = (elem) => {
       
        this.props.categoryHandle(elem.currentTarget.dataset.id)
    }

}



export default Categories;