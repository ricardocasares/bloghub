import marked from 'marked';
import hjs from 'highlight.js';

marked.setOptions({
  highlight: function(code, lang) {
    return hjs.highlight(lang, code, true).value
  }
});

export default class Articles {
  // @ngInject
  constructor(CONFIG, $http) {
    this._config = CONFIG;
    this._$http = $http;
  }

  favorite(slug) {
    return this._$http({
      url: this._config.api + '/articles/' + slug + '/favorite',
      method: 'POST'
    });
  }

  unfavorite(slug) {
    return this._$http({
      url: this._config.api + '/articles/' + slug + '/favorite',
      method: 'DELETE'
    });
  }

  save(article) {
    let request = {};

    // If there's a slug, perform an update via PUT w/ article's slug
    if (article.slug) {
      request.url = `${this._config.api}/articles/${article.slug}`;
      request.method = 'PUT';
      // Delete the slug from the article to ensure the server updates the slug,
      // which happens if the title of the article changed.
      delete article.slug;

    // Otherwise, this is a new article POST request
    } else {
      request.url = `${this._config.api}/articles`;
      request.method = 'POST';

    }

    // Set the article data in the data attribute of our request
    request.data = { article: article };

    return this._$http(request).then((res) => res.data.article);
  }

  destroy(slug) {
    return this._$http({
      url: this._config.api + '/articles/' + slug,
      method: 'DELETE'
    });
  }

  get(slug) {
    return this._$http({
      url: 'https://api.github.com/repos/ricardocasares/ricardocasares.github.io/issues',
      method: 'GET'
    }).then((res) => res.data.article);
  }

  query(config) {
    let request = {
      url: 'https://api.github.com/repos/ricardocasares/ricardocasares.github.io/issues',
      method: 'GET',
      params: config.filters ? config.filters : null,
      transformResponse: append(this._$http.defaults.transformResponse, (x) => {
        return x.map(x => {
          x.body = marked(x.body);
          return x;
        })
      })
    };
    return this._$http(request).then((res) => res.data);
  }
}

function append(defaults, transform) {
  defaults = angular.isArray(defaults) ? defaults : [defaults];
  return defaults.concat(transform);
}