// eslint-disable-next-line no-undef
path = require('path');
// eslint-disable-next-line no-global-assign,import/no-extraneous-dependencies
fetch = require('cross-fetch');

async function turnNewsIntoPages({ actions }) {
  // eslint-disable-next-line no-undef
  const newsTemplate = path.resolve('./src/pages/news.js');
  fetch(`http://localhost/gatsby-news/admin/api/news.php?slug=all`).then(
    async (res) => {
      const response = await res.json();
      const { data } = response;
      data.map((news) =>
        actions.createPage({
          path: `news/${news.slug}`,
          component: newsTemplate,
        })
      );
    }
  );
}

exports.createPages = async function (param) {
  await turnNewsIntoPages(param);
};
