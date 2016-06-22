import angular from 'angular';
import SettingsConfig from './settings.config';
import SettingsCtrl from './settings.controller';

export default angular
    .module('app.settings', [])
    .config(SettingsConfig)
    .controller('SettingsCtrl', SettingsCtrl);
