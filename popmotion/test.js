/*
var myActor = new ui.Actor({
	onUpdate: function(output)
	{
		console.log(output);
	}
});

var foo = new ui.Tween({
	values: {
		x: 100
	}
});

myActor.start(foo);
*/

var ballActor = new ui.Actor('#ball');

var foo = new ui.Tween({
	values: {
		x: 100
	}
});

//var foo = new ui.Simulate({
//	values: {x : 100}
//});

ballActor.start(foo);
