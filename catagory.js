var catagorylist=["img/earth.png","img/p_and_e.png","img/e_and_c.png","img/life.png","img/labor.png"];

$().ready(function(){
	var catagory_photo_width=window.screen.width*3/5;
    $("article").append('<section style="background:#fff; margin-top:77px; text-align:center; height:'+window.screen.height*2/3+'px;"><img id="catagory_photo" src="'+catagorylist[0]+'" style="width:'+catagory_photo_width+'px;"/></section>');
	$("article").append('<section style="background:#232A34; height:'+2*window.screen.height+'px; margin-top:20px"></section>');
});

function CatagoryChange(e){
	$("#catagory_photo").attr("src", catagorylist[e]);
}