(function(window) {
    'use strict';
    var App = window.App || {};

    var Validation = {
        isCompanyEmail: function(email) {
            return /.+@bignerdranch\.com$/.test(email);
        },
        isEmailBeenUsed: function(email) {
            $.ajax({
                url: myTruck.db.serverUrl + '/' + email,
                type: 'get',
                async: true,
                error: function(XMLHttpRequest, textStatus, errorThrown) {
                    alert('status:' + XMLHttpRequest.status + ', status text: ' + XMLHttpRequest.statusText);
                    return true;
                },
                success: function(data) {
                  return !data;
                }
            });
        }
    };

    App.Validation = Validation;
    window.App = App;
})(window);
