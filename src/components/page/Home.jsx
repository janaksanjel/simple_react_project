import React from 'react';
import NewsData from '../../Data/News';
import { Link } from 'react-router-dom';
import Popularnewsdata from '../../Data/Popularnewsdata';


function Home() {
  return (






<div>


<div class="popular-news">
  <div class="big-news">
    {Popularnewsdata.map((news) => (
      <Link to={`/news/${news.id}`} class="news-link">
        <div class="news-item big">
          <div class="news-image">
            <img src={news.imgSrc} alt={news.title} />
          </div>
          <div class="news-content">
            <h3 class="news-title">{news.title}</h3>
            <p class="news-writer">{news.writer}</p>
            <p class="news-date">{news.lastUpdated}</p>
          </div>
        </div>
      </Link>
    ))}
  </div>


  
  <div class="livenews">
  <div class="live-header">
    <h2>Live News Updates </h2>
 
</div>
  
  <div class="youtube-video">
  <iframe width="560" height="315" src="https://www.youtube.com/embed/BudeDy0hPdU?si=D02sYDt2q3HBXfnS" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
  
  <div class="live-news-container">
    
  </div>

  <div class="live-news-container">
   
  </div>

  <div class="social-media-links">
    <a href="#"  class="social-link"><i class="fab fa-facebook-f"></i></a>
    <a href="#"  class="social-link"><i class="fab fa-twitter"></i></a>
    <a href="#"  class="social-link"><i class="fab fa-instagram"></i></a>
    <a href="#"  class="social-link"><i class="fab fa-linkedin-in"></i></a>
  </div>


  <div className="trandinghastag">
     
      <h3>Trending Hashtags</h3>
      <ul className="hashtags">
        <li><a href="#">#BreakingNews</a></li>
        <li><a href="#">#LiveUpdates</a></li>
        <li><a href="#">#Trending</a></li>
        <li><a href="#">#Latest</a></li>
        <li><a href="#">#TopStories</a></li>
        <li><Link to="/news">#News</Link></li>
        <li><Link to="/Sport">#Sport</Link></li>
        <li><Link to="/Business">#Business</Link></li>
        <li><Link to="/Earth">#Earth</Link></li>
        <li><Link to="/Innovation">#Innovation</Link></li>
        <li><Link to="/Culture">#Culture</Link></li>
        <li><Link to="/Feature">#Feature</Link></li>

      </ul>
    </div>

</div>
 
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


</div>

  );
}

export default Home;
