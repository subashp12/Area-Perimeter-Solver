//For rectangle
const lenFieldRect=document.getElementById('length')
const breFieldRect=document.getElementById('breadth')
const calcArea=document.getElementById('calcArea')
const areaBtnRect=document.getElementById('areaBtnRect')
const periBtnRect=document.getElementById('periBtnRect')
const showSolRect=document.getElementById('showSolRect')
function AreaRect(a,b){
    return `<pre>
Area of Rectangle = length X breadth
                               = ${a} X ${b}
                               =  ${a*b}
The area of the rectangle is ${a*b} square units.
</pre>`
}
function PeriRect(a,b){
    return `<pre>
Perimeter of Rectangle = 2 ( length + breadth )
                                        = 2 ( ${a} + ${b} )
                                        = ${2 * (a+b)}
The perimeter of the rectangle is ${2*(a+b)} units.     
</pre>`    
}
function rectCalculator(length,breadth,formula){
    let len=length
    let bre=breadth
    if(!isNaN(len) && !isNaN(bre)){
        showSolRect.innerHTML=`
<pre>
Given:
length=${len}
breadth=${bre}
${formula(len,bre)}
</pre>`
}else{
    showSolRect.innerHTML='Invalid input types.'
}
}
areaBtnRect.onclick=function(){
    rectCalculator(parseInt(lenFieldRect.value),parseInt(breFieldRect.value),AreaRect)
    periBtnRect.style.backgroundColor=''
    areaBtnRect.style.backgroundColor='rgb(10, 143, 184)'
}
periBtnRect.onclick=function(){
    rectCalculator(parseInt(lenFieldRect.value),parseInt(breFieldRect.value),PeriRect)
    areaBtnRect.style.backgroundColor=''
    periBtnRect.style.backgroundColor='rgb(10, 143, 184)'
}

//For Square
const lenFieldSQ=document.getElementById('lengthSQ')
const areaBtnSQ=document.getElementById('areaBtnSQ')
const periBtnSQ=document.getElementById('periBtnSQ')
const showSolSQ=document.getElementById('showSolSQ')
function AreaSquare(a){
    return `<pre>
Area of Square = length X length (breadth)
                          = ${a} X ${a}
                          = ${a*a}
The area of the square is ${a*a} square units. 
</pre>`
}
function PeriSquare(a){
    return `<pre>
Perimeter of Square = 4 X length
                                   = 4 X ${a}
                                   = ${4*a}
The perimeter of the square is ${4*a} units.
</pre>`
}
function squareCalculator(length,formula){
    let len=length
    if(!isNaN(len)){
        showSolSQ.innerHTML=`
<pre>
Given:
length=${len}
${formula(len)}
</pre>`
}else{
    showSolSQ.innerHTML='Invalid input types.'
}
}
areaBtnSQ.onclick=function(){
    squareCalculator(parseInt(lenFieldSQ.value),AreaSquare)
    periBtnSQ.style.backgroundColor=''
    areaBtnSQ.style.backgroundColor='rgb(10, 143, 184)'
}
periBtnSQ.onclick=function(){
    squareCalculator(parseInt(lenFieldSQ.value),PeriSquare)
    areaBtnSQ.style.backgroundColor=''
    periBtnSQ.style.backgroundColor='rgb(10, 143, 184)'

}
