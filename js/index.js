var nameInp =document.getElementById("nameInp");
var urlInp = document.getElementById("urlInp");
var subBut =document.getElementById("submitBtn");
var delBtn =document.getElementById("delBtn");
var continar=[];

subBut.onclick =function(){
    addsites ()
    displayItem ()
    clearForm()
    }

function addsites (){
    var sites ={
        name:nameInp.value,
        url:urlInp.value
        
        
    }
    continar.push(sites);
}


function displayItem (){
    var temp ="";
    for(var i=0 ;i<continar.length;i++){
    temp += `<div class="w-50 mx-auto bg-secondary p-3 my-2">
 
       <h3 class="d-inline-block">`+continar[i].name+`</h3>
        <a href="`+continar[i].url+`" target="_blank" class="ml-5">
        <button class="btn btn-primary ">visit</button></a>
        <button class="btn btn-danger " id="delBtn">delete</button>
        
        
    
    
    </div>
        `
    }
    document.getElementById("divCon").innerHTML=temp;
}


function clearForm(){

var inputs = document.getElementsByClassName("form-control");
    for(var i=0; i<inputs.length;i++)
    {
        inputs[i].value="";

    }
}



let person =
    {
        name :"thomas",
        age:22,
        salary:8000,
        
        
        getsalary(){
            
            let getTaxs = () => (this.salary*14)/100;
            return this.salary - getTaxs();
            
        }
        
        
    }
console.log(person.getsalary());