(function populateStarCounts() {
  const cache = {};
  const els = document.getElementsByClassName("star-count");
  Array.prototype.forEach.call(els, (el) => {
    const [user, name] = el.dataset.repo.split("/");
    if (!cache.hasOwnProperty(user)) {
      cache[user] = fetch(
        `https://api.github.com/users/${user}/repos?per_page=100`
      )
        .then((r) => r.json())
        .then((repoList) => {
          const stars = {};
          for (const obj of repoList) {
            stars[obj.name] = obj.stargazers_count;
          }
          return stars;
        });
    }
    cache[user].then((stars) => {
      if (stars[name]) el.innerHTML = stars[name];
    });
  });
})();

(function anchorSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
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
