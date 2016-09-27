module app.nothing.objects {

    export class PlayerPaddle extends Paddle {

        constructor(x: number, y: number, width: number, height: number, speed: number) {
            super(x, y, width, height, speed);
        }
    }
}