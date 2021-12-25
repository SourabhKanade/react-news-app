import React from "react";

let NewsItem = (props) => {
    let { title, description, image, newsUrl, author, date, source } = props;
    return (
      <div>
        <div className="card border-primary">
          <div style={{display: 'flex',
                       justifyContent: 'flex-end',
                       position: 'absolute',
                       right: '0'}}>
                <span className="badge rounded-pill bg-danger"> {source} </span>
          </div>
          <img src={image ? image : "https://aniportalimages.s3.amazonaws.com/media/details/__sized__/Concussionjune2820210903073948-thumbnail-154x87-70.jpg"} className="card-img-top" alt="img" />
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
};

export default NewsItem;



    //   "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //   "author": null,
    //   "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //   "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //   "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //   "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //   "publishedAt": "2020-04-27T07:20:43Z",
    //   "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"

