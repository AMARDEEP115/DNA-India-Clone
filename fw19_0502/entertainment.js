
let key = "33695b2ce4b245baa488f877245de4ef";

async function getData(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&pageSize=20&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Newsdata = data.articles;
        appendData(Newsdata);
    }
    catch(error){
        console.log("error:",error);
    }
}

getData();

async function getPopular(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&pageSize=5&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Populardata = data.articles;
        appendPopularData(Populardata);
    }
    catch(error){
        console.log("error:",error);
    }
}

getPopular();
async function getMviewed(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&pageSize=5&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Mvieweddata = data.articles;
        appendMviewedData(Mvieweddata);
    }
    catch(error){
        console.log("error:",error);
    }
}

getMviewed();

function appendData(Newsdata){

    Newsdata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        image.addEventListener("click", function fullNews(){
        console.log(image);
        localStorage.setItem("Image",JSON.stringify(el));
        window.location.href="fullnewsEnt.html";
        })
        let title = document.createElement("p");
        title.innerText=el.title;
        title.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Image",JSON.stringify(el));
            window.location.href="fullnewsEnt.html";
            })
        div.append(image,title);
        document.getElementById("mid-section").append(div);
        
    });
};

function appendPopularData(Populardata){

    Populardata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        image.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Image",JSON.stringify(el));
            window.location.href="fullnewsEnt.html";
            })
        let title = document.createElement("p");
        title.innerText=el.title;
        title.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Image",JSON.stringify(el));
            window.location.href="fullnewsEnt.html";
            })
        div.append(image,title);
        document.getElementById("popular").append(div);
        
    });
};
function appendMviewedData(Mvieweddata){

    Mvieweddata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        image.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Image",JSON.stringify(el));
            window.location.href="fullnewsEnt.html";
            })
        let title = document.createElement("p");
        title.innerText=el.title;
        title.addEventListener("click", function fullNews(){
            console.log(image);
            localStorage.setItem("Image",JSON.stringify(el));
            window.location.href="fullnewsEnt.html";
            })
        div.append(image,title);
        document.getElementById("most-viewed").append(div);
        
    });
};

let disBlk = ()=>{
    document.querySelector("#srch").style.display="block";
    document.querySelector("#sIcon").style.marginTop="56px";
    document.querySelector("#srch").style.marginTop="15px";
    // document.querySelector("#srch").style.
    setTimeout(disNon,15000);
}
let disNon = ()=>{
    document.querySelector("#sIcon").style.marginTop="3px";
    document.querySelector("#srch").style.display="none";
}
// let getdata= async ()=>{
//     try {
//       let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
//       let data= await res.json();
//       padd(data.articles);
//       console.log(data.articles[0].title)
//     } catch (error) {
//       console.log(error);
//     }
//   }
  
//   getdata()
  
//   let ptitle=[];
  
//   let padd= (data)=>{
//     data.forEach(el => {
  
//       let title= el.title;
//       ptitle.push({title});
//     });
   
  
//     let c= document.getElementById('sliding_text');
//     c.innerHTML=null;
//     let nc = document.createElement('div');
//     nc.setAttribute('id','line');
//     c.append(nc)
  
//     let nb= document.querySelector('#line');
  
//     let n= 4;
//     let fnum = 10;
//     function next() {
//       if (fnum == 14) {
//         n= 4;
//         fnum = 10;
//       } else {
//         n++;
//         fnum++;
//       }
//       nb.innerText= ptitle[n].title;
  
      
//     };
//     setInterval(function () {next();},1000);
  
//   }



 
