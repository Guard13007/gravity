// RUNNING SPEED VARIABLES
var runSpeed=10;     // how many milliseconds between each iteration
var hyperWarp=false; // simulation is run multiple times per iteration
                     // WARNING: Messing with this can freeze or crash your browser.
var hyperSpeed=20;   // how many times to run simulation per iteration
                     // WARNING: High values lead to lag, freezing, crashing.
var timeStep=0.5;    // multipled by velocity/movement to change accuracy/speed of the simulation
                     // (lower is more accurate, but slower)

// PLAYER RELATED VARIABLES
var playerId=0;      // ID of Thing that is the player

// PHYSICS RELATED VARIABLES
var colliderType="combine"; // Which collider to use, "combine" or "none" or ???
var colorMix=false;          // Experimental color mixing in the collider!
var orbitalVelocityCorrection=1.251; // the formula to calculate circular orbits seems to be off by this factor,
									// so I use this to correct for it

// RENDER RELATED VARIABLES
var hyperRender=true; //True=normal render, False=rendering ONLY WORKS with hyperWarp on, and at runSpeed
var scaleFactor=1;  // multiplied by data in rendering to adjust zoom level
var renderRadius=1; // minimum render radius for an object
var renderId=0;     // ID of Thing to put at center of frame
var parentId=0;     // ID of Thing to use as parent body (for rotating frame of reference)
var parentRotation=true; // whether to rotate based on angle between parentId and renderId (true),
                        // or using the rotation of renderId (false)
var renderType="norm"; // "norm" shows top-down, "side" shows a sideview (1D), "3D" shows fake-3D
var path=true;      // draw path? [by not clearing canvas]
var pathFade=true;  // path fades away over time?
var fadeAlpha=0.05; // how much fade per iteration
var drawNames=true; // whether or not to write the names of things next to them
var namesColor='object'; // color to write names in
var zoom=false;       // zoom in slowly? (just for the hell of it)
var zoomFactor=1;     // how much to increase scaleFactor each frame when zoom is on
var debugToggle=true; // debug info on or off

// CONSTANTS
var version="0.1.2"  //Yes, there is a version number now. Don't know why.
var G;               //Gravitational Constant
Math.Tau=2*Math.PI;  //Tau is useful. I like Tau.

var iLastVelocity=0; //used to find SoI
var jLastVelocity=0;

// RANDOMNESS PARAMETERS
var randSysMin=5;       //5 to 100 default
var randSysMax=100;
var randType='formation'; // valid random generation types 'stabley' 'chaos' 'formation'
var randNames=true;     // True generates names like Uuts, False generates a letter and number for type and ID