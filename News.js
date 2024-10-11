import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const News = () => {
  const { category } = useParams(); // Grabs the category from URL params
  const [articles, setArticles] = useState([]); // State to hold the articles
  const apiKey = '2939f53812474f7299919cf28ba77fef'; // API Key

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Correctly formatted API URL using backticks for template literals
        const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`);
        setArticles(response.data.articles); // Set the articles data into state
      } catch (error) {
        console.error('Error fetching the news data:', error);
      }
    };
    
    // Fetch news whenever the category changes
    fetchNews();
  }, [category]); // Dependency array to watch for category changes

  return (
    <div>
      <h2>{category.charAt(0).toUpperCase() + category.slice(1)} News</h2>
      <div className="news-articles">
        {articles.map((article, index) => (
          <div key={index} className="article">
            <h3>{article.title}</h3>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />} {/* Check if image exists */}
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
