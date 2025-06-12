const menutoggle = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');

menutoggle.addEventListener('click', () =>{
    sidebar.classList.toggle('active');
});

document.addEventListener('click', (e) =>{
    if(!sidebar.contains(e.target) && !
menutoggle.contains(e.target)){
    sidebar.classList.remove('active');
}
})