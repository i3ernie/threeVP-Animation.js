/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

define(["chaser/PositionChaser", "chaser/RotationChaser", "chaser/PositionTween"], function( PositionChaser, RotationChaser, PositionTween ){
    return {
        PositionChaser : PositionChaser,
        RotationChaser : RotationChaser,
        PositionTween  : PositionTween
    };
});