import React, { useEffect, useState } from 'react'

import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(1)
    const [totalArticles, setTotalArticles] = useState(18)
   


    const capitalizeFirstLetter = (string) => {
        if (string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        } else {
            return string;
        }
    }

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?${props.country ? `&country=${props.country}` : ''}${props.category ? `&category=${props.category}` : ''}&apiKey=f56c1abe28c1468c94aa4e8061afeda4&page=${page}&pageSize=18`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json()
        props.setProgress(70);
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        // setDataLoaded(true)
        props.setProgress(100);
        if (data.status !== 200) {
            console.log("api key exhausted")
        }
    }

    useEffect(() => {
        document.title = `${!props.value?(capitalizeFirstLetter(props.category)):(capitalizeFirstLetter(props.value))} - QuickBites`;
        updateNews();
        // eslint-disable-next-line
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?${props.country ? `&country=${props.country}` : ''}${props.category ? `&category=${props.category}` : ''}&apiKey=f56c1abe28c1468c94aa4e8061afeda4&page=${page + 1}&pageSize=18`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        setTotalArticles(totalArticles+18)
    };

    return (
        <>
            {!props.value ? (<h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>QuickBites - Top {capitalizeFirstLetter(props.category)} Headlines</h1>) : (<h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}>QuickBites - Everything about {capitalizeFirstLetter(props.value)}</h1>)}
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults && articles.length <= 82}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {totalResults !== 0 ? articles.map((element) => {
                            return <div className="col-md-12" key={element.url}>
                                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""}  newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        }) : <h1>Nahi hai bro kuch </h1>}
                    </div>
                </div>
            </InfiniteScroll>
        </>
    )

}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News;