(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.flowers = function() {
	this.initialize(img.flowers);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,200,148);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Text1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6B7IAWgkQAVAQAeAAQAuAAAAgpIAAgJQgRAXghAAQgiAAgVgYQgUgXAAgjQAAgjAUgYQAXgYAgAAQAiAAAQAXIAAgTIAxAAIAACJQAAAqgSAVQgZAdgzgBQguABgcgVgABxglQgKAMAAASQAAATAKAMQAJAMASAAQARAAALgMQAJgMAAgTQAAgSgJgMQgLgMgRABQgSgBgJAMgAiwBCIAAATIgyAAIAAjkIAyAAIAABNQAQgXAhAAQAjAAAUAZQAWAagBAmQABAmgWAZQgUAagjgBQggABgRgXgAimggQgKANAAATQAAAUAKANQAJANATAAQASAAAJgNQAJgNAAgUQAAgUgJgMQgJgOgSgBQgSABgKAOgAgYBVIAAiqIAxAAIAACqgAgYhnIAAgoIAxAAIAAAog");
	this.shape.setTransform(85.95,10.55,0.7372,0.7372,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// Layer_1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAHB7IAWgkQAVAQAdAAQAvAAAAgpIAAgJQgRAXghAAQgiAAgVgYQgVgXAAgjQAAgjAVgXQAWgZAhAAQAiAAAQAXIAAgTIAxAAIAACJQAAAqgTAVQgYAdg0gBQgtABgcgVgAA9glQgJAMAAASQAAATAJAMQAKAMARAAQASAAAKgMQAKgMAAgTQAAgSgKgMQgKgLgSAAQgRAAgKALgAGbAiIAAhQIgeAAIAAgnIAeAAIAAg6IAxAAIAAA6IApAAIAAAnIgpAAIAABIQAAAVATAAQAKAAAIgFIAJAlQgOAKgagBQg3AAAAg2gADfA/QgXgYAAgnQAAgnAXgYQAYgaAoAAQAmAAAXAYQAVAYAAAmIgBAPIhzAAQABARALAIQAKAJARgBQAaAAAQgUIAeAeQgcAhgvAAQgpABgZgagAFBgUQgBgQgJgJQgJgHgOgBQgPABgJAIQgKAKgBAOIBEAAIAAAAgAi0A/QgVgZAAgmQAAgmAVgZQAVgaAiAAQAhAAARAXIAAhNIAxAAIAADkIgxAAIAAgTQgRAXghgBQgiABgVgagAiMghQgJAOAAATQAAAUAJANQAJANASAAQASAAALgNQAJgNAAgUQAAgUgKgNQgKgOgSABQgRgBgKAOgAlvBHQgPgRAAgbIAAhwIAxAAIAABlQAAAdAZAAQAOAAAIgJQAJgJAAgQIAAhgIAxAAIAACqIgxAAIAAgTQgQAXghgBQgaABgPgSgAoVBCIAAATIgxAAIAAjkIAxAAIAABNQARgXAgAAQAjAAAVAZQAVAaAAAmQAAAmgVAZQgVAagjgBQggABgRgXgAoLghQgKAOAAATQAAAUAKANQAKANASAAQASAAAJgNQAJgNAAgUQAAgUgJgNQgJgOgSABQgSgBgKAOgAISBVIAAg0IA1AAIAAA0g");
	this.shape_1.setTransform(217.9823,37.0274,0.7489,0.7489);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("ABWBnQgQgPAAgZQAAgcAWgNQANgIAagEQAXgDAHgCQALgEAAgIQAAgOgaAAQgcAAgZAPIgRgkQAggTAqgBQBHAAAAA8IAAByIgtAAIAAgQQgRAUgeAAQgbAAgQgNgACOApQgYAEAAAQQAAASAWAAQAOAAAIgIQAKgHAAgPIAAgQQgGAEgYAEgAmFBXIAZgfQAWAXAjAAQAagBAAgPQAAgHgJgDQgGgDgXgEQgegEgPgKQgUgNAAgZQAAgbAWgPQATgNAggBQArABAfAaIgZAfQgIgJgOgGQgOgFgQAAQgYAAAAANQAAAHALAEIAaAEQAjAFAPALQARANAAAXQAAAdgVAPQgUAQgkAAQgyAAgcgdgAFVBwIAAjjIAxAAIAADjgAEABwIAAjjIAxAAIAADjgAgDBwIAAhnQAAgbgYAAQgNAAgIAJQgIAJAAAPIAABhIgxAAIAAhnQAAgbgYAAQgNAAgIAJQgIAJAAAPIAABhIgxAAIAAipIAxAAIAAASQARgXAeAAQAiAAANAcQATgcAjAAQAaAAAPASQAOAQAAAbIAABxg");
	this.shape_2.setTransform(135.9933,34.7504,0.7489,0.7489);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ACvBMQgQgPAAgZQgBgcAWgMQAOgIAagEQAXgDAHgCQALgEAAgIQAAgPgaAAQgcAAgaAPIgQgjQAggUApAAQBIAAAAA7IAAByIguAAIAAgQQgQAUgeAAQgbAAgQgNgADnAOQgYAEAAAQQAAASAWAAQAOAAAIgHQAKgIAAgPIAAgQQgGAEgYAEgAkdBBQgYgZAAgoQAAgnAYgZQAZgYAoAAQApAAAYAYQAXAZAAAnQAAAogXAZQgYAYgpAAQgoAAgZgYgAj3giQgKANAAAVQAAAWAKANQAKANARAAQASAAAJgNQAJgNAAgWQAAgVgJgNQgJgNgSAAQgRAAgKANgAAABVIAAhlQgBgdgYAAQgOAAgIAJQgJAJAAAQIAABgIgyAAIAAipIAyAAIAAASQASgWAeAAQAaAAAQASQAOAQAAAbIAABwg");
	this.shape_3.setTransform(74.5674,36.7844,0.7489,0.7489);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AK9BcIAQgbQAQAMAWAAQAjAAAAgeIAAgHQgMARgZAAQgZAAgQgSQgQgSAAgZQAAgbAQgRQAQgTAZAAQAZAAAMASIAAgPIAlAAIAABnQAAAggOAPQgTAWgmAAQgiAAgVgQgALmgbQgHAIAAAOQAAAOAHAIQAHAKANAAQANAAAIgKQAHgIAAgOQAAgNgHgJQgIgJgNAAQgNAAgHAJgANgAvQgSgSAAgdQAAgdARgSQASgUAeAAQAdAAARASQAQASAAAdIgBALIhWAAQAAAZAdAAQAUAAALgPIAXAWQgVAZgjAAQgfAAgSgTgAOpgPQgBgLgHgHQgHgGgKAAQgLAAgHAGQgHAHgBALIAzAAIAAAAgAGxA4QgMgLAAgSQAAgWAQgIQAKgGAUgDIAXgEQAIgDAAgGQAAgMgUAAQgUAAgUAMIgMgbQAYgPAfAAQA2AAAAAtIAABVIgjAAIAAgMQgMAPgWAAQgVAAgMgKgAHbAKQgSAEAAALQAAAOARAAQAKAAAHgGQAHgGAAgLIAAgMQgFADgSADgACnAvQgSgSAAgdQAAgcASgTQASgUAdAAQAlAAATAgIgbARQgJgRgRAAQgNAAgIAKQgIAKAAAPQAAAQAIAJQAIAKAOAAQAQAAAMgQIAYAUQgVAbgiAAQgdAAgTgTgAnkAvQgRgSAAgdQAAgdARgSQARgUAeAAQAdAAARASQAQASAAAdIAAALIhXAAQABAZAcAAQAUAAAMgPIAWAWQgUAZgkAAQgfAAgSgTgAmbgPQgBgLgHgHQgGgGgLAAQgLAAgHAGQgHAHgBALIAzAAIAAAAgAryA4QgMgLAAgSQAAgWAQgIQAKgGAUgDIAWgEQAJgDAAgGQAAgMgUAAQgVAAgTAMIgMgbQAYgPAfAAQA2AAAAAtIAABVIgjAAIAAgMQgMAPgWAAQgVAAgMgKgArIAKQgSAEAAALQAAAOARAAQAKAAAGgGQAIgGAAgLIAAgMQgFADgSADgAKAA/IAAhLQAAgWgTAAQgKAAgHAHQgGAGAAANIAABHIglAAIAAh/IAlAAIAAAOQANgRAXAAQAUAAAMAOQALAMAAAUIAABUgAFuA/IAAhLQAAgWgTAAQgKAAgGAHQgHAHAAAMIAABHIglAAIAAiqIAlAAIAAA5QANgRAYAAQATAAAMAOQALAMAAAUIAABUgAobA/Iggg1IgSAVIAAAgIglAAIAAiqIAlAAIAABhIAtg2IAsAAIguAyIAzBNgAs3A/IAAhzIgrBzIgaAAIgqhyIAAByIgmAAIAAiqIA1AAIApBvIAphvIA0AAIAACqg");
	this.shape_4.setTransform(97.275,10.775);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,261.7,47.8);


(lib.Symbol55 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACJAuQgMgNAAgUQAAgSAMgNQALgNAUABQATgBAMAMQALAMAAATIgBAIIg6AAQACAQASABQANAAAIgLIAQAPQgPARgYAAQgUABgMgNgAC5ADQgBgPgPAAQgHAAgFAFQgFAEgBAGIAiAAIAAAAgAjqAvQgNgNAAgVQAAgSANgNQAMgNAUABQAUgBANANQALANABASQgBAVgLANQgMAMgVgBQgUABgMgMgAjYgDQgEAFAAALQAAAMAEAGQAGAHAIAAQAJAAAFgHQAFgGAAgMQAAgLgFgFQgFgHgJAAQgIAAgGAHgADdA4IAAgaIAbAAIAAAagABXA4IAAgzQABgOgMAAQgIAAgDAFQgGAEAAAHIAAAxIgYAAIAAhVIAYAAIAAAKQAKgLAPAAQANgBAIAJQAHAJABANIAAA4gAgHA4IAAhVIAYAAIAABVgAgxA4IAAhyIAZAAIAABygAhcA4IAAgzQABgOgMAAQgIAAgEAFQgFAEAAAHIAAAxIgZAAIAAhVIAZAAIAAAKQAJgLAQAAQANgBAHAJQAJAJgBANIAAA4gAgHgmIAAgUIAYAAIAAAUg");
	this.shape.setTransform(24.75,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.5,11.7);


(lib.Symbol54 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AChA9IALgRQALAIAOAAQAYAAAAgVIAAgEQgJALgQAAQgRAAgLgMQgKgLAAgRQAAgSAKgMQALgMARAAQARAAAIALIAAgJIAZAAIAABEQAAAVgKALQgNAOgZAAQgXAAgOgLgAC8gSQgEAGAAAJQAAAJAEAFQAFAHAJAAQAJAAAFgHQAFgFAAgJQAAgJgFgGQgFgGgJAAQgJAAgFAGgAiTAgQgLgMAAgUQAAgTALgMQAMgNAUAAQATAAAMAMQAKALAAAUIAAAHIg6AAQAAARAUAAQANAAAIgKIAPAPQgOARgYAAQgVAAgMgNgAhigKQgBgQgPAAQgIAAgEAFQgFAEgBAHIAiAAIAAAAgAj1AeIANgPQALAKASAAQAMAAAAgHQAAgEgEgCIgPgDQgggEAAgWQAAgNALgIQAKgGAPAAQAXAAAOANIgMAPQgJgJgRAAQgMAAAAAGQAAAEAGACIAMACQASACAIAGQAIAGAAAMQAAANgKAIQgLAJgRAAQgZAAgPgPgAB4AqIAAgyQAAgOgMAAQgIAAgEAEQgEAFAAAIIAAAvIgZAAIAAhUIAZAAIAAAJQAIgLARAAQANAAAIAJQAHAIAAAOIAAA3gAAYAqIAAhUIAZAAIAABUgAgRAqIAAhxIAXAAIAABxgAg8AqIAAhxIAZAAIAABxgAAYgzIAAgUIAZAAIAAAUg");
	this.shape.setTransform(24.575,7.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,49.2,14.5);


(lib.Symbol53 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACQAgIAAgoIgQAAIAAgUIAQAAIAAgdIAZAAIAAAdIAUAAIAAAUIgUAAIAAAkQAAALAJAAQAFAAAEgDIAFATQgHAEgNAAQgcABAAgcgAgNA0QgJgGAAgOQAAgWAfgEIAOgDQAGgCAAgDQAAgIgNAAQgPAAgKAIIgJgSQAQgJAUgBQAkABAAAdIAAA5IgXAAIAAgIQgJAKgOAAQgOABgHgIgAAOAVQgMADAAAHQAAAKALgBQAGAAAFgDQAFgEAAgIIAAgHIgPADgAhMAgIAAgoIgPAAIAAgUIAPAAIAAgdIAZAAIAAAdIAUAAIAAAUIgUAAIAAAkQAAALAJAAQAEAAAFgDIAFATQgHAEgOAAQgbABAAgcgAi/AiIAUgNQAIARAWAAQAUAAAAgOQAAgHgGgDIgRgDQgsgJAAgZQAAgRAMgKQANgJATAAQAgAAAPAXIgTANQgKgOgSAAQgTAAABALQAAAJASADQAXAFAJAFQARAHAAATQAAAQgMALQgNALgWgBQgiAAgPgZgABHA5IAAhVIAZAAIAAALQAGgMAQAAIAFAAIAAAVQgbAAAAAbIAAAmg");
	this.shape.setTransform(19.2,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,38.4,11.9);


(lib.Symbol50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAdA0QgNgNAAgXQAAgUANgPQANgOAXAAQAVAAANANQAMAOAAAUIAAAJIhBAAQAAATAWAAQAPAAAIgLIASARQgQASgbABQgXAAgOgPgABUAFQgBgRgRAAQgJAAgFAEQgFAGgBAHIAmAAIAAAAgAhKA0QgNgNAAgXQAAgUANgPQANgOAWAAQAWAAANANQALAOAAAUIgBAJIg/AAQABATAVAAQAOAAAJgLIAQARQgPASgaABQgYAAgNgPgAgTAFQgCgRgRAAQgSAAgBARIAmAAIAAAAgAB8BAIAAgeIAeAAIAAAegAiLBAIAAhJIgOAAIAAgWIAOAAIAAgHQAAgOAIgHQAHgGAQgBQAHAAAKACIgDAWQgCgCgGAAQgJAAAAAGIAAAHIATAAIAAAWIgTAAIAABJg");
	this.shape.setTransform(15.375,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.8,13.3);


(lib.Symbol49 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AECBOIAGgVQADABAEAAQAJAAAEgMIglheIAgAAIAUA9IATg9IAeAAIgkBhQgHATgJAHQgHAGgOAAQgLAAgGgDgAAlAUIAAgtIgRAAIAAgXIARAAIAAggIAcAAIAAAgIAXAAIAAAXIgXAAIAAAoQAAAMALgBQAFAAAEgDIAGAVQgIAGgPAAQgfAAAAgegAixAlQgOgOAAgXQAAgWAOgOQANgOAXABQAWgBAOAOQAOAOAAAWQAAAXgOAOQgNANgXAAQgXAAgNgNgAidgTQgFAIAAALQAAAMAFAIQAGAHAKAAQAKAAAFgHQAFgIAAgMQAAgLgFgIQgFgIgKAAQgKAAgGAIgADTAwIAAiAIAbAAIAACAgACjAwIAAg5QAAgQgNAAQgIAAgFAFQgFAFAAAJIAAA2IgcAAIAAiAIAcAAIAAArQAKgMARAAQAPgBAJAKQAIAKAAAPIAAA/gAgSAwIAAg5QAAgQgOAAQgHAAgFAFQgFAFAAAJIAAA2IgcAAIAAhgIAcAAIAAALQAKgMARAAQAPgBAIAKQAIAKAAAPIAAA/gAjpAwIAAg5QAAgQgNAAQgQAAAAATIAAA2IgcAAIAAg5QAAgQgNAAQgRAAAAATIAAA2IgbAAIAAhgIAbAAIAAALQAKgMARAAQATgBAHARQALgRATABQAPgBAJAKQAIAKAAAPIAAA/g");
	this.shape.setTransform(34.825,8.1);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,69.7,16.2);


(lib.Symbol48 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAOAlQgOgOAAgXQAAgVAOgOQAOgOAWAAQAXAAAOAOQANAOAAAVQAAAXgNAOQgOANgXAAQgXAAgNgNgAAjgTQgFAIAAALQAAAMAFAIQAFAHAKAAQAKAAAGgHQAFgIAAgMQAAgLgFgIQgGgHgKAAQgKAAgFAHgAgoAwIAAg5QAAgQgOAAQgIAAgFAFQgFAFAAAJIAAA2IgbAAIAAhfIAbAAIAAAKQAKgMASAAQAPAAAIAKQAJAJAAAPIAAA/g");
	this.shape.setTransform(10.025,5.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,20.1,10.1);


(lib.Symbol47 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgqA0QgOgNAAgXQAAgVAOgOQAOgOAWAAQAWAAAOAOQANAOAAAVQAAAXgNANQgOAOgWABQgWgBgOgOgAgVgDQgGAHABAMQgBAMAGAIQAGAHAJAAQAJAAAGgHQAFgIAAgMQAAgMgFgHQgGgHgJAAQgJAAgGAHgAA6BAIAAhfIAbAAIAAAMQAJgNAQAAQAJAAADACIgDAaQgFgDgHAAQgKAAgFAHQgHAHAAAPIAAAqgAhrBAIAAhJIgPAAIAAgWIAPAAIAAgHQgBgOAIgHQAHgGAQgBQAIAAAKACIgDAWQgCgCgHAAQgJAAAAAGIAAAHIATAAIAAAWIgTAAIAABJg");
	this.shape.setTransform(12.25,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,24.5,13.3);


(lib.Symbol46 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACuAzQgNgNAAgXQAAgVAMgOQANgOAXAAQAWAAANAOQAMANAAAUIgBAKIhBAAQABASAWAAQAOAAAJgLIARAQQgQAUgaAAQgYAAgNgPgADkAEQAAgIgFgFQgFgFgIABQgIAAgFAEQgGAGgBAHIAmAAIAAAAgAjxAzQgHgGgDgJQgEgJAAgMQAAgLAEgIQADgJAHgHQANgOAWAAQAXAAAOAOQAOAOAAAVQAAAXgOANQgOAPgXAAQgWAAgNgPgAjdgDQgFAGAAAMQAAAMAFAIQAGAHAJABQALgBAFgHQAGgIgBgMQABgMgGgGQgFgIgLAAQgJAAgGAIgAB3A/IAAg5QABgPgOgBQgJAAgEAGQgFAEAAAIIAAA3IgcAAIAAhfIAcAAIAAALQAJgNATAAQAOAAAJAKQAIAKAAAOIAAA/gAAMA/IAAhfIAcAAIAABfgAgjA/IAAiAIAcAAIAACAgAhRA/IAAg5QgBgPgOgBQgHAAgFAGQgFAEAAAIIAAA3IgcAAIAAhfIAcAAIAAALQAJgNASAAQAQAAAIAKQAIAKAAAOIAAA/gAAMgqIAAgXIAcAAIAAAXg");
	this.shape.setTransform(25.6,6.55);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51.2,13.1);


(lib.Symbol45 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABjAkIAAgtIgRAAIAAgWIARAAIAAghIAbAAIAAAhIAYAAIAAAWIgYAAIAAApQAAALALAAQAGAAAEgDIAGAVQgIAFgPABQgfgBAAgegAgGA0QgNgNABgXQgBgUANgPQAMgOAXAAQAVAAAOANQALAOAAAUIAAAJIhBAAQABATAVAAQAQAAAHgLIASARQgQASgbABQgXAAgNgPgAAwAFQgBgRgSAAQgHAAgGAEQgFAGgBAHIAmAAIAAAAgAiGAwQgSgSAAgeQAAgeASgSQASgRAcgBQAlAAARAeIgYAOQgIgSgWAAQgQAAgJALQgJAMAAARQAAATAJALQAKALAPAAQAcAAADgYIgeAAIAAgWIA8AAIABAKQAAAbgQARQgRARgdABQgdAAgRgTg");
	this.shape.setTransform(15.25,6.65);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,30.5,13.3);


(lib.Symbol38 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAxArIAMgPQALAMASAAQANAAAAgIQAAgEgEgCQgDgBgNgCQgggFAAgVQAAgOALgGQAKgIAPABQAXgBAPAOIgNAPQgJgKgQAAQgNAAAAAHQAAADAGACIANACQARADAIAFQAJAHAAAMQAAAOgLAHQgKAJgSgBQgZAAgOgPgAgjArIANgPQAKAMARAAQAOAAAAgIQAAgEgFgCQgDgBgLgCQgggFAAgVQAAgOALgGQAJgIAPABQAXgBAOAOIgMAPQgJgKgRAAQgLAAAAAHQAAADAGACIALACQASADAIAFQAIAHAAAMQAAAOgKAHQgLAJgRgBQgYAAgPgPgAhyAuQgMgMAAgUQAAgTALgNQAMgNAUABQAUgBALANQALALAAATIAAAIIg6AAQAAAQATABQANAAAIgKIAPAOQgOARgXAAQgVABgMgNgAhCADQAAgGgEgFQgFgEgHAAQgHAAgFAFQgFAEAAAGIAhAAIAAAAgACKA4IAAgaIAbAAIAAAagAikA4IAAhyIAZAAIAAByg");
	this.shape.setTransform(16.475,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,33,11.7);


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AglAwQgMgNAAgUQAAgUAMgMQAMgNATAAQAUAAAMANQAMAMAAAUQAAAUgMANQgMAMgUgBQgTABgMgMgAgTgCQgFAFAAALQAAALAFAHQAFAHAIAAQAJAAAEgHQAFgHABgLQgBgLgFgFQgEgHgJABQgIgBgFAHgAAzA5IAAhVIAZAAIAAALQAJgMANAAQAHAAAEADIgDAWQgEgCgGAAQgJAAgGAGQgFAGAAAOIAAAlgAhgA5IAAhBIgNAAIAAgUIANAAIAAgGQAAgZAbAAQAHAAAJACIgDATQgBgBgHAAQgIAAAAAGIAAAFIASAAIAAAUIgSAAIAABBg");
	this.shape.setTransform(10.95,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,21.9,11.9);


(lib.Symbol36 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADkBGIAFgUIAGACQAIAAAEgLIghhTIAcAAIASA1IASg1IAaAAIggBVQgGASgIAGQgHAFgMAAQgKAAgFgCgABFAgQgLgMgBgUQABgTALgMQAMgNAUAAQATAAAMAMQALAMAAATIgBAHIg6AAQABARASAAQAOAAAIgKIAPAPQgOARgYAAQgUAAgNgNgAB3gKQgCgQgPAAQgIAAgEAFQgFAEgBAHIAjAAIAAAAgAjDAgQgLgMAAgUQAAgTALgMQAMgNAUAAQAUAAALAMQALAMAAATIgBAHIg5AAQAAARATAAQANAAAIgKIAPAPQgOARgXAAQgWAAgMgNgAiSgKQAAgHgEgFQgFgEgHAAQgRAAAAAQIAhAAIAAAAgAkoAgQgLgNAAgTQAAgSALgNQAKgNASAAQAQAAAIALIAAgmIAZAAIAABxIgZAAIAAgJQgIAMgQAAQgSAAgKgNgAkUgQQgFAHAAAJQAAAKAFAGQAEAHAJAAQAJAAAFgHQAFgGAAgKQAAgJgFgHQgFgHgJAAQgJAAgEAHgACcAqIAAhUIAZAAIAAAKQAIgMAOAAQAIAAADADIgEAWQgDgCgHAAQgTAAAAAaIAAAlgAAAAqIgghUIAbAAIARA4IARg4IAcAAIghBUgAhCAqIAAhUIAZAAIAABUgAhsAqIAAhxIAYAAIAABxgAhCgzIAAgUIAZAAIAAAUg");
	this.shape.setTransform(30.8,7.225);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,61.6,14.5);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA6AuQgKgNAAgUQAAgRAKgOQALgNARABQAQAAAKALIAAgnIAYAAIAAByIgYAAIAAgJQgKALgQAAQgRABgLgNgABOgDQgFAHABAJQgBALAFAGQAFAHAJAAQAJAAAFgHQAGgGAAgLQAAgJgGgHQgFgGgJgBQgJABgFAGgAh/AzQgIgGAAgNQAAgXAfgEIAPgCQAGgCgBgEQABgHgNgBQgPABgMAHIgJgSQAQgKAVABQAkAAAAAdIAAA5IgXAAIAAgIQgIALgPgBQgOABgIgIgAhiAVIgJACQgDADgBAFQAAAJALAAQAHgBAFgDQAFgEgBgIIAAgIIgOAFgAALA4IAAgzQAAgOgMAAQgHAAgFAFQgEAEAAAHIAAAxIgYAAIAAhVIAYAAIAAAKQAJgLAPAAQANgBAIAJQAHAJAAANIAAA4g");
	this.shape.setTransform(13.6,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,27.2,11.7);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACnBHIAAhwIAYAAIAAAJQAKgLAQAAQARAAALANQAKAMAAASQAAAUgKANQgMANgQAAQgQAAgKgMIAAAlgADFgPQgGAGAAAJQAAALAGAGQAFAHAJAAQAIAAAGgHQAEgGAAgLQAAgJgEgGQgGgHgIAAQgKAAgEAHgAj+BHIAAhwIAYAAIAAAJQAJgLAQAAQASAAAKANQALAMgBASQABAUgLANQgKANgSAAQgQAAgJgMIAAAlgAjggPQgGAGAAAJQAAALAGAGQAFAHAIAAQAKAAAEgHQAFgGgBgLQABgJgFgGQgEgHgKAAQgIAAgFAHgABPAlQgIgJABgNIAAg4IAYAAIAAAyQAAAPANAAQAGAAAFgFQAFgEAAgIIAAgwIAYAAIAABUIgYAAIAAgJQgKAMgPAAQgOAAgHgJgAhnAhQgMgMAAgUQAAgTAMgMQAMgNATAAQAZAAANAVIgSALQgGgLgMAAQgJAAgGAGQgEAHAAAJQAAALAFAHQAFAGAJAAQAMAAAHgLIARAOQgOATgXAAQgUAAgMgNgAAjArIgWgjIgMAOIAAAVIgYAAIAAhxIAYAAIAABBIAegkIAeAAIgfAhIAiAzgAiZArIAAhUIAZAAIAABUgAiZgyIAAgUIAZAAIAAAUg");
	this.shape.setTransform(25.5,7.125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,14.3);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AA1AvQgMgMAAgVQAAgSAMgMQALgNAVgBQASABAMAMQALALAAASIgBAJIg5AAQAAAIAGAEQAFAFAIAAQAOgBAHgJIAQAOQgPASgXgBQgVABgMgNgABmAEQgCgPgOAAQgIAAgEAFQgFAEgBAGIAiAAIAAAAgAi2AqQgPgQAAgaQAAgZAPgQQAPgRAbgBQAaABARARQAPAQgBAZQABAagPAQQgRASgagBQgbABgPgSgAijgYQgHAKgBAOQABAQAHAJQAJALAOAAQAOAAAJgLQAIgJAAgQQAAgOgIgKQgJgLgOAAQgOAAgJALgACMA5IAAhVIAZAAIAAALQAIgMANAAQAIAAAEADIgEAWQgEgDgGABQgTAAAAAaIAAAlgAgEA5IAAhBIgMAAIAAgUIAMAAIAAgGQAAgZAaAAQAHAAAJACIgDATQgBgBgGgBQgJAAABAHIAAAFIARAAIAAAUIgRAAIAABBgAhAA5IAAhBIgMAAIAAgUIAMAAIAAgGQAAgZAbAAQAIAAAIACIgCATQgCgBgGgBQgIAAAAAHIAAAFIARAAIAAAUIgRAAIAABBg");
	this.shape.setTransform(19.8,5.95);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,39.6,11.9);


(lib.Symbol32 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgPAwIALgSQAJAIAPAAQAYAAAAgUIAAgFQgJALgQAAQgRAAgKgLQgLgMAAgRQAAgSALgMQAKgMARAAQARAAAIAMIAAgKIAYAAIAABEQAAAWgJAKQgNAPgZAAQgWAAgOgLgAALgfQgEAFAAAKQAAAJAEAGQAFAFAJAAQAJAAAFgFQAFgGAAgJQAAgJgFgGQgFgHgJAAQgJAAgFAHgAjLA5IAAhxIAYAAIAAAKQAIgMARAAQARAAALANQALANAAATQAAASgLANQgLANgRAAQgRAAgIgMIAAAmgAiugeQgFAHAAAKQAAAKAFAFQAFAHAJAAQAJAAAFgHQAFgFAAgKQAAgKgFgHQgFgHgJAAQgJAAgFAHgABdASQgMgMAAgTQAAgTAMgNQAMgNAUAAQATAAALAMQALAMAAATIAAAJIg6AAQABAPASAAQAOAAAHgJIAQAOQgOARgYAAQgVAAgMgNgACOgXQgBgRgQAAQgQAAgBARIAiAAIAAAAgAhjAYQgIgHAAgNQAAgWAegDIAPgDQAGgCAAgEQAAgIgNAAQgPAAgMAIIgIgSQAQgKAVAAQAkAAAAAeIAAA5IgXAAIAAgIQgIAKgPAAQgOAAgIgHgAhHgGIgIADQgEACAAAEQAAAJALAAQAHAAAEgDQAFgFAAgGIAAgIQgCABgNADgACxAdIAAgbIAbAAIAAAbg");
	this.shape.setTransform(20.425,5.875);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,40.9,11.8);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADxA+IALgSQAKAHAPABQAYAAAAgVIAAgFQgJAMgQAAQgRAAgLgMQgLgMAAgQQAAgSALgMQALgMARAAQARAAAIALIAAgKIAYAAIAABFQAAAVgJALQgNAOgZAAQgXABgOgLgAEMgSQgEAGAAAKQAAAHAEAGQAFAHAJAAQAJAAAFgHQAFgGAAgHQAAgJgFgHQgFgGgJAAQgJAAgFAGgAgxAgQgLgMAAgUQAAgTALgMQAMgNAUAAQASAAAMAMQAKALAAAUIAAAHIg5AAQABAQATABQANAAAHgKIAPAOQgOARgXAAQgVABgMgNgAAAgKQgBgQgQAAQgHAAgFAFQgEAEgBAHIAiAAIAAAAgAiXAgQgKgNAAgTQAAgTAKgMQALgNARAAQAQAAAJALIAAgnIAZAAIAABzIgZAAIAAgKQgJALgQAAQgRABgLgNgAiDgQQgEAGAAAKQAAAKAEAHQAFAGAJAAQAJAAAFgGQAFgHAAgKQAAgKgFgGQgFgHgJAAQgJAAgFAHgAk4AhQgMgNAAgUQAAgTAMgNQAMgMAUAAQAUAAANAMQAMANAAATQAAAUgMANQgMAMgVgBQgUABgMgMgAklgRQgFAHAAAKQAAAKAFAIQAEAGAJAAQAJAAAFgGQAFgIAAgKQAAgKgFgHQgFgHgJAAQgJAAgEAHgADIArIAAgzQAAgPgNAAQgGAAgFAFQgEAFAAAHIAAAxIgZAAIAAhWIAZAAIAAAKQAJgLAPAAQAOAAAHAJQAIAIAAANIAAA5gABoArIAAhWIAZAAIAABWgAAlArIAAhWIAYAAIAAALQAJgLAOgBQAHABAEACIgEAXQgDgDgHAAQgJAAgFAGQgGAIAAAMIAAAmgAjeArIAAhWIAZAAIAAALQAIgLAOgBQAHABAEACIgEAXQgDgDgHAAQgJAAgFAGQgFAIAAAMIAAAmgABog0IAAgUIAZAAIAAAUg");
	this.shape.setTransform(32.525,7.25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,65.1,14.5);


(lib.Symbol30 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACcAuQgMgMAAgUQAAgTAMgMQALgNAUAAQATAAAMAMQALALAAATIAAAIIg7AAQABAQAUABQAMAAAJgKIAPAOQgPARgYAAQgUABgMgNgADMADQgBgPgPAAQgHAAgFAFQgFAEgBAGIAiAAIAAAAgAjXAvQgNgNAAgUQAAgTANgNQAMgMAUAAQAUAAANAMQAMANAAATQAAAUgMANQgMAMgVgBQgUABgMgMgAjEgDQgFAGAAAKQAAALAFAIQAEAGAJAAQAJAAAFgGQAFgIAAgLQAAgKgFgGQgFgHgJAAQgJAAgEAHgABrA5IAAg0QAAgOgMAAQgHAAgEAFQgGAEAAAHIAAAyIgYAAIAAhWIAYAAIAAAKQAKgLAPAAQANAAAIAJQAIAIAAANIAAA5gAAMA5IAAhWIAYAAIAABWgAgeA5IAAhzIAZAAIAABzgAhJA5IAAg0QABgOgMAAQgIAAgEAFQgEAEgBAHIAAAyIgZAAIAAhWIAZAAIAAAKQAJgLAQAAQANAAAIAJQAHAIAAANIAAA5gAAMgmIAAgUIAYAAIAAAUg");
	this.shape.setTransform(22.85,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,45.7,11.7);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhMAnQgIgIgBgNQABgWAegDIAPgDQAGgCAAgEQAAgHgOAAQgNAAgNAHIgJgSQARgKAUAAQAkAAAAAeIAAA4IgWAAIAAgIQgJALgPAAQgNAAgIgGgAgxAHIgIADQgDADAAAEQAAAJALAAQAGAAAFgDQAFgFAAgHIAAgIQgCACgOACgAA9AqIAAgxQAAgPgMAAQgIAAgEAEQgEAFgBAIIAAAvIgZAAIAAhUIAZAAIAAAKQAJgMAQAAQANAAAIAJQAHAJABANIAAA3g");
	this.shape.setTransform(8.55,4.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,17.1,9);


(lib.Symbol28 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ABuAuQgMgNAAgTQAAgTAMgNQAMgNAUABQAYAAANAUIgSALQgFgLgMAAQgJABgGAGQgFAGAAAKQAAALAGAHQAFAGAJAAQALAAAIgLIAQAOQgOASgXAAQgTABgNgNgAhPAyQgHgJAAgNIAAg5IAYAAIAAAzQAAAPANAAQAHAAAEgFQAFgFAAgHIAAgxIAYAAIAABVIgYAAIAAgIQgJALgQgBQgNABgIgJgAirA0QgIgIAAgMQAAgXAfgEIAPgCQAGgCAAgEQAAgHgOAAQgOAAgMAHIgJgSQAQgKAVABQAkAAAAAdIAAA5IgXAAIAAgIQgIALgPgBQgOAAgIgGgAiPAVIgIACQgEADAAAFQAAAJALAAQAHgBAFgDQAFgEAAgIIAAgIQgDACgNADgADzA4IAAgzQAAgOgMAAQgHAAgEAFQgFAEAAAHIAAAxIgZAAIAAhyIAZAAIAAAnQAJgLAQAAQANgBAIAJQAHAJAAANIAAA4gAA9A4IAAgzQAAgOgMAAQgHAAgEAFQgFAEAAAHIAAAxIgZAAIAAhVIAZAAIAAAKQAJgLAPAAQAOgBAHAJQAIAJAAANIAAA4gAkLA4IAAhyIAZAAIAABbIA3AAIAAAXg");
	this.shape.setTransform(26.825,5.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,53.7,11.7);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("EgnIAG+IAAt7MBORAAAIAAN7g");
	this.shape.setTransform(250.45,44.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,500.9,89.2);


(lib.Phone = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_5
	this.instance = new lib.flowers();
	this.instance.setTransform(551,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:true},1).wait(8).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(551,0,100,74);


(lib.Logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgdAiQgLgNAAgVQAAgTALgNQAMgNARgBQATAAALAMQALAMAAASIAAAFIAAABIhEAAQAAAPAIAJQAJAJANAAQAPAAAKgMIABAAIAIAHIgBABQgNAPgVAAQgTAAgMgMgAAcgIQgCgagaAAQgKABgIAGQgHAHgCAMIA3AAIAAAAg");
	this.shape.setTransform(171.1304,52.801,1.1349,1.1349);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAYAtIAAg1QAAgZgUAAQgLAAgIAJQgIAJAAANIAAAvIgMAAIAAhYIAMAAIAAAOQALgPASgBQAOAAAJAJQAIAKgBAQIAAA3g");
	this.shape_1.setTransform(160.209,52.6875,1.1349,1.1349);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgFAsIAAhYIALAAIAABYg");
	this.shape_2.setTransform(152.859,52.801,1.1349,1.1349);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgFAIIAAgPIALAAIAAAPg");
	this.shape_3.setTransform(152.859,44.8002,1.1349,1.1349);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgFA9IAAh5IALAAIAAB5g");
	this.shape_4.setTransform(148.8869,50.9001,1.1349,1.1349);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZAtIAAg1QgBgZgUAAQgLAAgJAJQgHAJgBANIAAAvIgLAAIAAhYIALAAIAAAOQAMgPASgBQAOAAAIAJQAJAKAAAQIAAA3g");
	this.shape_5.setTransform(141.567,52.6875,1.1349,1.1349);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgoAuQgQgSgBgcQABgbAQgSQAPgSAZAAQAaAAAPASQAQASABAbQgBAcgQASQgPARgaAAQgYAAgQgRgAgegkQgMAOAAAWQAAAYAMANQALAOATAAQAUAAAMgOQAMgOAAgXQAAgXgMgNQgMgOgUAAQgTAAgLAOg");
	this.shape_6.setTransform(128.743,50.8718,1.1349,1.1349);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgcAiQgMgNAAgVQAAgTAMgOQALgMASAAQARAAAMALQALALgBATIAAAFIhDAAQABAPAIAJQAIAJAMAAQAQAAAJgMIABgBIAJAIIAAABQgOAQgVAAQgSABgMgNgAAbgIQgCgagZAAQgKAAgIAIQgHAGgBAMIA1AAIAAAAg");
	this.shape_7.setTransform(111.5509,52.8578,1.1349,1.1349);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgYAtIAAhXIAMAAIAAAKQAJgMAPAAQAIAAAFADIAAAAIgEAMIgBgBQgCgCgHAAQgKAAgFAIQgIAHAAAPIAAAvg");
	this.shape_8.setTransform(103.6907,52.7443,1.1349,1.1349);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgaAnQgIgHAAgNQAAgVAdgFIAEAAQALgCAFgCQAIgEAAgGQAAgNgUAAQgPAAgLAJIAAABIgHgKIABAAQAPgLASAAQAPAAAIAHQAJAGgBANIAAA/IgMAAIAAgKQgJAMgRAAQgOAAgJgHgAABADIgDAAQgKACgEADQgFAEAAAHQAAAPATAAQAKAAAHgFQAIgHAAgNIAAgMQgFADgRADg");
	this.shape_9.setTransform(94.2728,52.8294,1.1349,1.1349);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgbAlQgIgKAAgQIAAg3IAMAAIAAA1QAAAZAUAAQALAAAIgJQAIgIAAgOIAAgvIAMAAIAABYIgMAAIAAgNQgKAOgTAAQgOABgIgJg");
	this.shape_10.setTransform(84.0574,52.9713,1.1349,1.1349);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AAdA/IAAgwQgLAPgSAAQgSAAgLgNQgMgNAAgUQAAgUAMgNQALgNASAAQASAAALAPIAAgNIANAAIAAB7gAgVgnQgGAJAAAOQgBARAKAJQAHAHALAAQANAAAIgJQAIgIAAgQQAAgPgIgJQgIgKgNAAQgNAAgIALg");
	this.shape_11.setTransform(72.737,54.7303,1.1349,1.1349);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgYA5QgMgFgHgLIAAgBIALgIIAAABQAMARAWAAQANAAAHgGQAIgGAAgLQAAgJgIgGQgFgDgRgFQgSgEgIgFQgOgIAAgQQAAgQANgJQALgJAQABQAaAAAPATIAAAAIgKAIIgBAAQgLgPgTAAQgKAAgIAFQgIAGAAAJQAAALAMAFQAEADALADQAUAFAJAEQAOAKAAAQQAAAQgMALQgMAKgTgBQgNABgMgHg");
	this.shape_12.setTransform(61.4734,50.9285,1.1349,1.1349);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgUAbQgGAAAAgHIAAgnQAAgHAGABIApAAQAGgBAAAHIAAAnQAAAHgGAAg");
	this.shape_13.setTransform(39.2866,50.815,1.1349,1.1349);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhABiQgNAAgKgKQgJgKAAgNIAAiAQAAgOAJgKQAKgKANAAICBAAQANAAAKAKQAJAKAAAOIAACAQAAANgJAKQgKAKgNAAgAg6g6QgDAEAAADIAABnQAAAEADADQADADAEAAIBnAAQAEAAADgDQADgDAAgEIAAAAIAAhnQAAgDgDgEQgDgDgEAAIhnAAQgEAAgDADg");
	this.shape_14.setTransform(39.2866,50.815,1.1349,1.1349);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Logo, new cjs.Rectangle(28.4,39.9,147.5,22.1), null);


(lib.hitArea = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhvBpIAAjRIDfAAIAADRg");
	this.shape.setTransform(11.225,10.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hitArea, new cjs.Rectangle(0,0,22.5,21), null);


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("Ag/A/IAAh+IB/AAIAAB+g");
	mask.setTransform(6.375,6.35);

	// Layer_3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAjA6QgDgDAAgFQAAgEADgDQADgDADgBIg6AAQgHABgFgFQgGgFAAgIQAAgHAEgFIABgBIgOgyIAAgCIgCgDQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAgBAAAAIgJAAQgGAAAAgEQAAgGAGAAIAJAAQAJAAADAJIACAHIAAAAIBcAAQABAAAAAAQABAAABAAQAAABAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQgBABAAAAIgGAoIABAAQAFgCABAHQAAAEgFABIhRAEIgBABQgBABAAAEQAAAHAHAAIBLAAQAGAAAAAGQAAAEgGAAIgOAAQADABADADQADADAAAEQAAAFgDADQgDADgFAAQgEAAgDgDgAgUAFIBCgDIAGgkIhTAAgAgcA6QgDgDAAgFQAAgEADgDQADgDAFgBQAEABADADQADADAAAEQAAAFgDADQgDADgEAAQgFAAgDgDg");
	this.shape.setTransform(6.375,6.6);

	var maskedShapeInstanceList = [this.shape];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0.5,12.8,12.2), null);


(lib.Cover = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape.setTransform(80.0011,299.9992,0.5333,2.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,160,600);


(lib.Arrow = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(3,0,0,4).p("AAAjRQBXAAA9A+QA+A9AABWQAABXg+A9Qg9A+hXAAQhWAAg9g+Qg+g9AAhXQAAhWA+g9QA9g+BWAAg");
	this.shape.setTransform(18.72,18.7146,0.893,0.893);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(3,1,1).p("AAAhXIBYBXIivAAABYAAIhYBY");
	this.shape_1.setTransform(18.72,18.7146,0.893,0.893);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,40.5,40.5);


(lib.Text6 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 55
	this.instance = new lib.Symbol55("synched",0);
	this.instance.setTransform(376.55,-21.55,1.11,1.11,0,0,0,24.8,5.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:-32.65,alpha:1},4,cjs.Ease.quadOut).wait(10));

	// Symbol 54
	this.instance_1 = new lib.Symbol54("synched",0);
	this.instance_1.setTransform(314.65,-19.9,1.11,1.11,0,0,0,24.6,7.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2).to({_off:false},0).to({y:-30.95,alpha:1},4,cjs.Ease.quadOut).wait(12));

	// Symbol 53
	this.instance_2 = new lib.Symbol53("synched",0);
	this.instance_2.setTransform(260.7,-21.5,1.11,1.11,0,0,0,19.2,6);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({y:-32.55,alpha:1},4,cjs.Ease.quadOut).wait(14));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(239.4,-39.2,164.6,27.400000000000002);


(lib.Text5 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 50
	this.instance = new lib.Symbol50("synched",0);
	this.instance.setTransform(332.85,-13.25,1.0261,1.0261,0,0,0,15.4,6.7);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:-23.5,alpha:1},4,cjs.Ease.quadOut).wait(31).to({startPosition:0},0).to({y:-33.8,alpha:0},4,cjs.Ease.quadIn).wait(1));

	// Symbol 49
	this.instance_1 = new lib.Symbol49("synched",0);
	this.instance_1.setTransform(276.15,-11.5,1.0261,1.0261,0,0,0,34.9,8.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:-21.75,alpha:1},4,cjs.Ease.quadOut).wait(32).to({startPosition:0},0).to({y:-32,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(1));

	// Symbol 48
	this.instance_2 = new lib.Symbol48("synched",0);
	this.instance_2.setTransform(374.6,-31.6,1.0261,1.0261,0,0,0,10,5);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:-41.9,alpha:1},4,cjs.Ease.quadOut).wait(33).to({startPosition:0},0).to({y:-52.15,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(2));

	// Symbol 47
	this.instance_3 = new lib.Symbol47("synched",0);
	this.instance_3.setTransform(347.35,-33.3,1.0261,1.0261,0,0,0,12.3,6.7);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({y:-43.5,alpha:1},4,cjs.Ease.quadOut).wait(34).to({startPosition:0},0).to({regY:6.6,y:-53.75,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(3));

	// Symbol 46
	this.instance_4 = new lib.Symbol46("synched",0);
	this.instance_4.setTransform(302.75,-33.05,1.0261,1.0261,0,0,0,25.7,6.7);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({y:-43.35,alpha:1},4,cjs.Ease.quadOut).wait(35).to({startPosition:0},0).to({regY:6.5,y:-53.7,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(4));

	// Symbol 45
	this.instance_5 = new lib.Symbol45("synched",0);
	this.instance_5.setTransform(254.95,-33.3,1.0261,1.0261,0,0,0,15.2,6.7);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-43.5,alpha:1},4,cjs.Ease.quadOut).wait(36).to({startPosition:0},0).to({regY:6.6,y:-53.75,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(239.4,-60.5,145.49999999999997,57.2);


(lib.Text4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 38
	this.instance = new lib.Symbol38("synched",0);
	this.instance.setTransform(363.4,-12.3,1.11,1.11,0,0,0,16.5,5.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(10).to({_off:false},0).to({y:-23.4,alpha:1},4,cjs.Ease.quadOut).wait(31).to({startPosition:0},0).to({y:-34.5,alpha:0},4,cjs.Ease.quadIn).wait(1));

	// Symbol 37
	this.instance_1 = new lib.Symbol37("synched",0);
	this.instance_1.setTransform(327.2,-12.45,1.11,1.11,0,0,0,11,6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(8).to({_off:false},0).to({y:-23.55,alpha:1},4,cjs.Ease.quadOut).wait(32).to({startPosition:0},0).to({y:-34.65,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(1));

	// Symbol 36
	this.instance_2 = new lib.Symbol36("synched",0);
	this.instance_2.setTransform(274.8,-10.7,1.11,1.11,0,0,0,30.8,7.2);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({y:-21.8,alpha:1},4,cjs.Ease.quadOut).wait(33).to({startPosition:0},0).to({y:-32.9,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(2));

	// Symbol 35
	this.instance_3 = new lib.Symbol35("synched",0);
	this.instance_3.setTransform(368.75,-32.15,1.11,1.11,0,0,0,13.6,5.9);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).to({y:-43.25,alpha:1},4,cjs.Ease.quadOut).wait(34).to({startPosition:0},0).to({y:-54.35,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(3));

	// Symbol 34
	this.instance_4 = new lib.Symbol34("synched",0);
	this.instance_4.setTransform(318.35,-31.1,1.11,1.11,0,0,0,25.6,7.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(2).to({_off:false},0).to({y:-42.2,alpha:1},4,cjs.Ease.quadOut).wait(35).to({startPosition:0},0).to({regY:7,y:-53.4,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(4));

	// Symbol 33
	this.instance_5 = new lib.Symbol33("synched",0);
	this.instance_5.setTransform(262.25,-32.55,1.11,1.11,0,0,0,19.8,6);
	this.instance_5.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).to({y:-43.65,alpha:1},4,cjs.Ease.quadOut).wait(36).to({startPosition:0},0).to({regY:5.9,y:-54.8,alpha:0},4,cjs.Ease.quadIn).to({_off:true},1).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(240.3,-61.3,143.59999999999997,58.699999999999996);


(lib.Text3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Symbol 32
	this.instance = new lib.Symbol32("synched",0);
	this.instance.setTransform(342.9,-9.45,1.11,1.11,0,0,0,20.4,5.9);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(8).to({_off:false},0).to({y:-20.55,alpha:1},4,cjs.Ease.quadOut).wait(33).to({startPosition:0},0).to({y:-31.65,alpha:0},4).wait(1));

	// Symbol 31
	this.instance_1 = new lib.Symbol31("synched",0);
	this.instance_1.setTransform(277.15,-10.85,1.11,1.11,0,0,0,32.5,7.2);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:-21.95,alpha:1},4,cjs.Ease.quadOut).wait(34).to({startPosition:0},0).to({y:-33.05,alpha:0},4).to({_off:true},1).wait(1));

	// Symbol 30
	this.instance_2 = new lib.Symbol30("synched",0);
	this.instance_2.setTransform(358.5,-32.3,1.11,1.11,0,0,0,22.9,5.9);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(4).to({_off:false},0).to({y:-43.4,alpha:1},4,cjs.Ease.quadOut).wait(35).to({startPosition:0},0).to({y:-54.5,alpha:0},4).to({_off:true},1).wait(2));

	// Symbol 29
	this.instance_3 = new lib.Symbol29("synched",0);
	this.instance_3.setTransform(317.1,-31.2,1.11,1.11,0,0,0,8.6,4.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2).to({_off:false},0).to({y:-42.3,alpha:1},4,cjs.Ease.quadOut).wait(36).to({startPosition:0},0).to({y:-53.35,alpha:0},4).to({_off:true},1).wait(3));

	// Symbol 28
	this.instance_4 = new lib.Symbol28("synched",0);
	this.instance_4.setTransform(271.65,-32.65,1.11,1.11,0,0,0,26.8,5.9);
	this.instance_4.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({y:-43.7,alpha:1},4,cjs.Ease.quadOut).wait(37).to({startPosition:0},0).to({regY:5.8,y:-54.85,alpha:0},4).to({_off:true},1).wait(4));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(241.1,-61.3,142.79999999999998,58.599999999999994);


(lib.Frame1b = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(773.65,356.4,1.0367,1.0367,0,0,0,6.5,6.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3374FF").s().p("AmVCgQgLAAgHgIQgIgIAAgKIAAkLQAAgLAIgHQAHgIALAAIMrAAQALAAAHAIQAIAHAAALIAAELQAAAKgIAIQgHAIgLAAg");
	this.shape.setTransform(773.2457,356.1194,0.8525,0.8525);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(736.4,342.5,73.70000000000005,27.30000000000001);


(lib.cta = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {over:1};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(14).call(this.frame_14).wait(1));

	// Layer 1
	this.instance = new lib.Arrow("synched",0);
	this.instance.setTransform(428.9,-167.8,1.1335,1.1335,0,0,0,24.9,17.8);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(15));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(399,-189.7,45.89999999999998,45.89999999999998);


// stage content:
(lib.SquareOnline_NewYears_728x90_RST = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,1,262];
	// timeline functions:
	this.frame_0 = function() {
		this.cta_hit_area.alpha = 0;
		this.clickThruMC.alpha = 0.01;
		
		this.cta_hit_area.name = "cta";
		this.clickThruMC.name = "clickThruMC";
		
		stage.enableMouseOver();
		
		this.clickThruMC.addEventListener("mouseover", fl_MouseOverHandler);
		this.cta_hit_area.addEventListener("mouseover", fl_MouseOverHandler);
		
		function fl_MouseOverHandler(e){
			
			document.body.style.cursor = "pointer";
		
			switch (e.currentTarget.name){
				
				case "cta":
					e.currentTarget.parent.cta.gotoAndPlay("over");
				break;
				
		
			}
		
		}
		
		this.clickThruMC.addEventListener("mouseout", fl_MouseOutHandler);
		this.cta_hit_area.addEventListener("mouseout", fl_MouseOutHandler);
		
		function fl_MouseOutHandler(e){
			
			document.body.style.cursor = "default";
			
			switch (e.currentTarget.name){
				
				case "cta":
					e.currentTarget.parent.cta.gotoAndStop(0);
				break;
				
			}
		} 
		
		this.clickThruMC.addEventListener("click", fl_Click);
		this.cta_hit_area.addEventListener("click", fl_Click);
		
		function fl_Click(e) {
			
			switch (e.currentTarget.name){
		
				
				default:
					window.open(window.clickTag);
				break;
			}
		}
	}
	this.frame_1 = function() {
		this.cta_hit_area.alpha = 0;
	}
	this.frame_262 = function() {
		this.stop();
		
		this.cta_hit_area.alpha = 0.01;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(261).call(this.frame_262).wait(1));

	// Border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A3bzhMAu3AAAMAAAAnDMgu3AAAg");
	this.shape.setTransform(363.9931,44.9963,2.4266,0.36);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(263));

	// HitAreas
	this.cta_hit_area = new lib.hitArea();
	this.cta_hit_area.name = "cta_hit_area";
	this.cta_hit_area.setTransform(660.2,26.6,2.4202,2.0115,0,0,0,0.8,0.2);

	this.timeline.addTween(cjs.Tween.get(this.cta_hit_area).wait(263));

	// CTA
	this.cta = new lib.cta();
	this.cta.name = "cta";
	this.cta.setTransform(401.5,230,1,1,0,0,0,62.5,15);
	this.cta.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.cta).wait(59).to({x:304.5,y:228},0).to({x:324.5,alpha:1},10,cjs.Ease.quadOut).wait(194));

	// clickTag
	this.clickThruMC = new lib.hitArea();
	this.clickThruMC.name = "clickThruMC";
	this.clickThruMC.setTransform(363.2,45.1,32.4279,4.2957,0,0,0,11.2,10.5);

	this.timeline.addTween(cjs.Tween.get(this.clickThruMC).wait(263));

	// Logo
	this.instance = new lib.Logo();
	this.instance.setTransform(133.95,111.6,0.8929,0.8929,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(263));

	// Frame1b
	this.instance_1 = new lib.Frame1b("synched",0);
	this.instance_1.setTransform(643.1,113.65,0.8707,0.8707,0,0,0,765.8,356.9);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(6).to({_off:false},0).to({y:43.65},11,cjs.Ease.quadOut).wait(12).to({startPosition:0},0).to({regX:765.9,regY:356.8,scaleX:0.7928,scaleY:0.7928,x:643.9,y:43.6},3,cjs.Ease.quadIn).to({regX:765.8,regY:356.9,scaleX:0.8707,scaleY:0.8707,x:643.1,y:43.65},3,cjs.Ease.quadOut).wait(11).to({startPosition:0},0).to({alpha:0},6,cjs.Ease.quadIn).to({_off:true},1).wait(210));

	// Phone
	this.instance_2 = new lib.Phone("synched",0,false);
	this.instance_2.setTransform(61.6,14.9,1,1,0,0,0,61.6,94.9);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(6).to({_off:false},0).to({regY:95,y:95,startPosition:19},11,cjs.Ease.quadOut).wait(39).to({startPosition:19},0).to({x:-262.4},9,cjs.Ease.quadInOut).wait(198));

	// Layer_4
	this.instance_3 = new lib.Symbol10("synched",0);
	this.instance_3.setTransform(805.75,44.6,1,1,0,0,0,250.5,44.6);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(56).to({_off:false},0).to({x:477.75},9,cjs.Ease.quadInOut).to({_off:true},1).wait(197));

	// Text5
	this.instance_4 = new lib.Text6("synched",0,false);
	this.instance_4.setTransform(206,83.1,1,1,0,0,0,46,6);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(209).to({_off:false},0).wait(54));

	// Text5
	this.instance_5 = new lib.Text5("synched",0,false);
	this.instance_5.setTransform(209.3,92.6,1,1,0,0,0,50.3,16.4);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(166).to({_off:false},0).wait(97));

	// Text4
	this.instance_6 = new lib.Text4("synched",0,false);
	this.instance_6.setTransform(211.6,103.9,1,1,0,0,0,52.6,27.7);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(121).to({_off:false},0).to({_off:true},51).wait(91));

	// Text3
	this.instance_7 = new lib.Text3("synched",0,false);
	this.instance_7.setTransform(217.3,112.3,1,1,0,0,0,58.3,36.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(74).to({_off:false},0).to({_off:true},55).wait(134));

	// Text1
	this.instance_8 = new lib.Text1a("synched",0);
	this.instance_8.setTransform(342.55,48.55,1,1,0,0,0,119.2,23.8);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({_off:true},65).wait(198));

	// BG
	this.instance_9 = new lib.Cover("synched",0);
	this.instance_9.setTransform(682.6,18.75,4.5506,0.15,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(263));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(363,-35,1101,754);
// library properties:
lib.properties = {
	id: '0A699BA23F964BD280A6D5329E5C089A',
	width: 728,
	height: 90,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"./flowers.png?1611149565200", id:"flowers"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0A699BA23F964BD280A6D5329E5C089A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;