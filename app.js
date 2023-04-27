AFRAME.registerComponent("game",{
   init:function(){
    this.driving_car();
   },
   driving_car:function(){
    var wheel_rotation = 0
    var accelerating = 10
    window.addEventListener('keyDown',function(e){
        var wheel = document.querySelector("#model2");
        if(e.code=="ArrowRight"){
            wheel_rotation = wheel_rotation-5
            wheel.setAttribute("rotation",{x:0,y:0,z:wheel_rotation});
        }
        if(e.code=="ArrowLeft"){
            wheel_rotation = wheel_rotation+5
            wheel.setAttribute("rotation",{x:0,y:0,z:wheel_rotation});
        }
        if(e.code=="ArrowUp"){
            var acc = document.querySelector("#accelerator") 
            acc.setAttribute("material",{"color":"green"})
            accelerating = accelerating+1    
        }
        if(e.code=="Space"){
            var brake = document.querySelector("#brake") 
            brake.setAttribute("material",{"color":"green"})
            var control = document.querySelector("#control")
            control.setAttribute("movement-controls",{"speed":0})    
        }
     });
   },
});
