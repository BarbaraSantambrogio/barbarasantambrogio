var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

console.log('tab', tablinks);
console.log('taC', tabcontents);

function opentab(tabname){
  
    for(tablink of tablinks){  
        console.log('tabl111', tablink);
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        console.log('tabC1111', tabcontent);
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add("active-tab");
}

