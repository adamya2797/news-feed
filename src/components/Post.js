
import React, {Component} from 'react';

import '../App.css'



class Post extends Component {
    render() {
      return (
        <div className="post">
            <br/>
            <div className="element">
            <a href={this.props.newsUrl}>
            <h1>{this.props.title}</h1>
          <h3><b>Author: </b> {  (!this.props.author) ? "Anonymous":this.props.author }</h3>
          <img  id="myImg" src={this.props.imgUrl} alt="news"/>
          <p><b>Desciption: </b> {this.props.description}</p>
          
                
                </a>

            </div>
            
         
          
        </div>
      )
    }
  }

export default Post;