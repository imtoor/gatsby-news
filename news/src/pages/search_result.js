import React, { useEffect, useState } from 'react';
import { Link, navigate } from 'gatsby';
import Layout from '../components/Layout';

const RelatedNewsItem = (news) => {
  const imagePath = `http://localhost/gatsby-news/admin/uploads/`;

  return (
    <div className="col-md-4">
      <div className="sn-img">
        {/* eslint-disable-next-line jsx-a11y/alt-text */}
        <img src={imagePath + news.news.image} alt={news.news.image} height={240} />
        <div className="sn-title">
          <Link to={`/news/${news.news.slug}`}>
            <a>{news.news.title}</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function SearchResult() {
  const [relatedNews, setRelatedNews] = useState([]);
  const url = new URL(window.location.href);
  const search = url.searchParams.get('search');

  useEffect(() => {
    const data = new URLSearchParams();
    data.append('title', search);

    fetch(`http://localhost/gatsby-news/admin/api/search.php`, {
      method: 'POST',
      body: data,
    }).then(async (res) => {
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
  }, []);

  return (
    <Layout>
      <div className="breadcrumb-wrap">
        <div className="container">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/">
                <a>Home</a>
              </Link>
            </li>
            <li className="breadcrumb-item active">Search Result</li>
          </ul>
        </div>
      </div>

      <div className="single-news">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="sn-related">
                <h2>
                  Hasil pencarian mengandung kata <u>{search}</u>
                </h2>
                <div className="row sn-slider">
                  {relatedNews.length > 0 &&
                    relatedNews.map((item) => <RelatedNewsItem news={item} />)}
                  {relatedNews.length == 0 && (
                    <p>
                      &nbsp;&nbsp;&nbsp;&nbsp;Tidak menemukan berita yang sesuai
                      pencarian...
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
