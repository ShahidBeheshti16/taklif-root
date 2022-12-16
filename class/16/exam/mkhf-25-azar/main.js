import Cookies from 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.mjs'
let cresponse = false;
var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}
const cget = Cookies.get(nomres);
if (cget == undefined) {
    cresponse = false;
} else if (cget != undefined) {
    cresponse = true;
    close();
}
var ftext_f;
var d = new Date();
console.log(d);
let nomre = 0;
function submit() {
    let a1 = document.getElementById('q1').value;
    let a2 = document.getElementById('q2').value;
    let a3 = document.getElementById('q3').value;
    let a4 = document.getElementById('q4').value;
    let a5 = document.getElementById('q5').value;
    let a6 = document.getElementById('q6').value;
    let a7 = document.getElementById('q7').value;
    let a8 = document.getElementById('q8').value;
    let a9 = document.getElementById('q9').value;
    let a10 = document.getElementById('q10').value;
    
    if (a1 == 'computer-base training' || a1 == 'computer base training') {
        nomre += 2;
    }
    if (a2 == 'computing technology industry association') {
        nomre += 2;
    }
    if (a3 == 'direct memory access') {
        nomre += 2;
    }
    if (a4 == 'media access control') {
        nomre += 2;
    }
    if (a5 == 'domain name service') {
        nomre += 2;
    }
    if (a6 == 'open systems interconnection') {
        nomre += 2;
    }
    if (a7 == 'netware core protocol') {
        nomre += 2;
    }
    if (a8 == 'novell directory services') {
        nomre += 2;
    }
    if (a9 == 'carrier sense multiple access/collision detection' || a9 == 'carrier sense multiple access collision detection') {
        nomre += 2;
    }
    if (a10 == 'fiber distributed data interface') {
        nomre += 2;
    }
    console.log('Nomre = ' + nomre);
    let ftext = `{usernomre:${nomre},a1=${a1},a2=${a2},a3=${a3},a4=${a4},a5=${a5},a6=${a6},a7=${a7},a8=${a8},a9=${a9},a10=${a10},cookie-response=${cresponse}}`
    console.log(ftext);
    ftext_f = Base64.encode(ftext);
    console.log('\n');
    console.log(ftext_f);
    resualts();
}
function resualts() {
    document.getElementById('mainb').style.display= 'none';
    document.getElementById('mainc').style.display= 'block';
    document.getElementById('fnomre').innerHTML = 'نمره:' + ' ' + nomre;
    document.getElementById('fbase').innerHTML = ftext_f;
}