import angular from 'angular';
import EditorConfig from './editor.config';
import EditorCtrl from './editor.controller';

export default angular
    .module('app.editor', [])
    .config(EditorConfig)
    .controller('EditorCtrl', EditorCtrl);
