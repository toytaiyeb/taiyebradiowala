
let mncircles=document.querySelectorAll(".mncircle")
let sec=document.querySelectorAll(".sec")


let active=3 

gsap.to(mncircles[active-1],{
    opacity:.9
})
gsap.to(sec[active-1],{
    opacity:.9
}
)
mncircles.forEach(function(val,index){
    val.addEventListener("click",function(){
        gsap.to("#circle",{
            rotate:(3-(index+1))*30,
        })
        circleOpacity()
        
        active=index
        gsap.to(mncircles[active],{
            opacity:.9
            
        })
        

        gsap.to(sec[active],{
            opacity:.9
        }
        )
        

     
    
       

    }) 
})

function circleOpacity(){
    gsap.to(mncircles,{
        opacity:0.1,
    })
    if(isMobile()){
    gsap.to(sec[active],{
        opacity:0
    }
    )
  }
  else{

        gsap.to(sec[active],{
            opacity:.1
        }
        )

  }

    
}

function revelToSpan(){ 
    document.querySelectorAll(".reveal")
    .forEach(function(elem){
        let spanChild=document.createElement("span")
        let spanParent=document.createElement("span")

        spanChild.classList.add("child")
        spanParent.classList.add("parent")

        spanChild.innerHTML=elem.innerHTML

        spanParent.appendChild(spanChild)
        elem.innerHTML=""
        elem.appendChild(spanParent)

    })
}


function loaderAnimation(){
    var tl=gsap.timeline();

tl
    
    .to("#loader .parent .child",{
        y:"-100%",
        duration:1.5,
        delay:.6,
        ease:Circ.easeInOut,
    })
    .from("#loader .child span",{
        y:"100%",
        duration:1,
        delay:.3,
        stagger:.2,
        ease:Power3.easeInOut,
    })
   
    .to("#green",{
        height:"100%",
        top:0,
        duration:.7,
        delay:-.2,
        ease:Circ.easeInOut
    })
    .to("#green",{
        height:"0%",
        top:0,
        duration:.5,
        delay:-.2,
        ease:Circ.easeInOut
    })

    .to("#loader",{
        height:0,
        duration:.5,
        ease:Expo.easeInOut
    })


}

function svgAnimation(){
    document.querySelectorAll("#Visual>g").forEach(function(e){
        let lines=e.childNodes[0].childNodes[0]
        lines.style.strokeDasharray=lines.getTotalLength()+'px'
        lines.style.strokeDashoffset=lines.getTotalLength()+'px'
        
        gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
            strokeDashoffset:0,
            duration:6.5,
            ease:Expo.Circ,
            delay:4
        })

    })
}

let arr=["Developer","Designer","Builder","Dreamer",]

function textSequence(i) {

    if (arr.length > i) {
        setTimeout(function() {
            document.getElementById("mainwords2").innerHTML = arr[i];
            textSequence(++i);
        }, 1000); // 1 second (in milliseconds)

    } else if (arr.length == i) { // Loop
        textSequence(0);
        
    }

}

function locoInit(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#home'),
        smooth: true
        
    });
}

function putSkillPercent(){
    let box=document.querySelector('#box')
    let elemh1=document.querySelectorAll('#box>div>h1')
    let elemdiv=document.querySelectorAll('#box>div>div>div')
    box.addEventListener("mouseover",function(){
        for(let i=0;i<elemh1.length;i++){
            let elemName=elemh1[i].innerHTML

            if(elemName=="typescript"){
                elemdiv[i].style.width="90%"

            }
            else if(elemName=="nextjs"){
                elemdiv[i].style.width="70%"

            }
            else if(elemName=="nodejs"){
                elemdiv[i].style.width="55%"

            }
            else if(elemName=="mongodb"){
                elemdiv[i].style.width="60%"

            }
            else if(elemName=="css/sass"){
                elemdiv[i].style.width="95%"

            }
            else if(elemName=="java"){
                elemdiv[i].style.width="80%"

            }
            else if(elemName=="3js/gsap"){
                elemdiv[i].style.width="60%"

            }
            else if(elemName=="python"){
                elemdiv[i].style.width="70%"

            }

        }    

    })
 


    
}
function isMobile(){
    return /Android|iPhone/i.test(navigator.userAgent)
}
function interchangeAboutMe(){
    let firstelem=document.getElementById("skillsliner")
    let secondelem=document.getElementById("aboutme")
    let temp=''
    temp=firstelem
    firstelem=secondelem
    secondelem=temp

}
function cursorMove(){
    let cursorAnimation= document.querySelector(".cursor")
    let cursors = document.querySelectorAll(".cursor")
    document.addEventListener("click", (e)=>{
    let x = e.clientX;
    let y = e.clientY;
    
    cursorAnimation.style.top = y + "px"
    cursorAnimation.style.left = x + "px"

    cursors.forEach((cursor)=>{
    cursor.classList.add("active");
    function removeCursorActive(){
    cursor.classList.remove("active");
    }
    setTmeout(removeCursorActlve, 1000);
    })
    let cursorClone = cursorAnimation.cloneNode(true)
    document.querySelector("body").appendChild(cursorClone);
    setTimeout(()=> {
    cursorClone.remove();
    },1000)
})

}
 function playMusic(){
    document.addEventListener("mousemove", event => {
        const audio = document.querySelector("audio");
        audio.volume = 0.3;
        audio.play();
      });
 }
function toggleMusic(){
    // Get a reference to the volume icon image element
const volumeIcon = document.getElementById("volume-icon");

// Set a flag to keep track of the state (muted or not)
let isMuted = true;
const audio = document.querySelector("audio");
// Function to toggle the volume icon
function toggleVolumeIcon() {
  if (isMuted) {

    audio.muted = true;
    audio.pause(); // Pause the audio
    volumeIcon.src = "./volume-mute.svg"; // Change the source to the muted icon
  } else {
    audio.muted = false;
    audio.play(); // Play the audio
    volumeIcon.src = "./volume-high.svg"; // Change the source to the unmuted icon
  }
  
  // Toggle the state
  isMuted = !isMuted;
}

// Add a click event listener to the volume button
const volumeButton = document.querySelector(".volume");
volumeButton.addEventListener("click", toggleVolumeIcon);


}


revelToSpan()
loaderAnimation()
svgAnimation()
textSequence(0)
locoInit()
putSkillPercent()
playMusic()
toggleMusic()
if(isMobile()){
    interchangeAboutMe()
    
    
}
