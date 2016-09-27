module app.nothing.interfaces {
    
    export interface IGameService {
        _canvas: HTMLCanvasElement;
        _ctx: CanvasRenderingContext2D;

        initGame(): void;
        gameLoop(): void;       
    }
}