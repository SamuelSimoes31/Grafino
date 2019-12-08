graph = []
let raio
let selV
let str

const CANVAS_HEIGHT = 500
const CANVAS_WIDTH = 500

class Vextex{
  constructor(x,y,l,r){
    this.x = x
    this.y = y
    this.label = l
    this.mode = 'normal'
  }
  
  setMode(m){
    this.mode = m
  }
  
  show(){
    switch(this.mode){
      case 'normal': fill(240); break;
      case 'selected': fill(200); break;
    }
    circle(this.x,this.y,raio*2)
    
    fill(0);
    textAlign(CENTER,CENTER);
    text(this.label,this.x,this.y)
  }
}

document.getElementById("add").onclick = function(){
  str = "sisi"
}

function insideCanvas(){
  if(mouseX < 0 || mouseY < 0 || mouseX > CANVAS_WIDTH || mouseY > CANVAS_HEIGHT) return false
  else return true
}

function who(){
  let d
  for(let v of graph){
    d = dist(mouseX, mouseY,v.x, v.y);
    if(d < raio) return v
  }
  return null
}

function mousePressed() {
  selV = who()
  if(selV) selV.mode = 'selected'
}

function mouseReleased(){
  //selV.mode = 'normal'
}

function mouseClicked(){
  if(selV==null && insideCanvas())
    graph.push(new Vextex(mouseX,mouseY,graph.length,raio))
}

function mouseDragged() {
  if(selV){
    selV.x = mouseX
    selV.y = mouseY
  }
}

function displayVextex(){
  for(let x of graph){
    x.show()
  }
}

function setup() {
  str = 'nono'
  createCanvas(CANVAS_WIDTH,CANVAS_HEIGHT);
  //createCanvas(500,500);
  raio = windowHeight*0.025
  selV = null
}

function draw() {
  background(200);
  displayVextex()
  text(mouseX,30,30)
  text(mouseY,30,40)
  text(str,50,50)
}