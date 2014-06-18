Parse.initialize("LQXW7t4hRmWf8Lw4dLcPaNRDQbMoe24rctZE7G0z", "qVd2E2OB786ORKQ83hWg6OQRs17YLIPf9H0MdUTP");


/*加入搜尋的id<input type="text" class="form-control" id="search_text">*/

function search(){
	console.log("in search");


	var search_text = document.getElementById("search_text").value;
	console.log(search_text);

	var id_array = new Array();

	var Petition = Parse.Object.extend("Petition");
	var query = new Parse.Query(Petition);
	query.select("title");
	query.find().then(function(results) {
  		// each of results will only have the selected fields available.
  		console.log("results:");
  		console.log(results);

  		for(var i=0; i<results.length; i++){
  			var str = results[i].attributes.title;
  			if(str.search(search_text) != -1){	// found->true
  				id_array.push(results[i].id);
  			}
		}
		console.log("id_array: ",id_array);

		var Petition = Parse.Object.extend("Petition");
		var query = new Parse.Query(Petition);

		console.log(id_array.length);


		var clear_article = 0;
		//var object = new Parse.Object;
		for(var i=0; i<id_array.length; i++){
			query.equalTo("objectId", id_array[i]);
			console.log("id_array: ",id_array[i]);
			query.find({
  				success: function(results) {
    				//alert("Successfully retrieved " + results.length + " scores.");
    				// Do something with the returned Parse.Object values
    				for (var j = 0; j < results.length; j++) { 
      					//object.add(results[j]);
      					var object = results[j];
      					//alert(object.id + ' - ' + object.get('title'));
    				}
    				console.log(object);

    				if(clear_article == 0){
    					$("article").empty();
    					clear_article = 1;
						$("article").css({"height":window.screen.height,"background":"#232A34","margin-top":"77px"});
    				}


    				var title = object.attributes.title;
    				var pic_url = object.attributes.picture._url;
    				var issue_date = object.createdAt;
    				var petition_url = "http//:tiy0311.github.io/wp2014s_final_project/petition.html";
    				var string = '<div class="issue-block style="width:'+window.screen.width/5+'px;"><div class="issue-content"><p>' + title + '</p><img src="' + pic_url +'" class="issue-img" /><span>' + 'undefined now' + '</span><span><a href="#">我要連署</a><a href="' + petition_url + '">連署聲明</a></span></div></div>';

    				$("article").append(string);
    				
    				/*
    				var Article = document.getElementById("Article");
    				Article.innerHTML += 
                        '<div class="issue-block">
				  			<div class="issue-content">
					  			<p>'+搶救石虎+'</p>
					  			<img src="'+img/stonetiger.png+'" class="issue-img" />
					  			<span>'+日期+'</span>
					  		</div>
					  		<span>
						  		<a href="#">我要連署</a>
						  		<a href="'+http:tiy0311.github.io/wp2014s_final_project/petition.html+'">連署聲明</a>	  
					  		</span>
				  		</div>
			  		</div>';
					*/
  				},
  				error: function(error) {
    				//alert("Error: " + error.code + " " + error.message);
  				}
			});
		}
	});


};