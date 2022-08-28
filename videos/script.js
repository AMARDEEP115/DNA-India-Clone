

// let API = "AIzaSyDcAysFT-Z9pR26lZtgQxmSjval2f93XN4";

let API = "AIzaSyD8Ozd6kYx8jO4TnE_HNJNKehHPnoivilk";


// let API = "AIzaSyAAaN5YeLDEzRiTNDFsGlAOyIyzL-3CgLE";

// API = "AIzaSyAeI-9hammXi35SeSQjhsRN0e_L40o-5jM";


let append_video = document.getElementById("append_video");

let video_news = JSON.parse(localStorage.getItem("news")) || [];

let getData = async () => {

    try{

        
        let query = document.getElementById("query").value;
        
        let res;
        if(query===""){ 
           
            query = "Trending news";
            res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`);
            
        }
        else{
            
            res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${API}&part=snippet&maxResults=20`);

            
        }
    
           
        let data = await res.json();
        let arr_of_videos = data.items;
        // console.log(arr_of_videos);
        if(arr_of_videos !== undefined){
            appendData(arr_of_videos);
        }

    }
    catch(error){
        console.log("Error:",error);
    }
}

getData();


let appendData = (arr_of_videos) => {
    video_news = [];
    console.log(arr_of_videos)

    append_video.innerHTML = null;

    arr_of_videos.forEach(({snippet:{title},id,snippet:{thumbnails:{high:{url}}},snippet:{description}}) =>{

       
        let div = document.createElement("div"); 
        div.addEventListener("click", () => {

            let obj = {
                t:title,
                v2:id,
                des:description,
                url:url,
            }
            video_news.push(obj);
            // console.log(obj)
           
            localStorage.setItem("news",JSON.stringify(video_news));
            window.location.href = "play_video.html";
            
            
        });
        let img = document.createElement("img");
        img.src = url;

        let name = document.createElement("h2");
        name.innerText = title;

        div.append(name,img);
        append_video.append(div);

    });
    

}



// const showButtons = (results,per_page) => {

//     let button_div = document.getElementById("buttons");

//     // let results = 11;
//     // let per_page = 3;

//     let buttons = Math.ceil(results / per_page);

//     for(let i=1; i<= buttons; i++){

//         let button = document.createElement("button");
//         button.innerText = i;

//         button.onclick = function () {
//             getData(i);
//         }

//         button_div.append(button);
//     }

// }

// showButtons(50, 1)