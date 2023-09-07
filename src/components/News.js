import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import Error from "./Error";
import { Typography } from "@mui/material";
// import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

  // const API_KEY = process.env.REACT_APP_SECRET_KEY;

  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  document.title = `News Ninja - ${props.category}`;
    //  const options = {
    //   method: 'GET',
    //   headers: {
    //     'X-RapidAPI-Host': 'current-news.p.rapidapi.com'
    //   }
    // };


    console.log(process.env.REACT_APP_SECRET_KEY, "data")
     
const updateNews = async () => {
  props.setProgress(10);
  setLoading(false)
  // let response = await fetch(`https://current-news.p.rapidapi.com/news/${props.category}/?rapidapi-key=${process.env.REACT_APP_API_KEY}`, options);
  let response = await fetch(`https://newsdata.io/api/1/news?apikey=${process.env.REACT_APP_SECRET_KEY}&country=in&language=en&category=${props.category}`);
  // https://current-news.p.rapidapi.com/news/${props.category}/?rapidapi-key=${API_KEY}`, options);
  props.setProgress(30);
  let parsedData = await response?.json();
  console.log(parsedData, "data")
  props.setProgress(70);
  setData(parsedData)
  setLoading(false)
  props.setProgress(100);
}

  useEffect(() => {
    updateNews();
    // eslint-disable-next-line
  }, []);


  return (
    <>
      <Typography className="text-center" style={{margin: '80px 0 35px 0px',fontSize: "2em", marginBottom: '10px'}}>Ninja News - Top {props.content} Headlines</Typography>
      {loading && <Spinner />}
      {/* <InfiniteScroll dataLength={data.length} next={updateNews} hasMore={data.length !== totalResults} loader={<Spinner />}> */}

        <div className="container my-4 text-center">
          <div className="row my-4">
          
            {data?.results?.code === "RateLimitExceeded" ? 
               <Error /> :
               data?.results === undefined ?
                    <Spinner /> :
               data?.results?.map((element, index) => {
               return (
               <div className="col-md-4" key={index}>
                <NewsItem 
                  title={element.title ? (element.title.slice(0, 50) + "..." ) : ""}
                  description={element.description ? element.description.slice(0, 100) + "..." : ""}
                  image={element.image_url}
                  newsUrl={element.link}
                  author={element.source_id}
                  date={element.pubDate}
                  source={element.source_id}
                />
              </div>
              );
            })
            }
          </div>
        </div>
      {/* </InfiniteScroll> */}
    </>
  );
}

News.defaultProps = {
  country: "in",
  pageSize: 50,
  category: 'politics'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};
export default News