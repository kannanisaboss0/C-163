//----------------------------------------------------------------Molten Steel: The Rising Behemoth----------------------------------------------------------------//
//-----------------------------------------------------------------------landing.js---------------------------------------------------------------//

//Registering a component to handle all lanidng related activities
AFRAME.registerComponent("landing-handler",{

    //Schema
    schema:{},

    //Calling a tick function
    tick: function(){
        
        //Availing the frame-by-frame positions of the camera and city
        camera_el_pos=document.querySelector("#camera_pl").getAttribute("position")
        city_el_pos=document.querySelector("#map_env").getAttribute("position")

        //Finding the difference between their positions ~~(i)
        difference_alt=((parseInt(camera_el_pos.y)-parseInt(city_el_pos.y))-3)

        //Sourcing the text element for altitude and updating it accordingly
        text_el=document.querySelector("#altitude_tx")
        text_el.setAttribute("text",{value:`${difference_alt} m`})

        //Assessing the value of the altitude gained in (i)
        ////Case-1 -The difference is lesser than 100
        if(difference_alt<100){
            text_el.setAttribute("text",{value:`${difference_alt} m`,color:'red'})
        }

        ////Case-2 -The difference is lesser than 500 and greater than 100
        if(difference_alt<500 && difference_alt>100 ){
            text_el.setAttribute("text",{value:`${difference_alt} m`,color:'orange'})
        }

        ////Case-3 -The difference is lesser than 4
        if(difference_alt<4){
            text_el.setAttribute("text",{value:""})
        }
    }
})

//----------------------------------------------------------------Molten Steel: The Rising Behemoth----------------------------------------------------------------//
//-----------------------------------------------------------------------landing.js---------------------------------------------------------------//