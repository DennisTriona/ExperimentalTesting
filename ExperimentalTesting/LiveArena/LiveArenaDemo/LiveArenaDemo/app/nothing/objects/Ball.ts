module app.nothing.objects {
    export class Ball {
        // current State
        x: number;
        y: number;
        dirX: number;
        dirY: number;
        speed: number;

        // appearance
        color: string;
        size: number;
        lineWidth: number;

        constructor(x: number, y: number, dirX: number, dirY: number, speed: number,
            color: string, size: number, linewidth: number) {
            this.x = x;
            this.y = y;
            this.dirX = Math.random();
            this.dirY = Math.random();
            this.speed = speed;
            this.color = color;
            this.size = size;
            this.lineWidth = linewidth;
        }

        Update(): void {
            // Update Ball position
            this.x += this.dirX * this.speed;
            this.y += this.dirY * this.speed;
        }
        Draw(ctx: CanvasRenderingContext2D): void {
            // Redraw Ball at new position
            ctx.restore();
            ctx.beginPath();
            ctx.strokeStyle = this.color;
            ctx.lineWidth = this.lineWidth;
            ctx.setLineDash([0]);
            ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
            ctx.stroke();
        }

        ResetPosition(x: number, y: number)
        {
            this.x = x;
            this.y = y;

            this.dirX = Math.random();
            this.dirY = Math.random();

            this.speed = 8;
        }

        InnerYCollisionCheck(rectangle: Rectangle): boolean {
            var hasCollided = false;

            // Upper check
            if (this.y - (this.size / 2) - this.lineWidth <= 0) {
                this.dirY = this.dirY * -1;
                hasCollided = true;
                this.speed++;
            }
                
            // Lower Check
            if (this.y + (this.size / 2) + this.lineWidth >= rectangle.height) {
                this.dirY = this.dirY * -1;
                hasCollided = true;
                this.speed++;
            }

            return hasCollided;
        }
        InnerXCollisionCheck(rectangle: Rectangle): number {
            var event = 0; // 0 = nothing, 1 = PlayerScore, 2 = AIScore
            
            // Left Check
            if (this.x + (this.size / 2) + this.lineWidth <= 0) {
                event = 1;
            } 
            // Right Check
            if (this.x - (this.size / 2) - this.lineWidth >= rectangle.width) {
                event = 2;
            }
            return event;
        }
        OuterCollisionCheck(rectangle: Rectangle): boolean {
            if (this.x - this.size < rectangle.x + rectangle.width &&
                this.x + this.size > rectangle.x &&
                this.y - this.size < rectangle.y + rectangle.height &&
                this.size + this.y > rectangle.y) {

                this.dirX *= -1;
                return true;
            }
            return false;
        }

    }
}