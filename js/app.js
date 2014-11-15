var Task = function(task, status, id) {
	var self = this;

	self.task   = ko.observable(task);
	self.isDone = ko.observable(false);
	self.id 	= id;
	
	self.taskStatus = ko.computed(function() {
		if (self.isDone() === true) {
			return "task-done"
		}
	});

};

var TaskViewModel = function() {
	var self = this;
	self.tasks = ko.observableArray([]);

	self.textField = ko.observable();

	self.id = -1;

	self.addTask = function() {
		self.id += 1;
		if (self.textField().trim() != "") {
			self.tasks.push(new Task(self.textField(), true, self.id));
			self.textField("");
		}
		else {
			self.textField("");
		}
		console.log(self.tasks());
	};

	self.removeTask = function() {
		var i = 0;
		var length = self.tasks().length;
		while(i < length) {
			if (self.tasks()[i].id === this.id) {
				self.tasks.splice(i, 1);
				break;
			}
			i++;
		}
	};
	
	self.completion = ko.computed(function() {
		var isDoneList = ko.utils.arrayFilter(self.tasks(), function(task) {
			return task.isDone();
		});
		return isDoneList.length + 
				" of " + 
				self.tasks().length + 
				" tasks completed";
	});
};

ko.applyBindings(new TaskViewModel());