module app.nothing.objects {

    export class Paddle {
        // Configuration
        _rectangle: Rectangle;
        speed: number;

        constructor(x: number, y: number, width: number, height: number, speed: number) {
            this._rectangle = new Rectangle(x, y, width, height);
            this.speed = speed
        }

        Move(direction: number): void {
            this._rectangle.y += direction * this.speed;
        }

        Update(): void {

        }
        Draw(ctx: CanvasRenderingContext2D): void {
            ctx.fillStyle = "white";
            ctx.fillRect(this._rectangle.x, this._rectangle.y, this._rectangle.width, this._rectangle.height);
        }
    }
}