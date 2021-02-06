const deg = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

const time = document.querySelector('#time');
const second = document.querySelector('#second');
const year = document.querySelector('#year')




// 对切换主题的按钮绑定事件，用来做触发
document.getElementById("Dark").addEventListener("click",function(){
    setStyleSheet("a");
});
document.getElementById("Suni").addEventListener("click",function(){
    setStyleSheet("b");
});
/**
 * 查找所有的link标签，找到符合条件的css进行切换
 * @title:需要切换的css文件名称，也可以是某值，主要是能够找到所要切换的link标签
 **/
function setStyleSheet(title){  
    // 首先找到DOM中所有的link标签
    var link_list = document.getElementsByTagName("link");
    if ( link_list ){
        for ( var i=0;i<link_list.length;i++ ){
            // 要找到所有link中rel属性值包括style的，也就是包括stylesheet和alternate stylesheet;
            if ( link_list[i].getAttribute("rel").indexOf("style") != -1 ){
                // 将符合条件的link的disabled的属性设为true，都改为禁用；
                link_list[i].disabled = true;
                // 然后判断link标签中的title属性，找到我们需要替换的css文件
                // 找到后将该link的disabled改为启用；
                if ( link_list[i].getAttribute("title") === title){
                    link_list[i].disabled = false;
                }
            }
        }
    }
};




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
    `${month >= 10 ? month : "0" + month}` + "月" +
    `${textday >= 10 ? textday : "0" + textday}` + "日 - " + 
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

