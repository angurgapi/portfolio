let titles = document.querySelectorAll('.project-title')
let imgs = document.querySelectorAll('.project-image')
console.log(imgs)

imgs.forEach(title => title.addEventListener("mouseover", function() {   
  // highlight the mouseover target
  title.style.transform = "scale(1.5)";
}));