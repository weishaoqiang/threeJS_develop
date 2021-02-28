import * as THREE from 'three'

const CommentWebGL = function() {
  this.scene = null
  this.camera = null
  this.controls = null
}

CommentWebGL.prototype.initCanvas = function (dom) {
  try {
    if (!_isDOM(dom)) {
      throw new Error('dom is not a HTMLElement')
    }
    const width = dom.offsetWidth, height = dom.offsetHeight,
      renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xf80000, 1);
    dom.appendChild(renderer.domElement);

  } catch (err) {
    console.error(err);
  }
}

const _isDOM = function (dom) {
  return (
    typeof HTMLElement === 'object'
    ? (function (dom) {
      return dom instanceof HTMLElement;
    })(dom)
    : (function (dom) {
        return dom && typeof dom === 'object' && dom.nodeType === 1 && typeof dom.nodeName === 'string';
    })(dom)
  )
}

export { CommentWebGL }