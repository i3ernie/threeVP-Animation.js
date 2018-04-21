/**
 * Created by Hessberger on 18.03.2015.
 */
define(["tween"], function ( TWEEN ) {

    var PositionChaser = function(obj, opt)
    {
        opt = opt || {};
        var sliderange = opt.sliderange || 20;
        var time = 2000;
        var axis = opt.axis || "z";
        var start = obj.position[axis];
        var stop = start + sliderange;
        var to = stop;
        var position = {  z: start };
        var target = {  z: to };
        var animate = false;


        var tween = new TWEEN.Tween(position).to(target, time)
            .onStart(function(){
                animate = true;
            })
            .onComplete(function(){
                animate = false;
                to = (to == start)? stop:start;
                tween.to({z: to}, time);
            })
            .onStop(function(){
                animate = false;
                to = (to == start)? stop:start;
                tween.to({z: to}, time);
            })
            .onUpdate(function(){
                obj.position[axis] = position.z;
            });
        this.toggle = function(){
            if (animate) {tween.stop(); }
            else tween.start();
        };
        this.close = function(){
            if( position.z == start ) return;
            if (animate) {tween.stop(); }
            tween.start();
        };
    };
    
    return PositionChaser;
});