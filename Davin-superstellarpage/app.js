
function social(){
    $(".1well").append("<div class='rightcontentbox' style='text-align:center;width:198px;padding-bottom:5px;'> <div class='fb-like-box fb_iframe_widget' data-href='https://www.facebook.com/NightsAtFreddys/' data-width='195' data-colorscheme='dark' data-show-faces='false' data-header='false' data-stream='false' data-show-border='false' fb-xfbml-state='rendered' fb-iframe-plugin-query='app_id=6252138831&amp;color_scheme=dark&amp;container_width=198&amp;header=false&amp;href=https%3A%2F%2Fwww.facebook.com%2Fmountandblade&amp;locale=en_US&amp;sdk=joey&amp;show_border=false&amp;show_faces=false&amp;stream=false&amp;width=195'><span style='vertical-align: bottom; width: 195px; height: 70px;'><iframe name='f4b1b55c07128' width='195px' height='1000px' frameborder='0' allowtransparency='true' allowfullscreen='true' scrolling='no' title='fb:like_box Facebook Social Plugin' src='https://www.facebook.com/plugins/like_box.php?app_id=6252138831&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fconnect%2Fxd_arbiter%2Fr%2FXBwzv5Yrm_1.js%3Fversion%3D42%23cb%3Df3eda24ef6ed82%26domain%3Dwww.taleworlds.com%26origin%3Dhttps%253A%252F%252Fwww.taleworlds.com%252Ff3f58249e8d0bf%26relation%3Dparent.parent&amp;color_scheme=dark&amp;container_width=198&amp;header=false&amp;href=https://www.facebook.com/NightsAtFreddys/;locale=en_US&amp;sdk=joey&amp;show_border=false&amp;show_faces=false&amp;stream=false&amp;width=195' style='border: none; visibility: visible; width: 195px; height: 70px;' class=''> </iframe></span></div> <iframe id='twitter-widget-0' scrolling='no' frameborder='0' allowtransparency='true' class='twitter-follow-button twitter-follow-button-rendered' title='Twitter Follow Button' src='https://platform.twitter.com/widgets/follow_button.b4d0882c4750b56021097fae9667fe03.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;screen_name=FNAF_Fanpage_&amp;show_count=false&amp;show_screen_name=true&amp;size=m&amp;time=1501186421515' style='position: static; visibility: visible; width: 167px; height: 20px;' data-screen-name='FNAF'></iframe></div>" );
    }

function upcoming(){
    $(".2well").append("<img width= '100%' src = 'http://img06.deviantart.net/6167/i/2016/291/8/0/fnaf_sister_location_custom_night_teaser_by_cooldud111-dalgywd.jpg' >")
}

function video(){
    $(".3well").append("<iframe height= '400px' width='100%' src='https://www.youtube.com/embed/MBdct0KmpTE' frameborder='0' allowfullscreen></iframe>");
}
function setup(){
    $(".pict").append("<img src= 'http://i0.kym-cdn.com/photos/images/original/001/264/675/c9d.jpg' >")
    social();
    upcoming();
    video();
}



$(document).ready(setup);


