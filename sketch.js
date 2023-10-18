//Initialize timer in global scope
let timer

function saveSketch() {
if (millis() - timer >= 15000) {

  timer = millis();
  noLoop()
  const today = new Date();

  //Extract the year, month, and day components
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
  const day = today.getDate().toString().padStart(2, '0');

  
  const filename = `${year}_${month}_${day}_SketchName`;

 
  saveCanvas(filename, 'jpg');
  }
}