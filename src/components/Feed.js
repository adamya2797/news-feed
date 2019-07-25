import React, {Component} from 'react';
import Post from './Post'
import Search from './Search';
import "../App.css"
import Categories from './Categories';


class Feed extends Component{

    state = {
       
        newsArray: []
    }

    constructor(){
        super();
        
        this.state.newsArray= []
    }

    render(){

        const post = this.state.newsArray.map( ( elem, index )=> <Post key={index} author={elem.author} 
        description={elem.description} 
        imgUrl={elem.urlToImage} title={elem.title} newsUrl={elem.url}></Post>)


       

        return(
            <div className="feed">

        <div className="page">
        <Search onSearch={this.searchHandle}/>
            <Categories  categoryHandle={this.categoryClickHandle}/>
        

        {post}
        
        </div>
    
      </div>
        )
       
    }

    fetchNewsArray = (url) => {
        fetch(url)
        .then(data => data.json())
        .then(data => {
            this.setState(
                {
                    newsArray: data.articles
                }
            )
        })

    }

    componentDidMount(){
  

        var url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe18432046b0400f810f03c64882d31a";
        this.fetchNewsArray(url);
    }

    

    searchHandle = (searchValue) =>{
     

        let url = "https://newsapi.org/v2/everything?q="+searchValue+"&apiKey=fe18432046b0400f810f03c64882d31a";
       this.fetchNewsArray(url);

    }


    categoryClickHandle = (categoryName) => {
        
        let url;
        if(categoryName === 'top'){
            url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=fe18432046b0400f810f03c64882d31a";
        }else{
            url = "https://newsapi.org/v2/everything?q="+categoryName+"&apiKey=fe18432046b0400f810f03c64882d31a";

        }
        
       this.fetchNewsArray(url);

    }
}


export default Feed;