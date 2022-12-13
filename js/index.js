var textbox = document.querySelector(".textbox");
var textbox1 = document.getElementsByClassName("textbox1")[0];
var historybox = document.querySelector('.historybox')
var answers = [];
var equations = [];

// var a = document.querySelector('.historybox').style.display ="block";

console.log(a)


function button(num)
{
    if(textbox.value == 0)
    textbox.value = num;
    else
    textbox.value += num;

}
function answer()
{
    // alert("kunal");
    console.log("eq : ",textbox.value)
    console.log("ans :",eval(textbox.value))
    equations.push((textbox.value + "="))
    answers.push(eval(textbox.value))
    console.log(answers)
    textbox1.value = textbox.value
    textbox.value = eval(textbox.value);
}
function cl()
{
    textbox.value = 0;
    textbox1.value 
}
function ce()
{
    textbox1.value = 0;
}
function history()
{
    document.querySelector('.historybox').style.display ="block"
    historybox.innerHTML = [];

    for(let i=0;i<answers.length; i++)//(0<3)(1<3)(2<3)(3<3)
    {
        historybox.innerHTML += '<div class="section"><h3>'+ equations[i]+ ' </h3><h3>'+answers[i]+'</h3></d3v>';
    }
}    

function box()
{
    historybox.innerHTML = "";
}
  

function clearhistory()
{
    document.querySelector('.historybox').style.display ="none";
    // var status= confirm("Are You sure want to delete history ? ");
    // if(status)
    // {
    //     historybox.innerHTML = "";
    //     answers = [];
    //     equations = [];
    // }
    historybox.innerHTML = "";
        answers = [];
        equations = [];
}





