/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(['three', "cmd", 'Viewport', 'Draggable', 'plugins/plg.Tracking'], function( THREE, CMD, Viewport, Draggable, Tracking ){
    
    return {
        init : function(){
            new Tracking();
            this.VP = new Viewport( );
            this.VP.init();
        },
        
        start : function(){
            var VP = this.VP;
            Draggable.init( VP );
            console.log(VP);
            var geo = new THREE.BoxGeometry(1, 1, 1);
            var mesh = new THREE.Mesh( geo );
            Draggable.makeDraggable( mesh );
            mesh.position.y = .5;
            
            var floor = new THREE.Mesh( new THREE.BoxGeometry(10, .1, 10) );
            floor.position.y = -.05;
            
            VP.scene.add( floor );
            VP.scene.add( mesh );
            VP.camera.position.z = 10;
            
            VP.start();

        }
    };
        
});
