function setEnvironment(cmd,obj,g,rSpeed,hWarp,hSpeed,tStep,plId,cType,hRender,sFactor,rRadius,rId,paId,pRotation,rType,p,pFade,fAlpha,dNames,nColor,z,zFactor)
{
    // set , obj  = obj isn't used, just put whatever
    // save,"obj" = obj is string naming the object
    // load, obj  = obj is an actual object
    try {
        switch(cmd)
        {
            case "set":
            G=g;
            runSpeed=rSpeed;
            hyperWarp=hWarp;
            hyperSpeed=hSpeed;
            timeStep=tStep;
            playerId=plId;
            colliderType=cType;
            hyperRender=hRender;
            scaleFactor=sFactor;
            renderRadius=rRadius;
            renderId=rId;
            parentId=paId;
            parentRotation=pRotation;
            renderType=rType;
            path=p;
            pathFade=pFade;
            fadeAlpha=fAlpha;
            drawNames=dNames;
            namesColor=nColor;
            zoom=z;
            zoomFactor=zFactor;
            break;
            case "save":
            eval(obj+".g="+g+";");
            eval(obj+".runSpeed="+rSpeed+";");
            eval(obj+".hyperWarp="+hWarp+";");
            eval(obj+".hyperSpeed="+hSpeed+";");
            eval(obj+".timeStep="+tStep+";");
            eval(obj+".playerId="+plId+";");
            eval(obj+".colliderType="+cType+";");
            eval(obj+".hyperRender="+hRender+";");
            eval(obj+".scaleFactor="+sFactor+";");
            eval(obj+".renderRadius="+rRadius+";");
            eval(obj+".renderId="+rId+";");
            eval(obj+".parentId="+paId+";");
            eval(obj+".parentRotation="+pRotation+";");
            eval(obj+".renderType="+rType+";");
            eval(obj+".path="+p+";");
            eval(obj+".pathFade="+pFade+";");
            eval(obj+".fadeAlpha="+fAlpha+";");
            eval(obj+".drawNames="+dNames+";");
            eval(obj+".namesColor="+nColor+";");
            eval(obj+".zoom="+z+";");
            eval(obj+".zoomFactor"+zFactor+";");
            break;
            case "load":
            G=obj.g;
            runSpeed=obj.runSpeed;
            hyperWarp=obj.hyperWarp;
            hyperSpeed=obj.hyperSpeed;
            timeStep=obj.timeStep;
            playerId=obj.playerId;
            colliderType=obj.colliderType;
            hyperRender=obj.hyperRender;
            scaleFactor=obj.scaleFactor;
            renderRadius=obj.renderRadius;
            renderId=obj.renderId;
            parentId=obj.parentId;
            parentRotation=obj.parentRotation;
            renderType=obj.renderType;
            path=obj.path;
            pathFade=obj.pathFade;
            fadeAlpha=obj.fadeAlpha;
            drawNames=obj.drawNames;
            namesColor=obj.namesColor;
            zoom=obj.zoom;
            zoomFactor=obj.zoomFactor;
            canvasClear();
            break;
            default:
            throw "invalid setEnvironment() command";
        }
    }
    catch(err) {
        consoleOut("Error with setEnvironment: <span class='grey'>"+err+"</span>.","setEnvironment error: "+err);
    }
}

function Environments()
{
    vergaEnvironment = {
        g:1,
        runSpeed:33,
        hyperWarp:false,
        hyperSpeed:20,
        timeStep:0.2,
        playerId:3,
        colliderType:"combine",
        hyperRender:true,
        scaleFactor:0.08,
        renderRadius:1,
        renderId:0,
        parentId:3,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        drawNames:true,
        namesColor:'white',
        zoom:false,
        zoomFactor:0.00001
    };
    vergaScaleEnvironment = {
        g:1.2,
        runSpeed:33,
        hyperWarp:false,
        hyperSpeed:20,
        timeStep:0.2,
        playerId:3,
        colliderType:"combine",
        hyperRender:true,
        scaleFactor:0.05,
        renderRadius:0.6,
        renderId:0,
        parentId:3,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        drawNames:true,
        namesColor:'white',
        zoom:false,
        zoomFactor:0.00001
    };
    stableyEnvironment = {
        g:10,
        runSpeed:33,
        hyperWarp:false,
        hyperSpeed:20,
        timeStep:0.5,
        playerId:1,
        colliderType:"combine",
        hyperRender:true,
        scaleFactor:0.6,
        renderRadius:1,
        renderId:0,
        parentId:1,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        drawNames:false,
        namesColor:'object',
        zoom:false,
        zoomFactor:0.001
    };
    orbitalVelocityTestEnvironment = {
        g:10,
        runSpeed:1,
        hyperWarp:true,
        hyperSpeed:2,
        timeStep:0.5,
        playerId:1,
        colliderType:"combine",
        hyperRender:true,
        scaleFactor:0.4,
        renderRadius:1,
        renderId:0,
        parentId:1,
        parentRotation:false,
        renderType:"norm",
        path:true,
        pathFade:true,
        fadeAlpha:0.05,
        drawNames:false,
        namesColor:'red',
        zoom:false,
        zoomFactor:1
    };
}

