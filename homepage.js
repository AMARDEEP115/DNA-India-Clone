var i = 0;
function prev() {
    i = i-1;
    if(i<0){
        i=3;    
    }

    var banner = document.querySelector('#newsBanner');
    switch (i) {
        case 0:
            banner.innerHTML = 'After Microsoft, Meta, and Google, Apple to slow down hiring in 2023';
            break;
        case 1:
            banner.innerHTML = 'Priyanka Chopra drops photos with her "birthday squad", pens thankful note';
            break;
        case 2:
            banner.innerHTML= "Ajinkya Rahane gets trolled after asking for movie suggestions, fans say 'watch your highlights'";
            break;
        case 3:
            banner.innerHTML = "NDA stands for 'No Data Available': Rahul Gandhi's dig at Centre over lack of data"
        default:
            break;
    }
}

function next() {
    i = i+1;
    if(i>3){
        i=0;
    }
    var banner = document.querySelector('#newsBanner');
    switch (i) {
        case 0:
            banner.innerHTML = 'After Microsoft, Meta, and Google, Apple to slow down hiring in 2023';
            break;
        case 1:
            banner.innerHTML = 'Priyanka Chopra drops photos with her "birthday squad", pens thankful note';
            break;
        case 2:
            banner.innerHTML= "Ajinkya Rahane gets trolled after asking for movie suggestions, fans say 'watch your highlights'";
            break;
        case 3:
            banner.innerHTML = "NDA stands for 'No Data Available': Rahul Gandhi's dig at Centre over lack of data"
        default:
            break;
    }
}


/* --------------Function to change videos ------------------------- */

function ball(params) {
    var ball1 = document.getElementById('ball1');
    var ball2 = document.getElementById('ball2');
    var ball3 = document.getElementById('ball3');
    var ball4 = document.getElementById('ball4');
    var video1 = document.getElementById('video1')
    var video2 = document.getElementById('video2')
    var videoText1 = document.getElementById('videoText1')
    var videoText2 = document.getElementById('videoText2')

    if(params==1){
        video1.src= 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523885-20thumbnail1800412.jpeg'
        video2.src = 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523880-20thumbnail1800411.jpg';
        videoText1.innerHTML = 'Top news of the day, July 20';
        videoText2.innerHTML = 'Know why over 1.6 lakh Indians have renounced citizenship in 2021';
        ball1.style.backgroundColor='#ffde2f';
        ball2.style.backgroundColor='#d6d6d6';
        ball3.style.backgroundColor='#d6d6d6';
        ball4.style.backgroundColor='#d6d6d6';
    } else if(params==2){
        video2.src= 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/23/2524619-2300000004.jpg'
        video1.src = 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/20/2523880-20thumbnail1800411.jpg';
        videoText2.innerHTML = 'Ambulance carrying deceased kallakurichi school girl meets with ';
        videoText1.innerHTML = 'Know why over 1.6 lakh Indians have renounced citizenship in 2021';
        ball1.style.backgroundColor='#d6d6d6';
        ball2.style.backgroundColor='#ffde2f';
        ball3.style.backgroundColor='#d6d6d6';
        ball4.style.backgroundColor='#d6d6d6';
    } else if(params==3){
        video1.src= 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/23/2524619-2300000004.jpg'
        video2.src = 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/23/2524616-2300000010.jpg';
        videoText1.innerHTML = 'Ambulance carrying deceased kallakurichi school girl meets with ';
        videoText2.innerHTML = 'Gujarat crocodiles enter residential areas due to rain ';
        ball1.style.backgroundColor='#d6d6d6';
        ball2.style.backgroundColor='#d6d6d6';
        ball3.style.backgroundColor='#ffde2f';
        ball4.style.backgroundColor='#d6d6d6';
    } else if(params==4){
        video2.src= 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/23/2524615-2300000007.jpg'
        video1.src = 'https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/07/23/2524616-2300000010.jpg';
        videoText2.innerHTML = '2022 global energy prize ceremony held in russia';
        videoText1.innerHTML = 'Gujarat crocodiles enter residential areas due to rain ';
        ball1.style.backgroundColor='#d6d6d6';
        ball2.style.backgroundColor='#d6d6d6';
        ball3.style.backgroundColor='#d6d6d6';
        ball4.style.backgroundColor='#ffde2f';
    }
}
