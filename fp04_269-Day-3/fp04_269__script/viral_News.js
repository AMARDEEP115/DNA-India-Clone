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

// let news = async()=>{
//     let res= await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=general&apiKey=b84f4370ccae4b37adea6da2f3fbcd07`);
//     let data= await res.json();
//     console.log(data);
// }
// news();
console.log("Yes");

let hindi = ()=>{
    document.querySelector("#logo").src="";
    document.querySelector("#logo").src="https://english.cdn.zeenews.com/static/apprun/dna/icons/dna-hindi-logo.png";
    document.querySelector("#eng").innerText="Switch To English";
    document.querySelector("#eng").style.width="500px";
    setTimeout(()=>{
        window.location.assign("Viral_News.html");
    },3000);
}