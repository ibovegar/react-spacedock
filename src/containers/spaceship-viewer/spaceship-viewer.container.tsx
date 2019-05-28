import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import GLTFLoader from 'three-gltf-loader';
import { Box } from '@material-ui/core';

export default class SpaceshipViewer extends React.Component {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  mesh: any = null;
  canvas: any = null;
  frameId: any = null;

  model: string = `${process.env.PUBLIC_URL}/images/cow.glb`;
  reflection: string = `${process.env.PUBLIC_URL}/images/reflective.jpg`;

  componentDidMount() {
    this.init();
    this.addControls();

    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  addControls = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.rotateSpeed = 1.0;
    this.controls.zoomSpeed = 1.2;
  };

  getAspectRatio = () => {
    const height = this.canvas.clientHeight;
    if (height === 0) return 0;
    return this.canvas.clientWidth / this.canvas.clientHeight;
  };

  init = () => {
    const aspectRatio = this.getAspectRatio();
    this.camera = new THREE.PerspectiveCamera(55, aspectRatio, 0.1, 1000);
    this.camera.position.z = 4;
    this.scene = new THREE.Scene();
    this.scene.add(new THREE.AxesHelper(200));
    this.camera.lookAt(this.scene.position);
    const light = new THREE.HemisphereLight(0xffffff, 0x080820, 1);
    this.scene.add(light);
    const envMap = new THREE.TextureLoader().load(this.reflection);
    envMap.mapping = THREE.EquirectangularReflectionMapping;
    const loader = new GLTFLoader();

    loader.load(
      this.model,
      gltf => {
        gltf.scene.traverse((node: any) => {
          if (node.isMesh) {
            node.material.envMap = envMap;
            this.mesh = node;
            // this.mesh.position.z = 1;
            this.scene.add(this.mesh);
          }
        });
      },
      error => console.error(error)
    );

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    });

    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight);
    this.renderer.gammaOutput = true;
    this.renderer.gammaInput = true;
    this.canvas.appendChild(this.renderer.domElement);
  };

  animate = () => {
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <Box bgcolor="grey.100" p={2} style={{ width: '500px', height: '500px' }}>
        <div
          style={{ width: '100%', height: '100%' }}
          ref={canvas => {
            this.canvas = canvas;
          }}
        />
      </Box>
    );
  }
}
