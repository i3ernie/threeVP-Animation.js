/**
 * Created by Hessberger on 18.03.2015.
 */
define(["lodash", "tween"], function ( _, TWEEN ) {
    
    var defaults = {
        hinge:"left",
        dir:"y",
        odir:"in",
        val:1.57
    };
    
    var dirs = {"left":"y", "right":"y", "top" : "x", "bottom" : "x"};

    var RotationChaser = function( obj, opt )
    {
        opt = opt || {};
        var options = _.extend(defaults, opt);
        options.dir = dirs[options.hinge] || defaults.dir;
        var angle = {left:-options.val, right:options.val, o:-options.val, u:options.val, in:1, out:-1};
        var start = obj.rotation[options.dir];
        var stop = start+angle[options.hinge]*angle[options.odir];
        var to = stop;
        var rotation = {  y: start };
        var target = {  y: stop };
        var animate = false;
        var time = 2000;

        var tween = new TWEEN.Tween( rotation ).to(target, time)
        .onStart(function(){
            animate = true;
        })
        .onComplete(function(){
            animate = false;
            to = (to === start)? stop:start;
            tween.to({y: to}, time);
        })
        .onStop(function(){
            animate = false;
            to = (to === start)? stop:start;
            tween.to({y: to}, time);
        })
        .onUpdate(function(){
            obj.rotation[options.dir] = rotation.y;
        });

        this.start = function(){
            tween.start();
        };
        this.toggle = function(){
            if ( animate ) tween.stop();
            else tween.start();
        };
        this.close = function(){
            if( rotation.y === start ) return;
            if (animate) {tween.stop(); }
            tween.start();
        };

    };
    return RotationChaser;
});