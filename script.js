//-------side bar------

const menuItem = document.querySelectorAll('.menu-item');
//---remove active------
const removeActive = ()=>{
    menuItem.forEach(item => {
        item.classList.remove('active')
    });
}

menuItem.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');

        if(item.id !='notifice')
        {
            document.querySelector('.notification').style.display ='none';
        }
        else
        {
            document.querySelector('.notification').style.display ='block';
            document.querySelector('#notifice .count').style.display ='none';
        }
    })
})
const mainLeft = document.querySelector('.main-left');

mainLeft.forEach(item =>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
        if(item.id !='profile1')
        {
            document.querySelector('profile-photo').style.display ='none';

        }
        else{
            document.querySelector('.profile-photo').style.display ='block';
            document.querySelector('#profile1 ').style.display ='none';

        }
    })
})
const message = document.querySelector('#message');
const messageBox = document.querySelector('#message-box');


message.addEventListener('click',() =>{
    messageBox.classList.add('box-sh');
    message.querySelector('.count').style.display='none'
    setTimeout(()=> {
    messageBox.classList.remove('box-sh');


    },300);
})

const themeMenu = document.querySelector('#themeMenu');
const themBOx = document.querySelector('.theme')

themeMenu.addEventListener('click',() =>{
    themBOx.style.display= 'grid'
})

document.querySelector('theme').addEventListener('click',()=>{
    themBOx.style.display= 'none'
})

const addBtn = document.querySelectorAll('#add')
const delbtn = document.querySelectorAll('#request')

addBtn.forEach(element =>{
    element.addEventListener('click',()=>{
    element.parentElement.style.display='none'
    })
})



window.addEventListener('scroll',()=>{
    themBOx.style.display= 'none'
    document.querySelector('.profile-photo').style.display ='none'
})