//----------------------------------------------------------------Molten Steel: The Rising Behemoth----------------------------------------------------------------//
//-----------------------------------------------------------------------movment_and_sooting.js---------------------------------------------------------------//

//Registering a component to update the movment of the cmaera and to enable a shooting mechanism
AFRAME.registerComponent("update-movement-and-shoot",{

    //Schema
    schema:{},

    //Calling a tick function
    tick: function(){

        //Availing the positon and rotation of the camera
        camera_position=this.el.getAttribute("position")
        camera_rotation=this.el.getAttribute("rotation")

        //Setting the cockpit's position and y rotation value to that of the camera's
        cockpit_el=document.querySelector("#cockpit_pl")
        cockpit_el.setAttribute("position",{"x":camera_position.x,"y":camera_position.y,"z":camera_position.z})
        cockpit_el.setAttribute("rotation",{y:camera_rotation.y})
   
    },

    //Calling an init function
    init:function(){

        //Creating a new variable num
        var num=0

      //Adding a new event listener that is activated by a "keydown" event  
      window.addEventListener("keydown",(e)=>{

          //Assessing the keycode or key of the event  
          ////Case-1 -The keycode of the event is 32 or spacebar  
          if(e.keyCode===32){
            
            //Incrementing num by 1
            num+=1

            //Verifying whether the value of num is lesser than 10 or 0
            ////Case-1 -The value of num is lesser than 10 or 0
            if(num>10 || num===0){
                
                //Getting the vector position, rotation and position of the camera
                camera_el=document.querySelector("#camera_pl").object3D
                camera_el_pos=document.querySelector("#camera_pl").getAttribute("position")
                camera_el_rot=document.querySelector("#camera_pl").getAttribute("rotation")

                //Sourcing the scene element
                scene_el=document.querySelector("#scene_wrld")

                //Creating two new vectors ~~(ii)
                var vectors_bullet_1= new THREE.Vector3()
                var vectors_bullet_2= new THREE.Vector3()

                //Assigining the vector values of the camera to the variables in (ii)
                camera_el.getWorldDirection(vectors_bullet_1)
                camera_el.getWorldDirection(vectors_bullet_2)

                //Creating the first bullet element
                bullet_el_1=document.createElement("a-entity")

                //Assigning it the attributes requires for bullet mechanics
                bullet_el_1.setAttribute("geometry",{primitive:"sphere",radius:0.4})
                bullet_el_1.setAttribute("material",{color:"yellow"})
                bullet_el_1.setAttribute("gltf-model","#missile_player")
                bullet_el_1.setAttribute("scale","0.0002","0.0002","0.0002")
                bullet_el_1.setAttribute("rotation",{x:camera_el_rot.x-90,y:camera_el_rot.y,z:camera_el_rot.z})
                bullet_el_1.setAttribute("velocity",vectors_bullet_1.multiplyScalar(-78))
                bullet_el_1.setAttribute("position",{x:camera_el_pos.x-2,y:camera_el_pos.y,z:camera_el_pos.z-2})
            
                //Creating the second bullet element
                bullet_el_2=document.createElement("a-entity")

                //Assigning it the attributes requires for bullet mechanics                
                bullet_el_2.setAttribute("geometry",{primitive:"sphere",radius:0.4})
                bullet_el_2.setAttribute("material",{color:"yellow"})
                bullet_el_2.setAttribute("gltf-model","#missile_player")
                bullet_el_2.setAttribute("scale","0.0002","0.0002","0.0002")
                bullet_el_2.setAttribute("rotation",{x:camera_el_rot.x-90,y:camera_el_rot.y,z:camera_el_rot.z})
                bullet_el_2.setAttribute("velocity",vectors_bullet_2.multiplyScalar(-78))
                bullet_el_2.setAttribute("position",{x:camera_el_pos.x+2,y:camera_el_pos.y,z:camera_el_pos.z+2})
                bullet_el_1.setAttribute("dynamic-body",{mass:"0.3"})
                bullet_el_2.setAttribute("dynamic-body",{mass:"0.3"})

                //Appending both the bullets to the scene element
                scene_el.appendChild(bullet_el_1)
                scene_el.appendChild(bullet_el_2)

                //Sourcing the sound element for shooting and activating its audio
                sound_el_shooting=document.querySelector("#shooting_pl")
                sound_el_shooting.components.sound.playSound()

                //Setting the num value to zero
                num=0 
            }

            ////Case-2 -The key is either one of the WASD Controls or the Arrow Keys
            if(e.key==="ArrowLeft"||e.key==="ArrowRight"||e.key==="ArrowUp"||e.key==="ArrowDown"||e.key==="w"||e.key==="a"||e.key==="s"||e.key==="d"){

                //Sourcing the sound element for walking and activating its audio
                sound_el_walking=document.querySelector("#walking_pl")
                sound_el_walking.components.sound.playSound()
            } 
          }
      })
    },
})

//-----------------------------------------------------------------------movment_and_sooting.js---------------------------------------------------------------//
//----------------------------------------------------------------Molten Steel: The Rising Behemoth----------------------------------------------------------------//
