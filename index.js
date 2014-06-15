$().ready(function(){
	var height=window.screen.height-56;
	var logo_img_fixed=(window.screen.width-628)/2-50;
	var html='<section style="width:100%; height:'+height+'px; z-index:3; background:#fff;margin:77px 0 0 0;"><img style="position:relative; z-index:2; left:'+logo_img_fixed+'px;top:100px;" src="img/index_logo.png"/><img style="position:absolute; right:0px;" src="img/index_logo_hand.png"/></section>';
	$("article").append(html);
	var ul_fixed=(window.screen.width-354)/2-200;
	var search_fixed=(window.screen.width-220)/2+ul_fixed-180;
	$("article section").append('<ul id="index_ul" style="left:'+ul_fixed+'px;"><img src="img/listyle.png"><li><a>關於我們</a></li><img src="img/listyle.png"><li><a>查看連署</a></li><img src="img/listyle.png"><li><a>登入/註冊</a></li><img src="img/listyle.png"><li><a>搜尋連署</a></li></ul>');
	$("article section").append('<div class="input-group col-lg-3" style="width:220px; position:relative; left:'+search_fixed+'px; bottom:-120px;" ><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-custom" type="button"><span class="glyphicon glyphicon-search white"></span></button></span></div>');	
	var index02_height_pos_fixed=(window.screen.height-(window.screen.width-400)*947/1857)/2-100;
	html='<section style="width:100%; height:'+height+'px; background:#232A34;margin:20px 0 0 0; text-align:center;"><img style="width:'+(window.screen.width-400)+'px; padding-top:'+index02_height_pos_fixed+'px;" src="img/index02.png"/></section>';
	$("article").append(html);
	
	$("article").append(html);	
});