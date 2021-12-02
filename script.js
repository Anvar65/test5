let firstProcess = document.querySelector(".first-process");
firstProcess.addEventListener("mouseover", () => {
    document.querySelector(".first-circle").style.backgroundColor = "#0055EF";
    document.querySelector(".first-circle").style.color = "white";
    document.querySelector(".first-circle").style.cursor = "pointer";
}) 

firstProcess.addEventListener("mouseout", () => {
  document.querySelector(".first-circle").style.backgroundColor = "";
  document.querySelector(".first-circle").style.color = "";
  document.querySelector(".first-circle").style.cursor = "";
}); 

let secondProcess = document.querySelector(".second-process");
secondProcess.addEventListener("mouseover", () => {
  document.querySelector(".second-circle").style.backgroundColor = "#0055EF";
  document.querySelector(".second-circle").style.color = "white";
  document.querySelector(".second-circle").style.cursor = "pointer";
});

secondProcess.addEventListener("mouseout", () => {
  document.querySelector(".second-circle").style.backgroundColor = "";
  document.querySelector(".second-circle").style.color = "";
  document.querySelector(".second-circle").style.cursor = "";
}); 

let thirdProcess = document.querySelector(".third-process");
thirdProcess.addEventListener("mouseover", () => {
  document.querySelector(".third-circle").style.backgroundColor = "#0055EF";
  document.querySelector(".third-circle").style.color = "white";
  document.querySelector(".third-circle").style.cursor = "pointer";
});

thirdProcess.addEventListener("mouseout", () => {
  document.querySelector(".third-circle").style.backgroundColor = "";
  document.querySelector(".third-circle").style.color = "";
  document.querySelector(".third-circle").style.cursor = "";
}); 

let fourthProcess = document.querySelector(".fourth-process");
fourthProcess.addEventListener("mouseover", () => {
  document.querySelector(".fourth-circle").style.backgroundColor = "#0055EF";
  document.querySelector(".fourth-circle").style.color = "white";
  document.querySelector(".fourth-circle").style.cursor = "pointer";
});

fourthProcess.addEventListener("mouseout", () => {
  document.querySelector(".fourth-circle").style.backgroundColor = "";
  document.querySelector(".fourth-circle").style.color = "";
  document.querySelector(".fourth-circle").style.cursor = "";
}); 