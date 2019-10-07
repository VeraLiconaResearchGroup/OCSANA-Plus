var search = instantsearch({
    appId: 'CPO3M6SOV0',
    apiKey: '52f439effa428d4e07de53955207887d',
    indexName: 'dev_OCSANA',
    urlSync: true
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-box',
        placeholder: 'type algorithm name or keyword...'
    }));

search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits-container',
        hitsPerPage: 100,
        templates: {
            empty: 'No results',
            item: function(data) {
                var algo_name = data._highlightResult.algo_name.value;
                var algo_authors = "";
		var idx_auth=1;
                for(i=0; i<data.algo_authors.length;i++){
			if (idx_auth>1) { algo_authors += ", " }
			if(data.algo_authors[i].personal_website != undefined && data.algo_authors[i].personal_website != ""){
				algo_authors += "<a style='text-decoration:none;' href='" + data.algo_authors[i].personal_website + "' target='_blank'>"+data.algo_authors[i].name+ "</a>&nbsp&nbsp";
			}else{
				algo_authors += data.algo_authors[i].name;
			}
			idx_auth+=1;
                }
                var algo_summary = data._highlightResult.algo_summary.value;
                var algo_keywords ='<span style="font-size:85%;">';
		var idx_kw=1;
                data._highlightResult.algo_keywords.forEach(function(entry){
		    if (idx_kw>1) { algo_keywords += " - " }
                    algo_keywords += "<i>"+entry.value + "</i>";
		    idx_kw+=1;
                });
		algo_keywords += '</span>'
                var algo_link = data.url;

                var result_card = "<div class='col-md-4 col-sm-6'> \
	        			<div class='service-wrapper'> \
		        			<h2 class='search'>" + algo_name + "</h2>";
                result_card += " \
		        			<p style='border-bottom:2px solid #2C3D50;padding-bottom:10px;'>" + algo_summary + "</p> \
		        			<p style='font-size:90%;'>" + algo_authors + "</p> \
		        			<p>" + algo_keywords + "</p> \
		        			<div style='width:82%;position:absolute;margin:0px auto;bottom:30px;'><a href='" + algo_link + "' target='_blank' class='btn' style='text-decoration:none;'>Use now</a></div> \
		        		</div> \
	        		</div>";
                return result_card;
            },
        }
    }));

search.start();
