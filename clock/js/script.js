const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const time = document.querySelector('#time');
const second = document.querySelector('#second');
const year = document.querySelector('#year')





setInterval(() => {
    let day = new Date();

    // 数字时钟
    let textyear = day.getFullYear();
    let month = day.getMonth() + 1;
    let textday = day.getDate();
    
    let texthh = day.getHours();
    let textmm = day.getMinutes();
    let textss = day.getSeconds();

    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;
    let ss = day.getSeconds() * deg;

    year.innerHTML = "<h1>"+
    textyear + "年"
    "</h1>"
 

    time.innerHTML = "<h1>"+"&nbsp;"+
     month + "月" +
     textday + "日 - " + 
    `${texthh >= 10 ? texthh : "0" + texthh}`+":"+
    `${textmm >= 10 ? textmm : "0" + textmm}`+":"+
    "</h1>"

    second.innerHTML ="<h1>"+
   `${textss >= 10 ? textss : "0" + textss}`+
   "</h1>"

   

    hr.style.transform = `rotateZ(${hh + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;

    

})

