/**
 * PrintService is a service that is used by Forgot Password Page
 * @namespace StressRootModule
 * @class PrintService
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
    StressRootModule.service('PrintService', PrintServiceHandler);

    //Login Service Injection
    PrintServiceHandler.$inject = ['$http', 'CONSTANT', '$q', '__ENV'];

    //Login Service Handler using the loginServiceHandler    
    function PrintServiceHandler($http, CONSTANT, $q, __ENV) {

        // Get All Users
        this.printDoc = function (objToPrint) {
            // var canvas = document.getElementsByTagName('canvas')[0];
            // var img    = canvas.toDataURL("image/png");           
            var div = document.createElement("div");
            var tempTable = GenerateTable(objToPrint);
            div.appendChild(tempTable);
            var temp = div.innerHTML;
            var frame1 = document.createElement('iframe');
            frame1.name = "frame1";
            frame1.style.position = "absolute";
            frame1.style.top = "-1000000px";
            document.body.appendChild(frame1);
            var winprint = frame1.contentWindow ? frame1.contentWindow : frame1.contentDocument.document ? frame1.contentDocument.document : frame1.contentDocument;
            winprint.document.open();
            winprint.document.write('<html><head><style type="text/css">');
            winprint.document.write('.table td { font-weight:normal!important; border-right: 1px solid #000!important; border-bottom: 1px solid #000!important; vertical-align: top!important;}');
            winprint.document.write('.table th {background: #3e4147!important; color: #ffffff!important; vertical-align:middle!important;}');
            winprint.document.write('.table td:first-child {border-left: 1px solid #000!important; }');
            winprint.document.write('span {font-size:20px; text-align:center;  }');
            winprint.document.write('.infoleft-section h4.alltemp text-align:center; }');
            winprint.document.write('.table th { font-weight:normal!important; padding-top:80px;   background: #f2f1f1; text-align:center;}');
            winprint.document.write('.left-section { background: #2f2f30!important; min-height: 229px!important;font-size:30px; text-align:center; }');
            winprint.document.write('.full-switch .switch-field label:first-of-type {  color: #fff!important; }');
            winprint.document.write('.table { display: block; page-break-before: always; }');
            winprint.document.write('.table div { padding-bottom: 10px; }');
            winprint.document.write('body {-webkit-print-color-adjust: exact!important; -moz-print-color-adjust: exact!important; font-family:arial;}');
            winprint.document.write('</style></head><body onload="window.print();">');
            winprint.document.write(temp);
            winprint.document.write('</body></html>');
            winprint.document.close();
            winprint.focus();
            return false;
        };

        function GenerateTable(data) {
            var ptable = document.createElement('table');
            var tborder = document.createAttribute('border');
            var twidth = document.createAttribute('width');
            twidth.value = "100%";
            ptable.setAttributeNode(tborder);
            ptable.setAttributeNode(twidth);

            var phead = document.createElement('thead');
            var ptr = document.createElement('tr');
            var pth = document.createElement('th');
            pth.innerHTML = 'First Name';
            ptr.appendChild(pth);
            pth = document.createElement('th');
            pth.innerHTML = 'Last Name';
            ptr.appendChild(pth);
            pth = document.createElement('th');
            pth.innerHTML = 'Email Id';
            ptr.appendChild(pth);
            pth = document.createElement('th');
            pth.innerHTML = 'Is Admin';
            ptr.appendChild(pth);
            pth = document.createElement('th');
            pth.innerHTML = 'Is Active';
            ptr.appendChild(pth);
            pth = document.createElement('th');
            pth.innerHTML = 'Is New';
            ptr.appendChild(pth);

            phead.appendChild(ptr);
            ptable.appendChild(phead);


            var pbody = document.createElement('tbody');
            for (var i = 0; i < data.length; i++) {
                var pbtr = document.createElement('tr');
                var pbtd = document.createElement('td');
                pbtd.innerHTML = data[i].first_name;
                pbtr.appendChild(pbtd);
                pbtd = document.createElement('td');
                pbtd.innerHTML = data[i].last_name;
                pbtr.appendChild(pbtd);
                pbtd = document.createElement('td');
                pbtd.innerHTML = data[i].email_id;
                pbtr.appendChild(pbtd);
                pbtd = document.createElement('td');
                pbtd.innerHTML = data[i].isadmin;
                pbtr.appendChild(pbtd);
                pbtd = document.createElement('td');
                pbtd.innerHTML = data[i].isactive;
                pbtr.appendChild(pbtd);
                pbtd = document.createElement('td');
                pbtd.innerHTML = data[i].isnew;
                pbtr.appendChild(pbtd);
                pbody.appendChild(pbtr);
            }
            ptable.appendChild(pbody);

            return ptable;
        }

    }

})();