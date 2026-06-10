(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"HP_FromTo_Display_300x600_atlas_P_1", frames: [[0,0,1320,270]]},
		{name:"HP_FromTo_Display_300x600_atlas_NP_1", frames: [[0,790,600,360],[0,0,600,788]]}
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



(lib._300x600poly = function() {
	this.initialize(ss["HP_FromTo_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib._300x600tofrom1 = function() {
	this.initialize(ss["HP_FromTo_Display_300x600_atlas_NP_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.HealthPointLogo = function() {
	this.initialize(ss["HP_FromTo_Display_300x600_atlas_P_1"]);
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
	this.instance = new lib._300x600tofrom1();
	this.instance.setTransform(-150,-394,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.PIC1, new cjs.Rectangle(-150,-394,300,394), null);


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
	this.text = new cjs.Text("Everyone Deserves Great Care", "17px 'Myriad Pro'", "#EA7F1F");
	this.text.lineHeight = 17;
	this.text.lineWidth = 217;
	this.text.parent = this;
	this.text.setTransform(-73,20);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HPlogowTag, new cjs.Rectangle(-137.2,-28,283.29999999999995,84), null);


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
	this.shape.graphics.f("#8D8B00").s().p("Ah5BjIArg0QArAhAvABQAggBAAgSIAAgBQAAgJgJgHQgKgFgbgHQg1gMgWgPQgfgUAAgnIAAgBQAAgoAdgYQAegaAxAAQBEAAAvAlIgnA3QgmgbgogBQgcABAAARIAAABQAAAKAKAGQAKAFAcAGQA1AMAXASQAcAUAAAlIAAABQAAAqgfAYQgeAZg0AAQhOAAg0gug");
	this.shape.setTransform(110.275,140);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B00").s().p("AhaBpQgrgqAAg/IAAAAQAAg8AqgqQAqgrA+ABQBNAAAqA5Ig6AtQgbgggjAAQgcAAgSAVQgUAWABAfIAAAAQgBAgAUAVQASAWAcAAQAkAAAbgiIA7ApQguBAhNgBQg8ABgpgpg");
	this.shape_1.setTransform(83.45,140);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B00").s().p("AgmCMIAAkXIBNAAIAAEXg");
	this.shape_2.setTransform(62.025,140);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B00").s().p("AAnCMIg3hVIgiAAIAABVIhOAAIAAkXICDAAQA+AAAeAeQAYAZAAAoIAAABQAAA9g5AZIBDBhgAgygFIAyAAQAUAAALgJQALgIAAgPIAAgBQAAgjgqABIgyAAg");
	this.shape_3.setTransform(42.075,140);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B00").s().p("AgmCMIAAjTIhUAAIAAhEID1AAIAABEIhVAAIAADTg");
	this.shape_4.setTransform(13.525,140);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B00").s().p("ABKCNIgUgzIhsAAIgUAzIhSAAIB4kZIBKAAIB2EZgAAeAeIgehOIgfBOIA9AAg");
	this.shape_5.setTransform(-10.6,139.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B00").s().p("AgmCMIAAkXIBNAAIAAEXg");
	this.shape_6.setTransform(-32.975,140);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B00").s().p("AiECMIAAkXIBsAAQBJAAArAnQApAlAAA/IAAAAQAAA+gqAmQgsAohIAAgAg3BIIAgAAQAjgBAUgSQAWgTAAgiIAAAAQAAgggWgUQgUgTgjAAIggAAg");
	this.shape_7.setTransform(-54.35,140);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D8B00").s().p("AhwCMIAAkXIDgAAIAABCIiUAAIAAArICFAAIAAA7IiFAAIAAAtICWAAIAABCg");
	this.shape_8.setTransform(-83,140);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8B00").s().p("Ah1CMIAAkXIB3AAQA2AAAeAaQAgAbAAAtIAAABQAAAvgiAcQggAZg1AAIgmAAIAABQgAgnAAIAkAAQAUAAAMgKQAMgKAAgQIAAgBQAAglgsAAIgkAAg");
	this.shape_9.setTransform(-109.45,140);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8B00").s().p("AhrBnQgrgqAAg8IAAgBQAAg8AsgqQArgqBAgBQBAAAArAqQArArAAA8IAAAAQAAA8grArQgsArhAAAQg/gBgsgqgAgzg0QgUAVAAAfIAAAAQAAAfAVAWQAUAXAfAAQAfgBAUgVQATgWAAgfIAAgBQAAgegTgWQgVgWgfgBQgfAAgUAXg");
	this.shape_10.setTransform(76.275,100);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8B00").s().p("AgmCMIAAjTIhUAAIAAhEID1AAIAABEIhVAAIAADTg");
	this.shape_11.setTransform(46.475,100);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.HEAD1b, new cjs.Rectangle(-146.5,0,293.1,164), null);


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
	this.shape.graphics.f("#8D8B00").s().p("AhxCMIAAkXIDhAAIAABBIiUAAIAAArICFAAIAAA9IiFAAIAAAsICVAAIAABCg");
	this.shape.setTransform(11.35,100);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#8D8B00").s().p("AAnCMIg3hVIgiAAIAABVIhOAAIAAkXICDAAQA+AAAeAeQAYAZAAAoIAAABQAAA9g5AYIBDBigAgygEIAyAAQAUAAALgJQALgKAAgPIAAgBQAAghgqgBIgyAAg");
	this.shape_1.setTransform(-15.875,100);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#8D8B00").s().p("ABKCNIgUgyIhsAAIgUAyIhSAAIB3kZIBLAAIB3EZgAAeAfIgehPIgfBPIA9AAg");
	this.shape_2.setTransform(-47.15,99.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#8D8B00").s().p("AhbBoQgqgpAAg+IAAgBQAAg8AqgrQAqgqA+AAQBNABAqA6Ig6AtQgbghgjAAQgcAAgSAWQgUAVABAfIAAAAQgBAgAUAVQASAWAcAAQAkAAAbgiIA7AqQguA+hNABQg8gBgqgpg");
	this.shape_3.setTransform(-77.3,100);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8D8B00").s().p("AgmCMIAAhpIhriuIBZAAIA5BmIA5hmIBYAAIhrCtIAABqg");
	this.shape_4.setTransform(118.45,60);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#8D8B00").s().p("AhaBpQgrgqAAg/IAAAAQAAg9AqgpQAqgqA+AAQBNAAAqA5Ig6AtQgbgggjAAQgcAAgSAVQgUAWABAfIAAAAQgBAgAUAVQASAWAcAAQAkAAAbgiIA7ApQguA/hNAAQg8AAgpgog");
	this.shape_5.setTransform(89.75,60);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8D8B00").s().p("ABACMIh3iYIAACYIhMAAIAAkXIBIAAIByCTIAAiTIBNAAIAAEXg");
	this.shape_6.setTransform(59.125,60);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8D8B00").s().p("ABJCNIgTgzIhsAAIgUAzIhRAAIB3kZIBJAAIB3EZgAAeAeIgehOIgfBOIA9AAg");
	this.shape_7.setTransform(27.5,59.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#8D8B00").s().p("ABACMIh3iYIAACYIhMAAIAAkXIBIAAIByCTIAAiTIBNAAIAAEXg");
	this.shape_8.setTransform(-4.075,60);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8D8B00").s().p("AhcBpQgsgpAAhAIAAAAQAAg9ArgpQArgqBAAAQBCgBAvApIguA3QgfgagkAAQgegBgUAWQgVAXAAAfIAAAAQAAAjAVAWQAWAWAgAAQAcAAARgMIAAgiIg3AAIAAg3ICBAAIAAB8Qg0ArhGAAQhAAAgrgog");
	this.shape_9.setTransform(-35.3,60);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#8D8B00").s().p("AhxCMIAAkXIDgAAIAABCIiTAAIAAArICGAAIAAA7IiGAAIAAAtICWAAIAABCg");
	this.shape_10.setTransform(-63.4,60);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#8D8B00").s().p("AAnCMIg3hVIgiAAIAABVIhOAAIAAkXICDAAQA+AAAeAeQAYAZAAAoIAAABQAAA9g5AZIBDBhgAgygEIAyAAQAUgBALgIQALgKAAgOIAAgBQAAgjgqABIgyAAg");
	this.shape_11.setTransform(-90.625,60);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#8D8B00").s().p("Ah1CMIAAkXIB3AAQA1AAAfAaQAgAbAAAtIAAABQAAAvgiAcQggAZg1AAIgnAAIAABQgAgoAAIAlAAQAUAAAMgKQAMgKAAgRIAAAAQAAglgsAAIglAAg");
	this.shape_12.setTransform(-118.6,60);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#8D8B00").s().p("ABHCMIAAigIhHBtIgBAAIhHhtIAACgIhMAAIAAkXIBSAAIBCBsIBDhsIBSAAIAAEXg");
	this.shape_13.setTransform(43.975,20);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#8D8B00").s().p("AhrBnQgrgqAAg8IAAgBQAAg8AsgqQArgqBAAAQBAAAArApQArArAAA8IAAAAQAAA9grAqQgsArhAAAQg/gBgsgqgAgzg0QgUAVAAAfIAAAAQAAAfAVAWQAUAXAfgBQAfAAAUgVQATgWAAgfIAAgBQAAgegTgWQgVgWgfgBQgfAAgUAXg");
	this.shape_14.setTransform(10.025,20);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#8D8B00").s().p("AAnCMIg3hVIgiAAIAABVIhOAAIAAkXICDAAQA+AAAeAeQAYAZAAAoIAAABQAAA9g5AYIBDBigAgygFIAyAAQAUABALgKQALgIAAgQIAAgBQAAghgqAAIgyAAg");
	this.shape_15.setTransform(-19.975,20);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#8D8B00").s().p("AhvCMIAAkXIDfAAIAABEIiRAAIAAAwICDAAIAAA/IiDAAIAABkg");
	this.shape_16.setTransform(-47.6,20);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

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
	this.shape.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig1AAIAAA7IgsAAIAAiZIAsAAIAAA5IA1AAIAAg5IAsAAIAACZg");
	this.shape.setTransform(116.15,12.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E87D1D").s().p("AgVBNIAAh0IguAAIAAglICHAAIAAAlIgvAAIAAB0g");
	this.shape_1.setTransform(100.525,12.525);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_2.setTransform(89.2,12.525);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg7AAIgLAcIgtAAIBCibIAoAAIBCCbgAARARIgRgrIgRArIAiAAg");
	this.shape_3.setTransform(73.2,12.45);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_4.setTransform(57.275,12.525);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#E87D1D").s().p("AAcBNIAAg7Ig2AAIAAA7IgrAAIAAiZIArAAIAAA5IA2AAIAAg5IArAAIAACZg");
	this.shape_5.setTransform(41.25,12.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#E87D1D").s().p("Ag6BNIAAiZIArAAIAAB0IBKAAIAAAlg");
	this.shape_6.setTransform(20.45,12.525);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E87D1D").s().p("AAoBOIgLgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_7.setTransform(4.45,12.45);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#E87D1D").s().p("AAWBNIgegvIgTAAIAAAvIgrAAIAAiZIBIAAQAiAAARAQQANAOAAAWIAAABQAAAhggANIAlA2gAgbgCIAbAAQALAAAGgFQAGgFAAgIIAAgBQAAgTgXAAIgbAAg");
	this.shape_8.setTransform(-11.775,12.525);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#E87D1D").s().p("Ag6A5QgYgXAAgiIAAAAQAAghAYgXQAYgYAiAAQAkAAAYAYQAXAXAAAhIAAAAQAAAhgXAYQgZAXgjAAQgjAAgXgXgAgcgdQgKANAAAQIAAAAQAAARALANQALAMAQAAQASAAALgMQAKgMAAgSIAAAAQAAgQgKgMQgMgMgRAAQgQgBgMAMg");
	this.shape_9.setTransform(-29.375,12.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E87D1D").s().p("AgUBNIAAiZIApAAIAACZg");
	this.shape_10.setTransform(-42.175,12.525);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#E87D1D").s().p("AgTBOIg+ibIAvAAIAjBhIAjhhIAuAAIg+Cbg");
	this.shape_11.setTransform(-54.15,12.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#E87D1D").s().p("AApBOIgMgcIg6AAIgMAcIgtAAIBCibIAoAAIBDCbgAARARIgRgrIgRArIAiAAg");
	this.shape_12.setTransform(-68.35,12.45);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E87D1D").s().p("AAbBNIAAg7Ig1AAIAAA7IgsAAIAAiZIAsAAIAAA5IA1AAIAAg5IAsAAIAACZg");
	this.shape_13.setTransform(-85.55,12.525);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#E87D1D").s().p("Ag+BNIAAiZIB8AAIAAAkIhRAAIAAAXIBJAAIAAAhIhJAAIAAAZIBSAAIAAAkg");
	this.shape_14.setTransform(-101.075,12.525);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#E87D1D").s().p("AhEBNIAAiZIBOAAQAcAAAOANQAKALAAAOIAAABQAAAYgXAKQAeAJAAAcIAAABQAAAUgPALQgQALgbAAgAgaArIAgAAQAUAAAAgOIAAgBQAAgOgVAAIgfAAgAgagPIAaAAQAUAAAAgNIAAgBQAAgNgTAAIgbAAg");
	this.shape_15.setTransform(-116.225,12.525);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.B3, new cjs.Rectangle(-169.6,0,339.29999999999995,27.3), null);


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
(lib.HP_FromTo_Display_300x600 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [211];
	// timeline functions:
	this.frame_211 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(211).call(this.frame_211).wait(1));

	// border
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8D8B00").ss(1,1,1).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(212));

	// B1
	this.instance = new lib.B1();
	this.instance.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(110).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:48.15},7).wait(95));

	// B2
	this.instance_1 = new lib.B2();
	this.instance_1.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(132).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:76.1},7).wait(73));

	// B3
	this.instance_2 = new lib.B3();
	this.instance_2.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(145).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:104.05},7).wait(60));

	// B4
	this.instance_3 = new lib.B4();
	this.instance_3.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(154).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:132},7).wait(51));

	// B5
	this.instance_4 = new lib.B5();
	this.instance_4.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(163).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:159.95},7).wait(42));

	// B6
	this.instance_5 = new lib.B6();
	this.instance_5.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(172).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:187.9},7).wait(33));

	// B7
	this.instance_6 = new lib.B7();
	this.instance_6.setTransform(860.9,177.3,5.45,5.45,0,0,0,130.5,18.5);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(181).to({_off:false},0).to({regX:130.6,scaleX:1.09,scaleY:1.09,x:292.25,y:215.85},7).wait(24));

	// border
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,2,0,3).p("EgXWguyMAutAAAMAAABdlMgutAAAg");
	this.shape_1.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(212));

	// PIC1
	this.instance_7 = new lib.PIC1();
	this.instance_7.setTransform(300,510,1,1,0,0,0,150,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(89).to({y:904},20,cjs.Ease.quintInOut).to({_off:true},1).wait(102));

	// HEAD1a
	this.instance_8 = new lib.HEAD1a();
	this.instance_8.setTransform(150,61,1,1,0,0,0,0,35);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(89).to({alpha:0},10).to({_off:true},1).wait(112));

	// HEAD1b
	this.instance_9 = new lib.HEAD1b();
	this.instance_9.setTransform(149.95,160,1,1,0,0,0,0,35);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(39).to({_off:false},0).to({x:150,y:61},20,cjs.Ease.quintInOut).wait(30).to({alpha:0},10).to({_off:true},1).wait(112));

	// HEAD2
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFAC8").s().p("AhMBlQgYgbAAgrIAAgBQAAgrAYgbQAYgZAhAAQAhAAAXAaIAAhWIBAAAIAAD3IhAAAIAAgZQgYAdggAAQghAAgYgZgAgZAAQgMALAAATIAAAAQAAATAMALQAKAMAPAAQAQAAALgMQALgLAAgTIAAAAQAAgTgLgLQgLgLgQgBQgPABgKALg");
	this.shape_2.setTransform(217.45,559);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFAC8").s().p("AhABGQgcgbAAgqIAAgBQAAgoAagbQAbgcAnAAQAtAAAZAeQAXAbAAAqIgBAOIh6AAQAIAeAfAAQAWAAATgTIAkAeQgeAlgyAAQgrAAgbgagAAhgOQgCgQgJgJQgJgJgNAAQgZAAgGAiIBAAAIAAAAg");
	this.shape_3.setTransform(196.325,562.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFAC8").s().p("AgpA4IAAhKIgXAAIAAg0IAXAAIAAguIA/AAIAAAuIAqAAIAAA0IgqAAIAAA+QgBASATAAQALAAANgGIAAAyQgUALgZAAQg9AAABg9g");
	this.shape_4.setTransform(178.9,559.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFAC8").s().p("AhkB5IAAjtIBAAAIAAAYQAYgcAfAAQAjAAAXAZQAYAbAAArIAAABQAAAqgYAbQgYAaghAAQghAAgXgbIAABNgAgag3QgLAMAAASIAAABQAAASALALQALAMAPAAQAQAAAKgMQAMgLAAgSIAAgBQAAgSgMgMQgKgMgQAAQgPAAgLAMg");
	this.shape_5.setTransform(161,564.525);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFAC8").s().p("AhABGQgcgbAAgqIAAgBQAAgoAagbQAbgcAnAAQAtAAAZAeQAXAbAAAqIgBAOIh6AAQAIAeAfAAQAWAAATgTIAkAeQgeAlgyAAQgrAAgbgagAAhgOQgCgQgJgJQgJgJgNAAQgZAAgGAiIBAAAIAAAAg");
	this.shape_6.setTransform(139.175,562.025);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFAC8").s().p("Ag9BDQgbgbAAgnIAAgBQAAgnAbgcQAcgcAqAAQA1AAAaAoIgsAhQgPgTgTAAQgOAAgLAMQgLAMAAARIAAAAQAAASALAMQALAMAOgBQAUAAAQgTIArAgQgdAqg0AAQgpAAgcgdg");
	this.shape_7.setTransform(119.85,562.05);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFAC8").s().p("Ag8BDQgcgbAAgnIAAgBQAAgnAcgcQAbgcArAAQA0AAAaAoIgrAhQgQgTgTAAQgPAAgKAMQgKAMAAARIAAAAQAAASAKAMQALAMAPgBQATAAAQgTIArAgQgdAqg1AAQgoAAgbgdg");
	this.shape_8.setTransform(100.9,562.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFAC8").s().p("AhHBRQgSgQAAgaIAAgBQAAgcAUgOQATgPAhAAQAZAAATAHIAAgDQAAgegkAAQgYAAgbAKIgOgtQAjgOAnAAQAwAAAWAWQAUATAAAnIAABpIhAAAIAAgTQgVAXggAAQgbAAgRgOgAgbAiIAAABQAAAJAHAGQAGAFAKAAQANAAAJgIQAJgJAAgNIAAgJQgMgFgNAAQgdAAAAAXg");
	this.shape_9.setTransform(80.825,562.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFAC8").s().p("AhQBEIAYgnQAgAWAeAAQARAAAAgKIAAgBQAAgFgIgEQgFgCgQgFQgggIgPgLQgSgNAAgZIAAgBQAAgdAUgQQAVgQAfAAQArAAAhAWIgWAoQgegRgYAAQgOAAAAAJIAAABQAAAFAHADIAWAIQAgAJAOALQATANAAAZIAAAAQAAAegVAQQgUAQgiAAQgwAAgmgcg");
	this.shape_10.setTransform(211.125,526.025);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFAC8").s().p("AgqA4IAAhKIgVAAIAAg0IAVAAIAAguIA/AAIAAAuIAsAAIAAA0IgsAAIAAA+QABASARAAQAMAAANgGIAAAyQgTALgaAAQg8AAgBg9g");
	this.shape_11.setTransform(195.5,523.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFAC8").s().p("AAbBeIAAhjQAAgfgbAAQgLAAgHAIQgIAJAAAOIAABjIhAAAIAAi3IBAAAIAAAaQAYgeAeAAQAeAAARASQAQASAAAgIAAB3g");
	this.shape_12.setTransform(178,525.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFAC8").s().p("AhABGQgcgbAAgqIAAgBQAAgoAagbQAbgcAnAAQAtAAAZAeQAXAbAAAqIgBAOIh6AAQAIAeAfAAQAWAAATgTIAkAeQgeAlgyAAQgrAAgbgagAAhgOQgCgQgJgJQgJgJgNAAQgZAAgGAiIBAAAIAAAAg");
	this.shape_13.setTransform(157.175,526.025);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFAC8").s().p("AgfB8IAAi3IBAAAIAAC3gAghhLIAAgwIBDAAIAAAwg");
	this.shape_14.setTransform(142.15,522.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFAC8").s().p("AgqA4IAAhKIgVAAIAAg0IAVAAIAAguIA/AAIAAAuIAsAAIAAA0IgsAAIAAA+QABASARAAQAMAAANgGIAAAyQgUALgZAAQg8AAgBg9g");
	this.shape_15.setTransform(129.9,523.875);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFAC8").s().p("AhHBRQgSgQAAgaIAAgBQAAgcAUgOQATgPAhAAQAZAAATAHIAAgDQAAgegkAAQgYAAgbAKIgOgtQAjgOAnAAQAwAAAWAWQAUATAAAnIAABpIhAAAIAAgTQgVAXggAAQgbAAgRgOgAgbAiIAAABQAAAJAHAGQAGAFAKAAQANAAAJgIQAJgJAAgNIAAgJQgMgFgNAAQgdAAAAAXg");
	this.shape_16.setTransform(112.575,526.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFAC8").s().p("AhkB5IAAjtIBBAAIAAAYQAXgcAfAAQAjAAAWAZQAZAbAAArIAAABQAAAqgZAbQgWAagiAAQghAAgWgbIAABNgAgag3QgLAMAAASIAAABQAAASALALQALAMAPAAQAPAAAMgMQAKgLABgSIAAgBQgBgSgKgMQgMgMgPAAQgPAAgLAMg");
	this.shape_17.setTransform(92,528.525);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFAC8").s().p("AhLBlQgZgbAAgrIAAgBQAAgrAZgbQAXgZAhAAQAhAAAXAaIAAhWIBAAAIAAD3IhAAAIAAgZQgYAdggAAQghAAgXgZgAgZAAQgMALAAATIAAAAQAAATAMALQAKAMAPAAQAQAAALgMQALgLAAgTIAAAAQAAgTgLgLQgLgLgQgBQgPABgKALg");
	this.shape_18.setTransform(251.55,487);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFAC8").s().p("AgfB8IAAi3IA/AAIAAC3gAghhLIAAgwIBDAAIAAAwg");
	this.shape_19.setTransform(235.65,486.8);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFAC8").s().p("AhHBRQgSgQAAgaIAAgBQAAgcAUgOQATgPAhAAQAZAAATAHIAAgDQAAgegkAAQgYAAgbAKIgOgtQAjgOAnAAQAwAAAWAWQAUATAAAnIAABpIhAAAIAAgTQgVAXggAAQgbAAgRgOgAgbAiIAAABQAAAJAHAGQAGAFAKAAQANAAAJgIQAJgJAAgNIAAgJQgMgFgNAAQgdAAAAAXg");
	this.shape_20.setTransform(220.375,490.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFAC8").s().p("Ag8BEQgcgcAAgnIAAgBQAAgnAcgbQAcgdApAAQA1AAAaAoIgsAiQgPgUgTAAQgOAAgLAMQgLAMAAARIAAAAQAAASALAMQAKAMAQgBQATAAAQgSIArAfQgcAqg2AAQgoAAgbgcg");
	this.shape_21.setTransform(201.5,490.05);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFAC8").s().p("AgfB8IAAi3IA/AAIAAC3gAgghLIAAgwIBBAAIAAAwg");
	this.shape_22.setTransform(186.85,486.8);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFAC8").s().p("AhMBlQgYgbAAgrIAAgBQAAgrAYgbQAXgZAjAAQAfAAAYAaIAAhWIBAAAIAAD3IhAAAIAAgZQgYAdgfAAQgjAAgXgZgAgZAAQgMALAAATIAAAAQAAATAMALQALAMAOAAQAQAAALgMQALgLAAgTIAAAAQAAgTgLgLQgLgLgQgBQgOABgLALg");
	this.shape_23.setTransform(170.3,487);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFAC8").s().p("AhABGQgcgbAAgqIAAgBQAAgoAagbQAbgcAnAAQAtAAAZAeQAXAbAAAqIgBAOIh6AAQAIAeAfAAQAWAAATgTIAkAeQgeAlgyAAQgrAAgbgagAAhgOQgCgQgJgJQgJgJgNAAQgZAAgGAiIBAAAIAAAAg");
	this.shape_24.setTransform(149.175,490.025);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFAC8").s().p("AA9B3IAAiHIg9BbIAAAAIg9hbIAACHIhAAAIAAjtIBGAAIA3BcIA5hcIBGAAIAADtg");
	this.shape_25.setTransform(124.5,487.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFAC8").s().p("AhLBlQgZgbAAgrIAAgBQAAgrAZgbQAWgZAjAAQAgAAAWAaIAAhWIBBAAIAAD3IhBAAIAAgZQgXAdgfAAQgjAAgWgZgAgaAAQgLALAAATIAAAAQAAATALALQAMAMAOAAQAQAAALgMQAKgLAAgTIAAAAQAAgTgKgLQgLgLgQgBQgOABgMALg");
	this.shape_26.setTransform(89.25,487);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFAC8").s().p("AAbBeIAAhjQAAgfgbAAQgLAAgHAIQgIAJAAAOIAABjIhAAAIAAi3IBAAAIAAAaQAYgeAeAAQAeAAARASQAQASAAAgIAAB3g");
	this.shape_27.setTransform(67.75,489.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFAC8").s().p("AhHBRQgSgQAAgaIAAgBQAAgcAUgOQATgPAhAAQAZAAATAHIAAgDQAAgegkAAQgYAAgbAKIgOgtQAjgOAnAAQAwAAAWAWQAUATAAAnIAABpIhAAAIAAgTQgVAXggAAQgbAAgRgOgAgbAiIAAABQAAAJAHAGQAGAFAKAAQANAAAJgIQAJgJAAgNIAAgJQgMgFgNAAQgdAAAAAXg");
	this.shape_28.setTransform(46.725,490.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFAC8").s().p("AAbB8IAAhkQAAgegaAAQgMAAgHAHQgIAJABAOIAABkIhBAAIAAj3IBBAAIAABaQAWgeAgAAQAdAAARASQAQASAAAfIAAB4g");
	this.shape_29.setTransform(250.65,450.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFAC8").s().p("AgpA4IAAhKIgXAAIAAg0IAXAAIAAguIA/AAIAAAuIArAAIAAA0IgrAAIAAA+QAAASASAAQALAAANgGIAAAyQgTALgaAAQg8AAAAg9g");
	this.shape_30.setTransform(232.65,451.875);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFAC8").s().p("AgfB8IAAj3IA/AAIAAD3g");
	this.shape_31.setTransform(220.775,450.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFAC8").s().p("AhHBRQgSgQAAgaIAAgBQAAgcAUgOQATgPAhAAQAZAAATAHIAAgDQAAgegkAAQgYAAgbAKIgOgtQAjgOAnAAQAwAAAWAWQAUATAAAnIAABpIhAAAIAAgTQgVAXggAAQgbAAgRgOgAgbAiIAAABQAAAJAHAGQAGAFAKAAQANAAAJgIQAJgJAAgNIAAgJQgMgFgNAAQgdAAAAAXg");
	this.shape_32.setTransform(205.475,454.075);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFAC8").s().p("AhABGQgcgbAAgqIAAgBQAAgoAagbQAbgcAnAAQAtAAAZAeQAXAbAAAqIgBAOIh6AAQAIAeAfAAQAWAAATgTIAkAeQgeAlgyAAQgrAAgbgagAAhgOQgCgQgJgJQgJgJgNAAQgZAAgGAiIBAAAIAAAAg");
	this.shape_33.setTransform(185.675,454.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#FFFAC8").s().p("AAqB3IAAhbIhTAAIAABbIhCAAIAAjtIBCAAIAABZIBTAAIAAhZIBCAAIAADtg");
	this.shape_34.setTransform(162.825,451.3);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#FFFAC8").s().p("AhABGQgcgbAAgqIAAgBQAAgoAagbQAbgcAnAAQAtAAAZAeQAXAbAAAqIgBAOIh6AAQAIAeAfAAQAWAAATgTIAkAeQgeAlgyAAQgrAAgbgagAAhgOQgCgQgJgJQgJgJgNAAQgZAAgGAiIBAAAIAAAAg");
	this.shape_35.setTransform(130.875,454.025);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#FFFAC8").s().p("AgfB8IAAj3IA/AAIAAD3g");
	this.shape_36.setTransform(115.875,450.8);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#FFFAC8").s().p("AhkB5IAAjtIBBAAIAAAYQAXgcAfAAQAiAAAXAZQAZAbAAArIAAABQAAAqgZAbQgXAaghAAQghAAgWgbIAABNgAgag3QgLAMAAASIAAABQAAASALALQALAMAPAAQAPAAAMgMQAKgLABgSIAAgBQgBgSgKgMQgMgMgPAAQgPAAgLAMg");
	this.shape_37.setTransform(100,456.525);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#FFFAC8").s().p("AhkB5IAAjtIBAAAIAAAYQAYgcAfAAQAjAAAXAZQAYAbAAArIAAABQAAAqgYAbQgYAaghAAQghAAgXgbIAABNgAgag3QgLAMAAASIAAABQAAASALALQALAMAPAAQAQAAAKgMQAMgLAAgSIAAgBQAAgSgMgMQgKgMgQAAQgPAAgLAMg");
	this.shape_38.setTransform(77.4,456.525);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#FFFAC8").s().p("AA+B4IgRgrIhbAAIgRArIhFAAIBljvIA/AAIBlDvgAAZAaIgZhDIgbBDIA0AAg");
	this.shape_39.setTransform(52.45,451.225);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},89).wait(123));

	// BKGD_green
	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#8D8B00").s().p("A3bOYIAA8vMAu3AAAIAAcvg");
	this.shape_40.setTransform(150,508.05);
	this.shape_40._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape_40).wait(89).to({_off:false},0).wait(123));

	// LOGO
	this.instance_10 = new lib.HPlogowTag();
	this.instance_10.setTransform(149.25,329.05);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(89).to({_off:false},0).wait(123));

	// POLY
	this.instance_11 = new lib._300x600poly();
	this.instance_11.setTransform(0,237,0.5,0.5);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(89).to({_off:false},0).wait(123));

	// BKGD
	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#FFFBCA").s().p("EgXbAu4MAAAhdvMAu3AAAMAAABdvg");
	this.shape_41.setTransform(150,300);

	this.timeline.addTween(cjs.Tween.get(this.shape_41).wait(212));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-795,299.5,1869.6,694.5);
// library properties:
lib.properties = {
	id: '2F49D00C20C940BA9B927F9153DA0B39',
	width: 300,
	height: 600,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/HP_FromTo_Display_300x600_atlas_P_1.png", id:"HP_FromTo_Display_300x600_atlas_P_1"},
		{src:"images/HP_FromTo_Display_300x600_atlas_NP_1.jpg", id:"HP_FromTo_Display_300x600_atlas_NP_1"}
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