module app.nothing.objects {

    export class Border {
        _rectangle: Rectangle;

        // MiddleLine
        _lineWidth: number;

        // Border line? 

        constructor(x: number, y: number, width: number, height: number) {
            this._rectangle = new app.nothing.objects.Rectangle(x, y, width, height);
        }

        get rectangle(): Rectangle {
            return this._rectangle;
        }
        
        Draw(ctx: CanvasRenderingContext2D): void {
            ctx.beginPath();
            ctx.strokeStyle = "white";
            ctx.setLineDash([34.5]);
            ctx.lineWidth = 4;
            ctx.moveTo(this._rectangle.width / 2, 0);
            ctx.lineTo(this._rectangle.width / 2, this.rectangle.height)
            ctx.stroke();
        }
    }
}