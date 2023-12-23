// in search
const closeBtn = document.getElementById("closeBtn");
const searchBtn = document.getElementById("searchBtn");
const search = document.getElementById("search");

closeBtn.addEventListener("click", () => {
  search.style.display = "none";
});
searchBtn.addEventListener("click", () => {
  search.style.display = "block";
});
