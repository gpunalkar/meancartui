/**
 * PDFService is a service that is used by Forgot Password Page
 * @namespace StressRootModule
 * @class PDFService
 * @constructor
 * @param $scope is angular scope
 * @param CONSTANT is project constant service which provides read/write access to browser's cookies
 * @param $http is angular service for ajax/http calls
 * @param $q is angular service which creates a promise
 */
(function () {
    'use strict';
    var StressRootModule = angular.module('StressRootModule');

    //Login Service using the loginServiceHandler
    StressRootModule.service('PDFService', PDFServiceHandler);

    //Login Service Injection
    PDFServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function PDFServiceHandler($http, CONSTANT, $q, __ENV) {

        // Get All Users
        this.downloadPDFDoc = function (objToPrint) {
            console.log(objToPrint);
            var pdfData = [];
            var tHeader = [{ text: 'First Name', style: 'tableHeader' },
            { text: 'Last Name', style: 'tableHeader' },
            { text: 'Email Id', style: 'tableHeader' },
            { text: 'Admin', style: 'tableHeader' },
            { text: 'Active', style: 'tableHeader' },
            { text: 'Is New', style: 'tableHeader' }]
            pdfData.push(tHeader);
            objToPrint.forEach(function (ele, index) {
                pdfData.push([
                    ele.first_name, ele.last_name, ele.email_id, ele.isadmin, ele.isactive, ele.isnew
                ]);
            });
            console.log(pdfData);
            var docDefinition = {
                content: [
                    { text: 'User List', margin: [0, 20, 0, 8], style: 'header' },
                    {
                        style: 'stressTable',
                        table: {
                            widths: ['auto', 'auto', '*', 'auto', 'auto', 'auto'],
                            body: pdfData
                        },
                        layout: {
                            fillColor: function (i, node) { return (i === 0) ? '#CCCCCC' : null; },
                            hLineWidth: function (i, node) {
                                return 1;
                            },
                            vLineWidth: function (i, node) {
                                return 1;
                            },
                            hLineColor: function (i, node) {
                                return 'gray';
                            },
                            vLineColor: function (i, node) {
                                return 'gray';
                            }
                        }
                    }],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10]
                    },
                    stressTable: {
                        margin: [0, 5, 0, 15]
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 12,
                    }
                }
            };
            pdfMake.createPdf(docDefinition).download();
        };


    }

})();