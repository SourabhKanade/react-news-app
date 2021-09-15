import React, { Component } from "react";
import { NewsItem } from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: 12,
    // apiKey = process.env.REACT_APP_NEWS_API,
    category: 'general'
  };

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0
    };
    document.title = `Ninja News - ${this.props.category}`;
  }

  async updateNews(){
    this.props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    this.props.setProgress(30);
    let parsedData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false
    });
    this.props.setProgress(100);
  }
    async componentDidMount() {
      this.updateNews();
   }

  handlePrevClick = async () => {
    console.log("Prev Page");
    this.setState({page: this.state.page - 1});
    this.updateNews();
  };

  handleNextClick = async () => {
    console.log("Next Page");
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  fetchMoreData = async() => {
    this.setState({page: this.state.page + 1})
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles),
      totalResults: parsedData.totalResults
    });
  };

  render() {
    return (
    <>
        <h1 className="text-center">Ninja News - Top {this.props.category} Headlines</h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner/>}>

        <div className="container my-4 text-center">
        <div className="row my-4">
          {this.state.articles.map((element) => {
              return ( <div className="col-md-4" key={element.url}>
                  <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 100) : ""}
                    urlToImage={element.urlToImage}
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
        </InfiniteScroll>
        </>
                                /* <div className="container d-flex justify-content-between">
                                  <button
                                    disabled={this.state.page <= 1}
                                    type="button"
                                    onClick={this.handlePrevClick}
                                    className="btn css-button-sliding-to-left--sky"
                                  >
                                    {" "}
                                    &larr; Previous{" "}
                                  </button>
                                  <button
                                    disabled={
                                      this.state.page + 1 >
                                      Math.ceil(this.state.totalResults / this.props.pageSize)
                                    }
                                    type="button"
                                    onClick={this.handleNextClick}
                                    className="btn css-button-sliding-to-right--sky"
                                  >
                                    {" "}
                                    Next &rarr;{" "}
                                  </button>
                                </div> */
    );
  }
}
export default News;
