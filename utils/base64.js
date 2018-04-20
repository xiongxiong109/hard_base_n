// base64加密
function e(e) {
    e = e.replace(/\r\n/g, "\n");
    for (var t = "", i = 0; i < e.length; i++) {
        var n = e.charCodeAt(i);
        128 > n ? t += String.fromCharCode(n) : n > 127 && 2048 > n ? (t += String.fromCharCode(n >> 6 | 192),
        t += String.fromCharCode(63 & n | 128)) : (t += String.fromCharCode(n >> 12 | 224),
        t += String.fromCharCode(n >> 6 & 63 | 128),
        t += String.fromCharCode(63 & n | 128))
    }
    return t
}
function t(e) {
    for (var t = "", i = 0, n = c1 = c2 = 0; i < e.length; )
        n = e.charCodeAt(i),
        128 > n ? (t += String.fromCharCode(n),
        i++) : n > 191 && 224 > n ? (c2 = e.charCodeAt(i + 1),
        t += String.fromCharCode((31 & n) << 6 | 63 & c2),
        i += 2) : (c2 = e.charCodeAt(i + 1),
        c3 = e.charCodeAt(i + 2),
        t += String.fromCharCode((15 & n) << 12 | (63 & c2) << 6 | 63 & c3),
        i += 3);
    return t
}

class BaseCode {
    constructor() {
        this._keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    }
    encode(t) {
        var i, n, o, r, s, a, l, c = "", d = 0, h = this._keyStr;
        for (t = e(t); d < t.length; )
            i = t.charCodeAt(d++),
            n = t.charCodeAt(d++),
            o = t.charCodeAt(d++),
            r = i >> 2,
            s = (3 & i) << 4 | n >> 4,
            a = (15 & n) << 2 | o >> 6,
            l = 63 & o,
            isNaN(n) ? a = l = 64 : isNaN(o) && (l = 64),
            c = c + h.charAt(r) + h.charAt(s) + h.charAt(a) + h.charAt(l);
        return c
    }
    decode(e) {
        var i, n, o, r, s, a, l, c = "", d = 0, h = this._keyStr;
        for (e = e.replace(/[^A-Za-z0-9\+\/\=]/g, ""); d < e.length; )
            r = h.indexOf(e.charAt(d++)),
            s = h.indexOf(e.charAt(d++)),
            a = h.indexOf(e.charAt(d++)),
            l = h.indexOf(e.charAt(d++)),
            i = r << 2 | s >> 4,
            n = (15 & s) << 4 | a >> 2,
            o = (3 & a) << 6 | l,
            c += String.fromCharCode(i),
            64 != a && (c += String.fromCharCode(n)),
            64 != l && (c += String.fromCharCode(o));
        return c = t(c)
    }
}

module.exports =  new BaseCode