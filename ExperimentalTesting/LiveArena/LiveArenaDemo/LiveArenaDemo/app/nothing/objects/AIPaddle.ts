module app.nothing.objects {
    enum States {
        idle = 1,
        Aiming = 2,
        Adjust = 3
    }

    export class AIPaddle extends Paddle {
        humanError: number // Basically difficulty
        state: States; 
        lastBallRead: Ball;

        // Current Destination
        destination: number
        destinationX: number

        constructor(x: number, y: number, width: number, height: number, speed: number, humanError: number) {
            super(x, y, width, height, speed);
            this.humanError = humanError;
        }

        Update(): void {

            if (this.destination > this._rectangle.y + (this._rectangle.height / 2)) this.Move(1);
            if (this.destination < this._rectangle.y + (this._rectangle.height / 2)) this.Move(-1);

 
            super.Update();
        }

        Draw(ctx: CanvasRenderingContext2D): void {
            // Redraw Ball at new position
            ctx.restore();
            ctx.beginPath();
            ctx.strokeStyle = "red";
            ctx.lineWidth = 2;
            ctx.setLineDash([0]);
            ctx.arc(this.destinationX, this.destination, 2, 0, 2 * Math.PI);
            ctx.stroke();

            super.Draw(ctx);
        }

        // Called when Player hits Ball or Ball hits Wall
        CalculatePath(ball: Ball, border: Border): void {
            
            // Simulation of exact ball path
            var simX = ball.x;
            var simY = ball.y;
            var simDirX = ball.dirX;
            var simDirY = ball.dirY;

            if (simDirX > 0) simDirX *= -1;

            while (simX >= this._rectangle.x)
            {
                // simulate ball update
                simX += simDirX * ball.speed;
                simY += simDirY * ball.speed;

                if (simY - (ball.size / 2) - ball.lineWidth <= 0 || simY + (ball.size / 2) + ball.lineWidth > border.rectangle.height) simDirY *= -1;
            }

            // Add human error
            var random = (Math.random() - 0.5) * 100;
            simY += random * this.humanError;

            this.destination = simY + (ball.size / 2) + ball.lineWidth;
            this.destinationX = simX;
        }
    }
}