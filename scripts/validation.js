(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isEmailBeenUsed: function(email) {
            $.get(myTruck.db.serverUrl + '/' + email, function(serverResponse) {
                return serverResponse.emailAddress === email;
            });
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
