/*
	Accepts an array called tasks
	Our viewmodel will create an id that increments for every new List	
*/
var List = function(tasks, id) {
	var self = this;
	
	self.tasks = ko.observableArray(tasks);
	self.id = id;
};

var ListViewModel = function() {
	
};

ko.applyBindings(new ListViewModel());