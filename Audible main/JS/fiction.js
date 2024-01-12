const bookurl = "http://localhost:3000/books";
const podcast1 = "http://localhost:3000/podcasts";
const audio1 = "http://localhost:3000/audio";




//Adding to favoraties call and linking to view html 

const getTodoItems = async () => {
    const res = await fetch(bookurl);
    const data = await res.json();
    return data;
};

const createTodoElement = item => {
 
    let divCol = document.createElement('div');
    divCol.className = 'cols';
    divCol.setAttribute("data-id", item.id);
 
    let link = document.createElement('a');
    link.href="../HTML/view.html?book="+item.bookName;
    // link.href="../HTML/view1.html?book="+item.bookName;
 
    let img = document.createElement('img');
    img.src = item.img; 
    img.style.width = "150px";

    let para = document.createElement('p');
    para.textContent = item.author; 

   
    divCol.appendChild(link);

    link.append(img);
    divCol.appendChild(para);

    return divCol; 
};
const updateTodoList = async () => {
    const todoItems = await getTodoItems();
    const todoList = document.getElementById('imgflex');
   
    todoList.innerHTML = ''

    if (Array.isArray(todoItems) && todoItems.length > 0) {
        todoItems.forEach(todoItem => {
            todoList.appendChild(createTodoElement(todoItem));
        });
    } else if (todoItems) {
        todoList.appendChild(createTodoElement(todoItems));
    }
};

const main = async () => {
    await updateTodoList();
};
main();

// =-------------------------------------------

const getTodoItems1 = async () => {
  const res = await fetch(podcast1);
  const data = await res.json();
  return data;
};

const createTodoElement1 = item => {

  let divCol = document.createElement('div');
  divCol.className = 'cols';
  divCol.setAttribute("data-id", item.id);

  let link = document.createElement('a');
  link.href="../HTML/view.html?book="+item.title;
  // link.href="../HTML/view1.html?book="+item.bookName;

  let img = document.createElement('img');
  img.src = item.img; 
  img.style.width = "150px";

  let para = document.createElement('p');
  para.textContent = item.author; 

 
  divCol.appendChild(link);

  link.append(img);
  divCol.appendChild(para);

  return divCol; 
};
const updateTodoList1 = async () => {
  const todoItems = await getTodoItems();
  const todoList = document.getElementById('imgflex');
 
  todoList.innerHTML = ''

  if (Array.isArray(todoItems) && todoItems.length > 0) {
      todoItems.forEach(todoItem => {
          todoList.appendChild(createTodoElement1(todoItem));
      });
  } else if (todoItems) {
      todoList.appendChild(createTodoElement1(todoItems));
  }
};

const main1 = async () => {
  await updateTodoList1();
};
main1();
// ---------------------------------


const getTodoItems2 = async () => {
  const res = await fetch(audio1);
  const data = await res.json();
  return data;
};

const createTodoElement2 = item => {

  let divCol = document.createElement('div');
  divCol.className = 'cols';
  divCol.setAttribute("data-id", item.id);

  let link = document.createElement('a');
  link.href="../HTML/view.html?book="+item.title;
  // link.href="../HTML/view1.html?book="+item.bookName;

  let img = document.createElement('img');
  img.src = item.img; 
  img.style.width = "150px";

  let para = document.createElement('p');
  para.textContent = item.author; 

 
  divCol.appendChild(link);

  link.append(img);
  divCol.appendChild(para);

  return divCol; 
};
const updateTodoList2 = async () => {
  const todoItems = await getTodoItems();
  const todoList = document.getElementById('imgflex');
 
  todoList.innerHTML = ''

  if (Array.isArray(todoItems) && todoItems.length > 0) {
      todoItems.forEach(todoItem => {
          todoList.appendChild(createTodoElement2(todoItem));
      });
  } else if (todoItems) {
      todoList.appendChild(createTodoElement2(todoItems));
  }
};

const main2 = async () => {
  await updateTodoList();
};
main2();





async function fetchdata() {
    try {
        const resp = await axios.get(`${bookurl}/${dataId}`);
        return resp.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error; 
    }
}

async function addFav() {
    try {
        const favdata = await fetchdata();
        const response = await axios.post(favurl, favdata, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 200 || response.status === 201) {
            console.log('Item favorited successfully:', response.data);
          
            alert('Item added to favorites');
            window.location.href = '../HTML/fiction.html';
        } else {
            console.log('Failed to favorite item:', response.data);
           
            alert('Failed to add item to favorites');
        }
    } catch (error) {
        console.error('Error adding favorite item:', error);

        
        alert('Error adding item to favorites');
    }
}





const url = "http://localhost:3000/books1";
const podurl = "http://localhost:3000/podcasts1";
const audurl = "http://localhost:3000/audio1";



    let fav = async ()=> {
    
      let respo=await fetch(url);
      let data=await respo.json();
      const displayDiv = document.getElementById("imgflexfic")
      displayDiv.innerHTML = '';
      
      data.forEach(user => {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `<div style="display:flex;flex-direction:column;padding-right:20px;">
        <a href="../HTML/view.html"><img style="width:100px;" src="${user.img}" alt="${user.bookName}'s Image "></a>
        
          <strong>${user.bookName}</strong>  
          <strong> ${user.author}</strong>
          
          </div>
        `;
        displayDiv.appendChild(userDiv);
      });
    }
fav();


let favaudio = async ()=> {
    
  let respo=await fetch(audurl);
  let data=await respo.json();
  const displayDiv = document.getElementById("imgflex1fic")
  displayDiv.innerHTML = '';
  
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

favaudio();



let favpodcasts = async ()=> {
  
  let respo=await fetch(podurl);
  let data=await respo.json();
  const displayDiv = document.getElementById("imgflex2fic")
  displayDiv.innerHTML = '';
  
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

favpodcasts();



