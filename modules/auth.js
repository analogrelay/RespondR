var azure = require('azure');

function requiresTable(name, func) {
    var tableService = azure.createTableService();
    tableService.createTableIfNotExists(name, function(err) {
        if(!err) {
            func.apply(this, )
        }
    });
}

exports.setPassword = requiresTable('admin', function(tableService, password) {

});

exports.checkPassword = function(password) {
    
};