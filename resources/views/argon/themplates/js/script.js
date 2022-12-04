  /* Storing user's device details in a variable*/
  let details = navigator.userAgent;

  /* Creating a regular expression 
  containing some mobile devices keywords 
  to search it in details string*/
  let regexp = /android|iphone|kindle|ipad/i;

  /* Using test() method to search regexp in details
  it returns boolean value*/
  let isMobileDevice = regexp.test(details);

  if (isMobileDevice) {
      document.getElementsByTagName('body')[0].style.width = "100%";
      document.getElementById('fixed-top').style.width = "100%";
      document.getElementById('fixed-bottom').style.width = "100%";
  } else {
      document.getElementsByTagName('body')[0].style.width = "60%";
  }


  function Showproduct(){
    document.getElementById("shwoproduct").style.display = "block";
  }