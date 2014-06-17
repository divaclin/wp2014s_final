var catagorylist=["img/earth.png","img/p_and_e.png","img/e_and_c.png","img/life.png","img/labor.png"];
var catagory=["environment-and-land","politics-and-economics","education-and-culture","livelihood","labor"];

$().ready(function(){
	var catagory_photo_width=window.screen.width*3/5;
    $("article").append('<section style="background:#fff; margin-top:77px; text-align:center; height:'+window.screen.height*2/3+'px;"><img id="catagory_photo" src="'+catagorylist[0]+'" style="width:'+catagory_photo_width+'px;"/></section>');
	$("article").append('<section id="catagory_content" style="background:#232A34; height:'+2*window.screen.height+'px; margin-top:20px"></section>');
	
});

function CatagoryChange(e){
	$("#catagory_content").empty();
	$("#catagory_photo").attr("src", catagorylist[e]);
	var Petition = Parse.Object.extend('Petition');
	var query = new Parse.Query(Petition);
	query.equalTo('category',catagory[e]);
	query.find({
	  success: function(data) {
		  for(var i=0;i<data.length;i++){
			  console.log(data[i]);
			  var translation=data[i].toJSON;
              $("#catagory_content").append('<div class="issue-block"><div class="issue-content"><p>'+translation.title+'</p><img src="'+translation.picture.url+'" class="issue-img" /><div>'+translation.creatAt+'</div><span><a href="#">我要連署</a><a href="#">連署聲明</a></span></div></div>');  
		  }
	  }
	});
}