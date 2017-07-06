angular.module('app.controllers', [])

.controller('antiScammerCtrl', ['$scope', '$stateParams', '$http', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams) {


    // Application Constructor
    $scope.initialize = function() {
      this.bindEvents();
    };
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    $scope.bindEvents = function() {

      document.addEventListener('deviceready', this.onDeviceReady, false);
    };
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    $scope.onDeviceReady = function() {
      // app.receivedEvent('deviceready');
      $http.get("https://api.myjson.com/bins/eo7pb")
        .then(function(response) {
          alert(JSON.stringify(response));
          // $scope.myWelcome = response.data;
        });
    };
    // Update DOM on a Received Event
    // $scope.receivedEvent = function(id) {
    //   var parentElement = document.getElementById(id);
    //   var listeningElement = parentElement.querySelector('.listening');
    //   var receivedElement = parentElement.querySelector('.received');
    //
    //   listeningElement.setAttribute('style', 'display:none;');
    //   receivedElement.setAttribute('style', 'display:block;');
    //
    //   function onSuccess(contact) {
    //     alert("Save Success");
    //   };
    //
    //   function onError(contactError) {
    //     alert("Error = " + contactError.code);
    //   };
    //
    //   $scope.retrievePhoneNumbersVersion().then(function(data) {
    //     if ($scope.isSameVersion(data)) {
    //       alert("You are up to date!");
    //     } else {
    //       window.localStorage.setItem('version', data.version);
    //       console.log('version stored: ' + data.version);
    //       alert('you are out of date');
    //       $scope.retrievePhoneNumbers().then(function(data) {
    //         $scope.updateContact(data);
    //       });
    //     }
    //   });
    //   console.log('Received Event: ' + id);
    // },
    //   $scope.isSameVersion = function(data) {
    //   var storage = window.localStorage;
    //   var value = storage.getItem('version');
    //   console.log('version retrieved: ' + value);
    //   return parseInt(value) === parseInt(data.version);
    //
    // }
    // $scope.httpCall = function(url) {
    //   return new Promise(function(resolve, reject) {
    //     // do a thing, possibly async, then…
    //     $.get(url, function(data) {
    //       resolve(data);
    //     }).fail(function() {
    //       reject('Unable to retrieve data for ' + url);
    //     });
    //   });
    // };
    //
    // $scope.retrievePhoneNumbersVersion = function() {
    //   return this.httpCall('https://api.myjson.com/bins/1dds9r')
    // },
    //
    // $scope.retrievePhoneNumbers = function() {
    //   return this.httpCall('https://api.myjson.com/bins/eo7pb')
    // },
    //
    // $scope.getContactTemplate = function() {
    //   var contact = navigator.contacts.create();
    //   contact.displayName = "Scammer";
    //   contact.familyName = "Scammer";
    //   contact.givenName = "Scammer";
    //   contact.nickname = "Scammer";
    //   contact.phoneNumbers = [];
    //   return contact;
    // };
    //
    // $scope.convertPhoneNumbersToContact = function(phoneNumbers) {
    //   if (!phoneNumbers || phoneNumbers.length === 0) {
    //     return [];
    //   }
    //   var result = [];
    //   for (var i = 0; i < phoneNumbers.length; i++) {
    //     result.push(new ContactField('work', phoneNumbers[i], false));
    //   }
    //
    //   return result;
    // };
    //
    // $scope.updateContact = function(data) {
    //   var scammerContact = this.getContactTemplate();
    //   var options      = new ContactFindOptions();
    //   scammerContact.phoneNumbers = this.convertPhoneNumbersToContact(data.phone_numbers);
    //   options.filter   = scammerContact.displayName;
    //   options.multiple = false;
    //   options.desiredFields = [navigator.contacts.fieldType.id, navigator.contacts.fieldType.nickname, navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.phoneNumbers, navigator.contacts.fieldType.familyName, navigator.contacts.fieldType.givenName];
    //
    //   var fields = [navigator.contacts.fieldType.displayName, navigator.contacts.fieldType.name];
    //
    //   navigator.contacts.find(fields, function(contacts) {
    //     alert('Found ' + contacts.length + ' contacts.');
    //     if (!contacts || contacts.length === 0) {
    //       scammerContact.save(function(){ alert('saved');}, function() {alert("error while saving")});
    //     } else {
    //       var existingContact = contacts[0];
    //       alert('JSON:' + JSON.stringify(existingContact));
    //       existingContact.remove(function () {
    //         alert('Contact Removed');
    //         scammerContact.save(function(c) {
    //           alert('replaced');
    //         }, function(e) {
    //           alert('ERROR, '  + e);
    //         });
    //       });
    //     }
    //   }, function onError(contactError) {
    //     alert("Error: please make sure = " + JSON.stringify(contactError));
    //   }, options);
    // }

}])

.controller('settingsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('supportCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
