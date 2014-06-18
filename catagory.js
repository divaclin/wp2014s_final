var catagorylist=["img/earth.png","img/p_and_e.png","img/e_and_c.png","img/life.png","img/labor.png"];
var catagory=["environment-and-land","politics-and-economics","education-and-culture","livelihood","labor"];

$().ready(function(){
	var catagory_photo_width=window.screen.width*3/5;
    $("article").append('<section style="background:#fff; margin-top:77px; text-align:center; height:'+window.screen.height*2/3+'px;"><img id="catagory_photo" src="'+catagorylist[0]+'" style="width:'+catagory_photo_width+'px;"/></section>');
	$("article").append('<section id="catagory_content" style="background:#232A34; height:'+2*window.screen.height+'px; margin-top:20px"></section>');
	CatagoryChange(0);
});

function CatagoryChange(e){
	
	$("article").empty();
	var catagory_photo_width=window.screen.width*3/5;
    $("article").append('<section style="background:#fff; margin-top:77px; text-align:center; height:'+window.screen.height*2/3+'px;"><img id="catagory_photo" src="'+catagorylist[0]+'" style="width:'+catagory_photo_width+'px;"/></section>');
	$("article").append('<section id="catagory_content" style="background:#232A34; height:'+2*window.screen.height+'px; margin-top:20px"></section>');
	$("#catagory_photo").attr("src", catagorylist[e]);
	var first=0;
	var Petition = Parse.Object.extend('Petition');
	var query = new Parse.Query(Petition);
	query.equalTo('category',catagory[e]);
	query.find({
	  success: function(data) {
		  for(var i=0;i<data.length;i++){
			  var url=data[i].toJSON().picture.url;
			  console.log(data[i].toJSON().id);
			  if(first==0){
				$("#catagory_content").append('<div style="width:'+(window.screen.width*4/5)+'px; float:left; padding-top:20px;"><img src="'+url+'" style="width:400px; height:400px; border:solid 5px #fff;" /><div><p>'+data[i].toJSON().title+'</p><p>'+data[i].toJSON().content+'</p><div style="padding-bottom:10px;">' +data[i].createdAt.getFullYear()+'/'+(parseInt(data[i].createdAt.getMonth())+1)+'/'+ data[i].createdAt.getDate() + '</div><span><a href="#">我要連署</a><a href="#">連署聲明</a></span></div></div></div>');  
				  first=1;
			  }
			  else{
                $("#catagory_content").append('<div class="issue-block" style="width:'+window.screen.width/5+'px;"><div class="issue-content"><p>'+data[i].toJSON().title+'</p><img src="'+url+'" class="issue-img" /><div style="padding-bottom:10px;">' +data[i].createdAt.getFullYear()+'/'+(parseInt(data[i].createdAt.getMonth())+1)+'/'+ data[i].createdAt.getDate() + '</div><span><a href="#">我要連署</a><a href="#">連署聲明</a></span></div></div>');  
			  }
		  }
	  }
	});
}