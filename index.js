$().ready(function(){
	var height=window.screen.height-56;
	var logo_img_fixed=(window.screen.width-628)/2-50;
	var html='<section style="width:100%; height:'+height+'px; z-index:3; background:#fff;margin:77px 0 0 0;"><img style="position:relative; z-index:2; left:'+logo_img_fixed+'px;top:100px;" src="img/index_logo.png"/><img style="position:absolute; right:0px;" src="img/index_logo_hand.png"/></section>';
	$("article").append(html);
	var ul_fixed=(window.screen.width-354)/2-200;
	var search_fixed=(window.screen.width-220)/2+ul_fixed-180;
	$("article section").append('<ul id="index_ul" style="left:'+ul_fixed+'px;"><img src="img/listyle.png"><li><a>關於我們</a></li><img src="img/listyle.png"><li><a href="catagory.html">查看連署</a></li><img src="img/listyle.png">	<li id="if-not-logged-in"><a href="#" id="login-btn">登入/註冊</a></li><li id="if-logged-in" style="display:none"><a href="#" id="logout-btn">登出</a></li><img class="after_login" src="img/listyle.png" style="display:none;"/><li class="after_login" style="display:none;"><a href="">管理連署</a></li><img src="img/listyle.png"><li><a>搜尋連署</a></li></ul>');
	$("article section").append('<div class="input-group col-lg-3" style="width:220px; position:relative; left:'+search_fixed+'px; bottom:-120px;" ><input type="text" class="form-control"><span class="input-group-btn"><button class="btn btn-custom" type="button"><span class="glyphicon glyphicon-search white"></span></button></span></div>');	
	var index02_height_pos_fixed=(window.screen.height-(window.screen.width-400)*947/1857)/2-100;
	html='<section style="width:100%; height:'+height+'px; background:#232A34;margin-top:20px; text-align:center;"><img style="width:'+(window.screen.width-400)+'px; padding-top:'+index02_height_pos_fixed+'px;" src="img/index02.png"/></section>';
	$("article").append(html);
	var index03_height_pos_fixed=window.screen.height/5;
	html='<section id="index03_layer_1" style="width:100%; height:'+window.screen.height+'px; text-align:center; background:#232A34; margin-top:20px;"><img id="index_want_graph" src="img/want_graph.png" style="height:'+index03_height_pos_fixed+'px; margin-top:'+index03_height_pos_fixed*4/5+'px; margin-right:'+index03_height_pos_fixed*2/5+'px;"/><img id="index_establish_graph" src="img/establish_graph.png" style="height:'+index03_height_pos_fixed+'px; margin-top:'+index03_height_pos_fixed*4/5+'px; margin-left:'+index03_height_pos_fixed*2/5+'px;"/><br/></section>';
	$("article").append(html); 
	$("#index03_layer_1").append('<a href="catagory.html"><img src="img/want_text.png" style="width:193px; margin-top:40px; margin-right:'+index03_height_pos_fixed*2/5+'px;"/></a><a href="#"><img src="img/establish_text.png" style="width:193px; margin-top:40px; margin-left:'+index03_height_pos_fixed*2/5+'px;"/></a>');	
});