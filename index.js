const ipEl = document.getElementById("input");
const erEl = document.getElementById("error");
const resEl = document.getElementById("result");
let erTime;
let resTime;

function updateResults() 
{
  if (ipEl.value <= 0 || isNaN(ipEl.value))
  {
    erEl.innerText = "Please enter a valid number!";
    clearTimeout(erTime);
    erTime = setTimeout(() => {
      erEl.innerText = "";
      ipEl.value = "";
    }, 2000);
  } 
  else 
  {
    resEl.innerText = (+ipEl.value / 2.2).toFixed(2);
    clearTimeout(resTime);
    resTime = setTimeout(() => {
      resEl.innerText = "";
      ipEl.value = "";
    }, 10000);
  }
}

ipEl.addEventListener("input", updateResults);