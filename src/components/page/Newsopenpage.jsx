import React from 'react';
import { useParams } from 'react-router-dom';
import NewsData from '../../Data/News';

function Newsopenpage() {
  let { news_id } = useParams();
  let find_id = NewsData.find((fi) => news_id === fi.id);

 

  return (
    <div className='news-page'>
      <div className="news-image-container">
        <img src={find_id.imgSrc} alt="" className="news-image"/>
      </div>
      <div className="news-content">
        <h1 className="news-title">{find_id.title}</h1>
        <p className="news-writer">{find_id.writer}</p>
        <p className="news-description">{find_id.description}</p>
        <p className="news-date">{find_id.lastUpdated}</p>
      </div>
    </div>
  );
}

export default Newsopenpage;
