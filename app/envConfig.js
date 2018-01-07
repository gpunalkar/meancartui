/**
 * Environment level module of the Stress management App.
 * 
 * @module EnvConfigModule
 * @requires 
 */
(function(){
    'use strict';
    // Project Module Name: EnvConfigModule
    var EnvConfigModule = angular.module('EnvConfigModule', []);

    // Project Constants
    var envConfigObject = {
        BASE_PATH: 'http://localhost:8001',
    }
    EnvConfigModule.constant('__ENV',envConfigObject)
})();