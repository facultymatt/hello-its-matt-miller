import angular from 'angular';

import {hello} from './app/hello';
import {photoViewer} from './app/photo-viewer';
import {icon} from './app/icon';
import {homeButton} from './app/home-button';
import {textReader} from './app/text-reader';
import {back} from './app/back';
import {category} from './app/category';
import {titleBar} from './app/title-bar';
import 'angular-ui-router';
import routesConfig from './routes';
import 'angular-sanitize';

import './index.scss';

export const app = 'app';

angular
  .module(app, ['ui.router', 'ngSanitize'])
  .config(routesConfig)
  .component('app', hello)
  .component('icon', icon)
  .component('titleBar', titleBar)
  .component('back', back)
  .component('homeButton', homeButton)
  .component('category', category)
  .component('textReader', textReader)
  .component('photoViewer', photoViewer);
