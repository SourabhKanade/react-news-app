import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  const API_KEY = process.env.REACT_APP_NEWS_API;

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  document.title = `News Ninja - ${props.category}`;

     const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
      }
    };
     
const updateNews = async () => {
  props.setProgress(10);
  setLoading(false)
  let response = await fetch(`https://current-news.p.rapidapi.com/news/${props.category}/?rapidapi-key=${API_KEY}`, options);
  props.setProgress(30);
  let parsedData = await response.json();
  props.setProgress(70);
  setData(parsedData.news)
  setLoading(false)
  props.setProgress(100);
}

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <h1 className="text-center" style={{margin: '90px 0px', marginBottom: '10px'}}>Ninja News - Top {props.content} Headlines</h1>
      {loading && <Spinner />}
      {/* <InfiniteScroll dataLength={data.length} next={updateNews} hasMore={data.length !== totalResults} loader={<Spinner />}> */}

        <div className="container my-4 text-center">
          <div className="row my-4">
          
            {data.map((element, index) => {
              return (<div className="col-md-4" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 100) : ""}
                  image={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
              );
            })}
          </div>
        </div>
      {/* </InfiniteScroll> */}
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 12,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News