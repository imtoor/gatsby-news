import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import groupBy from 'lodash/groupBy';
import Layout from '../components/Layout';

import imgNews1 from '../assets/images/news-450x350-1.jpg';
import imgNews2 from '../assets/images/news-450x350-2.jpg';
import imgNews3 from '../assets/images/news-350x223-1.jpg';
import imgNews4 from '../assets/images/news-350x223-2.jpg';
import imgNews5 from '../assets/images/news-350x223-3.jpg';

const loadImage = function (variable) {
  const image = new Image();
  image.src = `http://localhost/gatsby-news/admin/uploads/${variable}`;
  // eslint-disable-next-line eqeqeq
  if (image.width == 0) {
    return `http://localhost/gatsby-news/admin/uploads/placeholder.png`;
  }
  return `http://localhost/gatsby-news/admin/uploads/${variable}`;
};

const TopNewsTnLeft = ({ img, slug, linkText }) => (
  <div className="col-md-6">
    <div className="tn-img">
      <img src={img} alt={img} />
      <div className="tn-title">
        <Link to={`news/${slug}`}>{linkText}</Link>
      </div>
    </div>
  </div>
);

const TopNewsTnRight = ({ img, slug, linkText }) => (
  <div className="col-md-6">
    <div className="tn-img">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img src={img} alt={img} />
      <div className="tn-title">
        <Link to={`news/${slug}`}>{linkText}</Link>
      </div>
    </div>
  </div>
);

const NewsMap = ({ kategori, item }) => (
  <>
    <div className="col-md-6">
      <h2>{kategori}</h2>
      <div className="row cn-slider">
        {item.map(
          (news, index) =>
            index < 3 && (
              <div className="col-md-6">
                <div className="cn-img">
                  {/* eslint-disable-next-line no-undef */}
                  <img src={loadImage(news.image)} alt={news.image} />
                  <div className="cn-title">
                    <Link to={`news/${news.slug}`}>{news.title}</Link>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  </>
);

const MainNews = (item) => (
  <div className="col-md-4">
    <div className="mn-img">
      <img src={loadImage(item.item.image)} alt={item.item.image} />
      <div className="mn-title">
        <Link to={`news/${item.item.slug}`}>{item.item.title}</Link>
      </div>
    </div>
  </div>
);

const Featured = (item) => (
  <div className="tn-news">
    <div className="tn-img">
      <img src={loadImage(item.item.image)} alt={item.item.image} />
    </div>
    <div className="tn-title">
      <Link to={`/news/${item.item.slug}`}>{item.item.title}</Link>
    </div>
  </div>
);

const PopularNews = (item) => <></>;

const LatestNews = (item) => <></>;

const MostViewed = (item) => <></>;

const MostRead = (item) => <></>;

const MostRecent = (item) => <></>;

export default function HomePage() {
  const [listOfKategori, setListOfKategori] = useState([]);
  const [topNewsLeft, setTopNewsLeft] = useState([]);
  const [topNewsRight, setTopNewsRight] = useState([]);
  const [mainNews, setMainNews] = useState([]);
  const [featuredItem, setFeaturedItem] = useState([]);

  useEffect(() => {
    document.getElementById('linkAbout').classList.remove('active');
    document.getElementById('linkHome').classList.add('active');
  });

  useEffect(() => {
    // TopNewsLeft
    fetch(
      `http://localhost/gatsby-news/admin/api/news.php?slug=all&limit=4`
    ).then(async (res) => {
      const json = await res.json();
      const { data } = json;
      data.map((row) => setTopNewsLeft((prevState) => [...prevState, row]));
    });
  }, []);

  useEffect(() => {
    // TopNewsRight
    fetch(
      `http://localhost/gatsby-news/admin/api/news.php?slug=all&limit=4`
    ).then(async (res) => {
      const json = await res.json();
      const { data } = json;
      data.map((row) => setTopNewsRight((prevState) => [...prevState, row]));
    });
  }, []);

  useEffect(() => {
    // Kategori
    fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all`).then(
      async (res) => {
        const json = await res.json();
        const { data } = json;
        const groupNews = groupBy(data, (n) => n.kategori);
        const toArray = Object.entries(groupNews);
        // eslint-disable-next-line array-callback-return
        toArray.map((item) => {
          setListOfKategori((prevState) => [...prevState, item]);
        });
      }
    );
  }, []);

  useEffect(() => {
    fetch(
      `http://localhost/gatsby-news/admin/api/news.php?slug=all&limit=9`
    ).then(async (res) => {
      const json = await res.json();
      const { data } = json;
      // eslint-disable-next-line array-callback-return
      data.map((item) => {
        setMainNews((prevState) => [...prevState, item]);
      });
    });
  }, []);

  useEffect(() => {
    fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all`).then(
      async (res) => {
        const response = await res.json();
        // eslint-disable-next-line array-callback-return
        response.data.map((item) => {
          // eslint-disable-next-line eqeqeq
          if (item.featured == 1) {
            setFeaturedItem((prevState) => [...prevState, item]);
          }
        });
      }
    );
  }, []);

  return (
    <Layout>
      {/* top news */}
      <div className="top-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6 tn-left">
              <div className="row tn-slider">
                {topNewsLeft.map((row) => (
                  <TopNewsTnLeft
                    img={loadImage(row.image)}
                    slug={row.slug}
                    linkText={row.title}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-6 tn-right">
              <div className="row">
                {topNewsRight.map((row) => (
                  <TopNewsTnRight
                    img={loadImage(row.image)}
                    slug={row.slug}
                    linkText={row.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* top news end */}

      {/* category news */}
      <div className="cat-news">
        <div className="container">
          <div className="row">
            {listOfKategori.map((item) => (
              <NewsMap kategori={item[0]} item={item[1]} />
            ))}
          </div>
        </div>
      </div>
      {/* category end */}

      {/* tab news */}
      <div className="tab-news">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#featured"
                  >
                    Featured News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#popular">
                    Popular News
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#latest">
                    Latest News
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="featured" className="container tab-pane active">
                  {featuredItem.map((item) => (
                    <Featured item={item} />
                  ))}
                </div>
                <div id="popular" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews4} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews5} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews1} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="latest" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews2} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews3} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews4} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <ul className="nav nav-pills nav-justified">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="pill"
                    href="#m-viewed"
                  >
                    Most Viewed
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#m-read">
                    Most Read
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-toggle="pill" href="#m-recent">
                    Most Recent
                  </a>
                </li>
              </ul>

              <div className="tab-content">
                <div id="m-viewed" className="container tab-pane active">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews5} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews4} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews3} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="m-read" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews2} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews1} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews3} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
                <div id="m-recent" className="container tab-pane fade">
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews4} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews5} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                  <div className="tn-news">
                    <div className="tn-img">
                      <img src={imgNews1} />
                    </div>
                    <div className="tn-title">
                      <a href="">Lorem ipsum dolor sit amet</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tab news end */}

      {/* main news */}
      <div className="main-news">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="row">
                {mainNews.map((item) => (
                  <MainNews item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* main news end */}
    </Layout>
  );
}
