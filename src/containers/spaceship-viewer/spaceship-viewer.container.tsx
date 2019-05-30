import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import GLTFLoader from 'three-gltf-loader';
import { Box } from '@material-ui/core';
import { ISpaceship } from 'models';

interface IProps {
  spacecraft: ISpaceship;
}

export default class SpaceshipViewer extends React.Component<IProps, {}> {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  controls: OrbitControls;
  mesh: any = null;
  canvas: any = null;
  frameId: any = null;
  enableHelpers: boolean = false;

  model: string = `${process.env.PUBLIC_URL}/images/${
    this.props.spacecraft.registry
  }.glb`;
  reflection: string = `${process.env.PUBLIC_URL}/images/reflective.jpg`;

  componentDidMount() {
    this.init();
    this.addControls();

    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.canvas.removeChild(this.renderer.domElement);
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
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, aspectRatio, 0.1, 1000);
    this.camera.position.z = 16;
    this.camera.lookAt(this.scene.position);

    // Add hemisphere light
    // const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    // this.scene.add(hemisphereLight);

    // Add spotlight
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.setY(10);
    spotLight.position.setZ(10);
    spotLight.angle = Math.PI / 8;
    spotLight.penumbra = 0.05;
    spotLight.decay = 1;
    spotLight.distance = 200;
    // this.scene.add(spotLight);

    // Add ambient light
    // const ambLight = new THREE.AmbientLight(0xffffff);
    // this.scene.add(ambLight);

    // Add directional light
    const dirLight = new THREE.DirectionalLight(0xffffff, 1);
    dirLight.position.setY(40);
    dirLight.position.setZ(-10);
    this.scene.add(dirLight);

    // Add point light
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.setY(6);
    pointLight.position.setZ(2);
    this.scene.add(pointLight);

    if (this.enableHelpers) {
      const spotHelper = new THREE.SpotLightHelper(spotLight);
      const dirHelper = new THREE.DirectionalLightHelper(dirLight, 5);
      const sphereSize = 1;
      const pointHelper = new THREE.PointLightHelper(pointLight, sphereSize);
      this.scene.add(spotHelper);
      this.scene.add(dirHelper);
      this.scene.add(pointHelper);
      this.scene.add(new THREE.AxesHelper(200));
    }

    // const envMap = new THREE.TextureLoader().load(this.reflection);
    // envMap.mapping = THREE.EquirectangularReflectionMapping;

    const loader = new GLTFLoader();
    loader.load(
      this.model,
      gltf => {
        this.scene.add(gltf.scene);

        // gltf.scene.traverse((node: any) => {
        //   // console.log(node);
        //   if (node && node.isMesh) {
        //     // node.material.envMap = envMap;
        //     this.mesh = node;
        //     // this.mesh.position.z = 1;
        //     node.material.emissive = node.material.color;
        //     node.material.emissiveMap = node.material.map;
        //     this.scene.add(this.mesh);
        //   }
        // });
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
    this.renderer.gammaFactor = 5;
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
