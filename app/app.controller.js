/**
 * Created by Hyiero on 12/9/2016.
 */
/* @ngInject*/
export default function appController(appService){
    "use strict";
    let vm = this;

    vm.name = "Welcome to your sample Angular Webpack Seed Project. This is awesome";
    vm.test = '';
    vm.makeGetCall = function(){
        appService.get({id: 1},onSuccess,onFail);
    };

    function onSuccess(data){
        console.log("Call Succeeded");
        vm.test = 'Success';
        console.log(data);
    }

    function onFail(){
        console.log("Call Failed");
        vm.test = 'Fail';
    }

    return vm;
}