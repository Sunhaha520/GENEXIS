"use client";

import { useEffect, useRef } from "react";

export function PixelMoon() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let animationFrameId: number;
    let time = 0;

    // 像素大小 (越大越复古)
    const PIXEL_SIZE = 4;

    const resize = () => {
      // 获取父容器的实际大小，并为了性能适当缩小分辨率，通过 CSS 放大实现真正的“像素感”
      const parent = canvas.parentElement;
      if (!parent) return;
      
      // 降低内部分辨率以获得强烈的像素感
      width = Math.floor(parent.clientWidth / PIXEL_SIZE);
      height = Math.floor(parent.clientHeight / PIXEL_SIZE);
      
      canvas.width = width;
      canvas.height = height;
      
      // 静态渲染全屏点阵网格，去除动画
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let brightness = 0;

          // 左右铺全的微弱网格点阵
          const isGrid = (x % 4 === 0) && (y % 4 === 0);
          if (isGrid) {
             brightness = 20; 
          } else if ((x * 13 + y * 17) % 300 === 0) {
             // 极其微弱的零星随机亮点，增加科技感
             brightness = 35;
          }

          const alpha = brightness;

          const index = (y * width + x) * 4;
          data[index] = 200;      // R
          data[index + 1] = 210;  // G
          data[index + 2] = 255;  // B
          data[index + 3] = alpha; // A
        }
      }

      ctx.putImageData(imageData, 0, 0);
    };

    window.addEventListener("resize", resize);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="pixel-moon-container">
      <canvas ref={canvasRef} className="pixel-moon-canvas" />
    </div>
  );
}
