var  paraObj1  =  document.getElementById("pp");
function showw()
{
    //var i=1;
    var str="";
    var  paraObj1  =  document.getElementById("pp");
    for(var i=1;i<=10;i++) 
    {
        if(i%2==0)
        {
            paraObj1.innerHTML = paraObj1.innerHTML  +  "<li style='color:green;'>Welcome to JavaScript - " +  i +"</li>";
        }
        else
        {
            paraObj1.innerHTML = paraObj1.innerHTML  +  "<li style='color:blue;'>Welcome to JavaScript - " +  i + "</li>";
        }
   
    }
   // paraObj1.innerHTML=str;
}