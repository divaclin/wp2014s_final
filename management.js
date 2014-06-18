$().ready(function(){
    $("article").append('<section style="background:#232A34; margin-top:77px; text-align:center; height:'+window.screen.height+'px;"></section>');
	var user = Parse.User.current();
	var Petition = Parse.Object.extend('Petition');
	var query = new Parse.Query(Petition);
	
	console.log(user);
	query.equalTo('user_id',user);
	query.find({
	  success: function(data) {
		  for(var i=0;i<data.length;i++){
			  var url=data[i].toJSON().picture.url;
			  console.log(data[i].toJSON().id);
              $("section").append('<div class="issue-block" style="width:'+window.screen.width/5+'px;"><div class="issue-content"><p>'+data[i].toJSON().title+'</p><img src="'+url+'" class="issue-img" /><div style="padding-bottom:10px;">' +data[i].createdAt.getFullYear()+'/'+(parseInt(data[i].createdAt.getMonth())+1)+'/'+ data[i].createdAt.getDate() + '</div><span><a href="#">我要連署</a><a href="#">連署聲明</a></span></div></div>');  
		  }
	  }
	});
	
	
});