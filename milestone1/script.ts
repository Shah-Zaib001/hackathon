const toggleButton = document.getElementById('switch-skills') as HTMLButtonElement
const skills = document.getElementById('skills') as HTMLElement


toggleButton.addEventListener('click' , ()=> {
    if(skills.style.display === 'none'){
        skills.style.display = 'block'
    } else{
        skills.style.display = 'none'
    }
}
);