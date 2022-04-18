const divE1=document.getElementById('div1');

function fnSubmit(){
    const xhr=new XMLHttpRequest();

    xhr.open('GET','https://gorest.co.in/public/v2/users',true);
    xhr.send();
    xhr.onload=function(){
        if(xhr.readyState == 4 && xhr.status == 200){
           var result=xhr.responseText;
           var results=JSON.parse(result);
          // console.log("4 is OK",results,xhr.statusText);
          console.log(results,xhr.statusText);
        } 
    }
    xhr.onerror=function(){
        console.log('something went wrong')
    }
}