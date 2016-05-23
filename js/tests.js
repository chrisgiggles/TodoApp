function getFreshVM() {
	return new TaskViewModel();
}

QUnit.module('TaskViewModel.addTask');

QUnit.test('Can add tasks', function() {
	var vm = getFreshVM();
	vm.textField("A new task");
	vm.addTask();

	equal(vm.tasks()[0].task(), "A new task");
});

QUnit.test('Cannot add task with empty string', function() {
	var vm = getFreshVM();
	vm.textField("");
	vm.addTask();

	equal(vm.tasks()[1], undefined);
});

QUnit.test('Task ID is incremented', function() {
	var vm = getFreshVM();
	vm.textField("Task 1");
	vm.addTask();
	vm.textField("Task 2");
	vm.addTask();
	vm.textField("Task 3");
	vm.addTask();

	equal(vm.tasks()[0].id, 0);
	equal(vm.tasks()[1].id, 1);
	equal(vm.tasks()[2].id, 2);
});

QUnit.test('Text Field is emptied after adding a task', function() {
	var vm = getFreshVM();
	vm.textField("I shouldn't exist");
	vm.addTask();

	equal(vm.textField(), '');
});