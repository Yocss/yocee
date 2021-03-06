/**
 * yocee v0.1.0
 * (c) 2019-2020 yocss https://github.com/yocss/yocee.git
 * License: MIT
 * Released on: Aug 20, 2020
 */

'use strict';

// format date
function formatDate(sec, format) {
    if (format === void 0) { format = 'y-m-d h:i'; }
    var d = new Date(sec * 1000);
    function expando(n) { return n < 10 ? '0' + n : n.toString(); }
    return format.replace(/\w/g, function (word) {
        var w = word.toLowerCase();
        return {
            y: d.getFullYear(),
            m: expando(d.getMonth() + 1),
            d: expando(d.getDate()),
            h: expando(d.getHours()),
            i: expando(d.getMinutes()),
            s: expando(d.getSeconds()),
            w: ['天', '一', '二', '三', '四', '五', '六'][d.getDay()]
        }[w] || '';
    });
}

// import { version } from '../package.json';
function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLocaleLowerCase();
}

// time format
var index = { formatDate: formatDate, getType: getType };

module.exports = index;
