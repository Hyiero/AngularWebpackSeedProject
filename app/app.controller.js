/**
 * Created by Hyiero on 12/9/2016.
 */
/* @ngInject*/
export default function appController(appService){
    "use strict";
    let vm = this;

    vm.name = "Welcome to your sample Angular Webpack Seed Project. This is awesome";

    vm.makeGetCall = function(){
        appService.get(onSuccess,onFail);
    };

    function onSuccess(){
        console.log("Call Succeeded")
    }

    function onFail(){
        console.log("Call Failed");
    }

    return vm;
}