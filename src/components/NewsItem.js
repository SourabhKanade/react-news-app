import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        let {title, description, urlToImage, newsUrl} = this.props; 
                return (
         <div>
            <div className="card border-primary" style={{width: "18rem"}}>
                <img src= {urlToImage?urlToImage:"https://aniportalimages.s3.amazonaws.com/media/details/__sized__/Concussionjune2820210903073948-thumbnail-154x87-70.jpg"} className="card-img-top" alt="img"/>
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <a rel="noreferrer" href={newsUrl} target= "_blank" className="btn btn-sm css-button-arrow--blue">Read More</a>
                </div>
            </div>
        </div>
        )
    }
}

export default NewsItem