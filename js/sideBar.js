window.onload = function () {
  var body = document.getElementsByTagName('body')[0];
  var showChanges = document.getElementById('showChanges');
  var codeChange = document.getElementById('codeChange');

  showChanges.onclick = function() {
      codeChange.innerHTML = codeChange.innerHTML + 'Hello World!';
  }
}
