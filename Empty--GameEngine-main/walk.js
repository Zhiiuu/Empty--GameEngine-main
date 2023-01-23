class walk {
    constructor(game) {
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 160, 10, 0.2);

        this.x = -100;
        this.y = 615;
        this.speed = 250;

    };

    update() {
        this.x += this.speed*this.game.clockTick;
        if(this.x > 1024) this.x = -100;
        
    };

    draw(ctx) {
        this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}