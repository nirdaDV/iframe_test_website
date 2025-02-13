var referrerURL = document.referrer;
cosole.log("this is the referrerURL="+referrerURL)
if(window.self === window.top){
  console.log("im inside the if")
  window.location.ancestorOrigins = "You will never get me lalalala"
}
if(referrerURL == ''){
  referrerURL = "nobody :("
}
document.getElementById("ref").innerHTML = referrerURL + " called me here";
