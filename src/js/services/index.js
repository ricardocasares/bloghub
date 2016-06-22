import angular from 'angular';
import UserService from './user.service';
import JwtService from './jwt.service';
import TagsService from './tags.service';
import ArticlesService from './articles.service';
import CommentsService from './comments.service';
import ProfileService from './profile.service';

export default angular
    .module('app.services', [])
    .service('User', UserService)
    .service('JWT', JwtService)
    .service('Tags', TagsService)
    .service('Articles', ArticlesService)
    .service('Comments', CommentsService)
    .service('Profile', ProfileService);
