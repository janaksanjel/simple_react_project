import React from 'react'
import NewsData from '../Data/News'
import { Link } from 'react-router-dom'

function Business() {

    let filteredNews = NewsData.filter(fnews => fnews.category === 'Business')
  return (
    <>
  <div className="welcomemsg">
    <h1>Welcome to Business News!</h1>
  </div>
    
        <div className="news-home">
   
   {filteredNews.map((news) => (
      
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

export default Business
