function cookies() {
    $.getJSON("https://api.ipify.org?format=json", function(data) {
         
        // Setting text of element P with id gfg
        $(cookie_value).html(data.ip);
    })
    var cookie_name= "ClientIP";
    var cookie_value= "";
    var cookie_expire= 5;

    setCookie(cookie_name, cookie_value, cookie_expire);
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
