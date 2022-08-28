
let video_news = JSON.parse(localStorage.getItem("news")) || [];

let append_video = document.getElementById("append_video");



displayVideo = (video_news) =>{

    append_video.innerHTML = null;
    video_news .forEach((el)=>{
        // console.log("element:",el);
        let div = document.createElement("div");

        let img = document.createElement("img");
        img.src = el.url;
       
        let h2 = document.createElement("h2");
        h2.innerText = el.t;

        let p = document.createElement("p");
        p.innerText = el.des;

        div.append(h2,img,p);
        append_video.append(div);
    });

}
displayVideo(video_news);