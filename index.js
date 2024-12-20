
let myLeads=[]
const inputEL=document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEL = document.getElementById("ul-el");
const clearBtn = document.getElementById("clear-btn");


inputBtn.addEventListener("click",function (){
    myLeads.push(inputEL.value);
    renderleads()
})

clearBtn.addEventListener("click",function (){
   /* myLeads.splice(0,myLeads.length);*/
    inputEL.value = "";
/*    ulEL.innerHTML=" "*/
    })

function renderleads()
{
    let listItems = " "
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `<li><a target='_blank' href='${myLeads[i]}' > ${myLeads[i]} </a></li>`;
    }
    ulEL.innerHTML = listItems;
}


