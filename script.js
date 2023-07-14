// let crsr=document.querySelector("#cursor")
// let crsr_b=document.querySelector("#cursor-b")

// document.addEventListener("mousemove",function(dets){
//     crsr.style.left=dets.scroll.x-10+"px"
//     crsr.style.top=dets.scroll.y-10+"px"
//     crsr_b.style.left=dets.x-100+"px"
//     crsr_b.style.top=dets.y-100+"px"
  
// })
var counter = 1;
    setInterval(function(){
      document.getElementById('radio' + counter).checked = true;
      counter++;
      if(counter > 4){
        counter = 1;
      }
    }, 5000);
    
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
    gsap.to(sec[active-1],{
        opacity:.1
    }
    )

    
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
    // .to("#circle",{
    //     rotate:0,
        
    //     ease:Expo.easeInOut,
    //     duration :1.5
    // })


}

function svgAnimation(){
    document.querySelectorAll("#Visual>g").forEach(function(e){
        let lines=e.childNodes[0].childNodes[0]
        lines.style.strokeDasharray=lines.getTotalLength()+'px'
        lines.style.strokeDashoffset=lines.getTotalLength()+'px'
        
        gsap.to("#Visual>g>g>path, #Visual>g>g>polyline",{
            strokeDashoffset:0,
            duration:4.5,
            ease:Expo.Circ,
            delay:4
        })

    })
}
// function changeWords(){
//     let word=document.getElementById("mainwords2")
    
//     for(var i=0;i<arr.length;i++){

//         word.innerHTML=""
//         word.innerHTML=arr[i]

//     }
// }

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

            if(elemName=="javascript"){
                elemdiv[i].style.width="90%"

            }
            else if(elemName=="react"){
                elemdiv[i].style.width="70%"

            }
            else if(elemName=="nodejs"){
                elemdiv[i].style.width="55%"

            }
            else if(elemName=="mongodb"){
                elemdiv[i].style.width="50%"

            }
            else if(elemName=="css/sass"){
                elemdiv[i].style.width="95%"

            }
            else if(elemName=="java"){
                elemdiv[i].style.width="80%"

            }
            else if(elemName=="3js"){
                elemdiv[i].style.width="50%"

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





revelToSpan()
loaderAnimation()
svgAnimation()
// changeWords()
textSequence(0)
locoInit()
putSkillPercent()
if(isMobile()){
    interchangeAboutMe()
}
