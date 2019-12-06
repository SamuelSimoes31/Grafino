graph = []
let raio
let selV

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
  selV.mode = 'normal'
}

function mouseClicked(){
  if(selV==null)
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
  createCanvas(windowWidth,windowHeight);
  raio = windowHeight*0.025
  selV = null
}

function draw() {
  background(250);
  displayVextex()
}