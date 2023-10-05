import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export class News extends Component {

  static defaultProps = {
    category: "general",
    country: "in",
    pageSize: this.pageSize
  
  }

  static propTypes = {
    category: PropTypes.string,
    country: PropTypes.string,
    pageSize: PropTypes.number
  }

  capitalize(s){
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults : 0
    }
    document.title = `${this.capitalize(this.props.category)} - NewsHub`;
  }

  async update(){
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true })
    let data = await fetch(url);
    this.props.setProgress(40);
    
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
    this.props.setProgress(100);
  }


  async componentDidMount() {
    
    this.update();
  }

  fetchMoreData = async () =>{
      this.setState({page : ++this.state.page })
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      
      let parsedData = await data.json();
      this.setState({
        articles: this.state.articles.concat(parsedData.articles),
        totalResults: parsedData.totalResults
        
      })
  };

  render() {
    return (
      <>
      
        <h1 className="text-center" style={{ margin: '40px 0px', marginTop : '90px'}}><strong>NewsHub - Top {this.capitalize(this.props.category)} Headlines</strong></h1>
        {this.state.loading && <Spinner/> }
        <InfiniteScroll 
          dataLength = {this.state.articles.length}
          next = {this.fetchMoreData}
          hasMore = {this.state.articles.length < this.state.totalResults}
          loader = {<Spinner/>}
          >
          <div className="container">
            <div className="row">
              {this.state.articles.map((element) => {

                return <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage} newsUrl={element.url} author = {element.author} date = {element.publishedAt}/>
                </div>

              })}
            </div>
          </div>
        
        </InfiniteScroll>
        
      
      </>

    )
  }
}


export default News