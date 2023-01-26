// Initiallizing variables
let collapse = document.getElementsByClassName("collapse")[0],
    arrow = document.getElementsByClassName("arrow")[0],
    sidebar = document.getElementsByClassName("sidebar")[0],
    profile_name= document.getElementsByClassName("profile")[0].lastElementChild,
    search_input= document.querySelector("#search-input"),
    button_title = document.querySelectorAll('.button > div:nth-child(2)');
    container_2 = document.getElementsByClassName('container-2')[0],
    Switch = document.getElementsByClassName('switch')[0],
    toggle = document.querySelector('#toggle'),
    circle = document.querySelector('#circle'),
    mode_icon = document.querySelector('#mode-icon');



// Event Listener
collapse.addEventListener("click",()=>{
    if(sidebar.style.width === "60px"){
        sidebar.style.width = "300px";
        setTimeout(() => {
            profile_name.style.display = "unset";
            search_input.style.display = "unset";
            button_title.forEach(element => {
                element.style.display = "flex";
                mode_icon.style.display = "flex";
            });
        }, 250);
        collapse.style.left = "325px";
        container_2.style.width = "75%";
        Switch.style.margin = "0 8px 0 100px";
    }
    else{
        sidebar.style.width = "60px";
        profile_name.style.display = "none";
        search_input.style.display = "none";
        button_title.forEach(element => {
            element.style.display = "none";
            mode_icon.style.display = "none";
        });
        collapse.style.left = "85px";
        container_2.style.width = "91.6%";
        Switch.style.margin = "0 5px";
    }
})

// Modes Switch Button
toggle.addEventListener("click",()=>{
    if (circle.style.marginLeft == "50%"){
        circle.style.marginLeft = "0";
        sidebar.style.backgroundColor = "#fff";
    }
    else{
        circle.style.marginLeft = "50%";
        sidebar.style.backgroundColor = "#000";
    }
})
