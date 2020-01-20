(function populateStarCounts() {
  const els = document.getElementsByClassName("star-count");
  Array.prototype.forEach.call(els, el => {
    const repo = el.dataset.repo;
    fetch(`https://api.github.com/repos/${repo}`)
      .then(r => r.json())
      .then(obj => {
        const stars = obj.stargazers_count;
        if (stars) el.innerHTML = stars;
      });
  });
})();

(function anchorSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      e.preventDefault();
      const elem = document.getElementById(
        this.getAttribute("href").substring(1)
      );
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
})();
