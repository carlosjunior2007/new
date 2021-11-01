var rayita1,rayita2,rayita3,rayita4,rayita5,rayita6,rayita7,rayita8;
var personaje,personaje1;
var pered_derecha,pared_izquierda;
var edges;
var sonido_del_juego;
var moneda,moneda_animacion;
var contador=0;
var bomba,bomba_animation;
var poder,poder_animation;

function preload(){
    //cargamos las animaciones 
      personaje1 =loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG","jake5.png");
      sonido_del_juego=loadSound("_Soundtrack_50k.mp3");
      moneda_animacion=loadAnimation("coin.png");
      bomba_animation=loadAnimation("bomb.png");
      poder_animation=loadAnimation("power.png");
}

function setup(){
    createCanvas(400,400);
    //sonido
      sonido_del_juego.play();
    //crea aquí los sprites
  rayita1 = createSprite(130,350,10,80);
      rayita2 = createSprite(260,350,10,80);
      rayita3 = createSprite(130,250,10,80);
      rayita4 = createSprite(260,250,10,80);
      rayita5 = createSprite(130,150,10,80);
      rayita6 = createSprite(260,150,10,80);
      rayita7 = createSprite(130,50,10,80);
      rayita8 = createSprite(260,50,10,80);
      rayita1.shapeColor="white";
      rayita2.shapeColor="white";
      rayita3.shapeColor="white";
      rayita4.shapeColor="white";
      rayita5.shapeColor="white";
      rayita6.shapeColor="white";
      rayita7.shapeColor="white";
      rayita8.shapeColor="white";
      rayita1.velocityY=2;
      rayita2.velocityY=2;
      rayita3.velocityY=2;
      rayita4.velocityY=2;
      rayita5.velocityY=2;
      rayita6.velocityY=2;
      rayita7.velocityY=2;
      rayita8.velocityY=2;
      personaje = createSprite(200,300,100,100);
      personaje.addAnimation("corre",personaje1);
      pared_derecha=createSprite(380,200,10,400);
      pared_izquierda=createSprite(20,200,10,400);
      pared_derecha.shapeColor="white";
      pared_izquierda.shapeColor="white";
      moneda=createSprite(200,-100,50,50);
      moneda.velocityY=2;
      moneda.addAnimation("moneda",moneda_animacion);
      moneda.scale=0.3;
      bomba=createSprite(200,-200,200,200);
      bomba.addAnimation("bomba",bomba_animation);
      bomba.scale=0.1;
      bomba.velocityY=2;
      poder=createSprite(200,-300,200,200);
      poder.addAnimation("poder",poder_animation);
      poder.scale=0.1;
      poder.velocityY=5;
}

function draw() {
  //creamos los bordes
    edges=createEdgeSprites();
  //color de fondo
    background("black");
  //pones el movimiento del monito
    personaje.x=mouseX;
    //chocan las cosas
    personaje.collide(pared_derecha);
    personaje.collide(edges);
    personaje.collide(pared_izquierda);
  //moneda
    text(contador,340,30);
    if(personaje.isTouching(moneda)){
      moneda.y=-200;
      moneda.x=random(20,380);
      contador=contador+1;
    }
    if(personaje.isTouching(bomba)){
      bomba.y=-200;
      bomba.x=random(20,380);
      contador=contador-4;
    }
    if(personaje.isTouching(poder)){
      poder.y=-200;
      poder.x=random(20,380);
      contador=contador+5;
    }
    if(bomba.y >= 400) {
      bomba.x=random(20,380);
      bomba.y=-200;
    }
    if(moneda.y >= 400) {
      moneda.x=random(20,380);
      moneda.y=-200;
    }
    if(poder.y >= 600) {
      poder.x=random(20,380);
      poder.y=-200;
    }
  //reinicio de barritas
    if(rayita1.y >= 400){
      rayita1.y=0;
      rayita2.y=0;
    }
    if(rayita3.y >= 400){
      rayita3.y=0;
      rayita4.y=0;
    }
    if(rayita5.y >= 400){
      rayita5.y=0;
      rayita6.y=0;
    }
    if(rayita7.y >= 400){
      rayita7.y=0;
      rayita8.y=0;
  }
  //dibijamos todo
   drawSprites();
}