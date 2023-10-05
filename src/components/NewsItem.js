import React, { Component } from 'react'

export class NewsItem extends Component {

  
  render() {
    let {title, description,imageUrl,newsUrl,author,date} = this.props;

    return (
      <div className = "my-3">
        <div className="card" >
            <img src={imageUrl ? imageUrl : "https://image.cnbcfm.com/api/v1/image/107162211-1670370490991-gettyimages-1245416106-US_HOUSING_MARKET.jpeg?v=1670414401&w=1920&h=1080"} className="card-img-top" alt="not found"/>
            <div className="card-body">
                <h5 className="card-title">{title}...</h5>
                <p className="card-text">{description}...</p>
                
                <a href={newsUrl} rel="noreferrer" target = "_blank" className="btn btn-sm btn-dark my-2">More..</a>
                <p className="card-text"><small className="text-muted">By {author?author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            </div>
</div>
      </div>
    )
  }
}

export default NewsItem
