
//------------Create-----------------
const url = "http://localhost:3000/details";

let Create=  ()=>{
    fetch(url,{
    method:'POST',
    body:JSON.stringify({

    
        
        user : document.getElementById("uname").value,
        password: document.getElementById("pwd").value,
        email: document.getElementById("email").value,
        mobile_no:document.getElementById("number").value,
        
    }),
    
    headers:{
        "Content-type":"application/json ; charset=UTF-8"
    }
    }).then(res =>res.json()).then(data =>console.log(data));
    }




localStorage.setItem('logeduser',false);
  
//--------------Login--------------

// localStorage.setItem("dataId",0);
let dataId=0;
let getdata = async ()=> {

    respo = await fetch(url);
    data1 = await respo.json();
    let username = document.getElementById("lname").value;
    let pass = document.getElementById("lpwd").value;
    
    for(i in data1){
        if(username==data1[i].user && pass==data1[i].password){
            localStorage.setItem("dataId",data1[i].id);
            // alert("no");
        }
    }
    dataId=localStorage.getItem("dataId");

    // console.log(dataId);
    const foundUser = data1.find(x => x.user === username && x.password === pass);
    if (foundUser) {
        localStorage.setItem('logeduser',true);
      alert("Successful");

      const mypage = await fetch('main.html');
      const mainContent = await mypage.text();

      document.documentElement.innerHTML = mainContent;
      if(localStorage.getItem('logeduser')){
        document.getElementById("myprofile_main").style.display = "block";
        document.getElementById("signin_main").style.display = "none";
        document.getElementById("browse").style.display="block";
        document.getElementById("about").style.display = "none";
        document.getElementById("mainfav").style.display = "block";
        }
      
    } else {
      alert("Wrong Credentials");
    }
  }


  
    






// ----------------------Update-----------------------

// console.log(dataId)
    let Update=  ()=>{
        dataId=localStorage.getItem("dataId");

        // alert(dataId);
        fetch(`${url}/${dataId}`,{
        method:'PUT',
        body:JSON.stringify({
            user : document.getElementById("Cname").value,
            password: document.getElementById("Cpwd").value,
            email: document.getElementById("Cemail").value,
            mobile_no:document.getElementById("Cnumber").value,
            
        }),
        
        headers:{
            "Content-type":"application/json ; charset=UTF-8"
        }
        }).then(res =>res.json()).then(data =>console.log(data));
        }
    
     
 ///-------------VIEW------------

 let show = async ()=> {
    dataId=localStorage.getItem("dataId");
    respo = await axios.get(`${url}/${dataId}`);
    // data1 = await respo.json();

   let a= document.getElementById("d-name");
   a.innerText= respo.data.user;
   document.getElementById("d-email").innerText=respo.data.email;
   document.getElementById("d-num").innerText=respo.data.mobile_no;

 }

 show();


