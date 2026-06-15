(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HP_Visits_Display_320x50_atlas_P_1", frames: [[0,0,1320,270]]},
		{name:"HP_Visits_Display_320x50_atlas_NP_1", frames: [[0,0,640,100]]}
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



(lib._320x50poly = function() {
	this.initialize(ss["HP_Visits_Display_320x50_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["HP_Visits_Display_320x50_atlas_P_1"]);
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
	this.instance = new lib._320x50poly();
	this.instance.setTransform(-300,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.POLY, new cjs.Rectangle(-300,0,320,50), null);


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


// stage content:
(lib.HP_Visits_Display_320x50 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [1];
	// timeline functions:
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,0,3).p("A46j0MAx1AAAIAAHpMgx1AAAg");
	this.shape.setTransform(160,25);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	// HEAD4
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FDFBC9").s().p("AgdAnQgKgKAAgRQAAgQAKgLQAJgKANAAQAMAAAJAKIAAgiIAaAAIAABhIgaAAIAAgKQgJALgMAAQgNAAgJgKgAgJAAQgFAFAAAGIAAABQAAAHAFAEQAEAGAFgBQAGABAFgGQAEgEAAgHIAAgBQAAgGgEgFQgFgEgGAAQgFAAgEAEg");
	this.shape_1.setTransform(64.075,37.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FDFBC9").s().p("AgYAbQgLgKAAgRQAAgPAKgLQAKgLAPAAQASAAAKAMQAIALABAPIgBAGIgvAAQADAMALAAQAJAAAIgIIANAMQgLAPgUAAQgQAAgKgLgAAMgFQAAgGgDgEQgEgDgFAAQgKAAgCANIAYAAIAAAAg");
	this.shape_2.setTransform(56,38.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FDFBC9").s().p("AgQAWIAAgcIgIAAIAAgUIAIAAIAAgTIAYAAIAAATIARAAIAAAUIgRAAIAAAXQAAAIAHgBQAFAAAFgCIAAATQgIAFgKAAQgXAAAAgYg");
	this.shape_3.setTransform(49.375,37.55);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FDFBC9").s().p("AgnAwIAAhdIAZAAIAAAKQAKgMAMAAQANAAAJAKQAJALAAARIAAAAQAAAQgJALQgJAKgNAAQgMAAgKgLIAAAfgAgJgVQgFAFAAAHIAAAAQAAAHAFAEQAEAFAFAAQAGAAAFgFQAEgEAAgHIAAAAQAAgHgEgFQgFgEgGAAQgFAAgEAEg");
	this.shape_4.setTransform(42.5,39.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FDFBC9").s().p("AgZAbQgLgKABgRQgBgPALgLQAKgLAPAAQASAAAKAMQAJALgBAPIAAAGIgvAAQADAMALAAQAJAAAHgIIAPAMQgMAPgUAAQgQAAgLgLgAAMgFQAAgGgDgEQgEgDgFAAQgJAAgCANIAXAAIAAAAg");
	this.shape_5.setTransform(34.15,38.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FDFBC9").s().p("AgXAaQgLgKAAgQQAAgPALgLQALgLAPAAQAVAAALAQIgRANQgHgIgHAAQgGAAgDAFQgEAFAAAGIAAAAQAAAHAEAEQADAFAGAAQAIAAAGgHIARAMQgMARgUAAQgQAAgKgMg");
	this.shape_6.setTransform(26.75,38.425);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FDFBC9").s().p("AgYAaQgKgKAAgQQAAgPAKgLQAMgLAQAAQAUAAALAQIgSANQgFgIgIAAQgFAAgFAFQgDAFAAAGIAAAAQAAAHADAEQAFAFAFAAQAIAAAGgHIARAMQgLARgVAAQgPAAgMgMg");
	this.shape_7.setTransform(19.5,38.425);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FDFBC9").s().p("AgcAgQgGgGAAgKIAAgBQAAgLAHgFQAIgGANAAQAJAAAHADIAAgBQAAgMgNAAQgJAAgLAEIgFgRQANgHAPABQATgBAIAJQAIAIAAAQIAAAoIgZAAIAAgIQgIAJgMAAQgLABgHgGgAgKAOIAAAAQAAADACACQADACAEABQAEgBAEgDQAEgDAAgFIAAgDQgFgCgGAAQgKAAAAAJg");
	this.shape_8.setTransform(11.825,38.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FDFBC9").s().p("AgdAoQgKgLAAgRQAAgQAKgLQAJgKANAAQAMAAAJALIAAgiIAaAAIAABgIgaAAIAAgJQgJALgMAAQgNAAgJgKgAgJAAQgFAEAAAIIAAAAQAAAHAFAEQAEAFAFABQAGgBAFgFQAEgEAAgHIAAAAQAAgIgEgEQgFgDgGAAQgFAAgEADg");
	this.shape_9.setTransform(74.675,24.75);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FDFBC9").s().p("AgMAxIAAhHIAYAAIAABHgAgMgdIAAgTIAZAAIAAATg");
	this.shape_10.setTransform(68.6,24.675);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FDFBC9").s().p("AgcAgQgGgGAAgKIAAgBQAAgLAHgFQAIgFANAAQAJAAAHACIAAgBQAAgMgNAAQgJAAgLAEIgFgSQANgFAPAAQATAAAIAJQAIAHAAAPIAAApIgZAAIAAgHQgIAJgMAAQgLgBgHgFgAgKANIAAABQAAADACADQADABAEAAQAEAAAEgCQAEgEAAgFIAAgDQgFgDgGAAQgKABAAAIg");
	this.shape_11.setTransform(62.825,25.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FDFBC9").s().p("AgXAaQgLgKAAgQQAAgPALgLQALgLAQAAQAUAAAKAQIgRANQgFgIgIAAQgFAAgEAFQgFAFAAAGIAAAAQAAAHAFAEQAEAFAFAAQAHAAAHgHIARAMQgLARgVAAQgQAAgKgMg");
	this.shape_12.setTransform(55.6,25.975);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FDFBC9").s().p("AgLAxIAAhHIAXAAIAABHgAgMgdIAAgTIAZAAIAAATg");
	this.shape_13.setTransform(50,24.675);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FDFBC9").s().p("AgdAoQgKgLAAgRQAAgQAKgLQAJgKANAAQAMAAAJALIAAgiIAaAAIAABgIgaAAIAAgJQgJALgMAAQgNAAgJgKgAgJAAQgFAEAAAIIAAAAQAAAHAFAEQAEAFAFABQAGgBAFgFQAEgEAAgHIAAAAQAAgIgEgEQgFgDgGAAQgFAAgEADg");
	this.shape_14.setTransform(43.675,24.75);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FDFBC9").s().p("AgZAcQgLgLABgRQgBgPAKgLQALgLAPAAQARAAAKAMQAKALgBAQIAAAFIgvAAQADAMALAAQAJAAAHgIIAPAMQgMAPgUAAQgQAAgLgKgAAMgFQAAgGgDgEQgEgDgFAAQgJAAgCANIAXAAIAAAAg");
	this.shape_15.setTransform(35.6,25.95);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FDFBC9").s().p("AAYAvIAAg1IgYAkIAAAAIgXgkIAAA1IgaAAIAAhdIAcAAIAVAkIAXgkIAbAAIAABdg");
	this.shape_16.setTransform(26.1,24.875);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FDFBC9").s().p("AARAnQgNAJgOAAQgOAAgKgHQgJgHAAgNIAAAAQAAgSATgHQgGgJAAgJQAAgLAHgHQAIgIAOAAQAMAAAHAHQAIAHAAAKIAAABQAAAQgSAHIAKAKIAJgOIARAIQgGAMgGAIIAMAMIgRANgAgRAUIAAAAQAAAEACADQAEACAEAAQAGAAAFgEIgOgPQgIAEABAGgAgHgcQgBADgBADIAAABQAAAEAGAGQAIgEAAgHQAAgIgGAAQgEAAgCACg");
	this.shape_17.setTransform(12.65,24.875);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FDFBC9").s().p("AAKAxIAAgnQAAgMgKAAQgEAAgDADQgDADAAAGIAAAnIgZAAIAAhhIAZAAIAAAjQAJgLAMAAQAMAAAGAHQAHAHAAALIAAAwg");
	this.shape_18.setTransform(89.025,12.225);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FDFBC9").s().p("AgQAWIAAgdIgIAAIAAgTIAIAAIAAgTIAYAAIAAATIARAAIAAATIgRAAIAAAYQAAAIAHAAQAFgBAFgCIAAAUQgIAEgKAAQgXAAAAgYg");
	this.shape_19.setTransform(82.175,12.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FDFBC9").s().p("AgLAxIAAhhIAYAAIAABhg");
	this.shape_20.setTransform(77.65,12.225);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FDFBC9").s().p("AgcAgQgGgGAAgLIAAAAQAAgLAHgFQAIgGANABQAJAAAHACIAAgBQAAgMgNAAQgJAAgLAEIgFgRQANgGAPgBQATABAIAIQAIAIAAAQIAAAoIgZAAIAAgHQgIAIgMABQgLAAgHgGgAgKAOIAAAAQAAAEACACQADACAEAAQAEAAAEgDQAEgEAAgFIAAgEQgFgBgGAAQgKgBAAAKg");
	this.shape_21.setTransform(71.875,13.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FDFBC9").s().p("AgZAcQgLgLABgRQgBgPALgLQAKgLAPAAQASAAAKAMQAJAKAAARIgBAFIgvAAQADAMALAAQAJAAAHgHIAPALQgMAPgUAAQgQAAgLgKgAAMgFQAAgGgDgDQgEgEgFAAQgJAAgCANIAXAAIAAAAg");
	this.shape_22.setTransform(64.3,13.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FDFBC9").s().p("AARAvIAAgkIghAAIAAAkIgaAAIAAhdIAaAAIAAAjIAhAAIAAgjIAaAAIAABdg");
	this.shape_23.setTransform(55.5,12.425);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FDFBC9").s().p("AgYAcQgLgLAAgRQAAgPAKgLQAKgLAPAAQARAAALAMQAIAKABARIgBAFIgvAAQADAMAMAAQAIAAAIgHIANALQgLAPgUAAQgQAAgKgKgAAMgFQAAgGgDgDQgEgEgFAAQgKAAgCANIAYAAIAAAAg");
	this.shape_24.setTransform(43.3,13.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FDFBC9").s().p("AgLAxIAAhhIAYAAIAABhg");
	this.shape_25.setTransform(37.6,12.225);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FDFBC9").s().p("AgmAwIAAhdIAYAAIAAAKQAKgMAMAAQANAAAJAKQAKALgBARIAAAAQABAQgKALQgJAKgNAAQgMAAgKgLIAAAfgAgJgVQgFAFAAAHIAAAAQAAAHAFAEQADAFAGAAQAGAAAEgFQAFgEAAgHIAAAAQAAgHgFgFQgEgEgGAAQgGAAgDAEg");
	this.shape_26.setTransform(31.55,14.475);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FDFBC9").s().p("AgnAwIAAhdIAaAAIAAAKQAJgMALAAQAOAAAJAKQAKALAAARIAAAAQAAAQgKALQgJAKgOAAQgMAAgIgLIAAAfgAgKgVQgEAFAAAHIAAAAQAAAHAEAEQAFAFAFAAQAGAAAFgFQAEgEAAgHIAAAAQAAgHgEgFQgFgEgGAAQgFAAgFAEg");
	this.shape_27.setTransform(22.85,14.475);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FDFBC9").s().p("AAYAvIgGgRIgkAAIgGARIgbAAIAnhdIAYAAIAoBdgAAKAKIgKgaIgKAaIAUAAg");
	this.shape_28.setTransform(13.275,12.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]}).wait(2));

	// LOGO
	this.instance = new lib.HPlogowTag();
	this.instance.setTransform(211.9,25,0.65,0.65,0,0,0,4.5,5.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(2));

	// POLY
	this.instance_1 = new lib.POLY();
	this.instance_1.setTransform(150,25,1,1,0,0,0,-150,25);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(159.5,24.5,161,26);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 320,
	height: 50,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HP_Visits_Display_320x50_atlas_P_1.png", id:"HP_Visits_Display_320x50_atlas_P_1"},
		{src:"images/HP_Visits_Display_320x50_atlas_NP_1.jpg", id:"HP_Visits_Display_320x50_atlas_NP_1"}
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