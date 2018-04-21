/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
define(["chaser/PositionChaser"], function( Chaser ){
    
    var makeTween = function( DomEvents, mLade )
    {
        var o = this.model.attributes;
        
        var tween = new Chaser( mLade, {odir:o.dir} );
        
        var onClick = function( ev ){
            ev.cancelBubble = true;
            tween.toggle();
        };
        DomEvents.addEventListener( mLade, "click", onClick );
        mLade.addEventListener("removed", function(){ DomEvents.removeEventListener( mLade, "click", onClick ); });
    };
    return makeTween;

});

