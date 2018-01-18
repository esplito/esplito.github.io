var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    var test = this.responseText;
  }
};
xhttp.open("GET", "https://api.pubgtracker.com/v2/profile/pc/esplito", true);
xhttp.setRequestHeader("TRN-Api-Key:", "2c10d855-5cec-4169-8747-78a8ea6dd37a");
xhttp.send();