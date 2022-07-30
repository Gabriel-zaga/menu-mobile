const btn = document.getElementById('btn-menu');
const close = document.getElementById('btn-close');
btn.addEventListener('click', ()=>{

    document.querySelector('section').style.display = "block";
})

close.addEventListener('click', ()=> {

    document.querySelector('section').style.display = "none";
})
