(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HP_Visits_Display_160x600_atlas_P_1", frames: [[1322,0,320,200],[0,0,1320,270]]},
		{name:"HP_Visits_Display_160x600_atlas_NP_1", frames: [[0,714,320,190],[0,0,320,486],[0,488,320,224]]}
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



(lib._160x600poly = function() {
	this.initialize(ss["HP_Visits_Display_160x600_atlas_P_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600tofrom2 = function() {
	this.initialize(ss["HP_Visits_Display_160x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._160x600visits1 = function() {
	this.initialize(ss["HP_Visits_Display_160x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._160x600visits2 = function() {
	this.initialize(ss["HP_Visits_Display_160x600_atlas_NP_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["HP_Visits_Display_160x600_atlas_P_1"]);
	this.gotoAndStop(1);
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


(lib.Tween2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFBCA").s().p("EgMfAjjMAAAhHFIY/AAMAAABHFg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-227.5,160,455.1);


(lib.Tween1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#FFFBCA").s().p("EgMfAjjMAAAhHFIY/AAMAAABHFg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-227.5,160,455.1);


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
	this.instance = new lib._160x600poly();
	this.instance.setTransform(-80,-100,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.POLY, new cjs.Rectangle(-80,-100,160,100), null);


(lib.PIC2 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._160x600tofrom2();
	this.instance.setTransform(-80,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC2, new cjs.Rectangle(-80,0,160,95), null);


(lib.PIC1b = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib._160x600visits2();
	this.instance.setTransform(-80,-112,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1b, new cjs.Rectangle(-80,-112,160,112), null);


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
	this.instance = new lib._160x600visits1();
	this.instance.setTransform(-150,-243,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,-243,160,243), null);


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


(lib.HEAD1c = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#8D8B00").s().p("AgWBUIAAg/IhAhoIA1AAIAhA9IAjg9IA0AAIhABnIAABAg");
	this.shape.setTransform(54.175,84.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B00").s().p("AAYBUIghgzIgVAAIAAAzIguAAIAAinIBOAAQAlAAASASQAPAPAAAYIAAABQAAAkgjAPIAoA6gAgegDIAeAAQAMAAAGgEQAHgGAAgJIAAgBQAAgUgZAAIgeAAg");
	this.shape_1.setTransform(37.475,84.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B00").s().p("AhDBUIAAinICGAAIAAAoIhYAAIAAAZIBPAAIAAAkIhPAAIAAAbIBZAAIAAAng");
	this.shape_2.setTransform(20.55,84.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B00").s().p("AgVBVIhEioIA0AAIAlBpIAnhpIAzAAIhECog");
	this.shape_3.setTransform(3.175,84.85);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B00").s().p("AgWBUIAAinIAtAAIAACng");
	this.shape_4.setTransform(-9.825,84.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B00").s().p("Ag/BUIAAinIAuAAIAAB+IBRAAIAAApg");
	this.shape_5.setTransform(-20.65,84.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B00").s().p("AhDBUIAAinICGAAIAAAoIhYAAIAAAZIBPAAIAAAkIhPAAIAAAbIBZAAIAAAng");
	this.shape_6.setTransform(-36.25,84.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B00").s().p("AhPBUIAAinIBBAAQArAAAaAXQAZAXAAAlIAAAAQAAAlgZAXQgbAYgrAAgAggArIATAAQAUAAANgMQAMgKAAgVIAAAAQAAgTgMgMQgNgLgUAAIgTAAg");
	this.shape_7.setTransform(-53.425,84.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D8B00").s().p("AAnBUIhHhbIAABbIguAAIAAinIArAAIBEBYIAAhYIAuAAIAACng");
	this.shape_8.setTransform(83.575,60.8);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8B00").s().p("AhAA+QgagZAAglIAAAAQAAgjAagaQAagaAmAAQAnAAAaAaQAZAZAAAkIAAAAQAAAkgZAaQgbAagmAAQgmgBgagZgAgegfQgMANAAASIAAAAQAAATAMANQAMAOASgBQASAAANgNQALgNAAgTIAAAAQABgSgMgNQgMgNgTAAQgSAAgMANg");
	this.shape_9.setTransform(64.25,60.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8B00").s().p("AgWBUIAAinIAtAAIAACng");
	this.shape_10.setTransform(50.375,60.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8B00").s().p("AgWBUIAAh+IgzAAIAAgpICTAAIAAApIgzAAIAAB+g");
	this.shape_11.setTransform(38.575,60.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D8B00").s().p("AhGBUIAAinIBHAAQAgAAATAPQATARAAAbIAAAAQAAAcgUAQQgUAQgfAAIgXAAIAAAwgAgXAAIAWAAQALAAAHgGQAIgGAAgJIAAgBQAAgWgaAAIgWAAg");
	this.shape_12.setTransform(23.075,60.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D8B00").s().p("AgWBUIAAinIAtAAIAACng");
	this.shape_13.setTransform(10.625,60.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8D8B00").s().p("AAYBUIghgzIgVAAIAAAzIguAAIAAinIBOAAQAlAAASASQAPAPAAAYIAAAAQAAAlgjAPIAoA6gAgegCIAeAAQAMgBAGgFQAHgFAAgJIAAgBQAAgUgZAAIgeAAg");
	this.shape_14.setTransform(-1.325,60.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8D8B00").s().p("Ag2A/QgZgZAAgmIAAAAQAAgkAZgZQAZgaAlAAQAuABAZAiIgjAbQgQgTgVAAQgQAAgLANQgMANAAASIAAAAQAAATAMANQALANAQAAQAWAAAQgUIAjAZQgbAlgvABQgjAAgZgZg");
	this.shape_15.setTransform(-19.075,60.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8D8B00").s().p("AhJA7IAagfQAbAUAbAAQATABAAgMIAAgBQABgFgGgEQgGgDgQgEQgggHgNgKQgTgLAAgYIAAAAQAAgYASgPQASgPAdAAQApAAAcAXIgYAhQgWgRgYAAQgRAAAAALIAAAAQABAGAFADQAGADARAFQAfAGAPALQARALAAAXIAAAAQAAAagUAOQgSAPgeAAQgvAAgggcg");
	this.shape_16.setTransform(-36.1,60.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#8D8B00").s().p("AhDBUIAAinICGAAIAAAnIhYAAIAAAaIBPAAIAAAkIhPAAIAAAbIBZAAIAAAng");
	this.shape_17.setTransform(-51.35,60.8);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#8D8B00").s().p("AAYBUIghgzIgVAAIAAAzIguAAIAAinIBOAAQAlAAASASQAPAPAAAYIAAAAQAAAlgjAPIAoA6gAgegCIAeAAQAMgBAGgFQAHgFAAgJIAAgBQAAgUgZAAIgeAAg");
	this.shape_18.setTransform(-67.675,60.8);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#8D8B00").s().p("AhGBUIAAinIBHAAQAgAAATAPQATARAAAbIAAAAQAAAcgUAQQgUAQgfAAIgXAAIAAAwgAgXAAIAWAAQALAAAHgGQAIgGAAgJIAAgBQAAgWgaAAIgWAAg");
	this.shape_19.setTransform(-84.475,60.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#8D8B00").s().p("AhDBUIAAinICGAAIAAAnIhYAAIAAAaIBPAAIAAAkIhPAAIAAAaIBZAAIAAAog");
	this.shape_20.setTransform(65.45,36.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#8D8B00").s().p("AArBUIAAhgIgrBBIAAAAIgrhAIAABfIgtAAIAAinIAxAAIAnBBIAohBIAxAAIAACng");
	this.shape_21.setTransform(46.775,36.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#8D8B00").s().p("AhAA+QgagZAAglIAAAAQAAgkAagZQAagZAmAAQAnAAAaAZQAZAZAAAkIAAAAQAAAlgZAYQgbAagmAAQgmABgagagAgegfQgMANAAASIAAAAQAAASAMAOQAMANASAAQASAAANgNQALgNAAgTIAAAAQABgSgMgNQgMgOgTAAQgSAAgMAOg");
	this.shape_22.setTransform(26.45,36.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#8D8B00").s().p("AAdBUIAAhAIg6AAIAABAIguAAIAAinIAuAAIAAA/IA6AAIAAg/IAwAAIAACng");
	this.shape_23.setTransform(7.35,36.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#8D8B00").s().p("AhDBUIAAinICGAAIAAAnIhYAAIAAAaIBPAAIAAAkIhPAAIAAAaIBZAAIAAAog");
	this.shape_24.setTransform(-16.1,36.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#8D8B00").s().p("AhDBUIAAinICGAAIAAAnIhYAAIAAAaIBPAAIAAAkIhPAAIAAAaIBZAAIAAAog");
	this.shape_25.setTransform(-32.1,36.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#8D8B00").s().p("AAYBUIghgzIgVAAIAAAzIguAAIAAinIBOAAQAlAAASASQAPAPAAAYIAAAAQAAAlgjAOIAoA7gAgegCIAeAAQAMAAAGgGQAHgFAAgJIAAgBQAAgUgZAAIgeAAg");
	this.shape_26.setTransform(-48.425,36.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8D8B00").s().p("AhCBUIAAinICFAAIAAApIhXAAIAAAdIBPAAIAAAlIhPAAIAAA8g");
	this.shape_27.setTransform(-64.975,36.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#8D8B00").s().p("AhPBUIAAinIBBAAQArAAAaAXQAZAXAAAlIAAAAQAAAlgZAXQgbAYgrAAgAggArIATAAQAUAAANgMQAMgKAAgVIAAAAQAAgTgMgMQgNgLgUAAIgTAAg");
	this.shape_28.setTransform(19.175,12.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#8D8B00").s().p("AAnBUIhHhbIAABbIguAAIAAinIArAAIBEBYIAAhYIAuAAIAACng");
	this.shape_29.setTransform(0.325,12.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#8D8B00").s().p("AAsBVIgMgfIhAAAIgMAfIgxAAIBHioIAsAAIBICogAATASIgTguIgSAuIAlAAg");
	this.shape_30.setTransform(-18.6,12.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1c, new cjs.Rectangle(-146.5,0,293.1,124), null);


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
	this.shape.graphics.f("#8D8B02").s().p("AiMBxIAyg7QAxAmA3AAQAlABAAgWIAAgBQAAgLgLgGQgLgHgggIQg9gOgZgRQgjgYAAgtIAAAAQAAguAhgcQAigdA5AAQBPAAA1AqIgtA/QgsgfgtAAQggAAAAAUIAAABQAAALALAGQALAHAhAIQA8AMAbAVQAhAXAAArIAAABQAAAxgkAcQgjAcg8AAQhZAAg9g2g");
	this.shape.setTransform(62.125,160.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B02").s().p("AgsChIAAjyIhgAAIAAhPIEZAAIAABPIhgAAIAADyg");
	this.shape_1.setTransform(32.5,160.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B02").s().p("AgrChIAAlBIBYAAIAAFBg");
	this.shape_2.setTransform(9.85,160.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B02").s().p("AiMBxIAyg7QAxAmA3AAQAlABAAgWIAAgBQAAgLgLgGQgLgHgggIQg9gOgZgRQgjgYAAgtIAAAAQAAguAhgcQAigdA5AAQBPAAA1AqIgtA/QgsgfgtAAQggAAAAAUIAAABQAAALALAGQALAHAhAIQA8AMAbAVQAhAXAAArIAAABQAAAxgkAcQgjAcg8AAQhZAAg9g2g");
	this.shape_3.setTransform(-13.175,160.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B02").s().p("AgrChIAAlBIBXAAIAAFBg");
	this.shape_4.setTransform(-35.1,160.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B02").s().p("AgpCiIiClDIBkAAIBIDLIBJjLIBiAAIiDFDg");
	this.shape_5.setTransform(-60.1,160.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B02").s().p("Ah6ChIAAlBIBZAAIAADzICcAAIAABOg");
	this.shape_6.setTransform(93.325,114.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B02").s().p("ABVCiIgYg6Ih7AAIgXA6IheAAICJlDIBVAAICJFDgAAjAjIgjhaIgkBaIBHAAg");
	this.shape_7.setTransform(59.95,114.575);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D8B02").s().p("AhtCAQgoglAAhLIAAizIBaAAIAACyQAABFA7AAQA7AAAAhDIAAi0IBbAAIAACyQAABKgqAnQgmAkhGAAQhHAAgmgkg");
	this.shape_8.setTransform(24.275,115);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8B02").s().p("AgsChIAAjyIhgAAIAAhPIEZAAIAABPIhgAAIAADyg");
	this.shape_9.setTransform(-8.35,114.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8B02").s().p("AAtChIhAhhIgnAAIAABhIhZAAIAAlBICXAAQBGAAAjAjQAcAcAAAuIAAABQAABHhCAbIBNBxgAg6gGIA6AAQAXABANgLQAMgKAAgSIAAAAQAAgngwAAIg6AAg");
	this.shape_10.setTransform(-38.925,114.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8B02").s().p("AgrChIAAlBIBYAAIAAFBg");
	this.shape_11.setTransform(-64.05,114.7);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D8B02").s().p("AgpCiIiClDIBjAAIBIDLIBKjLIBiAAIiCFDg");
	this.shape_12.setTransform(-89.05,114.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D8B02").s().p("AAtChIhAhhIgnAAIAABhIhZAAIAAlBICXAAQBGAAAjAjQAcAcAAAuIAAABQAABGhCAcIBNBxgAg6gGIA6AAQAXABANgKQAMgLAAgRIAAgBQAAgogwAAIg6AAg");
	this.shape_13.setTransform(20.275,68.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8D8B02").s().p("Ah7B3QgygwAAhGIAAgBQABhFAxgwQAygyBKAAQBJABAyAwQAyAwAABGIAAAAQgBBGgyAxQgxAxhKgBQhJAAgygwgAg7g8QgWAZAAAjIAAAAQgBAjAXAaQAYAaAkAAQAjAAAXgZQAXgZAAgkIAAgBQgBgjgWgZQgYgagjAAQgkAAgXAag");
	this.shape_14.setTransform(-16.45,68.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(-146.5,0,293.1,188), null);


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
	this.shape.graphics.f("#8D8B00").s().p("ABKChIiIiwIAACwIhZAAIAAlBIBTAAICECpIAAipIBYAAIAAFBg");
	this.shape.setTransform(113.35,22.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B00").s().p("Ah7B3QgygwAAhGIAAgBQABhFAxgwQAygyBKAAQBJAAAyAxQAyAwgBBGIAAAAQABBGgzAxQgxAxhKgBQhJAAgygwgAg7g8QgWAYAAAkIAAAAQgBAkAXAZQAYAaAkAAQAjAAAXgZQAXgZAAgkIAAgBQgBgjgWgZQgYgagjAAQgkAAgXAag");
	this.shape_1.setTransform(76.25,22.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B00").s().p("AiMBxIAyg7QAxAnA3AAQAlgBAAgVIAAgCQAAgKgLgGQgLgHgggIQg9gNgZgTQgjgWAAgtIAAgBQAAguAhgdQAigdA5AAQBPAAA1ArIgtA/QgsgfgtgBQggAAAAAWIAAAAQAAALALAHQALAGAhAHQA8ANAbAVQAhAXAAArIAAABQAAAxgkAcQgjAcg8gBQhZABg9g2g");
	this.shape_2.setTransform(41.625,22.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B00").s().p("AAtChIhAhhIgnAAIAABhIhZAAIAAlBICXAAQBGAAAjAjQAcAcAAAvIAAAAQAABGhCAcIBNBxgAg6gFIA6AAQAXAAANgKQAMgLAAgRIAAgBQAAgogwAAIg6AAg");
	this.shape_3.setTransform(11.775,22.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B00").s().p("AiCChIAAlBIEDAAIAABLIiqAAIAAAyICaAAIAABFIiaAAIAAAzICrAAIAABMg");
	this.shape_4.setTransform(-20.7,22.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B00").s().p("AiHChIAAlBICJAAQA+AAAkAeQAkAeAAA0IAAABQAAA4goAeQgkAeg9AAIgtAAIAABcgAguAAIArAAQAXAAANgMQAOgLAAgTIAAgBQAAgqgzAAIgqAAg");
	this.shape_5.setTransform(-51.1,22.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B00").s().p("ABLChIiKiwIAACwIhYAAIAAlBIBUAAICCCpIAAipIBZAAIAAFBg");
	this.shape_6.setTransform(-98.3,22.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B00").s().p("AgsChIAAlBIBZAAIAAFBg");
	this.shape_7.setTransform(-123.8,22.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1a, new cjs.Rectangle(-146.5,0,293.1,124), null);


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
	this.shape.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape.setTransform(37.725,37.225);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(22.675,37.225);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAghIAAgBQAAghAYgWQAYgYAiAAQAkgBAYAYQAXAXAAAhIAAAAQAAAigXAXQgZAXgjABQgjgBgXgXgAgcgcQgKALAAARIAAAAQAAASALALQALANAQAAQASAAALgNQAKgMAAgQIAAgBQAAgQgKgMQgMgNgRAAQgQABgMAMg");
	this.shape_2.setTransform(5.075,37.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_3.setTransform(-13.725,37.225);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAcBBQgVAPgYAAQgYAAgPgMQgQgMAAgUIAAgBQAAgdAggNQgLgPAAgPIAAAAQAAgSANgMQAOgNAWABQATAAANALQANALAAARIAAAAQAAAbgfANIASARQAHgKAHgNIAdANQgLATgKANIAVAVIgdAVgAgdAhIAAABQAAAGAFAFQAFADAIAAQAIAAAJgGIgYgaQgLAHAAAKgAgLguQgEAEAAAGQAAAIAIAKQAQgHAAgMIAAAAQAAgNgLAAQgGAAgDAEg");
	this.shape_4.setTransform(-37.025,37.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AhDA2IAZgcQAXASAZAAQATAAgBgKIAAgBQABgFgGgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAQgOQARgOAaAAQAmAAAaAVIgWAeQgWgPgUAAQgQAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAPALAAAVIAAAAQABAXgSAOQgQANgdAAQgqAAgegag");
	this.shape_5.setTransform(86.6,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_6.setTransform(70.075,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(51.75,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAdBNIgdgvIgeAvIgwAAIA2hNIg0hMIAyAAIAaArIAcgrIAwAAIgyBLIA1BOg");
	this.shape_8.setTransform(34.95,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_9.setTransform(19.675,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_10.setTransform(-0.35,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_11.setTransform(-16.35,12.45);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAcAAAAggIAAhWIAsAAIAABVQAAAkgUASQgTASghAAQghAAgTgSg");
	this.shape_12.setTransform(-33.5,12.675);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_13.setTransform(-50.475,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_14.setTransform(-67.775,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_15.setTransform(-85.2,12.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B7, new cjs.Rectangle(-169.6,0,339.29999999999995,52), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAYgcQAXASAZAAQASAAAAgKIAAgBQAAgFgFgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAPgOQASgOAaAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAQALAAAVIAAAAQgBAXgRAOQgQANgdAAQgrAAgcgag");
	this.shape.setTransform(57.95,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_1.setTransform(44.65,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(28.65,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAXgYAjAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgYgWg");
	this.shape_3.setTransform(12,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_4.setTransform(0.175,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AhCA2IAYgcQAXASAZAAQASAAAAgKIAAgBQAAgFgFgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAPgOQASgOAaAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAQALAAAVIAAAAQgBAXgQAOQgRANgdAAQgrAAgcgag");
	this.shape_5.setTransform(-10.9,12.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_6.setTransform(-25.775,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_7.setTransform(-42.1,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAeAAARAOQARAOAAAaIAAAAQABAagUAPQgRAOgdAAIgVAAIAAAsgAgVAAIAUAAQALAAAGgFQAHgGAAgJIAAAAQAAgUgYAAIgUAAg");
	this.shape_8.setTransform(-57.45,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B6, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AhCA2IAYgcQAXASAZAAQASAAAAgKIAAgBQAAgFgFgDQgFgCgPgFQgdgGgMgIQgRgMAAgVIAAgBQAAgVAPgOQASgOAaAAQAmAAAZAVIgVAeQgVgPgWAAQgPAAAAAKIAAAAQAAAGAFADQAGADAPADQAdAGANAKQAQALAAAVIAAAAQgBAXgRAOQgQANgdAAQgrAAgcgag");
	this.shape.setTransform(87.2,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(71.625,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_2.setTransform(53.825,12.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_3.setTransform(41.025,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_4.setTransform(30.175,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(16.4,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AhDBNIAAgfIBMhWIhJAAIAAgkICEAAIAAAeIhMBXIBMAAIAAAkg");
	this.shape_6.setTransform(-0.075,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-11.425,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_8.setTransform(-23.625,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag0A9QgTgSAAgjIAAhWIArAAIAABVQAAAhAcAAQAcAAABggIAAhWIArAAIAABVQAAAkgUASQgTASghAAQghAAgTgSg");
	this.shape_9.setTransform(-40.65,12.675);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-58.625,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-77.825,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_12.setTransform(-90.975,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B5, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


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
	this.shape.graphics.f("#E87D1D").s().p("AgzA6QgYgWAAgkIAAAAQAAghAYgXQAYgYAiAAQAlABAaAWIgZAeQgRgOgUAAQgQAAgLAMQgMAMAAARIAAAAQAAAUAMAMQAMAMARgBQAPAAAKgFIAAgUIgeAAIAAgeIBHAAIAABFQgdAXgnAAQgjAAgYgWg");
	this.shape.setTransform(98.325,12.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_1.setTransform(81.275,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_2.setTransform(68.975,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_3.setTransform(56.775,12.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_4.setTransform(39.475,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AApBOIgLgcIg8AAIgKAcIgtAAIBBibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(22.05,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(6.9,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AhABNIAAiZIBBAAQAdAAASAOQARAOAAAaIAAAAQABAagUAPQgRAOgdAAIgWAAIAAAsgAgWAAIAVAAQALAAAGgFQAHgGgBgJIAAAAQAAgUgXAAIgVAAg");
	this.shape_7.setTransform(-7.25,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AgUBNIAAg6Ig7hfIAxAAIAeA4IAgg4IAwAAIg6BfIAAA6g");
	this.shape_8.setTransform(-29.225,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_9.setTransform(-41.7,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-52.575,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_11.setTransform(-65.775,12.525);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-84.1,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("Ag9BNIAAiZIB7AAIAAAlIhQAAIAAAaIBIAAIAAAjIhIAAIAAA3g");
	this.shape_13.setTransform(-99.2,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B4, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B3 = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape.setTransform(37.5,32.025);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_1.setTransform(21.875,32.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_2.setTransform(10.55,32.025);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_3.setTransform(-5.45,31.95);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(-21.375,32.025);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig1AAIAAA7IgsAAIAAiZIAsAAIAAA5IA1AAIAAg5IAsAAIAACZg");
	this.shape_5.setTransform(-37.4,32.025);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(69.3,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(53.3,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(37.125,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_9.setTransform(19.475,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(6.725,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgTBOIg/ibIAwAAIAiBhIAkhhIAuAAIg+Cbg");
	this.shape_11.setTransform(-5.25,12.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-19.5,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_13.setTransform(-36.65,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_14.setTransform(-52.175,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AhEBNIAAiZIBOAAQAcAAAOANQAKALAAAOIAAABQAAAYgXAKQAeAJAAAcIAAABQAAAUgPALQgQALgbAAgAgaArIAgAAQAUAAAAgOIAAgBQAAgOgVAAIgfAAgAgagPIAaAAQAUAAAAgNIAAgBQAAgNgTAAIgbAAg");
	this.shape_15.setTransform(-67.325,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B3, new cjs.Rectangle(-169.6,0,339.29999999999995,46.8), null);


(lib.B2 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(74.025,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(59.025,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(41.8,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgyA6QgXgXAAgjIAAAAQAAghAXgXQAXgYAjAAQAqAAAXAhIggAZQgPgTgTABQgPgBgKAMQgLANAAAQIAAAAQAAARALANQAKAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgYgWg");
	this.shape_3.setTransform(25.5,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(4.85,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-11.15,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_6.setTransform(-25.275,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAkBNIhChUIAABUIgqAAIAAiZIAoAAIA/BQIAAhQIAqAAIAACZg");
	this.shape_7.setTransform(-41.175,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_8.setTransform(-57.025,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("AhJBNIAAiZIA8AAQAoAAAYAVQAWAVABAiQAAAigYAVQgYAWgnAAgAgeAnIASAAQASAAAMgKQAMgKAAgTIAAAAQAAgSgMgKQgMgLgSAAIgSAAg");
	this.shape_9.setTransform(-72.45,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B2, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


(lib.B1 = function(mode,startPosition,loop,reversed) {
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
	this.shape.setTransform(80.325,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_1.setTransform(65.325,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_2.setTransform(48.1,12.45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgYAhAAQAqAAAYAhIggAZQgPgTgTABQgPgBgLAMQgKANAAAQIAAAAQAAARAKANQALAMAPgBQATAAAQgSIAgAWQgZAjgrAAQghAAgWgWg");
	this.shape_3.setTransform(31.85,12.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_4.setTransform(11.15,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAoBOIgKgcIg8AAIgLAcIgtAAIBCibIApAAIBBCbgAARARIgRgrIgRArIAiAAg");
	this.shape_5.setTransform(-4.85,12.45);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("AgxA6QgYgXAAgjIAAAAQAAghAXgXQAYgYAhAAQAqAAAYAhIggAZQgPgTgTABQgPgBgLAMQgKANAAAQIAAAAQAAARAKANQALAMAPgBQAUAAAPgSIAgAWQgZAjgrAAQggAAgXgWg");
	this.shape_6.setTransform(-21.15,12.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_7.setTransform(-32.975,12.525);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AhIBNIAAiZIA7AAQAoAAAYAVQAXAVAAAiQAAAigYAVQgXAWgpAAgAgeAnIASAAQASAAAMgKQAMgKAAgTIAAAAQAAgSgMgKQgMgLgSAAIgSAAg");
	this.shape_8.setTransform(-44.8,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_9.setTransform(-60.625,12.525);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AAoBNIAAhYIgoA8IAAAAIgng7IAABXIgqAAIAAiZIAtAAIAkA7IAlg7IAtAAIAACZg");
	this.shape_10.setTransform(-77.875,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B1, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


// stage content:
(lib.HP_Visits_Display_160x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [271];
	// timeline functions:
	this.frame_271 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(271).call(this.frame_271).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,1).p("EAAAAuzMAAAhdl");
	this.shape.setTransform(0.5,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(272));

	// B1
	this.instance = new lib.B1();
	this.instance.setTransform(542.1,390.65,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(170).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:172.5,y:119.7},7).wait(95));

	// B2
	this.instance_1 = new lib.B2();
	this.instance_1.setTransform(542.1,390.65,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(192).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:137.8},7).wait(73));

	// B3
	this.instance_2 = new lib.B3();
	this.instance_2.setTransform(542.1,390.65,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(205).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:172.5,y:156.05},7).wait(60));

	// B4
	this.instance_3 = new lib.B4();
	this.instance_3.setTransform(542.1,404.4,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(214).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:173.5,y:187.9},7).wait(51));

	// B5
	this.instance_4 = new lib.B5();
	this.instance_4.setTransform(542.1,404.4,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(223).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:206.05},7).wait(42));

	// B6
	this.instance_5 = new lib.B6();
	this.instance_5.setTransform(542.1,404.4,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(232).to({_off:false},0).to({regX:130.7,regY:18.6,scaleX:0.7085,scaleY:0.7085,x:172.5,y:224.3},7).wait(33));

	// B7
	this.instance_6 = new lib.B7();
	this.instance_6.setTransform(542.1,404.4,3.5424,3.5424,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(241).to({_off:false},0).to({regX:130.7,scaleX:0.7085,scaleY:0.7085,x:172.5,y:242.4},7).wait(24));

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,0,3).p("EgMaguyIY1AAMAAABdlI41AAg");
	this.shape_1.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(272));

	// PIC1
	this.instance_7 = new lib.PIC1();
	this.instance_7.setTransform(300,369,1,1,0,0,0,150,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(65).to({y:289},20,cjs.Ease.quintInOut).wait(64).to({y:753},20,cjs.Ease.quintInOut).to({_off:true},1).wait(102));

	// PIC1b
	this.instance_8 = new lib.PIC1b();
	this.instance_8.setTransform(230,623,1,1,0,0,0,150,-90);
	this.instance_8.alpha = 0;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(74).to({_off:false},0).to({y:510,alpha:1},20,cjs.Ease.quintOut).wait(55).to({y:974},20,cjs.Ease.quintInOut).to({_off:true},1).wait(102));

	// PIC2
	this.instance_9 = new lib.PIC2();
	this.instance_9.setTransform(230,-184,1,1,0,0,0,150,-90);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(149).to({_off:false},0).to({y:-90},20,cjs.Ease.quintInOut).wait(103));

	// HEAD1a
	this.instance_10 = new lib.HEAD1a();
	this.instance_10.setTransform(80.05,122.35,0.566,0.566,0,0,0,0.1,35.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(65).to({y:42.35},20,cjs.Ease.quintInOut).wait(64).to({alpha:0},10).to({_off:true},1).wait(112));

	// HEAD1b
	this.instance_11 = new lib.HEAD1b();
	this.instance_11.setTransform(80.05,178.4,0.566,0.566,0,0,0,0.1,35.1);
	this.instance_11.alpha = 0;
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(14).to({_off:false},0).to({y:122.35,alpha:1},20,cjs.Ease.quintOut).wait(31).to({y:42.35},20,cjs.Ease.quintInOut).wait(64).to({alpha:0},10).to({_off:true},1).wait(112));

	// HEAD1c
	this.instance_12 = new lib.HEAD1c();
	this.instance_12.setTransform(80.05,500.75,0.7967,0.7967,0,0,0,0,35);
	this.instance_12.alpha = 0;
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(74).to({_off:false},0).to({y:421.9,alpha:1},20,cjs.Ease.quintOut).wait(55).to({alpha:0},10).to({_off:true},1).wait(112));

	// HEAD2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("AhEBbQgWgYAAgnIAAgBQAAgmAWgZQAVgXAeAAQAdAAAVAYIAAhOIA6AAIAADfIg6AAIAAgWQgVAagcAAQgfAAgVgXgAgXAAQgKAKAAARIAAAAQAAARAKAKQAKALANAAQAPAAAJgLQAKgKAAgRIAAAAQAAgRgKgKQgJgKgPAAQgNAAgKAKg");
	this.shape_2.setTransform(141.025,554.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("Ag6A/QgZgYAAgnIAAAAQAAgkAYgZQAYgZAjAAQApAAAXAbQAUAZAAAmIAAAMIhvAAQAHAbAcABQATgBASgRIAgAbQgbAigtAAQgmAAgZgYgAAegNQgCgOgIgIQgIgIgMAAQgXAAgFAeIA6AAIAAAAg");
	this.shape_3.setTransform(121.95,556.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("AgmAzIAAhDIgTAAIAAgvIATAAIAAgqIA5AAIAAAqIAnAAIAAAvIgnAAIAAA4QAAAQARAAQAKAAAMgGIAAAuQgSAKgXAAQg3AAAAg3g");
	this.shape_4.setTransform(106.175,554.85);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AhbBtIAAjWIA7AAIAAAXQAWgaAbAAQAgAAAUAXQAWAYABAnIAAAAQAAAmgXAZQgUAXggAAQgcAAgVgYIAABFgAgXgxQgKAKAAARIAAABQAAAQAKAKQAKAKANABQAOAAAKgLQAKgKAAgQIAAgBQAAgRgKgKQgKgLgOAAQgNAAgKALg");
	this.shape_5.setTransform(90,559.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("Ag6A/QgZgYAAgnIAAAAQAAgkAYgZQAXgZAkAAQApAAAXAbQAUAZAAAmIAAAMIhvAAQAHAbAcABQATgBASgRIAgAbQgaAiguAAQgmAAgZgYgAAegNQgCgOgIgIQgIgIgMAAQgXAAgFAeIA6AAIAAAAg");
	this.shape_6.setTransform(70.3,556.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("Ag2A9QgagZAAgkIAAAAQAAgjAagZQAZgaAlAAQAwAAAYAlIgoAdQgOgRgRAAQgNAAgJALQgKALAAAPIAAAAQAAAQAKALQAJALANAAQASAAAPgSIAmAdQgaAmgvAAQglAAgYgag");
	this.shape_7.setTransform(52.8,556.825);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("Ag3A9QgYgZAAgkIAAAAQAAgjAYgZQAagaAmAAQAvAAAXAlIgnAdQgOgRgRAAQgNAAgJALQgKALAAAPIAAAAQAAAQAKALQAJALAOAAQARAAAOgSIAoAdQgaAmgxAAQgjAAgagag");
	this.shape_8.setTransform(35.65,556.825);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("AhABJQgQgOAAgYIAAgBQAAgZASgNQARgNAeAAQAWAAARAGIAAgDQAAgbggAAQgVAAgZAJIgMgpQAfgMAjAAQArAAAUAUQASARAAAkIAABeIg5AAIAAgRQgUAVgcAAQgZAAgPgNgAgYAfIAAAAQAAAJAGAFQAFAEAJAAQANAAAHgHQAJgIAAgMIAAgIQgLgEgMAAQgaAAAAAVg");
	this.shape_9.setTransform(17.525,556.875);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("AhIA+IAVgkQAdAUAbAAQAQAAgBgJIAAgBQABgFgIgDQgEgCgPgEQgdgIgNgKQgQgMAAgWIAAgBQgBgaAUgPQASgOAcAAQAnAAAeATIgUAlQgbgPgWAAQgNAAAAAIIAAABQAAAEAHADIATAHQAeAIAMAKQARAMAAAWIAAABQAAAbgSAOQgSAPggAAQgrAAgigZg");
	this.shape_10.setTransform(135.3,524.275);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AgmAzIAAhDIgTAAIAAgvIATAAIAAgqIA5AAIAAAqIAnAAIAAAvIgnAAIAAA3QAAARARAAQAKAAAMgGIAAAuQgSAKgXAAQg3AAAAg3g");
	this.shape_11.setTransform(121.225,522.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("AAZBVIAAhZQAAgcgZAAQgKgBgGAIQgHAHAAAOIAABZIg6AAIAAimIA6AAIAAAYQAVgbAcAAQAaAAAQARQAPAQgBAcIAABsg");
	this.shape_12.setTransform(105.35,524.05);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("Ag6A/QgZgYAAgmIAAgBQAAgkAXgYQAYgaAkAAQApAAAWAbQAVAZAAAmIgBAMIhuAAQAHAbAcAAQATABASgSIAhAbQgcAigsAAQgnAAgZgYgAAdgNQgCgOgHgIQgIgIgMAAQgXAAgFAeIA5AAIAAAAg");
	this.shape_13.setTransform(86.55,524.25);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AgcBwIAAilIA5AAIAAClgAgdhEIAAgrIA7AAIAAArg");
	this.shape_14.setTransform(72.975,521.325);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("AgmAzIAAhDIgTAAIAAgvIATAAIAAgqIA5AAIAAAqIAnAAIAAAvIgnAAIAAA3QAAARARAAQAKAAAMgGIAAAuQgSAKgXAAQg3AAAAg3g");
	this.shape_15.setTransform(61.875,522.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("AhABJQgQgOAAgYIAAgBQAAgZASgNQARgNAeAAQAWAAARAGIAAgDQAAgbggAAQgVAAgZAJIgMgpQAfgMAjAAQArAAAUAUQASARAAAkIAABeIg5AAIAAgRQgUAVgcAAQgZAAgPgNgAgYAfIAAAAQAAAJAGAFQAFAEAJAAQANAAAHgHQAJgIAAgMIAAgIQgLgEgMAAQgaAAAAAVg");
	this.shape_16.setTransform(46.225,524.325);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AhaBuIAAjXIA6AAIAAAWQAWgaAbAAQAfAAAVAYQAWAYAAAnIAAAAQABAmgWAZQgWAXgfABQgcAAgVgZIAABGgAgYgxQgJALAAAQIAAAAQAAARAJAKQALALANgBQAPAAAJgKQAKgKAAgRIAAAAQAAgQgKgLQgJgLgPAAQgNAAgLALg");
	this.shape_17.setTransform(27.6,526.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("AhEBbQgWgYAAgnIAAgBQAAgmAWgZQAVgXAeAAQAdAAAVAYIAAhOIA6AAIAADfIg6AAIAAgWQgVAagcAAQgfAAgVgXgAgXAAQgKAKAAARIAAAAQAAARAKAKQAKALANAAQAPAAAJgLQAKgKAAgRIAAAAQAAgRgKgKQgJgKgPAAQgNAAgKAKg");
	this.shape_18.setTransform(138.925,488.975);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AgcBwIAAilIA5AAIAAClgAgdhEIAAgrIA7AAIAAArg");
	this.shape_19.setTransform(124.575,488.775);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("AhABJQgQgOAAgYIAAgBQAAgZASgNQARgNAeAAQAWAAARAGIAAgDQAAgbggAAQgVAAgZAJIgMgpQAfgMAjAAQArAAAUAUQASARAAAkIAABeIg5AAIAAgRQgUAVgcAAQgZAAgPgNgAgYAfIAAAAQAAAJAGAFQAFAEAJAAQANAAAHgHQAJgIAAgMIAAgIQgLgEgMAAQgaAAAAAVg");
	this.shape_20.setTransform(110.725,491.775);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("Ag2A9QgagZAAgkIAAAAQAAgjAagZQAZgaAlAAQAwAAAYAlIgoAdQgNgRgSAAQgNAAgKALQgJALAAAPIAAAAQAAAQAJALQAKALANAAQASAAAPgSIAnAdQgbAmgvAAQgkAAgZgag");
	this.shape_21.setTransform(93.65,491.725);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("AgcBwIAAilIA5AAIAAClgAgdhEIAAgrIA7AAIAAArg");
	this.shape_22.setTransform(80.425,488.775);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AhEBbQgWgYAAgnIAAgBQAAgmAWgZQAVgXAeAAQAdAAAVAYIAAhOIA6AAIAADfIg6AAIAAgWQgVAagcAAQgfAAgVgXgAgXAAQgKAKAAARIAAAAQAAARAKAKQAKALANAAQAPAAAJgLQAKgKAAgRIAAAAQAAgRgKgKQgJgKgPAAQgNAAgKAKg");
	this.shape_23.setTransform(65.425,488.975);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("Ag6A/QgZgYAAgmIAAgBQAAgkAYgYQAYgaAjAAQApAAAXAbQAUAZAAAmIAAAMIhvAAQAHAcAcAAQATAAASgRIAgAaQgbAigtAAQgmAAgZgYgAAegNQgCgOgIgIQgIgIgMAAQgXAAgFAeIA6AAIAAAAg");
	this.shape_24.setTransform(46.35,491.7);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFAC8").s().p("AA3BsIAAh7Ig3BTIAAAAIg3hSIAAB6Ig6AAIAAjWIA+AAIAzBTIAzhTIA/AAIAADWg");
	this.shape_25.setTransform(24.05,489.25);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFAC8").s().p("AhEBbQgWgYAAgnIAAgBQAAgmAWgZQAVgXAeAAQAdAAAVAYIAAhOIA6AAIAADfIg6AAIAAgWQgVAagcAAQgfAAgVgXgAgXAAQgKAKAAARIAAAAQAAARAKAKQAKALANAAQAPAAAJgLQAKgKAAgRIAAAAQAAgRgKgKQgJgKgPAAQgNAAgKAKg");
	this.shape_26.setTransform(98.475,456.425);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFAC8").s().p("AAZBVIAAhZQAAgcgYgBQgKAAgHAIQgHAHAAAOIAABZIg6AAIAAilIA6AAIAAAXQAVgbAcAAQAaAAAPAQQAPARABAcIAABsg");
	this.shape_27.setTransform(79.05,458.95);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFAC8").s().p("AhABJQgQgOAAgYIAAgBQAAgZASgNQARgNAeAAQAWAAARAGIAAgDQAAgbggAAQgVAAgZAJIgMgpQAfgMAjAAQArAAAUAUQASARAAAkIAABeIg5AAIAAgRQgUAVgcAAQgZAAgPgNgAgYAfIAAAAQAAAJAGAFQAFAEAJAAQANAAAHgHQAJgIAAgMIAAgIQgLgEgMAAQgaAAAAAVg");
	this.shape_28.setTransform(60.025,459.225);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFAC8").s().p("AAZBwIAAhaQAAgbgZAAQgJAAgHAGQgHAIAAANIAABaIg7AAIAAjfIA7AAIAABRQAUgbAdAAQAbAAAPARQAOAQAAAbIAABtg");
	this.shape_29.setTransform(120.85,423.675);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFAC8").s().p("AgmAzIAAhDIgTAAIAAgvIATAAIAAgqIA5AAIAAAqIAnAAIAAAvIgnAAIAAA3QAAARARAAQAKAAAMgGIAAAuQgSAKgXAAQg3AAAAg3g");
	this.shape_30.setTransform(104.625,424.65);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFAC8").s().p("AgcBwIAAjfIA5AAIAADfg");
	this.shape_31.setTransform(93.9,423.675);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFAC8").s().p("AhABJQgQgOAAgYIAAgBQAAgZASgNQARgNAeAAQAWAAARAGIAAgDQAAgbggAAQgVAAgZAJIgMgpQAfgMAjAAQArAAAUAUQASARAAAkIAABeIg5AAIAAgRQgUAVgcAAQgZAAgPgNgAgYAfIAAAAQAAAJAGAFQAFAEAJAAQANAAAHgHQAJgIAAgMIAAgIQgLgEgMAAQgaAAAAAVg");
	this.shape_32.setTransform(80.025,426.675);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFAC8").s().p("Ag6A/QgZgYAAgmIAAgBQAAgkAXgYQAZgaAjAAQApAAAWAbQAVAZAAAmIgBAMIhuAAQAHAbAcAAQATABASgSIAhAbQgbAigtAAQgnAAgZgYgAAdgNQgCgOgHgIQgIgIgMAAQgXAAgFAeIA5AAIAAAAg");
	this.shape_33.setTransform(62.15,426.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFAC8").s().p("AAmBrIAAhSIhMAAIAABSIg7AAIAAjWIA7AAIAABRIBMAAIAAhRIA8AAIAADWg");
	this.shape_34.setTransform(41.5,424.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFAC8").s().p("Ag6A/QgZgYAAgmIAAgBQAAgkAXgYQAZgaAjAAQApAAAWAbQAVAZAAAmIgBAMIhuAAQAHAcAcAAQATAAASgRIAhAaQgbAigtAAQgnAAgZgYgAAdgNQgCgOgHgIQgIgIgMAAQgXAAgFAeIA5AAIAAAAg");
	this.shape_35.setTransform(117.05,394.05);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFAC8").s().p("AgcBwIAAjfIA5AAIAADfg");
	this.shape_36.setTransform(103.5,391.125);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFAC8").s().p("AhaBtIAAjWIA6AAIAAAXQAVgaAdAAQAfAAAUAWQAXAZgBAmIAAABQAAAngVAYQgWAYgegBQgeABgUgZIAABFgAgYgyQgJAMAAAQIAAAAQAAARAJAJQAKAMAOAAQAPAAAJgLQAKgKAAgRIAAAAQAAgQgKgMQgJgKgPAAQgOAAgKAKg");
	this.shape_37.setTransform(89.15,396.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFAC8").s().p("AhaBtIAAjWIA6AAIAAAXQAVgaAdAAQAeAAAVAWQAXAZgBAmIAAABQAAAngVAYQgWAYgegBQgdABgVgZIAABFgAgYgyQgJAMAAAQIAAAAQAAARAJAJQALAMANAAQAOAAAKgLQAKgKAAgRIAAAAQAAgQgKgMQgKgKgOAAQgNAAgLAKg");
	this.shape_38.setTransform(68.7,396.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFAC8").s().p("AA4BsIgPgmIhSAAIgQAmIg+AAIBbjXIA5AAIBbDXgAAXAXIgXg8IgYA8IAvAAg");
	this.shape_39.setTransform(46.125,391.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},149).wait(123));

	// BKGD_transition
	this.instance_13 = new lib.Tween1("synched",0);
	this.instance_13.setTransform(80,372.45);
	this.instance_13._off = true;

	this.instance_14 = new lib.Tween2("synched",0);
	this.instance_14.setTransform(80,842);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_13}]},149).to({state:[{t:this.instance_14}]},20).to({state:[]},1).wait(102));
	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(149).to({_off:false},0).to({_off:true,y:842},20,cjs.Ease.quintInOut).wait(103));

	// BKGD_green
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8D8B00").s().p("AsfTEMAAAgmHIY/AAMAAAAmHg");
	this.shape_40.setTransform(80,478);
	this.shape_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(149).to({_off:false},0).wait(123));

	// LOGO
	this.instance_15 = new lib.HPlogowTag();
	this.instance_15.setTransform(79.25,308.7,0.54,0.54,0,0,0,0.1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(272));

	// POLY
	this.instance_16 = new lib.POLY();
	this.instance_16.setTransform(80,306.65,1,1,0,0,0,0,-50);

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(272));

	// BKGD
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFBCA").s().p("EgMfAu4MAAAhdvIY/AAMAAABdvg");
	this.shape_41.setTransform(80,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(272));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-441,206,1122,863.5999999999999);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 160,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HP_Visits_Display_160x600_atlas_P_1.png", id:"HP_Visits_Display_160x600_atlas_P_1"},
		{src:"images/HP_Visits_Display_160x600_atlas_NP_1.jpg", id:"HP_Visits_Display_160x600_atlas_NP_1"}
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