(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HP_FromTo_Display_300x250_atlas_P_1", frames: [[0,0,1320,270]]},
		{name:"HP_FromTo_Display_300x250_atlas_NP_1", frames: [[0,350,600,200],[0,0,600,348]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
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



(lib._300x250poly = function() {
	this.initialize(ss["HP_FromTo_Display_300x250_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x250tofrom1 = function() {
	this.initialize(ss["HP_FromTo_Display_300x250_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["HP_FromTo_Display_300x250_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

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


(lib.POLY = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._300x250poly();
	this.instance.setTransform(-150,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.POLY, new cjs.Rectangle(-150,-100,300,100), null);


(lib.PIC1 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._300x250tofrom1();
	this.instance.setTransform(-150,-394,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,-394,300,174), null);


(lib.HPlogowTag = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// LOGO_PNG
	this.instance = new lib.HealthPointLogo();
	this.instance.setTransform(-137.25,-28.05,0.208,0.208);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// TAG
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape.setTransform(129.975,28.65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgIAFgFQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_1.setTransform(123.525,28.55);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#EA7F1F").s().p("AgZAkQgHgHAAgJQAAgPANgIQANgHAXAAIAAgCQAAgTgSAAQgNAAgJAGIgDgKQALgHAPAAQAfAAAAAiIAAAdQAAAMACAIIgOAAIgBgLIAAAAQgJANgQAAQgLAAgHgHgAgRASQAAAGAEAEQAEAEAGAAQAHAAAFgEQAFgEACgGIABgFIAAgNIgCAAQggAAAAASg");
	this.shape_2.setTransform(116.175,28.65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#EA7F1F").s().p("AgbAsQgPgPAAgcQAAgaAQgRQARgQAZAAQASAAAJAFIgDAMQgJgFgOAAQgUAAgLANQgNAMAAAVQAAAWAMAMQALANAUAAQAOAAALgFIACAMQgKAFgUAAQgYAAgQgPg");
	this.shape_3.setTransform(107.55,27.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#EA7F1F").s().p("AgFAuQgFgHAAgPIAAgsIgOAAIAAgMIAOAAIAAgOIANgFIAAATIAWAAIAAAMIgWAAIAAArQAAARALgBIAJgBIABAMQgHACgHAAQgKAAgFgGg");
	this.shape_4.setTransform(96.45,27.75);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EA7F1F").s().p("AgZAkQgHgHAAgJQAAgPANgIQANgHAXAAIAAgCQAAgTgSAAQgNAAgJAGIgDgKQALgHAPAAQAfAAAAAiIAAAdQAAAMACAIIgOAAIgBgLIAAAAQgJANgQAAQgLAAgHgHgAgRASQAAAGAEAEQAEAEAGAAQAHAAAFgEQAFgEACgGIABgFIAAgNIgCAAQggAAAAASg");
	this.shape_5.setTransform(89.575,28.65);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape_6.setTransform(81.625,28.65);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgIAFgFQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_7.setTransform(75.175,28.55);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#EA7F1F").s().p("AgeArQgQgPAAgbQAAgZAQgQQASgRAbgBQASABALAFIgEAMQgKgFgPAAQgVAAgMANQgNAMAAAUQAAAWANAMQALANAUAAQANAAAGgEIAAgiIgXAAIAAgLIAmAAIAAA2QgQAHgTAAQgagBgQgPg");
	this.shape_8.setTransform(66.475,27);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#EA7F1F").s().p("AgaAlIAEgLQAJAGALgBQAOAAAAgLQAAgGgDgDQgDgDgIgEQgWgGAAgQQAAgKAIgHQAIgHAMAAQAMAAAIAFIgEALQgIgFgJAAQgFAAgEAEQgDACAAAGQAAAEADADIALAGQAWAIAAAQQAAALgIAHQgJAHgNAAQgNAAgKgGg");
	this.shape_9.setTransform(54.525,28.65);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape_10.setTransform(47.075,28.65);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#EA7F1F").s().p("AgGApIgghRIAQAAIARAtIAFAVIABAAIAHgVIAPgtIAQAAIghBRg");
	this.shape_11.setTransform(38.9,28.625);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgIAFgFQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_12.setTransform(32.625,28.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape_13.setTransform(25.325,28.65);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#EA7F1F").s().p("AgaAlIAEgLQAJAGALgBQAOAAAAgLQAAgGgDgDQgDgDgIgEQgWgGAAgQQAAgKAIgHQAIgHAMAAQAMAAAIAFIgEALQgIgFgJAAQgFAAgEAEQgDACAAAGQAAAEADADIALAGQAWAIAAAQQAAALgIAHQgJAHgNAAQgNAAgKgGg");
	this.shape_14.setTransform(17.875,28.65);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape_15.setTransform(10.425,28.65);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#EA7F1F").s().p("AguA5IAAhwQAPgCARAAQAdAAAQAOQAQAPAAAaQAAAbgQARQgRAQghAAQgPAAgMgBgAgggsIAABaIAQAAQAWAAANgMQAMgNAAgWQAAgVgLgLQgMgMgWAAQgKAAgIABg");
	this.shape_16.setTransform(1,27.025);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape_17.setTransform(-12.525,28.65);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#EA7F1F").s().p("AAVAqIAAgvQAAgYgUAAQgFAAgGAFQgGAEgCAGIgBAIIAAAwIgPAAIAAg7IgBgXIAOAAIABAPQAEgHAGgEQAIgFAIAAQAMAAAHAHQAKAJAAATIAAAwg");
	this.shape_18.setTransform(-21.35,28.55);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#EA7F1F").s().p("AgcAfQgLgMAAgSQAAgUAMgMQALgLAQAAQASAAALALQALANAAASQAAAVgNALQgLALgQAAQgRAAgLgMgAgSgVQgGAJAAAMQAAAOAHAIQAHAJAKAAQALAAAHgJQAHgIAAgOQAAgLgGgKQgHgKgMAAQgLAAgHAKg");
	this.shape_19.setTransform(-30.525,28.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#EA7F1F").s().p("AghAwQAHgDAGgFQAIgGAFgKIABgEIgBgEIgfhLIARAAIARAxIAFAQIAAAAIAFgRIARgwIAQAAIgXA7QgIAVgGALQgGAMgHAGQgJAIgJACg");
	this.shape_20.setTransform(-39.025,30.5);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#EA7F1F").s().p("AgTAqIAAg4IgBgaIAOAAIAAARIABAAQADgIAFgFQAGgFAIAAIAEAAIAAAPIgFgBQgIAAgGAFQgEAGgBAIIgBAHIAAArg");
	this.shape_21.setTransform(-45.225,28.55);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#EA7F1F").s().p("AgZAfQgKgLAAgTQAAgSAKgMQALgNAQAAQASAAAJAOQAHAKAAAOIAAAGIg5AAQAAAPAJAIQAHAGALAAQANAAAKgEIADALQgMAFgQAAQgSAAgLgMgAAWgHQAAgJgEgHQgGgIgLgBQgJAAgHAJQgFAHgBAJIArAAIAAAAg");
	this.shape_22.setTransform(-52.525,28.65);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#EA7F1F").s().p("AgHApIgfhRIAQAAIAQAtIAGAVIAAAAIAIgVIAQgtIAPAAIggBRg");
	this.shape_23.setTransform(-60.7,28.625);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#EA7F1F").s().p("AgfA5IAAhxIA9AAIAAAMIgvAAIAAAkIAsAAIAAAMIgsAAIAAApIAxAAIAAAMg");
	this.shape_24.setTransform(-68.475,27.025);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HPlogowTag, new cjs.Rectangle(-137.2,-28,283.29999999999995,67), null);


(lib.HEAD1b = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#8D8B00").s().p("AhOBAIAcgiQAcAXAegBQAVAAAAgMIAAgBQAAgGgGgDQgHgEgRgEQgjgIgOgKQgUgNAAgZIAAgBQAAgaATgPQATgRAgAAQAsAAAfAYIgaAkQgZgSgZAAQgSAAAAALIAAABQAAAGAGAEQAHAEASADQAiAIAPALQASAOAAAXIAAABQAAAbgUAQQgUAQghAAQgyAAgigeg");
	this.shape.setTransform(135.775,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B00").s().p("Ag7BEQgbgbAAgoIAAgBQAAgnAbgbQAbgbApgBQAxAAAcAmIgmAeQgSgWgWAAQgSAAgMAPQgMANAAAUIAAAAQAAAVAMANQAMAOASAAQAXAAASgVIAmAbQgeApgygBQgnABgbgbg");
	this.shape_1.setTransform(118.325,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B00").s().p("AgYBbIAAi1IAxAAIAAC1g");
	this.shape_2.setTransform(104.375,39.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B00").s().p("AAaBbIgkg3IgWAAIAAA3IgzAAIAAi1IBVAAQAoAAAUAUQAQAQAAAaIAAAAQAAAngmARIAsA/gAgggDIAgAAQANAAAHgFQAHgHAAgJIAAgBQAAgVgbgBIggAAg");
	this.shape_3.setTransform(91.425,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B00").s().p("AgYBbIAAiJIg3AAIAAgsICfAAIAAAsIg3AAIAACJg");
	this.shape_4.setTransform(72.875,39.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B00").s().p("AAwBcIgOghIhFAAIgNAhIg1AAIBOi3IAvAAIBOC3gAAUAUIgUgzIgUAzIAoAAg");
	this.shape_5.setTransform(57.5,39.625);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B00").s().p("AgYBbIAAi1IAxAAIAAC1g");
	this.shape_6.setTransform(42.925,39.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B00").s().p("AhWBbIAAi1IBHAAQAvAAAbAZQAbAZAAAoIAAAAQAAAogbAZQgcAagvAAgAgjAvIAVAAQAWgBANgMQAOgMAAgWIAAAAQAAgVgOgMQgNgNgWAAIgVAAg");
	this.shape_7.setTransform(29,39.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D8B00").s().p("AhJBbIAAi1ICRAAIAAAqIhfAAIAAAcIBWAAIAAAoIhWAAIAAAcIBhAAIAAArg");
	this.shape_8.setTransform(10.4,39.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8B00").s().p("AhMBbIAAi1IBOAAQAiAAAVARQAUARAAAeIAAAAQAAAegWASQgVARgiAAIgZAAIAAA0gAgZAAIAYAAQAMAAAIgGQAIgGAAgLIAAgBQAAgXgcgBIgYAAg");
	this.shape_9.setTransform(-6.775,39.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8B00").s().p("AhFBDQgcgbAAgnIAAgBQAAgmAcgcQAcgbApgBQAqABAcAbQAcAbAAAnIAAAAQAAAogcAbQgdAcgpgBQgpABgcgcgAghghQgNANAAAUIAAAAQAAAUANAOQAOAPATAAQAVAAANgPQAMgOAAgTIAAgBQAAgTgMgOQgOgPgUAAQgUAAgNAPg");
	this.shape_10.setTransform(-34.05,39.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8B00").s().p("AgYBbIAAiJIg3AAIAAgsICfAAIAAAsIg3AAIAACJg");
	this.shape_11.setTransform(-53.425,39.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(-146.5,0,293.1,56), null);


(lib.HEAD1a = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// HEAD_1a
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#8D8B00").s().p("AhJBbIAAi1ICSAAIAAAqIhgAAIAAAcIBXAAIAAAoIhXAAIAAAcIBhAAIAAArg");
	this.shape.setTransform(-78.2,39.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B00").s().p("AAaBbIgkg3IgWAAIAAA3IgzAAIAAi1IBVAAQAoAAAUAUQAQAQAAAaIAAAAQAAAngmARIAsA/gAgggDIAgAAQANAAAHgFQAHgHAAgJIAAgBQAAgVgbgBIggAAg");
	this.shape_1.setTransform(-95.875,39.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B00").s().p("AAvBcIgMghIhGAAIgNAhIg0AAIBMi3IAwAAIBNC3gAAUAUIgUgzIgUAzIAoAAg");
	this.shape_2.setTransform(-116.15,39.625);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B00").s().p("Ag7BEQgbgbAAgoIAAgBQAAgnAbgbQAbgbApgBQAxAAAcAmIgmAeQgSgWgWAAQgSAAgMAPQgMANAAAUIAAAAQAAAVAMANQAMAOASAAQAXAAASgVIAmAbQgeApgygBQgnABgbgbg");
	this.shape_3.setTransform(-134.775,39.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B00").s().p("AgYBbIAAhEIhFhxIA5AAIAkBDIAmhDIA5AAIhGBwIAABFg");
	this.shape_4.setTransform(120.4,13.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B00").s().p("Ag7BEQgbgbAAgoIAAgBQAAgnAbgbQAbgbApgBQAxAAAcAmIgmAeQgSgWgWAAQgSAAgMAPQgMANAAAUIAAAAQAAAVAMAOQAMAOASgBQAXAAASgVIAmAbQgeApgygBQgnABgbgbg");
	this.shape_5.setTransform(101.725,13.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B00").s().p("AAqBbIhNhjIAABjIgyAAIAAi1IAvAAIBKBfIAAhfIAyAAIAAC1g");
	this.shape_6.setTransform(81.8,13.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B00").s().p("AAwBcIgOghIhFAAIgNAhIg1AAIBOi3IAvAAIBOC3gAAUAUIgUgzIgUAzIAoAAg");
	this.shape_7.setTransform(61.3,13.625);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D8B00").s().p("AAqBbIhNhjIAABjIgyAAIAAi1IAvAAIBKBfIAAhfIAyAAIAAC1g");
	this.shape_8.setTransform(40.75,13.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8B00").s().p("Ag7BEQgdgbAAgoIAAgBQAAgnAcgbQAcgbApgBQAsAAAeAaIgeAkQgUgQgYgBQgTABgNAOQgOAOAAAUIAAABQABAVAOAPQAOAOAUAAQASAAALgHIAAgXIgjAAIAAgjIBTAAIAABQQgiAdgtgBQgpAAgcgag");
	this.shape_9.setTransform(20.5,13.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8B00").s().p("AhJBbIAAi1ICSAAIAAAqIhgAAIAAAcIBXAAIAAAoIhXAAIAAAcIBhAAIAAArg");
	this.shape_10.setTransform(2.25,13.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8B00").s().p("AAaBbIgkg3IgWAAIAAA3IgzAAIAAi1IBVAAQAoAAAUAUQAQAPAAAbIAAABQAAAngmAQIAsA/gAgggDIAgAAQANAAAHgFQAHgHAAgJIAAgBQAAgVgbgBIggAAg");
	this.shape_11.setTransform(-15.425,13.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D8B00").s().p("AhMBbIAAi1IBOAAQAiAAAVARQAUARAAAeIAAAAQAAAfgWARQgVARgiAAIgZAAIAAA0gAgZAAIAYAAQAMAAAIgGQAIgGAAgLIAAgBQAAgXgcgBIgYAAg");
	this.shape_12.setTransform(-33.575,13.7);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D8B00").s().p("AAvBbIAAhoIgvBGIAAAAIguhFIAABnIgyAAIAAi1IA2AAIAqBGIAshGIA1AAIAAC1g");
	this.shape_13.setTransform(-61.325,13.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8D8B00").s().p("AhFBDQgcgbAAgnIAAgBQAAgnAcgbQAdgbApgBQApABAdAbQAbAbAAAnIAAAAQAAAogcAbQgdAcgpgBQgpABgcgcgAghghQgMANAAAUIAAAAQAAAUAMAPQAOAOAUAAQATAAAOgOQAMgOABgUIAAgBQAAgTgNgOQgNgPgVAAQgTAAgOAPg");
	this.shape_14.setTransform(-83.4,13.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8D8B00").s().p("AAaBbIgkg3IgWAAIAAA3IgzAAIAAi1IBVAAQAoAAAUAUQAQAPAAAbIAAABQAAAngmAQIAsA/gAgggDIAgAAQANAAAHgFQAHgHAAgJIAAgBQAAgVgbgBIggAAg");
	this.shape_15.setTransform(-102.875,13.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8D8B00").s().p("AhIBbIAAi1ICRAAIAAAtIheAAIAAAeIBVAAIAAApIhVAAIAABBg");
	this.shape_16.setTransform(-120.825,13.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(-146.5,0,293.1,124), null);


(lib.dot = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AgZAaQgLgLAAgPIAAAAQAAgPALgKQALgLAOAAQAPAAALALQALAKAAAPIAAAAQAAAPgLALQgLALgPAAQgOAAgLgLg");
	this.shape.setTransform(0.275,12.475);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(-211.8,0,423.70000000000005,27.3), null);


(lib.B7copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(55.925,37.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(40.875,37.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAghIAAgBQAAghAYgWQAYgYAiAAQAkgBAYAYQAXAXAAAhIAAAAQAAAigXAXQgZAXgjABQgjgBgXgXgAgcgcQgKALAAARIAAAAQAAASALALQALANAQAAQASAAALgNQAKgMAAgQIAAgBQAAgQgKgMQgMgNgRAAQgQABgMAMg");
	this.shape_2.setTransform(23.275,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_3.setTransform(4.475,37.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AhIBNIAAiZIA7AAQAoAAAYAVQAXAVgBAiQAAAigWAVQgZAWgoAAgAgdAnIARAAQATAAALgKQAMgKAAgTIAAAAQAAgSgMgKQgLgLgTAAIgRAAg");
	this.shape_4.setTransform(-19.4,37.225);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_5.setTransform(-36.725,37.225);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_6.setTransform(-54.15,37.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B7copy, new cjs.Rectangle(-169.6,0,339.29999999999995,52), null);


(lib.B7 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAXgcQAYASAaAAQARAAABgKIAAgBQgBgFgFgDQgFgCgPgFQgdgGgNgIQgQgMAAgVIAAgBQAAgVAPgOQARgOAbAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAGADQAFADAPADQAdAGANAKQAQALAAAVIAAAAQAAAXgRAOQgRANgdAAQgqAAgdgag");
	this.shape.setTransform(87,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(71.425,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_2.setTransform(53.625,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_3.setTransform(40.875,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_4.setTransform(29.975,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(16.65,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AhDBNIAAgfIBMhWIhJAAIAAgkICEAAIAAAeIhMBXIBMAAIAAAkg");
	this.shape_6.setTransform(0.175,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-11.125,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_8.setTransform(-23.375,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAcAAAAggIAAhWIAsAAIAABVQAAAkgUASQgSASgiAAQghAAgTgSg");
	this.shape_9.setTransform(-40.35,12.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-58.375,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-77.525,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_12.setTransform(-90.725,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B7, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B6copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AhDA2IAZgcQAXASAZAAQATAAgBgKIAAgBQABgFgGgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAQgOQARgOAaAAQAmAAAaAVIgWAeQgWgPgUAAQgQAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAPALAAAVIAAAAQABAXgSAOQgQANgdAAQgqAAgegag");
	this.shape.setTransform(198.65,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_1.setTransform(182.125,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(163.8,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAdBNIgdgvIgdAvIgwAAIA0hNIgyhMIAxAAIAaArIAcgrIAwAAIgzBLIA2BOg");
	this.shape_3.setTransform(146.95,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(131.725,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_5.setTransform(112.35,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_6.setTransform(96.35,12.45);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAdAAAAggIAAhWIArAAIAABVQAAAkgUASQgSASgiAAQghAAgTgSg");
	this.shape_7.setTransform(80.2,12.675);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_8.setTransform(63.175,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_9.setTransform(45.875,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_10.setTransform(28.45,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B6copy, new cjs.Rectangle(-127.9,0,481.70000000000005,27.3), null);


(lib.B6 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AgzA6QgYgWAAgkIAAAAQAAghAYgXQAYgYAiAAQAlABAaAWIgZAeQgRgOgUAAQgQAAgLAMQgMAMAAARIAAAAQAAAUAMAMQAMAMARgBQAPAAAKgFIAAgUIgeAAIAAgeIBHAAIAABFQgdAXgnAAQgjAAgYgWg");
	this.shape.setTransform(-3.625,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(-20.675,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_2.setTransform(-32.925,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_3.setTransform(-45.175,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_4.setTransform(-62.475,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-79.9,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(-95,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAeAAARAOQARAOAAAaIAAAAQABAagUAPQgRAOgdAAIgVAAIAAAsgAgVAAIAUAAQALAAAGgFQAHgGAAgJIAAAAQAAgUgYAAIgUAAg");
	this.shape_7.setTransform(-109.2,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_8.setTransform(-129.025,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_9.setTransform(-141.15,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-152.025,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-165.225,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-182.85,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("Ag9BNIAAiZIB7AAIAAAlIhQAAIAAAaIBIAAIAAAjIhIAAIAAA3g");
	this.shape_13.setTransform(-196.95,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B6, new cjs.Rectangle(-342.7,0,481.7,27.3), null);


(lib.B5copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAXgcQAYASAaAAQARAAABgKIAAgBQgBgFgFgDQgFgCgPgFQgdgGgNgIQgQgMAAgVIAAgBQAAgVAPgOQARgOAbAAQAmAAAZAVIgVAeQgVgPgVAAQgQAAAAAKIAAAAQAAAGAGADQAFADAPADQAdAGANAKQAPALABAVIAAAAQAAAXgRAOQgSANgcAAQgqAAgdgag");
	this.shape.setTransform(197.15,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_1.setTransform(183.85,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(167.85,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAYgYAiAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgYgWg");
	this.shape_3.setTransform(151.15,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_4.setTransform(139.325,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AhCA2IAXgcQAYASAaAAQARAAABgKIAAgBQgBgFgFgDQgFgCgPgFQgdgGgNgIQgQgMAAgVIAAgBQAAgVAPgOQARgOAbAAQAmAAAZAVIgVAeQgVgPgVAAQgQAAAAAKIAAAAQAAAGAGADQAFADAPADQAdAGANAKQAPALABAVIAAAAQAAAXgRAOQgSANgcAAQgqAAgdgag");
	this.shape_5.setTransform(128.3,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_6.setTransform(113.375,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_7.setTransform(97.05,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAeAAARAOQARAOAAAaIAAAAQAAAagSAPQgSAOgdAAIgWAAIAAAsgAgWAAIAVAAQALAAAGgFQAHgGgBgJIAAAAQAAgUgXAAIgVAAg");
	this.shape_8.setTransform(81.75,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B5copy, new cjs.Rectangle(-87.5,0,453.4,27.3), null);


(lib.B5 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgsAAIAAiZIAsAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape.setTransform(37.75,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_1.setTransform(22.125,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_2.setTransform(10.7,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgKAcIguAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_3.setTransform(-5.3,12.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(-21.225,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_5.setTransform(-37.2,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(-58.05,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(-74.05,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(-90.225,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_9.setTransform(-107.875,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-120.625,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgTBOIg/ibIAwAAIAiBhIAkhhIAuAAIg+Cbg");
	this.shape_11.setTransform(-132.6,12.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-146.6,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IAsAAIAACZg");
	this.shape_13.setTransform(-163.75,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_14.setTransform(-179.275,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AhEBNIAAiZIBOAAQAcAAAOANQAKALAAAOIAAABQAAAYgXAKQAeAJAAAcIAAABQAAAUgPALQgQALgbAAgAgaArIAgAAQAUAAAAgOIAAgBQAAgOgVAAIgfAAgAgagPIAaAAQAUAAAAgNIAAgBQAAgNgTAAIgbAAg");
	this.shape_15.setTransform(-194.425,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B5, new cjs.Rectangle(-304.9,0,453.29999999999995,27.3), null);


(lib.B4copy = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(169.625,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(155.075,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgLAcIgtAAIBBibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(138.3,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAXgYAjAAQApAAAYAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQghAAgWgWg");
	this.shape_3.setTransform(122.1,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(102.3,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg7AAIgLAcIgtAAIBBibIApAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(86.75,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_6.setTransform(73.425,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_7.setTransform(57.975,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_8.setTransform(42.625,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AhJBNIAAiZIA9AAQAnAAAYAVQAWAVAAAiQABAigXAVQgYAWgoAAgAgdAnIARAAQATAAALgKQAMgKAAgTIAAAAQAAgSgMgKQgLgLgTAAIgRAAg");
	this.shape_9.setTransform(27.25,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B4copy, new cjs.Rectangle(-114.4,0,423.70000000000005,27.3), null);


(lib.B4 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(-12.725,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(-27.275,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(-44.05,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgYAhAAQAqAAAYAhIggAZQgPgTgTABQgPgBgLAMQgKANAAAQIAAAAQAAARAKANQALAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgXgWg");
	this.shape_3.setTransform(-60.3,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(-80.05,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg7AAIgLAcIgtAAIBBibIApAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-95.6,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAXgYAjAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQATAAAQgSIAgAWQgZAjgrAAQghAAgXgWg");
	this.shape_6.setTransform(-111.85,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-123.225,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhIBNIAAiZIA7AAQAoAAAYAVQAXAVgBAiQAAAigWAVQgZAWgoAAgAgdAnIARAAQATAAALgKQAMgKAAgTIAAAAQAAgSgMgKQgLgLgTAAIgRAAg");
	this.shape_8.setTransform(-134.6,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_9.setTransform(-149.975,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-166.725,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B4, new cjs.Rectangle(-303,0,423.7,27.3), null);


// stage content:
(lib.HP_FromTo_Display_300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [254];
	// timeline functions:
	this.frame_254 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(254).call(this.frame_254).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,1).p("A3WzcMAutAAAMAAAAm5MgutAAAg");
	this.shape.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(255));

	// B4
	this.instance = new lib.B4();
	this.instance.setTransform(935.3,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(125).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:17.7},13).wait(117));

	// dot
	this.instance_1 = new lib.dot();
	this.instance_1.setTransform(153.75,14.25,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(163).to({_off:false},0).wait(92));

	// B4_copy
	this.instance_2 = new lib.B4copy();
	this.instance_2.setTransform(267.2,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(153).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:17.7},13).wait(89));

	// B5
	this.instance_3 = new lib.B5();
	this.instance_3.setTransform(889.55,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(172).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:35.85},13).wait(70));

	// dot_copy
	this.instance_4 = new lib.dot();
	this.instance_4.setTransform(193.25,31.75,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(193).to({_off:false},0).wait(62));

	// B5_copy
	this.instance_5 = new lib.B5copy();
	this.instance_5.setTransform(119.3,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(190).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:35.85},13).wait(52));

	// B6
	this.instance_6 = new lib.B6();
	this.instance_6.setTransform(973.25,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(200).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:242.5,y:54.1},13).wait(42));

	// dot_copy_copy
	this.instance_7 = new lib.dot();
	this.instance_7.setTransform(158.75,50.25,0.708,0.708,0,0,0,0.1,13.7);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(217).to({_off:false},0).wait(38));

	// B6_copy
	this.instance_8 = new lib.B6copy();
	this.instance_8.setTransform(212.35,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(207).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:242.5,y:54.1},13).wait(35));

	// B7
	this.instance_9 = new lib.B7();
	this.instance_9.setTransform(612.1,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(215).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:72.2},15).wait(25));

	// B7_copy
	this.instance_10 = new lib.B7copy();
	this.instance_10.setTransform(612.1,120.9,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(221).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:242.5,y:72.2},15).wait(19));

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,0,3).p("A3WAAMAutAAA");
	this.shape_1.setTransform(150,0.5);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(255));

	// PIC1
	this.instance_11 = new lib.PIC1();
	this.instance_11.setTransform(300,380,1,1,0,0,0,150,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(104).to({y:557},20,cjs.Ease.quintInOut).to({_off:true},1).wait(130));

	// HEAD1a
	this.instance_12 = new lib.HEAD1a();
	this.instance_12.setTransform(150,49,1,1,0,0,0,0,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(104).to({alpha:0},10).to({_off:true},1).wait(140));

	// HEAD1b
	this.instance_13 = new lib.HEAD1b();
	this.instance_13.setTransform(149.95,148,1,1,0,0,0,0,35);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(39).to({_off:false},0).to({x:150,y:49},20,cjs.Ease.quintInOut).wait(45).to({alpha:0},10).to({_off:true},1).wait(140));

	// HEAD2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("Ag6BNQgSgVAAggIAAgBQAAggASgVQASgTAaAAQAYgBASAVIAAhCIAxAAIAAC9IgxAAIAAgTQgSAWgYgBQgaAAgSgTgAgTAAQgJAJAAAOIAAAAQAAAOAJAKQAIAIALABQAMgBAJgIQAIgKAAgOIAAAAQAAgOgIgJQgJgIgMAAQgLAAgIAIg");
	this.shape_2.setTransform(262.975,225.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("AgxA1QgVgUAAggIAAgBQAAgeAUgVQAVgWAeAAQAhAAAUAXQARAVAAAgIAAALIheAAQAHAXAXAAQAQAAAPgPIAbAXQgWAdgnAAQgfAAgWgVgAAZgLQgBgLgHgHQgGgHgKAAQgUAAgEAZIAwAAIAAAAg");
	this.shape_3.setTransform(246.9,227.775);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("AggArIAAg4IgQAAIAAgoIAQAAIAAgkIAwAAIAAAkIAhAAIAAAoIghAAIAAAuQAAAPAOAAQAJAAAKgFIAAAmQgPAJgUAAQguAAAAgvg");
	this.shape_4.setTransform(233.675,226.125);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AhMBdIAAi1IAxAAIAAASQASgWAYAAQAaAAASAUQASAVAAAgIAAABQAAAggSAVQgSATgaAAQgYAAgSgUIAAA7gAgTgpQgJAJAAAOIAAAAQAAAOAJAIQAIAJALAAQAMAAAJgJQAIgIAAgOIAAAAQAAgOgIgJQgJgJgMAAQgLAAgIAJg");
	this.shape_5.setTransform(220.025,229.675);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("AgwA1QgWgUAAggIAAgBQAAgeAUgVQAUgWAeAAQAjAAATAXQARAVAAAgIAAALIheAAQAHAXAXAAQARAAAOgPIAbAXQgWAdgmAAQghAAgUgVgAAZgLQgBgLgHgHQgGgHgLAAQgTAAgEAZIAwAAIAAAAg");
	this.shape_6.setTransform(203.45,227.775);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("AguAzQgVgUAAgeIAAgBQAAgeAVgUQAWgXAfAAQAoABAUAfIghAZQgLgPgPAAQgLAAgIAJQgIAJAAANIAAAAQAAANAIAJQAIAKALAAQAPAAAMgPIAhAYQgWAggoABQgfAAgVgXg");
	this.shape_7.setTransform(188.775,227.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("AguAzQgVgUAAgeIAAgBQAAgeAVgUQAWgXAfAAQAoABAUAfIghAZQgLgPgPAAQgLAAgIAJQgIAJAAANIAAAAQAAANAIAJQAIAKALAAQAPAAAMgPIAhAYQgWAggoABQgfAAgVgXg");
	this.shape_8.setTransform(174.375,227.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("Ag2A+QgOgMAAgUIAAgBQAAgWAPgKQAPgLAZAAQATAAAOAFIAAgCQAAgXgbAAQgSAAgVAIIgKgjQAbgLAdAAQAkAAARARQAQAPAAAeIAABQIgxAAIAAgPQgRASgYAAQgUAAgNgLgAgUAaIAAABQAAAHAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgHQgJgDgLAAQgVAAAAARg");
	this.shape_9.setTransform(159.125,227.825);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("Ag6BNQgSgVAAggIAAgBQAAggASgVQASgTAaAAQAYgBASAVIAAhCIAxAAIAAC9IgxAAIAAgTQgSAWgYgBQgaAAgSgTgAgTAAQgJAJAAAOIAAAAQAAAOAJAKQAIAIALABQAMgBAJgIQAIgKAAgOIAAAAQAAgOgIgJQgJgIgMAAQgLAAgIAIg");
	this.shape_10.setTransform(136.075,225.45);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AgXBfIAAiLIAwAAIAACLgAgZg6IAAgkIAyAAIAAAkg");
	this.shape_11.setTransform(124,225.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("Ag2A+QgOgMAAgUIAAgBQAAgWAPgKQAPgLAZAAQATAAAOAFIAAgCQAAgXgbAAQgSAAgVAIIgKgjQAbgLAdAAQAkAAARARQAQAPAAAeIAABQIgxAAIAAgPQgRASgYAAQgUAAgNgLgAgUAaIAAABQAAAHAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgHQgJgDgLAAQgVAAAAARg");
	this.shape_12.setTransform(112.425,227.825);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("AguAzQgVgUAAgeIAAgBQAAgeAVgUQAWgXAfAAQAoABAUAfIghAZQgLgPgPAAQgLAAgIAJQgIAJAAANIAAAAQAAANAIAJQAIAKALAAQAPAAAMgPIAhAYQgWAggoABQgfAAgVgXg");
	this.shape_13.setTransform(98.075,227.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AgXBfIAAiLIAvAAIAACLgAgYg6IAAgkIAxAAIAAAkg");
	this.shape_14.setTransform(86.95,225.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("Ag6BNQgSgVAAggIAAgBQAAggASgVQASgTAaAAQAYgBASAVIAAhCIAxAAIAAC9IgxAAIAAgTQgSAWgYgBQgaAAgSgTgAgTAAQgJAJAAAOIAAAAQAAAOAJAKQAIAIALABQAMgBAJgIQAIgKAAgOIAAAAQAAgOgIgJQgJgIgMAAQgLAAgIAIg");
	this.shape_15.setTransform(74.375,225.45);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("AgwA1QgWgUAAggIAAgBQAAgeAUgVQAVgWAdAAQAiAAAUAXQARAVAAAgIAAALIhdAAQAFAXAYAAQAQAAAQgPIAbAXQgXAdgmAAQghAAgUgVgAAZgLQgCgLgGgHQgHgHgKAAQgTAAgEAZIAwAAIAAAAg");
	this.shape_16.setTransform(58.3,227.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AAvBbIAAhnIgvBGIAAAAIguhGIAABnIgyAAIAAi1IA2AAIAqBHIAshHIA1AAIAAC1g");
	this.shape_17.setTransform(39.525,225.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("Ag6BNQgSgUAAghIAAAAQAAghASgUQASgUAaAAQAYgBASAVIAAhCIAxAAIAAC9IgxAAIAAgTQgSAWgYgBQgaABgSgUgAgTAAQgJAJAAAOIAAABQAAANAJAKQAIAIALABQAMgBAJgIQAIgKAAgNIAAgBQAAgOgIgJQgJgIgMAAQgLAAgIAIg");
	this.shape_18.setTransform(253.375,197.45);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AAVBIIAAhLQAAgYgUAAQgJAAgFAGQgGAGAAAMIAABLIgyAAIAAiLIAyAAIAAATQASgXAXAAQAWAAANAOQANAOAAAYIAABbg");
	this.shape_19.setTransform(237.025,199.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("Ag2A+QgOgMAAgUIAAgBQAAgWAPgKQAPgLAZAAQATAAAOAFIAAgCQAAgXgbAAQgSAAgVAIIgKgjQAbgLAdAAQAkAAARARQAQAPAAAeIAABQIgxAAIAAgPQgRASgYAAQgUAAgNgLgAgUAaIAAABQAAAHAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgHQgJgDgLAAQgVAAAAARg");
	this.shape_20.setTransform(221.075,199.825);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("AAVBfIAAhMQAAgXgUAAQgJAAgFAFQgGAGAAAMIAABMIgyAAIAAi9IAyAAIAABFQARgXAYAAQAWAAANAOQANAOAAAXIAABcg");
	this.shape_21.setTransform(198.875,197.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("AggArIAAg4IgQAAIAAgoIAQAAIAAgkIAwAAIAAAkIAhAAIAAAoIghAAIAAAuQAAAPAOAAQAJAAAKgFIAAAmQgPAJgUAAQguAAAAgvg");
	this.shape_22.setTransform(185.225,198.125);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AgXBfIAAi9IAwAAIAAC9g");
	this.shape_23.setTransform(176.2,197.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("Ag2A+QgOgMAAgUIAAgBQAAgWAPgKQAPgLAZAAQATAAAOAFIAAgCQAAgXgbAAQgSAAgVAIIgKgjQAbgLAdAAQAkAAARARQAQAPAAAeIAABQIgxAAIAAgPQgRASgYAAQgUAAgNgLgAgUAaIAAABQAAAHAFAEQAEAEAIAAQAKAAAHgGQAHgHAAgKIAAgHQgJgDgLAAQgVAAAAARg");
	this.shape_24.setTransform(164.625,199.825);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFAC8").s().p("AgwA1QgWgUAAggIAAgBQAAgeAUgVQAVgWAdAAQAjAAATAXQARAVAAAgIAAALIhdAAQAGAXAXAAQARAAAOgPIAbAXQgWAdgmAAQghAAgUgVgAAZgLQgCgLgGgHQgHgHgKAAQgTAAgEAZIAwAAIAAAAg");
	this.shape_25.setTransform(149.55,199.775);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFAC8").s().p("AAgBbIAAhFIg/AAIAABFIgzAAIAAi1IAzAAIAABEIA/AAIAAhEIAzAAIAAC1g");
	this.shape_26.setTransform(132.2,197.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFAC8").s().p("AgwA1QgWgUAAggIAAgBQAAgeAUgVQAVgWAdAAQAiAAAUAXQARAVAAAgIAAALIhdAAQAFAXAYAAQARAAAPgPIAbAXQgXAdgmAAQghAAgUgVgAAZgLQgBgLgHgHQgHgHgKAAQgTAAgEAZIAwAAIAAAAg");
	this.shape_27.setTransform(107.9,199.775);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFAC8").s().p("AgXBfIAAi9IAvAAIAAC9g");
	this.shape_28.setTransform(96.5,197.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFAC8").s().p("AhMBdIAAi1IAxAAIAAASQASgWAYAAQAaAAASAUQASAVAAAgIAAABQAAAggSAVQgSATgaAAQgYAAgSgUIAAA7gAgTgpQgJAJAAAOIAAAAQAAAOAJAIQAIAJALAAQAMAAAJgJQAIgIAAgOIAAAAQAAgOgIgJQgJgJgMAAQgLAAgIAJg");
	this.shape_29.setTransform(84.425,201.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFAC8").s().p("AhMBdIAAi1IAxAAIAAASQASgWAYAAQAaAAASAUQASAVAAAgIAAABQAAAggSAVQgSATgaAAQgYAAgSgUIAAA7gAgTgpQgJAJAAAOIAAAAQAAAOAJAIQAIAJALAAQAMAAAJgJQAIgIAAgOIAAAAQAAgOgIgJQgJgJgMAAQgLAAgIAJg");
	this.shape_30.setTransform(67.225,201.675);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFAC8").s().p("AAwBcIgOghIhFAAIgNAhIg1AAIBOi3IAvAAIBOC3gAAUAUIgUgzIgUAzIAoAAg");
	this.shape_31.setTransform(48.25,197.625);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},104).wait(151));

	// BKGD_green
	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#8D8B00").s().p("A3bFyIAArjMAu3AAAIAALjg");
	this.shape_32.setTransform(150,213);
	this.shape_32._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_32).wait(104).to({_off:false},0).wait(151));

	// LOGO
	this.instance_14 = new lib.HPlogowTag();
	this.instance_14.setTransform(147.45,128.65,0.9503,0.9503,0,0,0,0.1,0);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(104).to({_off:false},0).wait(151));

	// POLY
	this.instance_15 = new lib.POLY();
	this.instance_15.setTransform(150,126,1,1,0,0,0,0,-50);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(104).to({_off:false},0).wait(151));

	// BKGD
	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFBCA").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");
	this.shape_33.setTransform(150,125);

	this.timeline.addTween(cjs.Tween.get(this.shape_33).wait(255));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-553.2,124.5,1556.4,302.5);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HP_FromTo_Display_300x250_atlas_P_1.png", id:"HP_FromTo_Display_300x250_atlas_P_1"},
		{src:"images/HP_FromTo_Display_300x250_atlas_NP_1.jpg", id:"HP_FromTo_Display_300x250_atlas_NP_1"}
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
an.compositions['2F49D00C20C940BA9B927F9153DA0B39'] = {
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
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;