document.addEventListener('astro:page-load', () => {
function hideBlogs(evt) {
    let selectedTag = evt.currentTarget.getAttribute("data-type");
    let tagElement = document.getElementById("tags");
    let tags = tagElement.dataset.tags;
    tags = tags.split(",");
    tags.splice(tags.indexOf(selectedTag), 1);

    tags.forEach((t) => {
      const elementsToHide = document.getElementsByClassName(t);
      for (let i = 0; i < elementsToHide.length; i++) {
        elementsToHide[i].style.display = "none";
      }
    });

    let elementsToShow = document.getElementsByClassName(selectedTag);
    for (let i = 0; i < elementsToShow.length; i++) {
      elementsToShow[i].style.display = "block";
    }
  }

  // Event listener for the button click
  const input = document.querySelectorAll("#blogFilter");
  input.forEach((e) => {
    e.addEventListener("click", hideBlogs);
  })
});