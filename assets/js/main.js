(function populateStarCounts() {
  const els = document.getElementsByClassName("star-count");
  Array.prototype.forEach.call(els, el => {
    const repo = el.dataset.repo;
    fetch(`https://api.github.com/repos/${repo}`)
      .then(r => r.json())
      .then(obj => {
        el.innerHTML = obj.stargazers_count;
      });
  });
})();
