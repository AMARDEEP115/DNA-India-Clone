let key = "33695b2ce4b245baa488f877245de4ef";
let LSData = JSON.parse(localStorage.getItem("Imagespo")) || [];
console.log(LSData);


async function getData(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&pageSize=1&apiKey=${key}`);
        let data  = await res.json();

        console.log(data);
        let Newsdata = data.articles;
        appendData(LSData);
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

function appendData(LSData){

        let div = document.createElement("div");
        
        let title = document.createElement("p");
        title.innerText=LSData.title;
        let desc = document.createElement("p");
        desc.innerText=LSData.description;
        let publisher = document.createElement("p");
        publisher.innerText=`Published On: ${LSData.publishedAt}`;
        let image = document.createElement("img");
        image.src=LSData.urlToImage;
        let content = document.createElement("p");
        content.innerText=LSData.content;
        div.append(title,desc,publisher,image,content);
        document.getElementById("mid-section").append(div);
        
    
};

function appendPopularData(Populardata){

    Populardata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        let title = document.createElement("p");
        title.innerText=el.title;
        div.append(image,title);
        document.getElementById("popular").append(div);
        
    });
};
function appendMviewedData(Mvieweddata){

    Mvieweddata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        let title = document.createElement("p");
        title.innerText=el.title;
        div.append(image,title);
        document.getElementById("most-viewed").append(div);
        
    });
};