"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

// Updated vertex shader: same as before
const particleVertex = `
  attribute float scale;
  uniform float uTime;
  uniform vec2 uMouse;
  
  void main() {
    vec3 pos = position;
    // Create a gentle vertical wave along x
    pos.y += sin(pos.x * 0.1 + uTime) * 0.5;
    // Apply a slight offset based on the mouse position
    pos.x += uMouse.x * 1.5;
    pos.y += uMouse.y * 1.5;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    // Multiply by 5.0 and add 3.0 as a constant offset, then clamp to a minimum of 2.0
    gl_PointSize = max(scale * (5.0 * (1.0 / -mvPosition.z) + 3.0), 2.0);
    gl_Position = projectionMatrix * mvPosition;
  }
`;

// Fragment shader: renders grey dots with some transparency
const particleFragment = `
  void main() {
    gl_FragColor = vec4(0.6, 0.6, 0.6, 0.8);
  }
`;

// Linear interpolation helper
function lerp(start: number, end: number, amount: number): number {
  return (1 - amount) * start + amount * end;
}

class CanvasAnimation {
  public canvas: HTMLCanvasElement;
  public winWidth: number;
  public winHeight: number;
  public aspectRatio: number;
  public mouse: THREE.Vector2;

  public camera!: THREE.PerspectiveCamera;
  public scene!: THREE.Scene;
  public renderer!: THREE.WebGLRenderer;
  public particleGeometry!: THREE.BufferGeometry;
  public particleMaterial!: THREE.ShaderMaterial;
  public particles!: THREE.Points;
  
  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
    this.aspectRatio = window.innerWidth / window.innerHeight;
    this.mouse = new THREE.Vector2(0, 0);

    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.animate = this.animate.bind(this);

    this.initCamera();
    this.initScene();
    this.initRenderer();
    this.initParticles();

    this.bindEvents();
    this.animate();
  }

  bindEvents() {
    window.addEventListener("resize", this.onResize);
    window.addEventListener("mousemove", this.onMouseMove, false);
  }

  initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, this.aspectRatio, 0.01, 1000);
    this.camera.position.set(0, 6, 5);
  }

  initScene() {
    this.scene = new THREE.Scene();
  }

  initRenderer() {
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
      alpha: true,
    });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(this.winWidth, this.winHeight);
    this.renderer.setClearColor(0xffffff, 1);
  }

  initParticles() {
    const gap = 0.6;
    const amountX = 250;
    const amountY = 1000;
    const particleNum = amountX * amountY;
    const particlePositions = new Float32Array(particleNum * 3);
    const particleScales = new Float32Array(particleNum);
    let i = 0;
    let j = 0;
    
    // We'll non-linearly distribute particles vertically.
    // "alpha" controls the non-linearity: alpha > 1 increases the gap toward the top.
    const alpha = 1.5;
    const totalZRange = amountY * gap; // original uniform range

    for (let ix = 0; ix < amountX; ix++) {
      for (let iy = 0; iy < amountY; iy++) {
        // X coordinate remains uniformly distributed.
        const x = ix * gap - (amountX * gap) / 2;
        // For the Z coordinate, use a non-linear interpolation.
        const t = iy / (amountY - 1);
        const z = lerp(-totalZRange / 2, totalZRange / 2, Math.pow(t, alpha));
        particlePositions[i] = x;
        particlePositions[i + 1] = 0;
        particlePositions[i + 2] = z;
        particleScales[j] = 1;
        i += 3;
        j++;
      }
    }

    this.particleGeometry = new THREE.BufferGeometry();
    this.particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    this.particleGeometry.setAttribute(
      "scale",
      new THREE.BufferAttribute(particleScales, 1)
    );

    this.particleMaterial = new THREE.ShaderMaterial({
      transparent: true,
      vertexShader: particleVertex,
      fragmentShader: particleFragment,
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
      },
    });

    this.particles = new THREE.Points(
      this.particleGeometry,
      this.particleMaterial
    );
    this.scene.add(this.particles);
  }

  render() {
    this.camera.lookAt(this.scene.position);
    this.renderer.render(this.scene, this.camera);
  }

  animate() {
    this.particleMaterial.uniforms.uTime.value += 0.01;
    this.particleMaterial.uniforms.uMouse.value.copy(this.mouse);
    this.render();
    requestAnimationFrame(this.animate);
  }

  onMouseMove(e: MouseEvent) {
  }

  onResize() {
    this.winWidth = window.innerWidth;
    this.winHeight = window.innerHeight;
    this.aspectRatio = window.innerWidth / window.innerHeight;
    this.camera.aspect = this.aspectRatio;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(this.winWidth, this.winHeight);
  }

  dispose() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMouseMove, false);
    this.renderer.dispose();
  }
}

const BackgroundAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const animationInstance = new CanvasAnimation(canvasRef.current);

    return () => {
      animationInstance.dispose();
    };
  }, []);

  return (
    <canvas
      id="c"
      ref={canvasRef}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -10,
      }}
    />
  );
};

export default BackgroundAnimation;
