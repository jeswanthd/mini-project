

const url = "http://localhost:3000/fav";



let fav = async ()=> {
    
    let respo=await fetch(url);
    let data=await respo.json();
    const displayDiv = document.getElementById("fav")
    displayDiv.innerHTML = '';
    
    data.forEach(user => {
      const userDiv = document.createElement("div");
      userDiv.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px; justify-content:center">
      <img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image ">
        <strong>Name:</strong> ${user.bookName}, 
        <strong>Author:</strong> ${user.author},
        
        </div>
      `;
      displayDiv.appendChild(userDiv);
    });
  }
  fav();

  // let favaudio = async ()=> {
    
  //   let respo=await fetch(url);
  //   let data=await respo.json();
  //   const displayDiv = document.getElementById("favaudio")
  //   displayDiv.innerHTML = '';
    
  //   data.forEach(user => {
  //     const userDiv1 = document.createElement("div");
  //     userDiv1.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px;">
  //     <img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image ">
  //       <strong>Name:</strong> ${user.bookName}, 
  //       <strong>Author:</strong> ${user.author},
        
  //       </div>
  //     `;
  //     displayDiv.appendChild(userDiv1);
  //   });
  // }

  // favaudio();



  // let favpodcasts = async ()=> {
    
  //   let respo=await fetch(url);
  //   let data=await respo.json();
  //   const displayDiv = document.getElementById("favpodcasts")
  //   displayDiv.innerHTML = '';
    
  //   data.forEach(user => {
  //     const userDiv2 = document.createElement("div");
  //     userDiv2.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px;">
  //     <img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image ">
  //       <strong>Name:</strong> ${user.bookName}, 
  //       <strong>Author:</strong> ${user.author},
        
  //       </div>
  //     `;
  //     displayDiv.appendChild(userDiv2);
  //   });
  // }

  // favpodcasts();
 
  
