/**
 * Created by Hyiero on 12/9/2016.
 */
import angular from 'angular';
import router from 'angular-ui-router';
import appController from './app.controller';
import appConfig from './app.config';
import appService from './app.service';


export default angular.module('app',[router])
    .factory(appService.name,appService)
    .controller(appController)
    .config(appConfig)