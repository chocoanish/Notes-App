// Initiallizing variables
let collapse = document.getElementsByClassName("collapse")[0],
    arrow = document.getElementsByClassName("arrow")[0],
    sidebar = document.getElementsByClassName("sidebar")[0],
    profile_photo = document.getElementsByClassName("profile")[0].firstElementChild,
    profile_name= document.getElementsByClassName("profile")[0].lastElementChild,
    search_input= document.querySelector("#search-input"),
    button_title = document.querySelectorAll('.button > div:nth-child(2)');
    container_2 = document.getElementsByClassName('container-2')[0],
    Switch = document.getElementsByClassName('switch')[0],
    toggle = document.querySelector('#toggle'),
    circle = document.querySelector('#circle'),
    mode_icon = document.querySelector('#mode-icon'),
    root_elements = document.querySelector(':root'),
    header = document.getElementsByClassName('header')[0],
    placeholder = header.getAttribute('data-placeholder'),
    Download = document.getElementsByClassName("link-3")[0],
    lock = document.getElementsByClassName("link-1")[0],
    lock_img = document.querySelector('.fa-unlock'),
    text_link = document.getElementsByClassName("link-2")[0],
    text = document.getElementsByClassName('fa-t')[0],
    discription = document.querySelector('#discription');

// Download File Content
Download.addEventListener("click",()=>{
    let content = "" + header.innerHTML + "\n\n" + discription.value; 
    console.log(content);
    const link = document.createElement("a");
    // Create a blog object with the file content which you want to add to the file
    const file = new Blob([content], { type: 'text/plain' });
    // Add file content in the object URL
    link.href = URL.createObjectURL(file);
    // Add file name
    link.download = "Note.txt";
    // Add click event to <a> tag to save file.
    link.click();
})

// Textarea Locker
lock.addEventListener("click",()=>{
    if(discription.disabled == true){
        lock_img.classList.add("fa-unlock");
        lock_img.classList.remove("fa-lock")
        discription.disabled = false;
    }
    else{
        lock_img.classList.remove("fa-unlock");
        lock_img.classList.add("fa-lock")
        discription.disabled = true;
    }
})


// Text Function
text_link.addEventListener("click",()=>{
    if(discription.style.fontWeight == "900"){
        discription.style.fontWeight = "400";
        text.classList.remove("fa-solid");
        text.classList.add("fa-regular");
    }
    else{
        text.classList.add("fa-solid");
        text.classList.remove("fa-regular");
        discription.style.fontWeight = "900";
    }
})


//Header-Text
if (header.innerHTML === '') {
    header.innerHTML = placeholder;
}
header.addEventListener("click",()=>{
    if(header.innerHTML === placeholder){
        header.innerHTML = '';
    }
})



// Event Listener
collapse.addEventListener("click",()=>{
    if(sidebar.style.width === "60px"){
        sidebar.style.width = "300px";
        profile_photo.innerHTML = "";
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
        profile_photo.innerHTML = "J";
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
        root_elements.style.setProperty('--text-color','#000');
        root_elements.style.setProperty('--dark-mode-color','#000');
        root_elements.style.setProperty('--toggle-mode-color', '#fff')
    }
    else{
        root_elements.style.setProperty('--text-color','#fff');
        root_elements.style.setProperty('--dark-mode-color','#fff');
        root_elements.style.setProperty('--toggle-mode-color', "#000");
        circle.style.marginLeft = "50%";
        sidebar.style.backgroundColor = "#000";
    }
})


