var istatus = document.querySelector("h5")
var addfriend = document.querySelector("#add")
// var removefriend = document.querySelector("#remove")
var check = 0
addfriend.addEventListener("click",function(){
    if(check == 0){
    istatus.innerHTML = "friends"
    istatus.style.color = "green"
    addfriend.innerHTML = "remove friends"
    check = 1
}
        else{
            istatus.innerHTML = "stranger"
            istatus.style.color = "red" 
            addfriend.innerHTML = "add friends"
            check = 0
        }

    
})

// removefriend.addEventListener("click",function(){
//         istatus.innerHTML = "stranger"
//         istatus.style.color = "red"
// })

