import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import Layout from '../components/Layout';

const loadImage = function (variable) {
  const image = new Image();
  image.src = `http://localhost/gatsby-news/admin/uploads/${variable}`;
  // eslint-disable-next-line eqeqeq
  if (image.width == 0) {
    return `http://localhost/gatsby-news/admin/uploads/placeholder.png`;
  }
  return `http://localhost/gatsby-news/admin/uploads/${variable}`;
};

const RelatedNewsItem = (news) => (
  <div className="col-md-4">
    <div className="sn-img">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={loadImage(news.news.image)} alt={news.news.image} />
      <div className="sn-title">
        <Link to={`/news/${news.news.slug}`}>{news.news.title}</Link>
      </div>
    </div>
  </div>
);

const getRelatedNews = (kategori, setRelatedNews) => {
  fetch(
    `http://localhost/gatsby-news/admin/api/related_news.php?kategori=${kategori}&limit=6`
  ).then(async (res) => {
    const response = await res.json();
    if (response !== undefined) {
      if (response.status && response.data.length > 0) {
        // eslint-disable-next-line array-callback-return
        response.data.map((item) => {
          setRelatedNews((prevState) => [...prevState, item]);
        });
      }
    } else {
      setRelatedNews((prevState) => [...prevState, []]);
    }
  });
};

// eslint-disable-next-line no-empty-pattern
export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [relatedNews, setRelatedNews] = useState([]);

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    if (pathArray.length > 1) {
      fetch(
        `http://localhost/gatsby-news/admin/api/news.php?slug=${pathArray[2]}`
      ).then(async (res) => {
        const response = await res.json();
        if (response !== undefined) {
          if (response.status && response.data.length > 0) {
            // eslint-disable-next-line array-callback-return
            response.data.map((item) => {
              getRelatedNews(item.kategori_id, setRelatedNews);
              setNews((prevState) => [...prevState, item]);
            });
          } else {
            console.log('Data not found!');
            navigate('/', { replace: true });
          }
        } else {
          console.log('Data undefined!');
          navigate('/', { replace: true });
        }
      });
    }
  }, []);

  return (
    <Layout>
      <div className="breadcrumb-wrap">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">News details</li>
          </ul>
        </div>
      </div>

      <div className="single-news">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="sn-container">
                <div className="sn-img">
                  {/* eslint-disable-next-line jsx-a11y/alt-text */}
                  {news.length > 0 && (
                    <img src={loadImage(news[0].image)} alt={news.image} />
                  )}
                </div>
                <div className="sn-content">
                  <h1 className="sn-title">{news.length > 0 && news[0].title}</h1>
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <p>{news.length > 0 && news[0].content}</p>
                  </div>
                </div>
              </div>
              <div className="sn-related">
                <h2>Related News</h2>
                <div className="row sn-slider">
                  {relatedNews.map((item) => (
                    <RelatedNewsItem news={item} />
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="sidebar" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