function verga()
{
    // This will be the final system used in the game.
    objects.splice(0,objects.length);
    setEnvironment("load",vergaEnvironment);
    //objects
    objects[0]=new Thing(120000,0,0,0,0,"yellow",false,"Verga");
    objects[1]=new Thing(24,140,0,0,0,"red",false,"Gelshc");
    objects[1].Vy=-setOrbitalVelocity(0,140);
    objects[2]=new Thing(120,575,0,0,0,"orange",false,"Oschi");
    objects[2].Vy=-setOrbitalVelocity(0,575);
    objects[3]=new Thing(100,960,0,0,0,"green",false,"Terra");
    objects[3].Vy=-setOrbitalVelocity(0,960);
    objects[4]=new Thing(46,1400,0,0,0,"red",false,"Ast");
    objects[4].Vy=-setOrbitalVelocity(0,1380);
    objects[5]=new Thing(1200,3600,0,0,0,"yellow",false,"Asgur");
    objects[5].Vy=-setOrbitalVelocity(0,3500);
    objects[6]=new Thing(80,3700,0,0,0,"blue",false,"Uriel");
    objects[6].Vy=objects[5].Vy-setOrbitalVelocity(5,100);
}
function vergaScale()
{
    objects.splice(0,objects.length);
    setEnvironment("load",vergaScaleEnvironment);
    //tmp (high speed testing)
    runSpeed=1;
    hyperWarp=true;
    hyperSpeed=10;
    timeStep=1;
    //objects
    objects[0]=new Thing(180000,0,0,0,0,"yellow",false,"Verga",false,8.2);
    objects[1]=new Thing(36,210,0,0,0,"red",false,"Gelshc",false,0.2);
    objects[1].Vy=-setOrbitalVelocity(0,210);
    objects[2]=new Thing(180,575+287,0,0,0,"orange",false,"Oschi",false,1.2);
    objects[2].Vy=-setOrbitalVelocity(0,575+287);
    objects[3]=new Thing(150,960+480,0,0,0,"green",false,"Terra",false,1);
    objects[3].Vy=-setOrbitalVelocity(0,960+480);
    objects[4]=new Thing(69,2100,0,0,0,"red",false,"Ast",false,0.65);
    objects[4].Vy=-setOrbitalVelocity(0,1380+690);
    objects[5]=new Thing(1800,3600+1800,0,0,0,"yellow",false,"Asgur",false,5);
    objects[5].Vy=-setOrbitalVelocity(0,3500+1750);
    objects[6]=new Thing(120,3700+1850,0,0,0,"blue",false,"Uriel",false,0.84);
    objects[6].Vy=objects[5].Vy-setOrbitalVelocity(5,150);
    // range of 3000 to 3400 for asteroids
    objects[7]=new Thing(1,3200,0,0,0,'#6A6A87',false,'a');
    objects[7].Vy=-setOrbitalVelocity(0,3130);
    objects[8]=new Thing(1,3000,0,0,0,'#6A6A87',false,'b');
    objects[8].Vy=-setOrbitalVelocity(0,2950);
    objects[9]=new Thing(1,3400,0,0,0,'#6A6A87',false,'c');
    objects[9].Vy=-setOrbitalVelocity(0,3300);

    objects[10]=new Thing(1,-3200,0,0,0,'#6A6A87',false,'d');
    objects[10].Vy=setOrbitalVelocity(0,3130);
    objects[11]=new Thing(1,-3000,0,0,0,'#6A6A87',false,'e');
    objects[11].Vy=setOrbitalVelocity(0,2950);
    objects[12]=new Thing(1,-3400,0,0,0,'#6A6A87',false,'f');
    objects[12].Vy=setOrbitalVelocity(0,3300);

    objects[13]=new Thing(1,0,3200,0,0,'#6A6A87',false,'g');
    objects[13].Vx=setOrbitalVelocity(0,3130);
    objects[14]=new Thing(1,0,3000,0,0,'#6A6A87',false,'h');
    objects[14].Vx=setOrbitalVelocity(0,2950);
    objects[15]=new Thing(1,0,3400,0,0,'#6A6A87',false,'i');
    objects[15].Vx=setOrbitalVelocity(0,3300);

    objects[16]=new Thing(1,0,-3200,0,0,'#6A6A87',false,'j');
    objects[16].Vx=-setOrbitalVelocity(0,3130);
    objects[17]=new Thing(1,0,-3000,0,0,'#6A6A87',false,'k');
    objects[17].Vx=-setOrbitalVelocity(0,2950);
    objects[18]=new Thing(1,0,-3400,0,0,'#6A6A87',false,'l');
    objects[18].Vx=-setOrbitalVelocity(0,3300);
    //
    objects[19]=new Thing(1,3300,0,0,0,'#6A6A87',false,'m');
    objects[19].Vy=-setOrbitalVelocity(0,3230);
    objects[20]=new Thing(1,3100,0,0,0,'#6A6A87',false,'n');
    objects[20].Vy=-setOrbitalVelocity(0,3050);
    objects[21]=new Thing(1,-3300,0,0,0,'#6A6A87',false,'o');
    objects[21].Vy=setOrbitalVelocity(0,3230);
    objects[22]=new Thing(1,-3100,0,0,0,'#6A6A87',false,'p');
    objects[22].Vy=setOrbitalVelocity(0,3050);
    objects[23]=new Thing(1,0,3300,0,0,'#6A6A87',false,'q');
    objects[23].Vx=setOrbitalVelocity(0,3230);
    objects[24]=new Thing(1,0,3100,0,0,'#6A6A87',false,'r');
    objects[24].Vx=setOrbitalVelocity(0,3050);
    objects[25]=new Thing(1,0,-3300,0,0,'#6A6A87',false,'s');
    objects[25].Vx=-setOrbitalVelocity(0,3230);
    objects[26]=new Thing(1,0,-3100,0,0,'#6A6A87',false,'t');
    objects[26].Vx=-setOrbitalVelocity(0,3050);
}

