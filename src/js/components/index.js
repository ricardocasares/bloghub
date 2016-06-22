import angular from 'angular';
import ListErrors from './list-errors.component';
import ShowAuthed from './show-authed.directive';
import FollowBtn from './buttons/follow-btn.component';
import FavoriteBtn from './buttons/favorite-btn.component';
import ArticleMeta from './article-helpers/article-meta.component';
import ArticleList from './article-helpers/article-list.component';
import ArticlePreview from './article-helpers/article-preview.component';
import ListPagination from './article-helpers/list-pagination.component';

export default angular
    .module('app.components', [])
    .component('articlePreview', ArticlePreview)
    .component('articleMeta', ArticleMeta)
    .component('articleList', ArticleList)
    .component('listPagination', ListPagination)
    .component('favoriteBtn', FavoriteBtn)
    .component('followBtn', FollowBtn)
    .component('listErrors', ListErrors)
    .directive('showAuthed', ShowAuthed);
