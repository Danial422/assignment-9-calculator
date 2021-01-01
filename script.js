
function onClickHandler(num){
    var output = document.getElementById("cl-2").value;
    document.getElementById("cl-2").value = output + num;
     
}
function clrdisp(){
    document.getElementById("cl-2").value = " "
}
function eql(){
    var text =  document.getElementById("cl-2").value;
    var result = eval(text);
    document.getElementById("cl-2").value = result ;
}