function stableySystem()
{
    objects.splice(0,objects.length);
    setEnvironment("load",stableyEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow");
    objects[0].fixed=true;
    objects[1]=new Thing(10,50,0,0,-4,"green");
    objects[2]=new Thing(0.005,180,0,0,2.32,"#6A6A87",1);
    objects[3]=new Thing(26,400,0,0,-1.5,"red");
    objects[4]=new Thing(0.01,420,0,0,-4,"blue",1);
}

function unstableSystem()
{
    objects.splice(0,objects.length);
    setEnvironment("load",stableyEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow");
    objects[0].fixed=true;
    objects[1]=new Thing(10,50,0,0,-4,"green");
    objects[2]=new Thing(0.005,180,0,0,2.32,"#6A6A87",1);
    objects[3]=new Thing(26,400,0,0,-1.5,"red");
    objects[4]=new Thing(0.01,420,0,0,-4,"blue",1);
    objects[5]=new Thing(0.005,200,0,0,2.3,"#6A6A87",1);
    objects[6]=new Thing(0.005,160,0,0,2.51,"#6A6A87",1);
    objects[7]=new Thing(0.005,-180,0,0,-2.32,"#6A6A87",1);
    objects[8]=new Thing(0.009,-170,10,0,-2,"#6A6A87",1);
    objects[9]=new Thing(0.001,-300,40,0.4,-1.5,"#6A6A87",1);
    objects[10]=new Thing(0.08,100,0,0,-2.7,"#6A6A87",1);
    objects[11]=new Thing(0.1,-400,10,0,1,"orange",2);
    objects[12]=new Thing(0.004,170,0,0,2.7,"#6A6A87",1);
    objects[13]=new Thing(0.006,140,16,0,2.51,"#6A6A87",1);
    objects[14]=new Thing(0.0032,-185,32,0,-2.32,"#6A6A87",1);
    objects[15]=new Thing(0.01,-100,10,0.4,-2.14,"#6A6A87",1);
    objects[16]=new Thing(0.0001,-325,42,0.32,-1.55,"#6A6A87",1);
    objects[17]=new Thing(0.082,105,-50,0.1,-2.7,"#6A6A87",1);
}

function collidingSystem()
{
    objects.splice(0,objects.length);
    setEnvironment("load",stableyEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow",12);
    objects[1]=new Thing(1,10,-70,0.2,0,"red",1);
    objects[2]=new Thing(20,120,10,0.1,0.1,"blue");
    objects[3]=new Thing(0.00001,-30,-30,0,0,false,0.5);
    objects[3].fixed=true;
    objects[3].collides=false;
    objects[4]=new Thing(5,-120,-10,-0.2,0.1,"green",1.3);
    objects[5]=new Thing(1,-40,-70,-0.1,0.1,"#676789",1);
    objects[5]=new Thing(100,-200,-200,0,0,"yellow");
    objects[6]=new Thing(30,400,0,0.01,0.2,"red");
}

function orbitalVelocityTest()
{
    objects.splice(0,objects.length);
    setEnvironment("load",orbitalVelocityTestEnvironment);
    //objects
    objects[0]=new Thing(100,0,0,0,0,"yellow",12);
    objects[0].fixed=true;
    objects[1]=new Thing(0.2,0,80,0,0,"red",0.7);
    objects[1].Vx=-setOrbitalVelocity(0,80);
    objects[2]=new Thing(2.58,0,200,0,0,"orange",2);
    objects[2].Vx=-setOrbitalVelocity(0,200);
    objects[3]=new Thing(2.32,0,360,0,0,"green",1.85);
    objects[3].Vx=-setOrbitalVelocity(0,360);
    objects[4]=new Thing(0.0001,0,380,0,0,"#6A6A87");
    objects[4].Vx=objects[3].Vx;
    objects[4].Vx=-setOrbitalVelocity(3,20);
}

//objects[i]=new Thing(mass,x,y,Vx,Vy,color,radius,name,rotation,air_height,air_fill);
// rotation in degrees per 'second' = 30 intervals
//  rotation is currently set for EVERY interval