console.log("js")

let submit_btn = document.getElementById("clickme")
submit_btn.addEventListener("click",()=>{
    document.querySelector(".box").innerHTML="Changed Content..."
    // alert("Content Change Successfully!")
})

// let reload = document.getElementById("reloadPage")
// reload.addEventListener("click",()=>{
//     location.reload()
// })
let reload = document.getElementById("reloadPage")
reload.addEventListener("contextmenu",()=>{
    location.reload()
    alert("Right Click")
})

document.addEventListener("keydown",(e)=>{
    console.log(e.key)
})