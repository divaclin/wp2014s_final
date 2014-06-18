
console.log("in petition.js");

function petition(object_id){

	console.log("in function petition.");

	$("article").empty();
	$("article").css({
      "margin-top": "77px",
      "background": "#242A32"
    });

	var Petition = Parse.Object.extend("Petition");
	var query = new Parse.Query(Petition);
	query.equalTo("objectId", object_id);
	query.find({
  		success: function(results) {
    		//alert("Successfully retrieved " + results.length + " scores.");
    		// Do something with the returned Parse.Object values
    		for (var i = 0; i < results.length; i++) { 
      			var object = results[i];
      			//alert(object.id + ' - ' + object.get('titile'));
    		}
    		console.log(object);

    		var title = object.attributes.title;
    		var intro = object.attributes.info;
    		var pic_url = object.attributes.picture._url;
    		var unit = object.attributes.unit;
    		if(unit == undefined){
    			unit = "";
    		}

    		var issue_date = object.createdAt;
    		var content = object.attributes.content;

    		var timeline1 = object.attributes.timeline1;
    		if(timeline1 == undefined){
    			timeline1 = "";
    		}
    		var timeline2 = object.attributes.timeline2;
    		if(timeline2 == undefined){
    			timeline2 = "";
    		}
    		var timeline3 = object.attributes.timeline3;
    		if(timeline3 == undefined){
    			timeline3 = "";
    		}
    		var timeline4 = object.attributes.timeline4;
    		if(timeline4 == undefined){
    			timeline4 = "";
    		}

    		var people = object.attributes.target;
    		var count = object.attributes.count;

    		var Ptitle_Str = '<div id="Ptitle"><h1 id="petition-title">'+title+'</h1><div id="Subtitle"><div id="intro"><p id="petition-intro">'+intro+'</p></div><div id="Pimage"><img id="petition-image" src="'+pic_url+'" /></div><div id="time-and-unit"><h5 id="unit">發起單位： </h5><p id="petition-unit">'+unit+'</p><h5 id="issue-time">發佈時間： </h5><p id="petition-issue-date">'+issue_date.getFullYear()+'/'+(parseInt(issue_date.getMonth())+1)+'/'+ issue_date.getDate() +'</p></div></div></div>';
    		var Content_Str = '<div id="Content"><h2 id="content-title">連署聲明</h2><p id="petition-text">'+content+'</p></div>';
    		var Timeline_Str = '<div id="Timeline"><p id="timeline-1">'+timeline1+'</p><p id="timeline-3">'+timeline3+'</p><div id="leftend-line"><div id="leftend-line-1"></div><div id="leftend-line-3"></div></div><img src="img/arrow.png" /><div id="leftend-line"><div id="leftend-line-2"></div><div id="leftend-line-4"></div></div><p id="timeline-2">'+timeline2+'</p><p id="timeline-4">'+timeline4+'</p></div>';
    		var Progress_Str = '<div id="Progress"><h2 id="progress-title">連署進度</h2><h5 id="current-number">'+count+'</h5><h5>&nbsp;&nbsp;/&nbsp;&nbsp;</h5><h5 id="target-number">'+people+'</h5><h5>&nbsp;&nbsp;份</h5><div class="progress"><div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:'+(count/people)*100+'%"></div></div></div>';
    		var Button_Str = '<div id="Buttons"><div id="Join-petition"><a href="#inline" data-bb="alert_callback" class="join-petition">我要連署</a></div><div id="Petition-list"><a href="#">連署名單</a></div></div>';
    		var FB_Share_Str = '<div id="FB-Share"><div id="Share-petition"><div class="fb-share-button" data-href="http://divaclin.github.io/wp2014s_final/" data-type="button_count"></div></div></div>';
    		var Comments_Str = '<div id="Comments"><form action="" method="POST"><h3 id="comment-title">我有話要說</h3><h4><textarea name="comments" rows="10" cols="50"></textarea></h4><h4><input class="btn btn-success close-btn" name="submit" type="submit" value="提 交" /></h4></form></div><div id="pen"><img src="img/hand.png" /></div><div id="bottom-line"></div>';

    		var article_str = Ptitle_Str + Content_Str + Timeline_Str + Progress_Str + Button_Str + FB_Share_Str + Comments_Str;
		
    		$("article").append(article_str);

  		},
  		error: function(error) {
    		alert("Error: " + error.code + " " + error.message);
  		}
	});
	
	console.log("#inline");
	$(document).ready(function() {
		console.log("fancybox");
			$(".join-petition").fancybox();
			$("#join").submit(function() { return false; });

		
			$("#join-button").on("click", function(){
				console.log("now u click on the join btn.");
				var nameValid  = $("#name").val();
				var captchaValid    = $("#captcha").val();
			
				if(nameValid == false) {
					$("#name").addClass("error");
				}
				else if(nameValid == true){
					$("#name").removeClass("error");
				}
			
				if(captchaValid == false) {
					$("#captcha").addClass("error");
				}
				else if(captchaValid == true){
					$("#captcha").removeClass("error");
				}
			
				if(nameValid == true && captchaValid == true) {
					// if both valid, save the name.
					// first we hide the submit btn so the user doesnt click twice
					$("#join-button").replaceWith("<em>建立中</em>");
				
					$.ajax({
						type: 'POST',
						url: '',
						data: $("#join").serialize(),
						success: function(data) {
							if(data == "true") {
								$("#join").fadeOut("fast", function(){
									$(this).before("<p><strong>您已成功連署囉 ! </strong></p>");
									setTimeout("$.fancybox.close()", 1000);
								});
							}
						}
					});
				}
			});
		});
}