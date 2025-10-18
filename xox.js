let a=document.querySelectorAll(".box")
let b=0;
let sa=document.querySelector(".one")
let c=0;
let d=0;
let s=document.querySelector(".two")

a.forEach(all=>{
all.onclick=()=>{
if(all.innerText=="" && b==0 && d==0)
{
all.innerText="X"
b=1;
}

if(all.innerText=="" && b==1 && d==0)
{                            
all.innerText="O"            
b=0;
}

if(
a[1].innerText=="X" && a[4].innerText=="X" && a[7].innerText=="X" ||
a[1].innerText=="O" && a[4].innerText=="O" && a[7].innerText=="O"
)
{

d=1
}



if(
a[0].innerText=="X" && a[1].innerText=="X" && a[2].innerText=="X" ||
a[0].innerText=="O" && a[1].innerText=="O" && a[2].innerText=="O"
)
{
d=1
}
if(
a[0].innerText=="X" && a[3].innerText=="X" && a[6].innerText=="X" ||
a[0].innerText=="O" && a[3].innerText=="O" && a[6].innerText=="O"
)
{
d=1
}
if(
a[2].innerText=="X" && a[5].innerText=="X" && a[8].innerText=="X" ||
a[2].innerText=="O" && a[5].innerText=="O" && a[8].innerText=="O"
)
{
   d=1  
}

if(
a[3].innerText=="X" && a[4].innerText=="X" && a[5].innerText=="X" ||
a[3].innerText=="O" && a[4].innerText=="O" && a[5].innerText=="O"
)
{
   d=1 
}



if(
a[6].innerText=="X" && a[7].innerText=="X" && a[8].innerText=="X" ||
a[6].innerText=="O" && a[7].innerText=="O" && a[8].innerText=="O"
)
{
   d=1
}


if(
a[2].innerText=="X" && a[4].innerText=="X" && a[6].innerText=="X" ||
a[2].innerText=="O" && a[4].innerText=="O" && a[6].innerText=="O"
)
{
d=1
}

if(
a[0].innerText=="X" && a[4].innerText=="X" && a[8].innerText=="X" ||
a[0].innerText=="O" && a[4].innerText=="O" && a[8].innerText=="O"
)
{
 d=1 
}
}





sa.onclick=()=>{
a.forEach(all=>{
all.innerText=""
})

d=0;
b=0;
}
})

s.onclick=()=>{
a.forEach(all=>{
all.innerText=""    
})

d=0

}



