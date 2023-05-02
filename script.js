

fun2=()=>{

}

const arr2={
  lastname:"Panchal"
}

const arr={
  name:"hiamnshu",
  lastname:function fun1(){
    return this.lastname;
  }
}

document.getElementById("demo")=arr.lastname.call(arr2);