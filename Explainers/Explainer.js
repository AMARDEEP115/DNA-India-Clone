// **************************E_cont*******************************
let cont= document.getElementById('E_cont');

let getdata= async ()=>{
  try {
    let res= await fetch(`https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=in`);
    let data= await res.json();
    append(data.articles);
    padd(data.articles);
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
  console.log(pimg)
  let fpci= document.querySelector('#video1');
  let fpct= document.querySelector('#videoText1');

  let spci= document.querySelector('#video2');
  let spct= document.querySelector('#videoText2');

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

