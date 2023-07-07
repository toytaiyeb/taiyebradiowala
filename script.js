    
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
    .from(".child span",{
        y:"100%",
        duration:1,
        delay:.3,
        stagger:.2,
        ease:Power3.easeInOut,
    })
   
    .to(".parent .child",{
        y:"-100%",
        duration:1,
        delay:.6,
        ease:Circ.easeInOut,
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
    document.querySelector("#Visual>g").forEach(function(e){
        let lines=e.childNodes[1].childNodes[1]
        lines.style.strokeDasharray=lines.getTotalLenght()+'px'
        lines.style.strokeDashoffset=lines.getTotalLenght()+'px'
    })
}
revelToSpan()
loaderAnimation()
svgAnimation()