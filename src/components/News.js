import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

    document.title = `News Ninja - ${props.category}`;

const updateNews = async () => {
  props.setProgress(10);
  let url = `http://api.mediastack.com/v1/news?access_key=${props.apiKey}&languages=en&country=in&categories=${props.category}&page=${page}&pageSize=${props.pageSize}`;
  setLoading(false)
  let response = await fetch(url)
  props.setProgress(30);
  let parsedData = await response.json();
  props.setProgress(70);
  setData(parsedData.data)
  setTotalResults(parsedData.limit)
  setLoading(false)
  props.setProgress(100);
}


  // const updateNews = async () => {
  //   props.setProgress(10);
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&access_key=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
  //   setLoading(false)
  //   let data = await fetch(url);
  //   props.setProgress(30);
  //   let parsedData = await data.json();
  //   props.setProgress(70);
  //   setArticles(parsedData.articles)
  //   setTotalResults(parsedData.totalResults)
  //   setLoading(false)
  //   props.setProgress(100);
  // };

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
  setPage(page + 1 );
  let url = `http://api.mediastack.com/v1/news?access_key=${props.apiKey}&languages=en&country=in&categories=${props.category}&page=${page}&pageSize=${props.pageSize}`;
  let response = await fetch(url);
  let parsedData = await response.json();
  setData(data.concat(parsedData.data))
  setTotalResults(parsedData.limit)
  };

  // const fetchMoreData = async () => {
  //   setPage(page + 1 );
  //   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
  //   let data = await fetch(url);
  //   let parsedData = await data.json();
  //   setArticles(articles.concat(parsedData.articles))
  //   setTotalResults(parsedData.totalResults)
  // };

  // const unique_id = Math.floor(Math.random() * 0);

  return (
    <>
      <h1 className="text-center" style={{margin: '90px 0px', marginBottom: '10px'}}>Ninja News - Top {props.content} Headlines</h1>
      {loading && <Spinner />}
      <InfiniteScroll dataLength={data.length} next={fetchMoreData} hasMore={data.length !== totalResults} loader={<Spinner />}>

        <div className="container my-4 text-center">
          <div className="row my-4">
         
            {data.map((element, index) => {
              return (<div className="col-md-4" key={index}>
                <NewsItem title={element.title ? element.title.slice(0, 45) : ""}
              
                 description={element.description ? element.description.slice(0, 100) : ""}
                  image={element.image}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.published_at}
                  source={element.source.name}
                />
              </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
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