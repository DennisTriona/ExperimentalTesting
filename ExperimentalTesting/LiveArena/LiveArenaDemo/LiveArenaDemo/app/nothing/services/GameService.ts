module app.nothing.services {

    export class GameService implements app.nothing.interfaces.IGameService {
        // Canvas and Renderer. 
        _canvas: HTMLCanvasElement;
        _ctx: CanvasRenderingContext2D;
        // Objects
        border: app.nothing.objects.Border;
        ball: app.nothing.objects.Ball;
        paddlePlayer: app.nothing.objects.PlayerPaddle;
        paddleAI: app.nothing.objects.AIPaddle;       

        get canvas(): HTMLCanvasElement {
            return this._canvas;
        }
        set canvas(value: HTMLCanvasElement) {
            this._canvas = value;
        }
        get ctx(): CanvasRenderingContext2D {
            return this._ctx;
        }
        set ctx(value: CanvasRenderingContext2D) {
            this._ctx = value;
        }

        // Init and default gameLoop
        initGame(): void {
            // init Ball
            this.ball = new app.nothing.objects.Ball(400, 400, 1, 1, 8, "red", 10, 5);
            // init Paddle - player
            this.paddlePlayer = new app.nothing.objects.PlayerPaddle(1280 - 25, 720 / 2, 15, 80, 8);
            // init Paddle - AI 
            this.paddleAI = new app.nothing.objects.AIPaddle(10, 720 / 2, 15, 80, 8, 5);
            // init Border
            this.border = new app.nothing.objects.Border(0, 0, 1280, 720);
            // event setup
            document.addEventListener("keydown", this.KeyDownListener);      
        }
        gameLoop(): void {
            // Clear Canvas
            this.clearCanvas();            
            
            // Draw Game
            this.DrawGame();

            // Update Game
            this.UpdateGame();

            // Do Collision Check
            this.DetectCollisions();
        }
       
         // Frame Functions
        clearCanvas(): void {
            var self = this;
            requestAnimationFrame(this.gameLoop.bind(self));
            this._ctx.fillStyle = "black";
            this._ctx.fillRect(0, 0, 1280, 720);
        }
        DrawGame(): void {
            // Draw Border
            this.border.Draw(this._ctx);
            // Draw Ball
            this.ball.Draw(this._ctx);
            // Draw Paddle-Player
            this.paddlePlayer.Draw(this._ctx);
            // Draw Paddle-AI
            this.paddleAI.Draw(this._ctx);
        }
        UpdateGame(): void {
            // Update Ball
            this.ball.Update();
            // Update Paddle-Player
            this.paddlePlayer.Update();
            // Update Paddle-AI
            this.paddleAI.Update();
        }
        DetectCollisions(): void {
            // Check ball collision to border
            if (this.ball.InnerYCollisionCheck(this.border.rectangle)) { // AI Recalc 
                this.paddleAI.CalculatePath(this.ball, this.border);
            }
            // check ball collision to paddlePlayer
            if (this.ball.OuterCollisionCheck(this.paddlePlayer._rectangle)) { // AI Recalc
                this.paddleAI.CalculatePath(this.ball, this.border);
            }
            // check ball collision to paddleAI
            this.ball.OuterCollisionCheck(this.paddleAI._rectangle); 
            // Check goal collision
            var event = this.ball.InnerXCollisionCheck(this.border.rectangle)
            if (event != 0) {
                this.Scored(event);
            }         
        }

        // Game Functions
        RestartGame(): void {
            // Reset Score
            // Reset Paddle Positions
            // Reset Ball
        }
        GameEnd(): void {
            // Print Result
        }
        Scored(e: number): void {
            // Add to score
            // Check win condition
                // Restart game
            // Reset ball
            this.ball.ResetPosition(this.border.rectangle.width / 2, this.border.rectangle.height / 2);
        }

        // Player Input
        KeyDownListener = (e) => {
            var direction: number = 0;
            if (e.which == 87) direction = -1;
            if (e.which == 83) direction = 1;

            this.paddlePlayer.Move(direction);
        }
    }

    angular.module("ShareDemo").service("app.nothing.services.GameService", GameService);
}