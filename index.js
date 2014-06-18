$(document).ready(function(){
	var height=window.screen.height-56;
	var logo_img_fixed=(window.screen.width-628)/2-50;
	var html='<section style="width:100%; height:'+height+'px; z-index:3; background:#fff;margin:77px 0 0 0;"><img style="position:relative; z-index:2; left:'+logo_img_fixed+'px;top:100px;" src="img/index_logo.png"/><img style="position:absolute; right:0px;" src="img/index_logo_hand.png"/></section>';
	$("article").append(html);
	var ul_fixed=(window.screen.width-354)/2-50;
	var search_fixed=(window.screen.width-220)/2+ul_fixed-180;
	$("article section").append('<ul id="index_ul" style="left:'+ul_fixed+'px;"><img src="img/listyle.png"><li><a>關於我們</a></li><img src="img/listyle.png"><li><a href="catagory.html">查看連署</a></li><img src="img/listyle.png"><li><a>搜尋連署</a></li></ul>');	
	var index02_height_pos_fixed=(window.screen.height-(window.screen.width-400)*947/1857)/2-100;
	html='<section style="width:100%; height:'+height+'px; background:#232A34;margin-top:20px; text-align:center;"><img style="width:'+(window.screen.width-400)+'px; padding-top:'+index02_height_pos_fixed+'px;" src="img/index02.png"/></section>';
	$("article").append(html);
	var index03_height_pos_fixed=window.screen.height/5;
	html='<section id="index03_layer_1" style="width:100%; height:'+window.screen.height+'px; text-align:center; background:#232A34; margin-top:20px;"><img id="index_want_graph" src="img/want_graph.png" style="height:'+index03_height_pos_fixed+'px; margin-top:'+index03_height_pos_fixed*4/5+'px; margin-right:'+index03_height_pos_fixed*2/5+'px;"/><img id="index_establish_graph" src="img/establish_graph.png" style="height:'+index03_height_pos_fixed+'px; margin-top:'+index03_height_pos_fixed*4/5+'px; margin-left:'+index03_height_pos_fixed*2/5+'px;"/><br/></section>';
	$("article").append(html); 
	$("#index03_layer_1").append('<a href="catagory.html"><img src="img/want_text.png" style="width:193px; margin-top:40px; margin-right:'+index03_height_pos_fixed*2/5+'px;"/></a><a data-bb="alert_callback" class="join-petition" href="#inline" title="Form"><img src="img/establish_text.png" style="width:193px; margin-top:40px; margin-left:'+index03_height_pos_fixed*2/5+'px;"/></a>');
	
	
    $(".join-petition").fancybox();
         $("#Form").submit(function() { return false; });

         function validateForm() {
           var title = document.forms["Form"]["petition-title"].value;
           var unit = document.forms["Form"]["petition-unit"].value;
           var category = document.forms["Form"]["category"].value;
           var intro = document.forms["Form"]["petition-intro"].value;
           var txt = document.forms["Form"]["petition-text"].value;
           var people = document.forms["Form"]["petition-people"].value;
           var timeline1 = document.forms["Form"]["timeline-1"].value;
           var timeline2 = document.forms["Form"]["timeline-2"].value;
           var timeline3 = document.forms["Form"]["timeline-3"].value;
           var timeline4 = document.forms["Form"]["timeline-4"].value;

           if (title == null || title == "") {
             alert("請輸入連署標題");
             return false;

           } else if (category == 'default') {
             alert("請選擇分類");
             return false;

           } else if (intro == null || intro == "") {
             alert("請輸入連署事件簡介");
             return false;

           } else if (txt == null || txt == "") {
             alert("請輸入聲明內容");
             return false;

           } else if (people == null || people == "") {
             alert("請輸入目標人數");
             return false;
           }

           var Petition = Parse.Object.extend("Petition");
           var petition = new Petition();
 
           petition.set("title", title);
           petition.set("unit",unit);
           petition.set("category",category);
           petition.set("info",intro);
           petition.set("content",txt);
           petition.set("target",people);
           petition.set("timeline1",timeline1);
           petition.set("timeline2",timeline2);
           petition.set("timeline3",timeline3);
           petition.set("timeline4",timeline4);
 
           petition.save(null, {
             success: function(petition) {
               // Execute any logic that should take place after the object is saved.
               alert('New object created with objectId: ' + petition.id);
             },
             error: function(petition, error) {
               // Execute any logic that should take place if the save fails.
               // error is a Parse.Error with an error code and description.
               alert('Failed to create new object, with error code: ' + error.description);
             }
           });

         };
	
    	
});
