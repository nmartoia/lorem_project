let star = document.querySelectorAll('i');
let favorie = document.querySelector('.favorie')
for (let i = 0; i < star.length; i++) {
star[i].addEventListener('click',()=>{
    if(star[i].className=="fa-regular fa-star"){
        star[i].className="fa-solid fa-star";
        let li = document.createElement('li');
        let tli=[];
        tli.push('d')
        if(tli.length<star.length){
            favorie.appendChild(li)
            console.log(tli)
        }
    }
    else{
        star[i].className="fa-regular fa-star"
    }
})}
