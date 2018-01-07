(function(){
    'use strict'
    var StressRootModule = angular.module("StressRootModule");
    var constantObject = {
        END_POINTS: {
            LOGIN: '/login',
            LOGOUT: '/logout',
            CHANGE_PASSWORD: '/changepassword',
        },
        SECRET: 'abcdefg'
    };
    StressRootModule.constant('CONSTANT', constantObject);
})();