/*--------------------------------------------------//
/$$$$$$   /$$$$$$   /$$$$$$   /$$$$$$
/$$__  $$ /$$__  $$ /$$__  $$ /$$__  $$
| $$  \ $$| $$  \__/| $$  \__/| $$  \__/
| $$$$$$$$| $$ /$$$$| $$      |  $$$$$$
| $$__  $$| $$|_  $$| $$       \____  $$
| $$  | $$| $$  \ $$| $$    $$ /$$  \ $$
| $$  | $$|  $$$$$$/|  $$$$$$/|  $$$$$$/
|__/  |__/ \______/  \______/  \______/
Developed with loving code by http://www.agcs.works
For questions and support email info@agcs.works
//--------------------------------------------------*/

var tl = new TimelineMax({
    delay:1,
    onComplete:addCtaListeners
});

var agcsVideo = document.getElementById('video');
    agcsVideo.pause();
var agcsVideo2 = document.getElementById('video2');
    agcsVideo2.pause();
var agcsVideo3 = document.getElementById('video3');
    agcsVideo3.pause();        

function initBanner() {

    TweenMax.set(['div','img'], {force3D: true, backfaceVisibility: 'hidden', rotationZ: '0.01deg', z:0.01});

		tl
            .set([text1,text2],{x:-300, autoAlpha:1})
            .set(cta,{scale:0,autoAlpha:1})

            .add( function(){
                agcsVideo.play();
            },'start')

            .to([logo,credit],1,{autoAlpha:1},'start')
            .to(text1,1,{x:0,ease:Power1.easeOut},'start+=1')
            .to(cta,0.5,{scale:1,ease:Back.easeOut},'start+=2')
            .to(text1,1,{autoAlpha:0},'start+=3')
            .to(text2,1,{x:0,ease:Power1.easeOut},'start+=3')

            .set(video2,{autoAlpha:1},'start+=8')
            .add( function(){
                agcsVideo2.play();
            },'start+=8')
            .set(video3,{autoAlpha:1},'start+=16')
            .add( function(){
                agcsVideo3.play();
            },'start+=16')
            .add( function(){
                agcsVideo3.pause();
            },'start+=22')
			
		;

}
function addCtaListeners() {
    container.addEventListener('mouseover', on_cta_over);
    container.addEventListener('mouseout', on_cta_out);
}

function on_cta_over() {
    //TweenMax.to(cta, 0.25, {scale:1.1, ease:Expo.easeOut});
}
function on_cta_out() {
    //TweenMax.to(cta, 0.25, {scale:1, ease:Expo.easeIn});
}