import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import Layout from '../components/Layout';

import imgNews from '../assets/images/news-825x525.jpg';
import imgNews1 from '../assets/images/news-350x223-1.jpg';
import imgNews2 from '../assets/images/news-350x223-2.jpg';
import imgNews3 from '../assets/images/news-350x223-3.jpg';
import imgNews4 from '../assets/images/news-350x223-4.jpg';

// eslint-disable-next-line no-empty-pattern
export default function NewsPage() {
  const [news, setNews] = useState({});

  useEffect(() => {
    const pathArray = window.location.pathname.split('/');
    if (pathArray.length > 1) {
      fetch(
        `http://localhost/gatsby-news/admin/api/news.php?slug=${pathArray[2]}`
      ).then(async (res) => {
        const response = await res.json();
        if (response !== undefined) {
          if (response.status && response.data.length > 0) {
            setNews({
              title: response.data[0].title,
              content: response.data[0].content,
              image: `http://localhost/gatsby-news/admin/uploads/${response.data[0].image}`,
            });
            console.log(news);
          } else {
            navigate('/', { replace: true });
          }
        } else {
          navigate('/', { replace: true });
        }
      });
    } else {
      navigate('/', { replace: true });
    }
  }, '');

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
                  <img src={news.image} alt={news.image} />
                </div>
                <div className="sn-content">
                  <h1 className="sn-title">{news.title}</h1>
                  <p>{news.content}</p>
                </div>
              </div>
              <div className="sn-related">
                <h2>Related News</h2>
                <div className="row sn-slider">
                  <div className="col-md-4">
                    <div className="sn-img">
                      <img src={imgNews1} />
                      <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="sn-img">
                      <img src={imgNews2} />
                      <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="sn-img">
                      <img src={imgNews3} />
                      <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="sn-img">
                      <img src={imgNews4} />
                      <div className="sn-title">
                        <a href="">Interdum et fames ac ante</a>
                      </div>
                    </div>
                  </div>
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
