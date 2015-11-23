var sqlite3 = require('sqlite3').verbose();

var db_name = './models/algorun.db';
var db = new sqlite3.Database(db_name);

exports.search = function (keyword, callback){
    keyword = "%" + keyword + "%";
    var search_keyword_query = "SELECT Algo_Manifest FROM Algo JOIN Algo_Tag ON Algo.Algo_ID=Algo_Tag.Algo_ID JOIN Tag ON Algo_Tag.Tag_ID=Tag.Tag_ID WHERE Tag.Tag_Keyword LIKE ? UNION SELECT Algo_Manifest FROM Algo WHERE Algo_Name LIKE ?";
    db.all(search_keyword_query, [keyword, keyword], function(error, rows){
        result = [];
        
        rows.forEach(function(entry){
            manifest = JSON.parse(entry.Algo_Manifest);
            
            var result_row = {};
            result_row["name"] = manifest.algo_name;
            result_row["description"] = manifest.algo_summary;
            if(manifest.input_type != undefined){
                result_row["input_type"] = manifest.input_type;
            }else{
                result_row["input_type"] = "algorun:custom";
            }
            result_row["keywords"] = manifest.algo_keywords;
            result_row["docker_image"] = manifest.algo_image;
            result_row["authors"] = [];
            manifest.algo_authors.forEach(function(author){
                result_row["authors"].push(author);
            });
            
            result.push(result_row);
        });
        
        callback(result);
    });
}

exports.closeDB = function (){
    db.close();
}