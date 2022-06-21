// window.addEventListener("load",(e)=>{
// e.preventDefault;
// const storelink=document.querySelectorAll("[data-tab]");
//  for(let i=0;i<=storelink.length;i++){
//      const link=storelink[i];
//      const id_page=link.dataset.link;
//      link.addEventListener("click",()=>{
//         passfunction(id_page);
//      })
     
//  }
//    function passfunction(id_page){
//        const curentpage=document.querySelector(".active");
//        curentpage.classList.remove("active");
//        const nextpage=document.querySelector(`links[data-page="${id_page}"]`);
//        nextpage.classList.add("active");
//    };

// })


let link1=document.querySelector(".link .link1");
console.log(link1);
let link2=document.querySelector(".link .link2");
let link3=document.querySelector(".link .link2");
let page1=document.querySelector(".projects #project1");
let page2=document.querySelector(".projects #project2");
let page3=document.querySelector(".projects #project3");
   
// link1.addEventListener("click",()=>{
//     page1.style.display="block";
//     page2.style.display="none";
//     page3.style.display="none";

// })
link1.addEventListener("click",()=>{
    page1.style.display="block";
    page2.style.display="none";
    page3.style.display="none";

})

link2.addEventListener("click",()=>{
    page2.style.display="block";
    page1.style.display="none";
    page3.style.display="none";

})
 
link3.addEventListener("click",()=>{
    page3.style.display="block";
    page1.style.display="none";
    page2.style.display="none";

})








