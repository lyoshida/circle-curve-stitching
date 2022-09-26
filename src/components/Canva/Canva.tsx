import React, { useEffect, useRef, useState } from "react"
import { useRecoilValue } from "recoil"
import { canvasSizeState, circlePointsState, colorState, stepState } from "../../state/params"

const Canva : React.FC = (props) => {
    const size = useRecoilValue(canvasSizeState);
    const circlePoints = useRecoilValue(circlePointsState);
    const step = useRecoilValue(stepState);
    const color = useRecoilValue(colorState);
    
    const canvas = useRef<HTMLCanvasElement | null>(null);
    let ctx = useRef<CanvasRenderingContext2D | null>(null);
    const [points, setPoints] = useState<number[][]>([]);

    useEffect(() => {
        if (canvas.current) {
            ctx.current = canvas.current.getContext('2d');
            ctx.current!.imageSmoothingEnabled = true;
        }
        draw();
      }, []
    );
    
    useEffect(() => {
        clearCanvas();
        setPoints([]);
        draw();
    }, [size, circlePoints, step])

    function getCirclePoints(step: number) {
        const radius = size * 0.9 / 2;
        let points: number[][] = []
        for (let i = 0; i <= step; i++) {
            const x_coord = radius * Math.cos(2 * Math.PI * i / step) + size / 2;
            const y_coord = radius * Math.sin(2 * Math.PI * i / step) + size / 2;
            
            points.push([x_coord, y_coord])
        }
        setPoints(points);
    }
    
    function drawLine(x0: number, y0: number, x1: number, y1: number) {
        ctx.current!.strokeStyle = color;
        ctx.current!.lineWidth = 1;
        ctx.current!.beginPath();
        ctx.current!.moveTo(x0, y0);
        ctx.current!.lineTo(x1, y1);
        ctx.current!.stroke();
    }

    function draw() {
        if (!size || !step || !circlePoints ) return;

        getCirclePoints(circlePoints);

        for (let i = 0; i <= points.length - 2; i++) {
            drawLine(points[i][0], points[i][1], points[i+1][0], points[i+1][1])
        }

        for (let i = 0; i <= points.length - 1; i++) {
            drawLine(points[i][0], points[i ][1], points[i * step % points.length][0], points[i * step % points.length][1]);
        }
    }

    function clearCanvas() {
        ctx.current!.clearRect(0, 0, size, size);
    }    

    return <canvas id="canvas" width={size} height={size} ref={canvas}></canvas>
}

export default Canva;