/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//import _ from './vendor/lodash/lodash.js'; 
//import THREE from './vendor/three/three';
//import Viewport from './Viewport';

require.config({
     baseUrl:"../src",
    
    "paths": {
        "vendor"    : "vendor",
        "libs"      : "libs",
        "extras"    : "extras",
        "data"      : "../examples/data",
        "plugins"   : "plugins",
        "utilities" : "extras/utilities",
        
        
        "Viewport"      : "../src/vendor/threeVP/Viewport",
      
        
        "Interactive"   : "extras/interfaces/Interactive",
        "Draggable"     : "extras/interfaces/Draggable",
        "IntersectPlane" : "extras/utilities/IntersectPlane"
    }
});

require(["core"], function( ){
    require(['./app.js'], function( app )
    {
        app.init();
        app.start();
    });
});


