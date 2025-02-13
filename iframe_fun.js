var referrerURL = document.referrer;
if(window.self === window.top){
  window.location.ancestorOrigins = "You will never get me lalalala"
}
if(referrerURL == ''){
  referrerURL = "nobody :("
}
document.getElementById("ref").innerHTML = referrerURL + " called me here";
