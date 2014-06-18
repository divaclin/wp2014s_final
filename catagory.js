var catagorylist=["img/earth.png","img/p_and_e.png","img/e_and_c.png","img/life.png","img/labor.png"];
var catagory=["environment-and-land","politics-and-economics","education-and-culture","livelihood","labor"];

$().ready(function(){
	var catagory_photo_width=window.screen.width*3/5;
    $("article").append('<section style="background:#fff; margin-top:77px; text-align:center; height:'+window.screen.height*2/3+'px;"><img id="catagory_photo" src="'+catagorylist[0]+'" style="width:'+catagory_photo_width+'px;"/></section>');
	$("article").append('<section id="catagory_content" style="background:#232A34; height:'+2*window.screen.height+'px; margin-top:20px"></section>');
	CatagoryChange(0);
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
			  var url=data[i].toJSON().picture.url;
			  console.log(data[i].toJSON().id);
              $("#catagory_content").append('<div class="issue-block" style="width:'+window.screen.width/5+'px;"><div class="issue-content"><p>'+data[i].toJSON().title+'</p><img src="'+url+'" class="issue-img" /><div>' +data[i].toJSON().createdAt.getFullYear()+'/'+(parseInt(data[i].toJSON().createdAt.getMonth())+1)+'/'+ data[i].toJSON().createdAt.getDate() + '</div><span><a href="#">我要連署</a><a href="#">連署聲明</a></span></div></div>');  
		  }
	  }
	});
}