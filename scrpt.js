let tiles = document.querySelectorAll('.project-tile');
console.log(tiles);


tiles.forEach(tile => tile.addEventListener("mouseover", function() {   
   tile.style.transform = "scale(1.1)";
   tile.style.opacity = '1';

}));

tiles.forEach(tile => tile.addEventListener("mouseout", function() {   
   tile.style.transform = "scale(1.0)";
   tile.style.opacity = '.5';
}));