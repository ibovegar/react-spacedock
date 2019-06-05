import React, { Component } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three-orbitcontrols-ts';
import GLTFLoader from 'three-gltf-loader';
import { ISpaceship, IAttachedUpgrades, UpgradeType } from 'models';
import upgradeMap from './upgrade-map';
import { getAspectRatio } from 'utils/helpers';

interface IProps {
  spacecraft: ISpaceship;
  attachedUpgrades: IAttachedUpgrades;
  onLoaded: () => void;
}

export default class Canvas extends Component<IProps, {}> {
  camera: THREE.PerspectiveCamera;
  scene: THREE.Scene;
  renderer: THREE.WebGLRenderer;
  manager: THREE.LoadingManager;
  controls: OrbitControls;
  mesh: any = null;
  canvas: any = null;
  frameId: any = null;
  enableHelpers: boolean = false;
  spacecraftModel: any;

  componentDidMount() {
    this.init();
    this.addControls();

    if (!this.frameId) {
      this.frameId = requestAnimationFrame(this.animate);
    }
  }

  componentDidUpdate() {
    const { attachedUpgrades } = this.props;

    this.updateModel(UpgradeType.Engine, !!attachedUpgrades.engine);
    this.updateModel(UpgradeType.Weapons, !!attachedUpgrades.weapons);
    this.updateModel(UpgradeType.Stabilizer, !!attachedUpgrades.stabilizer);
    this.updateModel(UpgradeType.Plating, !!attachedUpgrades.plating);
    this.updateModel(UpgradeType.Deflector, !!attachedUpgrades.deflector);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.frameId);
    this.canvas.removeChild(this.renderer.domElement);
  }

  updateModel = (upgradeType: string, isVisible: boolean) => {
    if (!this.spacecraftModel) return;

    const map = upgradeMap[this.props.spacecraft.registry][upgradeType];

    for (const modelName of map) {
      const model = this.spacecraftModel.children.find(
        (m: any) => m.name === modelName
      );
      model.visible = isVisible;
    }
  };

  addControls = () => {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05;
    this.controls.autoRotate = true;
    this.controls.autoRotateSpeed = 0.2;
    this.controls.rotateSpeed = 0.08;
  };

  init = () => {
    const aspectRatio = getAspectRatio(this.canvas);
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(40, aspectRatio, 0.1, 100);
    this.camera.position.z = 12;
    this.camera.position.y = 14;
    this.camera.position.x = 12;
    this.camera.lookAt(this.scene.position);

    // Add hemisphere light
    const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    this.scene.add(hemisphereLight);

    // Add spotlight
    const spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.setY(20);
    spotLight.position.setZ(0);
    spotLight.angle = Math.PI / 8;
    spotLight.penumbra = 0.05;
    spotLight.decay = 1;
    spotLight.distance = 200;
    this.scene.add(spotLight);

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
    pointLight.position.setY(-4);
    pointLight.position.setX(-8);
    pointLight.position.setZ(-10);
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

    const manager = new THREE.LoadingManager();

    manager.onLoad = () => {
      this.setState({ isLoading: false });
    };

    manager.onProgress = (_, loaded, total) => {
      const progress = (loaded / total) * 100;
      this.setState({ progress });
    };

    const loader = new GLTFLoader(manager);
    loader.load(
      `${process.env.PUBLIC_URL}/images/${this.props.spacecraft.registry}.glb`,
      gltf => {
        this.scene.add(gltf.scene);
        this.spacecraftModel = this.scene.children.find(
          (obj: any) => obj.isScene
        );
        this.props.onLoaded();
      },
      () => console.log(''),
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
    this.renderer.gammaFactor = 2.2;
    this.canvas.appendChild(this.renderer.domElement);
  };

  animate = () => {
    this.controls.update();
    this.renderScene();
    this.frameId = window.requestAnimationFrame(this.animate);
  };

  renderScene = () => {
    this.renderer.render(this.scene, this.camera);
  };

  render() {
    return (
      <div
        style={{ width: '100%', height: '100%' }}
        ref={canvas => {
          this.canvas = canvas;
        }}
      />
    );
  }
}
