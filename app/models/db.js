var sqlite3 = require('sqlite3').verbose();

var db_name = './models/algorun-db';
var db = new sqlite3.Database(db_name);

exports.searchName = function (name, callback){
    name = "%" + name + "%";
    var search_name_query = "SELECT * FROM algorithm WHERE name LIKE ?";
    db.all(search_name_query, [name], function(error, rows){
        callback(rows);
    });
}
exports.searchKeyword = function (keyword, callback){
    keyword = "%" + keyword + "%";
    var search_keyword_query = "SELECT * FROM algorithm WHERE keywords LIKE ?";
    db.all(search_keyword_query, [keyword], function(error, rows){
        callback(rows);
    });
}

exports.closeDB = function (){
    db.close();
}