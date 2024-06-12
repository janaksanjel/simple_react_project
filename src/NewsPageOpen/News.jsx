import React from 'react'
import { Link } from 'react-router-dom'
import NewsData from '../Data/News'

function News() {
  return (
    <>
      <div className="welcomemsg">
    <h1>Latest News!</h1>
  </div>
    
    <div className="news-home">
    {NewsData.map((news) => (
      <div className="news-item">
        <Link to={`/news/${news.id}`} className="news-link">
          <div className="news-image">
            <img src={news.imgSrc} alt={news.title} />
          </div>
          <div className="news-content">
            <h3 className="news-title">{news.title}</h3>
            <p className="news-writer">{news.writer}</p>
            <p className="news-date">{news.lastUpdated}</p>
          </div>
        </Link>
      </div>
    ))}
  </div>

    </>
  )
}

export default News
