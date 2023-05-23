// <reference path="../libs/three.min.js" />
// <reference path="../libs/OrbitControls.js" />
// <reference path="../libs/stats.min.js" />
/// <reference path="../libs/matter.js" />
/// <reference path="../libs/p5.js" />

// Physijs.scripts.worker = '../libs/other/physijs/physijs_worker.js';
// Physijs.scripts.ammo ='./ammo.js';

//name: Ayush Patel
//date: APR 11, 2020
//file: Assingment 2

//declare recurrent global variables

//variables

var Engine = Matter.Engine,
//  Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine;
var world;
var boxA,boxB;
var boxC,boxD;





function setup(){

    createCanvas(800,800);

    engine = Engine.create();
    world = engine.world;
    
    boxA = Bodies.rectangle(200, 100, 80, 80);
    boxB = Bodies.rectangle(200,600, 400,20,{ isStatic: true });
    

    Engine.run(engine);
    World.add(world, [boxA,boxB,boxC,boxD]);

}

function draw(){

    background(51);

    rect(boxA.position.x,boxA.position.y, 80,80);
    rect(boxB.position.x,boxB.position.y, 400,20);
    rect(boxC.position.x,boxC.position.y, 80,80); //not to mention in draw
    rect(boxD.position.x,boxD.position.y, 50,50); //not to mention in draw

}

boxC = Matter.Bodies.rectangle(200,100,50,50,{
    isStatic: true,
});

boxD = Matter.Bodies.rectangle(400,400,50,50,{
    isStatic: false,
       
});







// var render = Render.create({
//                 element: document.body,
//                 engine: engine,
//                 options: {
//                     width: 800,
//                     height: 400,
//                     wireframes: false
//                 }
//              });

// var boxA = Bodies.rectangle(400, 200, 80, 80);
// var ballA = Bodies.circle(380, 100, 40, 10);
// var ballB = Bodies.circle(460, 10, 40, 10);
// var ground = Bodies.rectangle(400, 380, 810, 60, { isStatic: true });

// World.add(engine.world, [boxA, ballA, ballB, ground]);

// Engine.run(engine);
// Render.run(render);


//making own object
