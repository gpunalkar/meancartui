(function(){
    'use strict';
    // Project Module Name: StressModule
    var StressRootModule = angular.module('StressRootModule');

    // Project Constants
    var constantObject = {
        END_POINTS: {
            LOGIN: '/login',
            LOGOUT: '/logout',
            CHANGE_PASSWORD: '/changepassword',
            FORGOT_PASSWORD: '/resetpassword',
            GET_USER_BY_ID: '/getuserby_id',
            RESET_PASSWORD_BY_LINK: '/resetpasswordbylink',
            GET_ALL_USERS: '/getallusers',
            CREATE_USER: '/createuser',
            DELETE_USER: '/deleteuser',
            UPDATE_USER: '/updateuser',
        },
        SECRET: 'abcdefg',
        MESSAGES: {
            USER_ADD_SUCCESS: 'User Modified Successfully!',
            USER_ADD_ERROR: 'Error modifying user :(',
            USER_MODIFIED_SUCCESS: 'User Modified Successfully!',
            USER_MODIFIED_ERROR: 'Error modifying user :(',
            DELETE_USER_SUCCESS: 'User Deleted Successfully!',
            DELETE_USER_ERROR: 'Error deleting user :('
        }
    }
    StressRootModule.constant('CONSTANT',constantObject)
})();