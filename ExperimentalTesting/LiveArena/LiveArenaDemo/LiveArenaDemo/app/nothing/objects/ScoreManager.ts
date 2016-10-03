module app.nothing.objects {

    export class ScoreManager {
        AIScore: number;
        PlayerScore: number;

        constructor() {

        }

        DetectGoal(ball: Ball, border: Border) {
            // PlayerGoal Check
            if (ball.x - (ball.size / 2) - ball.lineWidth <= 0) {
                
            }
            // AI Goal Check
            if (ball.x + (ball.size / 2) + ball.lineWidth >= border.rectangle.width) {
                
            }
        }

        AIScored(): void {
            this.AIScore++;
        }
        PlayerScored(): void {
            this.PlayerScore++;
        }
    }
}