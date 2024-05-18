const Loginr=document.querySelector('.login-section')
const Loginlink=document.querySelector('.login-link')
const Registerlink=document.querySelector('.register-link')
Registerlink.addEventListener('click',()=>{
    Loginr.classList.add('active')
})
Loginlink.addEventListener('click',()=>{
    Loginr.classList.remove('active')
})