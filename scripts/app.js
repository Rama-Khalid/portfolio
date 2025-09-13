console.log("hello");

function init() {
  const Cv_btn = document.querySelector(".Cv_btn");
  // console.dir(autismLens);
  const githubs = document.querySelectorAll(".github");
  console.dir(githubs);

  function handleCVClick() {
    location.href = "/files/Rama's CV 2025.pdf";
  }

  function gitHubClicked(event) {
    console.log(event.target.id);

    location.href = `https://github.com/RamaKhalid/${event.target.id}`;
  }
  Cv_btn.addEventListener("click", handleCVClick);
 
  githubs.forEach((github) => {
    github.addEventListener("click", gitHubClicked);
  });
}
document.addEventListener("DOMContentLoaded", init);
