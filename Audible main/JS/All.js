

const url1 = "http://localhost:3000/books";
const podurl1 = "http://localhost:3000/podcasts";
const audurl1 = "http://localhost:3000/audio";

    let fav1 = async ()=> {
    
      let respo=await fetch(url1);
      let data=await respo.json();
      const displayDiv = document.getElementById("imgflex");
      displayDiv.innerHTML = "";
      
      data.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px;">
        <img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image ">
          <strong>${user.bookName}</strong>  
          <strong> ${user.author}</strong>
          
          </div>
        `;
        displayDiv.appendChild(userDiv);
      });
    }
fav1();


let favaudio1 = async ()=> {
    
  let respo=await fetch(audurl1);
  let data=await respo.json();
  const displayDiv = document.getElementById("imgflex1");
  displayDiv.innerHTML = "";
  
  data.forEach(user => {
    const userDiv1 = document.createElement("div");
    userDiv1.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px;">
    <img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image ">
      <audio controls style="margin-top: 5px; width: 200px;"> <source src="${user.aud}  "/></audio>
      </div>
    `;
    displayDiv.appendChild(userDiv1);
  });
}

favaudio1();



let favpodcasts1 = async ()=> {
  
  let respo=await fetch(podurl1);
  let data=await respo.json();
  const displayDiv = document.getElementById("imgflex2");
  displayDiv.innerHTML = "";
  
  data.forEach(user => {
    const userDiv2 = document.createElement("div");
    userDiv2.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px;">
    <img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image ">
    <audio controls style="margin-top: 5px; width: 200px;"> <source src="${user.aud}  "/></audio>
      
      </div>
    `;
    displayDiv.appendChild(userDiv2);
  });
}

favpodcasts1();
