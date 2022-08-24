

let API = "2e9a4cdda3944fbe9266027406a1e8f7";

async function getData(){

    try{

        let res = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${API}`);
        let data  = await res.json();
        let actual_data = data.articles;
        console.log(actual_data);
        appendData(actual_data);
    }
    catch(error){
        console.log("error:",error);
    }
}

getData();


function appendData(actual_data){

    actual_data.forEach (({title,urlToImage}) => {

        let div = document.createElement("div");

        let h2 = document.createElement("h2");
        h2.innerText = title;

        let img = document.createElement("img");
        img.src = urlToImage;

        div.append(h2,img);

        append_photo.append(div);
        
    });
};