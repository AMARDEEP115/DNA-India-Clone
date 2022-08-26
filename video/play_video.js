

let video_news = JSON.parse(localStorage.getItem("news")) || [];
// console.log(video_news);


let append_video = document.getElementById("append_video");

function display_video(video_news){

    append_video.innerHTML = null;

    video_news.forEach(function(el){

        let div = document.createElement("div");

        let h2 = document.createElement("h2");
        h2.innerText = el.title;

        let iframe = document.createElement("iframe");
        iframe.src = el.url;

        let p = document.createElement("p");
        p.innerText = el.description;

        div.append(h2,iframe,p);
        append_video.append(div);
    });
};

display_video(video_news);