import GitHub from './github.service';

export default class Comments extends GitHub {
  // @ngInject
  constructor(CONFIG, $http) {
    super($http, CONFIG);
  }

  add(slug, payload) {
    return this._$http({
      url: `${this._config.api}/articles/${slug}/comments`,
      method: 'POST',
      data: { comment: { body: payload } }
    }).then((res) => res.data.comment);

  }

  destroy(commentId, articleSlug) {
    return this._$http({
      url: `${this._config.api}/articles/${articleSlug}/comments/${commentId}`,
      method: 'DELETE'
    });

  }

  getAll(slug) {
    return this._$http({
      url: `${this._config.api}/articles/${slug}/comments`,
      method: 'GET'
    }).then((res) => res.data.comments);
  }
}
