$(document).ready(function(){
	var height=window.screen.height-56;
	var logo_img_fixed=(window.screen.width-628)/2-50;
	var html='<section style="width:100%; height:'+height+'px; z-index:3; background:#fff;margin:77px 0 0 0;"><img style="position:relative; z-index:2; left:'+logo_img_fixed+'px;top:100px;" src="img/index_logo.png"/><img style="position:absolute; right:0px;" src="img/index_logo_hand.png"/></section>';
	$("article").append(html);
	var ul_fixed=(window.screen.width-354)/2;
	var search_fixed=(window.screen.width-220)/2+ul_fixed-180;
	$("article section").append('<ul id="index_ul" style="left:'+ul_fixed+'px;"><img src="img/listyle.png"><li><a>關於我們</a></li><img src="img/listyle.png"><li><a href="catagory.html">查看連署</a></li><img src="img/listyle.png"><li><a>搜尋連署</a></li></ul>');	
	var index02_height_pos_fixed=(window.screen.height-(window.screen.width-400)*947/1857)/2-100;
	html='<section style="width:100%; height:'+height+'px; background:#232A34;margin-top:20px; text-align:center;"><img style="width:'+(window.screen.width-400)+'px; padding-top:'+index02_height_pos_fixed+'px;" src="img/index02.png"/></section>';
	$("article").append(html);
	var index03_height_pos_fixed=window.screen.height/5;
	html='<section id="index03_layer_1" style="width:100%; height:'+window.screen.height+'px; text-align:center; background:#232A34; margin-top:20px;"><img id="index_want_graph" src="img/want_graph.png" style="height:'+index03_height_pos_fixed+'px; margin-top:'+index03_height_pos_fixed*4/5+'px; margin-right:'+index03_height_pos_fixed*2/5+'px;"/><img id="index_establish_graph" src="img/establish_graph.png" style="height:'+index03_height_pos_fixed+'px; margin-top:'+index03_height_pos_fixed*4/5+'px; margin-left:'+index03_height_pos_fixed*2/5+'px;"/><br/></section>';
	$("article").append(html); 
	$("#index03_layer_1").append('<a href="catagory.html"><img src="img/want_text.png" style="width:193px; margin-top:40px; margin-right:'+index03_height_pos_fixed*2/5+'px;"/></a><a class="ajax" href="create.html" title="Form"><img src="img/establish_text.png" style="width:193px; margin-top:40px; margin-left:'+index03_height_pos_fixed*2/5+'px;"/></a>');
	
    $(".ajax").colorbox();	
});
