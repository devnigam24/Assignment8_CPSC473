(function(window) {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;

    function RemoteDataStore(url) {
        if (!url) {
            throw new Error('No remote URL supplied');
        }
        this.serverUrl = url;
    }

    RemoteDataStore.prototype.add = function(key, val) {
        return $.post(this.serverUrl, val);
    };

    RemoteDataStore.prototype.getAll = function(cb) {
        return $.get(this.serverUrl, function(serverResponse) {
            if (cb) {
                cb(serverResponse);
            }
        });
    };

    RemoteDataStore.prototype.get = function(key, cb) {
        return $.get(this.serverUrl + '/' + key, function(serverResponse) {
            if (cb) {
                cb(serverResponse);
            }
        });
    };

    RemoteDataStore.prototype.remove = function(key) {
        return $.ajax(this.serverUrl + '/' + key, {
            type: 'DELETE'
        });
    };

    App.RemoteDataStore = RemoteDataStore;
    window.App = App;
})(window);
