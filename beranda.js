const userData = JSON.parse(localStorage.getItem('user'));
document.getElementById("email").textContent = userData.email;