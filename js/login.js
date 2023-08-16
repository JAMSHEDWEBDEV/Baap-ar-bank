    //   login section event start 
document.getElementById('submit_btn').addEventListener('click',function(){
    const emailFuild = document.getElementById('user_email');
    const emailText = emailFuild.value;
    const passwordFuild =document.getElementById('password_fuild');
    const password = passwordFuild.value;
    if(emailText === 'jamsheddc60@gmail.com' && password === 'secret'){
        window.location.href='insite.html';
    }else{
        alert('invalid user');
    }
})
    // login section event en