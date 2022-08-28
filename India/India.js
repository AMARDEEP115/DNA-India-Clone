// **************************E_cont*******************************
let cont= document.getElementById('E_cont');
let cont2= document.getElementById('cont2');

let getdata= async ()=>{
  try {
    let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
    let data= await res.json();
    append(data.articles);
    padd(data.articles);
    vadd(data.articles);
    append2(data.articles);
    console.log(data.articles);
  } catch (error) {
    console.log(error);
  }
}

getdata()
let append= (data)=>{
  data.forEach(el => {
    let div= document.createElement('div');
    div.setAttribute('class', 'subHeading');

    let img= document.createElement('img');
    img.src= el.urlToImage;

    let title= document.createElement('h3');
    title.innerText= el.title;

    div.append(img,title);

    cont.append(div);
  });
}

let append2= (data)=>{
  data.forEach(el => {
    let div= document.createElement('div');
    div.setAttribute('class', 'subHeading');

    let img= document.createElement('img');
    img.src= el.urlToImage;

    let title= document.createElement('h3');
    title.innerText= el.title;

    div.append(img,title);

    cont2.append(div);
  });
}

// **************************photos**********************************
let pimg=[];
let ptitle=[];

let padd= (data)=>{
  data.forEach(el => {
    let img= el.urlToImage;

    let title= el.title;

    pimg.push({img});
    ptitle.push({title});
  });
  let fpci= document.querySelector('#photo1');
  let fpct= document.querySelector('#photoText1');

  let spci= document.querySelector('#photo2');
  let spct= document.querySelector('#photoText2');

  let c= document.getElementById('sliding_text');
  c.innerHTML=null;
  let nc = document.createElement('div');
  nc.setAttribute('id','line');
  c.append(nc)

  let nb= document.querySelector('#line');

  let n= 4;
  let fnum = 10;
  let snum = 11;
  let pagenum = 0;
  function next() {
    if (fnum == 14) {
      n= 4;
      fnum = 10;
      snum = 11;
    } else {
      n++;
      fnum++;
      snum++;
    }
    fpci.src = pimg[fnum].img;
    fpct.innerText = ptitle[fnum].title;

    spci.src = pimg[snum].img;
    spct.innerText = ptitle[snum].title;

    nb.innerText= ptitle[n].title;

    if (pagenum == 3) {
      pagenum = 0;
      document.querySelector('#balls>button:nth-child('+(pagenum+1)+')').style.backgroundColor= "yellow" ;
      document.querySelector('#balls>button:nth-child('+(pagenum+2)+')').style.backgroundColor= "white" ;
      document.querySelector('#balls>button:nth-child('+(pagenum+3)+')').style.backgroundColor= "white" ;
      document.querySelector('#balls>button:nth-child('+(pagenum+4)+')').style.backgroundColor= "white" ;
    } else {
      pagenum++;
      document.querySelector('#balls>button:nth-child('+(pagenum)+')').style.backgroundColor= "white" ;
      document.querySelector('#balls>button:nth-child('+(pagenum+1)+')').style.backgroundColor= "yellow" ;
      document.querySelector('#balls>button:nth-child('+(pagenum+2)+')').style.backgroundColor= "white" ;
    }
    
  };
  setInterval(function () {next();},1000);

}

// **************************videos**********************************
let vimg=[];
let vtitle=[];

let vadd= (data)=>{
  data.forEach(el => {
    let img= el.urlToImage;

    let title= el.title;

    vimg.push({img});
    vtitle.push({title});
  });
  let fpci= document.querySelector('#video1');
  let fpct= document.querySelector('#videoText1');

  let spci= document.querySelector('#video2');
  let spct= document.querySelector('#videoText2');

  let fnum = 3;
  let snum = 4;
  let pagenum = 0;
  function next() {
    if (fnum == 5) {
      fnum = 3;
      snum = 4;
    } else {
      fnum++;
      snum++;
    }
    fpci.src = vimg[fnum].img;
    fpct.innerText = vtitle[fnum].title;

    spci.src = vimg[snum].img;
    spct.innerText = vtitle[snum].title;

    if (pagenum == 2) {
      pagenum = 0;
      document.querySelector('#b>button:nth-child('+(pagenum+1)+')').style.backgroundColor= "yellow" ;
      document.querySelector('#b>button:nth-child('+(pagenum+2)+')').style.backgroundColor= "white" ;
      document.querySelector('#b>button:nth-child('+(pagenum+3)+')').style.backgroundColor= "white" ;
    } else {
      pagenum++;
      document.querySelector('#b>button:nth-child('+(pagenum)+')').style.backgroundColor= "white" ;
      document.querySelector('#b>button:nth-child('+(pagenum+1)+')').style.backgroundColor= "yellow" ;
    }
    
  };
  setInterval(function () {next();},1000);

}