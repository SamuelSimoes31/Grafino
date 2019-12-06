graph = []
let raio


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

function mouseClicked(){
  let d
  for(let v of graph){
    d = dist(mouseX, mouseY,v.x, v.y);
    if(d < raio){
      v.setMode('selected')
      return
    }
  }
   
  graph.push(new Vextex(mouseX,mouseY,graph.length,raio))
}

function displayVextex(){
  for(let x of graph){
    x.show()
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  raio = windowHeight*0.025
}

function draw() {
  background(250);
  displayVextex()
}