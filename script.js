let text=document.getElementById('text');
let ticButton=document.querySelectorAll('.ticButton');
let restartButton=document.querySelector('.restartButton')
let firstPerson=true;
text.innerHTML='First Person';

let count=0;
const winnerPattern=[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
]

//checking winner
function winnerChecker(){
   for(let i of winnerPattern){
    let [element1,element2,element3]=[ticButton[i[0]].innerHTML,ticButton[i[1]].innerHTML,ticButton[i[2]].innerHTML];
    if(element1&&element2&&element3){
        if(element1===element2&&element2===element3){
            if(element1==='X'&&element2==='X'&&element3==='X'){
                text.innerHTML='First Person Win';
                text.style.backgroundColor='blue';
                text.style.borderRadius='7px'
                text.style.padding='10px'
                buttonDisabled();
                
            }
            else if(element1==='O'&&element2==='O'&&element3==='O'){
                text.innerHTML='Second Person Win';
                text.style.backgroundColor='blue';
                text.style.borderRadius='7px'
                text.style.padding='10px'
                buttonDisabled();
            }
        }else if(count===9){
            text.innerHTML='Draw Match';
            text.style.backgroundColor='red';
            text.style.borderRadius='7px'
            text.style.padding='10px'
        }
    }
   }
}
//for disabled button action
function buttonDisabled(){
    ticButton.forEach((element)=>{
        element.disabled=true;
    })
}

//person and click action of button
ticButton.forEach((element)=>{ 
    element.addEventListener('click',()=>{
        if(firstPerson){
            element.innerHTML='X';
            firstPerson=false;
            element.disabled=true;
            text.innerHTML='Second Person';
        }else{
            element.innerHTML='O';
            firstPerson=true;
            element.disabled=true;
            text.innerHTML='First Person';
        }
        count++
        winnerChecker();
        
    })
    
})

//for restart

restartButton.addEventListener('click',()=>{
    ticButton.forEach((element)=>{
        element.innerHTML='';
        text.innerHTML='First Person';
        element.disabled=false;
    })
})
