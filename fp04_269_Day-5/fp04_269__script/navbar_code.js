let navbar = () =>{
    return `<div id="navbarTop">
    <div>
        <a href="#"><img id="logo" src="https://english.cdn.zeenews.com/static/apprun/dna/icons/logodna.png" alt=""></a>
        <div id="eng" onclick="hindi()">हिंदी में पढ़ें</div>
    </div>
    <div>
        <img id="sIcon" onclick="disBlk()" src="https://english.cdn.zeenews.com/static/public/menusearch.svg" alt="">
        <div id="srch">
            <div class="gcse-search"></div>
        </div>
    </div>
</div>
<div id="navbarBottom">
    <div><p>Top News</p></div>
    <div id="sliding_text" class="animated-text">
        <div class="line"><a href="#"><p>Know reason behind accidental firing of India’s BrahMos missile that landed in Pakistan</p></a></div>
        <div class="line"><a href="#"><p>Six low-intensity earthquakes jolt parts of J&K in less than 24 hours</p></a></div>
        <div class="line"><a href="#"><p>PlayStation VR2 launch date announced by Sony: Know its features, other details</p></a></div>
        <div class="line"><a href="#"><p>Liger star Vijay Deverakonda shares why he's never said 'I love you too', says 'my dad taught me</p></a></div>
        <div class="line"><a href="#"><p>'Sonali Phogat said something fishy is going on': Sister Rupesh demands CBI probe</p></a></div>
        <div class="line"><a href="#"><p>UP: CM Yogi Adityanath orders property confiscation of those involved in illicit liquor, drug trade</p></a></div>
        <div class="line"><a href="#"><p>Jammu and Kashmir: Missing BJP leader’s body found hanging from tree in Kathua, probe launched</p></a></div>
    </div>
</div>`
};

export default navbar;