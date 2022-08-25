
let key = "33695b2ce4b245baa488f877245de4ef";

async function getData(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=${key}`);
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

        let res = await fetch(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${key}`);
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


function appendData(Newsdata){

    Newsdata.forEach ((el)=> {

        let div = document.createElement("div");
        let image = document.createElement("img");
        image.src=el.urlToImage;
        let title = document.createElement("p");
        title.innerText=el.title;
        div.append(image,title);
        document.getElementById("mid-section").append(div);
        
    });
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

