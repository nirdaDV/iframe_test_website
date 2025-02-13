var referrerURL = document.referrer;
if(referrerURL == ''){
  referrerURL = "nobody :("
}
document.getElementById("ref").innerHTML = referrerURL + " called me here";
