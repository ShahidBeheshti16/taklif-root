
// Code written and maintained by MohsenEMX

var xr = document.cookie;
let cresponse = false;
var ftext_f = false;
let nomre = 0;
var lma = xr.indexOf('nomre');

var y = setInterval(function() {
if (lma != -1) {
    console.log('Cookies are present.');
    cresponse = true;
    clearInterval(y);
    already();
} else if (lma == -1) {
    console.log('Cookies are not present.')
    document.getElementById('mainb').style.display = 'block';
    clearInterval(y);
}
}, 5)

var Base64={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(e){var t="";var n,r,i,s,o,u,a;var f=0;e=Base64._utf8_encode(e);while(f<e.length){n=e.charCodeAt(f++);r=e.charCodeAt(f++);i=e.charCodeAt(f++);s=n>>2;o=(n&3)<<4|r>>4;u=(r&15)<<2|i>>6;a=i&63;if(isNaN(r)){u=a=64}else if(isNaN(i)){a=64}t=t+this._keyStr.charAt(s)+this._keyStr.charAt(o)+this._keyStr.charAt(u)+this._keyStr.charAt(a)}return t},decode:function(e){var t="";var n,r,i;var s,o,u,a;var f=0;e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");while(f<e.length){s=this._keyStr.indexOf(e.charAt(f++));o=this._keyStr.indexOf(e.charAt(f++));u=this._keyStr.indexOf(e.charAt(f++));a=this._keyStr.indexOf(e.charAt(f++));n=s<<2|o>>4;r=(o&15)<<4|u>>2;i=(u&3)<<6|a;t=t+String.fromCharCode(n);if(u!=64){t=t+String.fromCharCode(r)}if(a!=64){t=t+String.fromCharCode(i)}}t=Base64._utf8_decode(t);return t},_utf8_encode:function(e){e=e.replace(/\r\n/g,"\n");var t="";for(var n=0;n<e.length;n++){var r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r)}else if(r>127&&r<2048){t+=String.fromCharCode(r>>6|192);t+=String.fromCharCode(r&63|128)}else{t+=String.fromCharCode(r>>12|224);t+=String.fromCharCode(r>>6&63|128);t+=String.fromCharCode(r&63|128)}}return t},_utf8_decode:function(e){var t="";var n=0;var r=c1=c2=0;while(n<e.length){r=e.charCodeAt(n);if(r<128){t+=String.fromCharCode(r);n++}else if(r>191&&r<224){c2=e.charCodeAt(n+1);t+=String.fromCharCode((r&31)<<6|c2&63);n+=2}else{c2=e.charCodeAt(n+1);c3=e.charCodeAt(n+2);t+=String.fromCharCode((r&15)<<12|(c2&63)<<6|c3&63);n+=3}}return t}}


function submit() {
    let drf = new Date();
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
    let name = document.getElementById('sname').value;
    if (name == "" || name == undefined || name == " " || name == "  ") {
        window.location.reload();
    }
    
    if (a1 == 'Unshield Twisted Pair' || a1 == 'unshield twisted pair') {
        nomre += 2;
    }
    if (a2 == 'Shield Twisted Pair' || a2 == 'shield twisted pair') {
        nomre += 2;
    }
    if (a3 == 'Address Resolution Protocol' || a3 == 'address resolution protocol') {
        nomre += 2;
    }
    if (a4 == 'Reserve Address Resolution Protocol' || a4 == 'reserve address resolution protocol') {
        nomre += 2;
    }
    if (a5 == 'Voice over Internet Protocol' || a5 == 'voice over internet protocol') {
        nomre += 2;
    }
    if (a6 == 'user data protocol' || a6 == 'User Data Protocol') {
        nomre += 2;
    }
    if (a7 == 'Internet Protocol' || a8 == 'internet protocol') {
        nomre += 2;
    }
    if (a8 == 'Internetwork Pocket Exchange' || a8 == 'internetwork pocket exchange') {
        nomre += 2;
    }
    if (a9 == 'Network Basic Input/Output System' || a9 == 'network basic input/output system') {
        nomre += 2;
    }
    if (a10 == 'NetBios Enhance User Interface' || a10 == 'netbiosenhance user interface') {
        nomre += 2;
    }
    console.log('Nomre = ' + nomre);
    let ftext = `{usernomre:${nomre},a1=${a1},a2=${a2},a3=${a3},a4=${a4},a5=${a5},a6=${a6},a7=${a7},a8=${a8},a9=${a9},a10=${a10},cookie-response=${cresponse},name=${name},finished=${drf}}`
    ftext_f = Base64.encode(ftext);
    document.cookie = `nomre=${nomre}`;
    resualts();
}
function resualts() {
    document.getElementById('mainb').style.display= 'none';
    document.getElementById('mainc').style.display= 'block';
    document.getElementById('fbase').innerHTML = ftext_f;
    document.cookie = `lastusedcode=${ftext_f}`;
}

var countDownDate = new Date("Dec 18, 2022 16:15:10").getTime();
var countStart = new Date("Dec 18, 2022 16:00:10").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var distances = countStart - now;
    console.log(distances);
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var dayss = Math.floor(distances / (1000 * 60 * 60 * 24));
    var hourss = Math.floor((distances % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutess = Math.floor((distances % (1000 * 60 * 60)) / (1000 * 60));
    var secondss = Math.floor((distances % (1000 * 60)) / 1000);
    document.getElementById('timert').innerHTML = hours + "h" + ' ' + minutes + 'm' + ' ' + seconds + 's';
    document.getElementById('yess').innerHTML = hourss + "h" + ' ' + minutess + 'm' + ' ' + secondss + 's';
    if (distance < 0) {
        clearInterval(x);
        expired();
      }
      if (distances > 0) {
        
        notyet();
      }
    },1000);

function expired() {
    document.getElementById('mainb').style.display = 'none';
    document.getElementById('expired').style.display = 'block';
}
function notyet() {
    document.getElementById('mainb').style.display = 'none';
    document.getElementById('notyet').style.display = 'block';
}
function already() {
    document.getElementById('mainb').style.display = 'none';
    document.getElementById('already').style.display = 'block';
}
function copyftext() {
    navigator.clipboard.writeText(ftext_f);
    alert('کد شما کپی شد');
}
