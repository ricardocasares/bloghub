import angular from 'angular';
import ProfileConfig from './profile.config';
import ProfileCtrl from './profile.controller';
import ProfileArticlesCtrl from './profile-articles.controller';

export default angular
    .module('app.profile', [])
    .config(ProfileConfig)
    .controller('ProfileCtrl', ProfileCtrl)
    .controller('ProfileArticlesCtrl', ProfileArticlesCtrl);
