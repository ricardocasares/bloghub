import angular from 'angular';
import ArticleConfig from './article.config';
import ArticleCtrl from './article.controller';
import ArticleActions from './article-actions.component';
import Comment from './comment.component';

export default angular
    .module('app.article', [])
    .config(ArticleConfig)
    .controller('ArticleCtrl', ArticleCtrl)
    .component('articleActions', ArticleActions)
    .component('comment', Comment);