import React from "react";

let NewsItem = (props) => {
    let { title, description, image, newsUrl, author, date, source } = props;
    // console.log(author, "author")
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





// img : https://www.denverpost.com/wp-content/uploads/2022/06/gfm1.png?w=1400px&strip=all


// {
//     "article_id": "ba0a10dab7416d01471389471bedc7dd",
    // "title": "India extends coal import mandate for power to avoid blackouts",
//     "link": "https://timesofindia.indiatimes.com/business/india-business/india-extends-coal-import-mandate-for-power-to-avoid-blackouts/articleshow/103314255.cms",
//     "keywords": null,
//     "creator": null,
//     "video_url": null,
    // "description": "India extended a mandate to power plants to import coal until March as the driest August in more than a century pushed electricity demand to a record, putting a strain on supplies of the nation’s main generation fuel.​Plants designed to run on domestic coal have been asked to import 4% of their supplies of the fuel through March to avoid outages, extending an earlier direction to buy from overseas until the end of this month, power secretary Pankaj Agarwal said in an interview.",
//     "content": "10 Most Affordable Cities in India to Buy a House Most Visited Monuments in India The Pros and Cons of Investing in Value Stocks Investing in Small-Cap Stocks: Top 10 Tips for Absolute Beginners 10 Ways to Earn Money Online by Selling Physical Products Richest Cricket Players Across the World 10 Things You Didn’t Know About Warren Buffett’s Investment Process Priyanka Chopra Net Worth: Know How Rich is Global Actress Top 10 Benefits of Investing in Small-Cap Stocks 15 Best Tax Saving Schemes in India",
//     "pubDate": "2023-09-02 17:01:13",
    // "image_url": https://www.denverpost.com/wp-content/uploads/2022/06/gfm1.png?w=1400px&strip=all,
//     "source_id": "toi",
//     "source_priority": 391,

//     "country": [
//         "india"
//     ],
//     "category": [
//         "business"
//     ],
//     "language": "english"


    //   "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
    //   "author": null,
    //   "title": "Five famous people (and one cat) you didn't know have ESPNcricinfo profiles | ESPNcricinfo.com",
    //   "description": "Why do a footballer, a Nobel laureate and a prime minister (no, not Imran Khan) find themselves in the ESPNcricinfo player database? | ESPNcricinfo.com",
    //   "url": "http://www.espncricinfo.com/story/_/id/29102695/five-famous-people-one-cat-know-espncricinfo-profiles",
    //   "urlToImage": "https://a.espncdn.com/i/cricket/cricinfo/1221668_1296x1296.gif",
    //   "publishedAt": "2020-04-27T07:20:43Z",
    //   "content": "Why do a cat, a footballer, a Nobel laureate and a prime minister find themselves in the ESPNcricinfo database? Here are six player profiles you wouldn't have expected we had.\r\nPeter the catThe only … [+5504 chars]"

