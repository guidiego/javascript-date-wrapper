Date = (function() {
  'use strict';
    Date.diference = {};
    var _self = Date.diference,
        _diference (d1, d2, div) => parseInt((d1 - d2) / div);

    Date.diference.inSeconds = (d1,d2) => d1 > d2 ? _diference(d1,d2,1000) : _diference(d2,d1,1000);

    Date.diference.inMinutes = (d1,d2) => d1 > d2 ? _diference(d1,d2,60000) : _diference(d2,d1,60000);

    Date.diference.inHours = (d1 , d2) => d1 > d2 ? _diference(d1,d2,3600000) : _diference(d2,d1,3600000);

    Date.diference.inDays = (d1,d2) => d1 > d2 ? _diference(d1,d2,86400000) : _diference(d2,d1,86400000);

    Date.diference.inMonth = (d1,d2) => d1 > d2 ? _diference(d1,d2,1036800000) : _diference(d2,d1,1036800000);

    Date.diference.inYears = (d1,d2) => d1 > d2 ? _diference(d1,d2,31536000000) : _diference(d2,d1,31536000000);

    return Date;
}());
