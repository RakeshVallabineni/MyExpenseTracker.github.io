const form=document.querySelector('#form');
const newPassword=document.getElementById('newEmailPassword');
const reNewPassword=document.getElementById('reNewEmailPassword');
const err=document.getElementById('err');

form.addEventListener('submit',async (e)=>{
    try{
    e.preventDefault();
    if (newPassword.value!=reNewPassword.value){
        err.innerHTML='* Please Check The password';
        setTimeout(()=>{
         err.innerHTML='';
        },2000);
    }
    else{
        const queryString = window.location.search;
        
       const newPasswords={
        npassword:newPassword.value,
        userresetId:queryString.split('?')[1]
        }
        
       let response= await axios.post(`http://localhost:9000/forgotPassword/newPassword`,newPasswords);
    }
}
catch(err){
    console.log(err);
}
})