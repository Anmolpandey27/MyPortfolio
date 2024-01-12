function playLoader() {
    setTimeout(disableLoader, 1000);
  }
  
  function disableLoader() {
    document.querySelector(".container").style.display = "none";
    document.querySelector(".box").style.display = "block";
  }
  