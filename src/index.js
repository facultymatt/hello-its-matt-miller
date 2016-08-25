// deps
import angular from 'angular';
import 'angular-ui-router';
import 'angular-sanitize';

// components
import {hello} from './app/hello/hello';
import {photoViewer} from './app/photo-viewer/photo-viewer';
import {icon} from './app/icon/icon';
import {homeButton} from './app/home-button/home-button';
import {textReader} from './app/text-reader/text-reader';
import {back} from './app/back/back';
import {category} from './app/category/category';
import {titleBar} from './app/title-bar/title-bar';

// routes
import routesConfig from './routes';

// styles
import './index.scss';

// export app
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
