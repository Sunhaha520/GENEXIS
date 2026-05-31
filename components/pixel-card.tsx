"use client";

import { useEffect, useRef } from "react";

interface PixelCardProps {
  type: "data-stream" | "code-matrix" | "digital-signal";
}

export function PixelCard({ type }: PixelCardProps) {
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

    const PIXEL_SIZE = 3; // 稍微细腻一点的像素

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      
      width = Math.floor(parent.clientWidth / PIXEL_SIZE);
      height = Math.floor(parent.clientHeight / PIXEL_SIZE);
      
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      time += 0.02; // 适中的动画速度
      
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          let brightness = 0;
          let alpha = 0;

          if (type === "data-stream") {
            // 数据流：垂直下落的线条
            const fallSpeed = time * 5;
            const xOffset = Math.sin(x * 123.45) * 1000;
            const yPos = (y + xOffset + fallSpeed) % height;
            
            if (yPos > height - 10 && x % 2 === 0) {
               brightness = 255;
               alpha = (yPos - (height - 10)) * 25;
            } else {
               // 固定的星点，而不是每帧随机
               const isStar = (x * 17 + y * 23) % 200 === 0;
               if (isStar) {
                  const starWave = Math.sin(x + y + time * 2);
                  if (starWave > 0.5) {
                     brightness = 150;
                     alpha = (starWave - 0.5) * 200;
                  }
               }
            }
          } else if (type === "code-matrix") {
            // 代码阵列：网格闪烁
            const isGrid = (x % 3 === 0) && (y % 3 === 0);
            if (isGrid) {
              const wave = Math.sin(x * 0.1 + y * 0.1 + time);
              if (wave > 0.8) {
                brightness = 200;
                alpha = (wave - 0.8) * 5 * 255;
              } else {
                brightness = 50;
                alpha = 40;
              }
            }
          } else if (type === "digital-signal") {
            // 数字信号：横向扫描波与噪点
            const scanline = (time * 10) % height;
            const distToScanline = Math.abs(y - scanline);
            
            if (distToScanline < 2) {
              brightness = 255;
              alpha = 200 - distToScanline * 50;
            } else {
               const wave = Math.sin(x * 0.05 + time) * Math.cos(y * 0.05 - time);
               if (wave > 0.5) {
                 brightness = 100;
                 alpha = (wave - 0.5) * 2 * 100;
               }
            }
          }

          // 中心区域亮，边缘变暗 (渐隐)
          const cx = width / 2;
          const cy = height / 2;
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = Math.max(width, height) / 1.5;
          const falloff = Math.max(0, 1 - (dist / maxDist));
          
          alpha *= falloff;

          const index = (y * width + x) * 4;
          // 统一使用高级的蓝/白科技色调
          data[index] = 200;      // R
          data[index + 1] = 220;  // G
          data[index + 2] = 255;  // B
          data[index + 3] = alpha; // A
        }
      }

      ctx.putImageData(imageData, 0, 0);
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [type]);

  return (
    <div style={{ position: "absolute", inset: 0, overflow: "hidden", mixBlendMode: "screen", opacity: 0.8 }}>
      <canvas 
        ref={canvasRef} 
        style={{ 
          width: "100%", 
          height: "100%", 
          imageRendering: "pixelated" 
        }} 
      />
    </div>
  );
}
