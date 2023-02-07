let username=document.querySelector('#username')
let emailaddress=document.querySelector('#emailaddress')
let creatpassword=document.querySelector('#creatpassword')
let confirmpassword=document.querySelector('#confirmpassword')
let creataccount=document.querySelector('#creataccount')
let login=document.querySelector('#login')
let divspan=document.querySelector('#divspan')
let container =document.querySelector('#container')
let loginn=document.querySelector('#loginn')
let passwordd=document.querySelector('#passwordd')
let usernameoremial=document.querySelector('#usernameoremial')
let divsginin=document.querySelector('#divsginin')
let toggle=document.querySelector('#toggle')
let userdata;
let ssx = document.querySelector('#ssx')
let eyelink=document.querySelector('.fa-sharp')
let eyeshow=document.querySelector('.eyeshow')
let divforget=document.querySelector('#divforget')

let togglee=document.querySelector('#togglee')
let eyelinkcon=document.querySelector('.eyelinkcon')
let eyeshowcon=document.querySelector('.eyeshowcon')

let togglex=document.querySelector('#togglex')
let eyelinkx=document.querySelector('.eyelinkx')
let eyeshowx=document.querySelector('.eyeshowx')
let ssp=document.querySelector('#ssp')

let togglexxx=document.querySelector('#togglexxx')
let eyelinkxxx=document.querySelector('.eyelinkxxx')
let eyeshowxxx=document.querySelector('.eyeshowxxx')

function showhidexxx(){
    if(oldpassword.type === 'password'){
        oldpassword.setAttribute('type','text')
        togglexxx.classList.add('hide')
        eyelinkxxx.style.display= 'none';
        eyeshowxxx.style.display= 'flex';

    }else{
        oldpassword.setAttribute('type','password')
        togglexxx.classList.remove('hide')
         eyeshowxxx.style.display= 'none';
        eyelinkxxx.style.display= 'flex';
    }
}

function showhide(){
    if(creatpassword.type === 'password'){
        creatpassword.setAttribute('type','text')
        toggle.classList.add('hide')
        eyelink.style.display= 'none';
        eyeshow.style.display= 'flex';

    }else{
        creatpassword.setAttribute('type','password')
        toggle.classList.remove('hide')
         eyeshow.style.display= 'none';
        eyelink.style.display= 'flex';
    }
}
function showhidee(){
    if(confirmpassword.type === 'password'){
        confirmpassword.setAttribute('type','text')
        
        eyelinkcon.style.display= 'none';
        eyeshowcon.style.display= 'flex';

    }else{
        confirmpassword.setAttribute('type','password')
            eyelinkcon.style.display= 'flex';
        eyeshowcon.style.display= 'none';
    
    }
}

function showhidex(){
    eyelinkx.onclick = function (){
    if(passwordd.type === 'password'){
        passwordd.setAttribute('type','text')
        
        eyelinkx.style.display= 'none';
        eyeshowx.style.display= 'flex';

    }else{
        passwordd.setAttribute('type','password')
            eyelinkx.style.display= 'flex';
        eyeshowx.style.display= 'none';
    }
    eyeshowx.onclick = function (){
        if(passwordd.type === 'password'){
            passwordd.setAttribute('type','text')
            
            eyelinkx.style.display= 'none';
            eyeshowx.style.display= 'flex';
    
        }else{
            passwordd.setAttribute('type','password')
                eyelinkx.style.display= 'flex';
            eyeshowx.style.display= 'none';
        }
    }
}
}
function isEmail(emailaddress) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(emailaddress);
}

if(localStorage.userdata != null){
    datapro = JSON.parse(localStorage.userdata)
}else{
    userdata=[]
}

creataccount.onclick=function(){

let newuser ={
    username: username.value.toLowerCase(),
    emailaddress: emailaddress.value,
    creatpassword:creatpassword.value , 

}

if(username.value !=''){
    if(Array.from(username.value).length >= 4){
    if(emailaddress.value !=''){

        if(isEmail(emailaddress.value)){
if(creatpassword.value != ''){

    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Confirm Password Is Wrong</span>`
    container.style.height = '575px'

if(Array.from(creatpassword.value).length >= 6 ){

if(creatpassword.value != confirmpassword.value){

    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Confirm Password Is Wrong</span>`
    container.style.height = '575px'

} else{
    localStorage.user= JSON.stringify(newuser) 
    container.classList.add('signinForm')
    container.style.height = '500px' ;
    usernameoremial.value=`${emailaddress.value}`
    passwordd.value=`${creatpassword.value}`
    showhidex()
    caleardata()
}}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss"> Password Is Short</span>`
    container.style.height = '575px' ;
}
}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Fill The Password</span>`
    container.style.height = '575px'
}


}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Unvalid Email Address</span>`
    container.style.height = '575px' ;
}
}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Fill The Email Address</span>`
    container.style.height = '575px' ;
}
}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Username Is Short</span>`
    container.style.height = '575px' ;
}
}else{
    divspan.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Fill The Usernsme</span>`
    container.style.height = '575px' ;}
}

function caleardata(){
        username.value=''
    emailaddress.value=''
   creatpassword.value=''
   confirmpassword.value=''
   divspan.innerHTML = ''
  
}
function caleardatasginin(){
    passwordd.value=''
    usernameoremial.value=''
    divsginin.innerHTML=''
}
loginn.onclick=function(){
    let usersginin ={
        passwordd:passwordd.value,
        usernameoremial: usernameoremial.value,
}
if(usernameoremial.value != ''){

if(Array.from(usernameoremial.value).length >= 4 ){

if(passwordd.value != ''){

    if(Array.from(passwordd.value).length >= 6 ){

    localStorage.userlogin= JSON.stringify(usersginin) 
    caleardatasginin()
    container.style.height = '500px' ;

}else{
    divsginin.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Password Is Short</span>`
    container.style.height = '550px'
}

}else{
    divsginin.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Fill The Password</span>`
    container.style.height = '550px'
}

}else{
    divsginin.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Username Is Short</span>`
    container.style.height = '550px'
}
}else{
    divsginin.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Fill The Username</span>`
    container.style.height = '550px'
}
}
let sendForget=document.querySelector('#sendForget')
let oldpassword=document.querySelector('#oldpassword')
let youremail=document.querySelector('#youremail')

function calearforgetdata(){
    oldpassword.value=''
    youremail.value=''
    divforget.innerHTML=''
}

function isEmail(youremail) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(youremail);
}

sendForget.onclick = function(){
    let forgetdata ={
        oldpassword:oldpassword.value,
        youremail: youremail.value,
}
if(oldpassword.value != ''){
if(Array.from(oldpassword.value).length >= 6){
if(isEmail(youremail.value)){

    localStorage.userforget= JSON.stringify(forgetdata) 
    calearforgetdata()
    container.style.height = '375px' ;

}else{
    divforget.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Unvalid Email Address</span>`
    container.style.height = '420px'
}

}else{
    divforget.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Password Is Short</span>`
    container.style.height = '420px'
}

}
else{
        divforget.innerHTML=`<i class="fa-solid fa-xmark" ></i>
    <input type="data" required="required" id="error">
    <span id="ss">Fill The Password</span>`
    container.style.height = '420px'
}
}

let signup=document.querySelector('.signup')
let sginin=document.querySelector('.signin')
let kkkl=document.querySelector('.kkkl')


