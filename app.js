let buttons = document.querySelectorAll(".btn");
let mode = document.querySelector(".mode");
let str = "";
Array.from(buttons).forEach((buttons)=>{
   buttons.addEventListener("click",(event)=>{
    console.dir(event);
       if (event.target.innerHTML == "="){
           let input = document.querySelector("input");
           try{
               str = eval(str);
               input.value = str;
           }catch(err){
               input.value = "Syntex Error"; 
               str = "";
           }  
       }
       else if (event.target.innerHTML == "C") {
           let input = document.querySelector("input");
           input.value = "";
           str = "";
       }
       else if (event.target.innerHTML == "DEL") {
           str = str.slice(0, -1);
           let input = document.querySelector("input");
           input.value = str;
       }
       else{
           str = str + event.target.innerHTML;
           let input = document.querySelector("input");
           input.value = str; 
       }  
   })
})
let dark = false;
// for change theme
mode.addEventListener("click",()=>{
     if (dark == false ){
        document.body.classList.add("dark");
         document.body.classList.remove("light");
         mode.innerHTML = "☀"
         document.querySelector("h5").innerText = "Light";
        dark = true;
     }else {
         document.body.classList.remove("dark");
         document.body.classList.add("light");
         mode.innerHTML = "🌙";
         document.querySelector("h5").innerText = "Dark";
         dark = false;
     }
})