var registerGeometry = require('../core/geometry').registerGeometry;
var THREE = require('../lib/three');

registerGeometry('wedge', {
  schema: {
    depth: {default: 1, min: 0},
    height: {default: 1, min: 0},
    width: {default: 1, min: 0},
    segmentsHeight: {default: 1, min: 1, max: 20, type: 'int'},
    segmentsWidth: {default: 1, min: 1, max: 20, type: 'int'},
    segmentsDepth: {default: 1, min: 1, max: 20, type: 'int'}
  },

  init: function (data) {
    var triangleShape = new THREE.Shape();
                shape.moveTo(8, 2);
                shape.lineTo(4, 8);
                shape.lineTo(12, 8);
                shape.lineTo(8, 2);

   // The rest is already correct:
    var wedgeGeometry = new THREE.ExtrudeGeometry( triangleShape, { amount: depth, steps: 1} );

    var mesh = new THREE.Mesh(wedgeGeometry/*, TODO */);
    }
});
