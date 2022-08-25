
/* ---------------function to change Top news Banner----------------------- */
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
