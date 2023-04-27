'use strict'
const emailInput = document.querySelector('#email');
const requestButton = document.querySelector('.request');
const emailError = document.querySelector('.error');
const check =document.querySelector('.check');
const change =document.querySelector('.reqdesc');
const remove= document.querySelector('hide');

const emailEl = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 console.log(emailInput.value);
console.log(emailError);

const valid= function()  {
    if(!emailEl.test(emailInput.value)){
return false;
    }else{
        return true;
    }
};
requestButton.addEventListener('click', () => {
    if (emailEl.test(emailInput.value)) {
        emailError.classList.add('hidden');
        emailError.classList.remove('show');
      check.classList.remove('hiddendiv');
      document.querySelector('.reqdesc').textContent=`We've sent a request confirmation message to ${emailInput.value} with a link to activate your account`;
      console.log('hiden');
      emailError.classList.remove('hide');
    } else {
        emailError.classList.remove('hidden');
        emailError.classList.add('show');
        check.classList.add('hiddendiv');
    }
});
