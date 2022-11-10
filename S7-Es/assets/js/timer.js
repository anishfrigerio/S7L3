var timer = document.getElementById("timer");

function time() {
  let s;

  if (sessionStorage.getItem("secondi") == null) {
    s = 0;
  } else {
    s = sessionStorage.getItem("secondi");
    s = parseInt(s);
  }
  setInterval(function () {

    s++;
    sessionStorage.setItem("secondi", s);
    timer.innerHTML =`Secondi di sessione aperta: ${s}`;
  }, 1000)
}

time();