function switch_mode() {
  document.body.classList.toggle('dark-main');

  var switchButton = document.getElementById("switch");

  if (document.body.classList.contains('dark-main')) {
    switchButton.textContent = "Light Mode";
    localStorage.setItem('theme', 'dark');
  } else {
    switchButton.textContent = "Dark Mode";
    localStorage.setItem('theme', 'light'); 
  }
}

window.onload = function() {
  var switchButton = document.getElementById("switch");
  
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-main');
    switchButton.textContent = "Light Mode"; 
  } else {
    switchButton.textContent = "Dark Mode"; 
  }
};
