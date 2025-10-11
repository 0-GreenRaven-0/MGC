import { useRef, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const PingPong = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isTablet = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1024px)' });
  const isDesktop = useMediaQuery({ query: '(min-width: 1025px)' });

  const canvasRef = useRef(null);
  const [running, setRunning] = useState(false);

  const drawTable = (ctx, paddle1Pos = 0, paddle2Pos = 0) => {
    const canvas = ctx.canvas;
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const paddleWidth = isDesktop ? 10 : 80;
    const paddleHeight = isDesktop ? 80 : 10;

    // Background
    ctx.fillStyle = '#1B5E20';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Center line
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    ctx.setLineDash([10, 10]);
    ctx.beginPath();
    if (isDesktop) {
      ctx.moveTo(canvas.width / 2, 0);
      ctx.lineTo(canvas.width / 2, canvas.height);
    } else {
      ctx.moveTo(0, canvas.height / 2);
      ctx.lineTo(canvas.width, canvas.height / 2);
    }
    ctx.stroke();
    ctx.setLineDash([]);

    // Paddles
    ctx.fillStyle = 'white';
    if (isDesktop) {
      ctx.fillRect(10, paddle1Pos, paddleWidth, paddleHeight); // left
      ctx.fillRect(canvas.width - 20, paddle2Pos, paddleWidth, paddleHeight); // right
    } else {
      ctx.fillRect(paddle1Pos, 10, paddleWidth, paddleHeight); // top
      ctx.fillRect(paddle2Pos, canvas.height - 20, paddleWidth, paddleHeight); // bottom
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = isMobile ? 300 : isTablet ? 450 : 800;
    canvas.height = isMobile ? 400 : isTablet ? 600 : 400;

    const ctx = canvas.getContext('2d');
    drawTable(ctx);
  }, []);

  useEffect(() => {
    if (!running) return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const paddleWidth = isDesktop ? 10 : 80;
    const paddleHeight = isDesktop ? 80 : 10;
    const paddleSpeed = 12;

    let paddle1Pos = (isDesktop ? (canvas.height - paddleHeight)/2 : (canvas.width - paddleWidth)/2);
    let paddle2Pos = (isDesktop ? (canvas.height - paddleHeight)/2 : (canvas.width - paddleWidth)/2);

    let ballX = canvas.width / 2;
    let ballY = canvas.height / 2;
    let ballRadius = 8;
    let ballSpeedX = 10;
    let ballSpeedY = 10;

    const handlePointerMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;

      if (isDesktop) {
        let y = clientY - rect.top - paddleHeight / 2;
        if (y < 0) y = 0;
        if (y + paddleHeight > canvas.height) y = canvas.height - paddleHeight;
        paddle2Pos = y;
      } else {
        let x = clientX - rect.left - paddleWidth / 2;
        if (x < 0) x = 0;
        if (x + paddleWidth > canvas.width) x = canvas.width - paddleWidth;
        paddle2Pos = x;
      }
    };

    canvas.addEventListener('mousemove', handlePointerMove);
    canvas.addEventListener('touchmove', handlePointerMove);

    const gameLoop = () => {
      ballX += ballSpeedX;
      ballY += ballSpeedY;

      if (isDesktop) {
        // Bounce off top/bottom
        if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) ballSpeedY = -ballSpeedY;

        // Bounce off paddles (left/right)
        if (
          ballX - ballRadius <= 20 &&
          ballY > paddle1Pos &&
          ballY < paddle1Pos + paddleHeight
        ) {
          ballSpeedX = -ballSpeedX;
          ballX = 20 + ballRadius;
        }

        if (
          ballX + ballRadius >= canvas.width - 20 &&
          ballY > paddle2Pos &&
          ballY < paddle2Pos + paddleHeight
        ) {
          ballSpeedX = -ballSpeedX;
          ballX = canvas.width - 20 - ballRadius;
        }

        // Auto paddle (left)
        if (ballY < paddle1Pos + paddleHeight / 2) paddle1Pos -= paddleSpeed * 0.7;
        else paddle1Pos += paddleSpeed * 0.7;

        if (paddle1Pos < 0) paddle1Pos = 0;
        if (paddle1Pos + paddleHeight > canvas.height) paddle1Pos = canvas.height - paddleHeight;
      } else {
        // Bounce off left/right
        if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) ballSpeedX = -ballSpeedX;

        // Bounce off paddles (top/bottom)
        if (
          ballY - ballRadius <= 10 + paddleHeight &&
          ballX > paddle1Pos &&
          ballX < paddle1Pos + paddleWidth
        ) {
          ballSpeedY = -ballSpeedY;
          ballY = 10 + paddleHeight + ballRadius;
        }

        if (
          ballY + ballRadius >= canvas.height - paddleHeight - 10 &&
          ballX > paddle2Pos &&
          ballX < paddle2Pos + paddleWidth
        ) {
          ballSpeedY = -ballSpeedY;
          ballY = canvas.height - paddleHeight - 10 - ballRadius;
        }

        // Auto paddle (top)
        if (ballX < paddle1Pos + paddleWidth / 2) paddle1Pos -= paddleSpeed * 0.7;
        else paddle1Pos += paddleSpeed * 0.7;

        if (paddle1Pos < 0) paddle1Pos = 0;
        if (paddle1Pos + paddleWidth > canvas.width) paddle1Pos = canvas.width - paddleWidth;
      }

      drawTable(ctx, paddle1Pos, paddle2Pos);

      // Draw ball
      ctx.beginPath();
      ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
      ctx.fillStyle = 'white';
      ctx.fill();

      requestAnimationFrame(gameLoop);
    };

    requestAnimationFrame(gameLoop);

    return () => {
      canvas.removeEventListener('mousemove', handlePointerMove);
      canvas.removeEventListener('touchmove', handlePointerMove);
    };
  }, [running]);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        position: 'relative',
      }}
    >
      <canvas
        ref={canvasRef}
        width={isMobile ? 300 : isTablet ? 450 : 800}
        height={isMobile ? 400 : isTablet ? 600 : 400}
        style={{ border: '2px solid white', touchAction: 'none' }}
        onClick={() => !running && setRunning(true)}
        onTouchStart={() => !running && setRunning(true)}
      />
      {!running && (
        <div
          style={{
            position: 'absolute',
            color: 'white',
            fontSize: '18px',
            fontWeight: 'bold',
            textShadow: '0 0 5px black',
            pointerEvents: 'none',
          }}
        >
          <p>Tap or Click the Table to Start</p>
        </div>
      )}
    </div>
  );
};

export default PingPong;
