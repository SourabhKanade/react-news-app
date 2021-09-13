import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, urlToImage, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card border-primary" style={{ width: "18rem" }}>
        <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: "90%", zIndex: '1'}}>
                {source}
              </span>
          <img src={urlToImage ? urlToImage : "https://aniportalimages.s3.amazonaws.com/media/details/__sized__/Concussionjune2820210903073948-thumbnail-154x87-70.jpg"} className="card-img-top" alt="img"/>
            <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-muted"> 
              By {author ? author : "Unknown"} on{" "} {new Date(date).toGMTString()} </small> </p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm css-button-arrow--blue border border-primary">Read More</a>
          </div> 
        </div>
      </div>
    );
  }
}

export default NewsItem;
