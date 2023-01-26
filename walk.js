class walk {
    constructor(game) {
        this.game = game;
        //this.animator = new Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 160, 10, 0.2);

        this.facing = 0;

        this.x = 0;
        this.y = 615;
        this.speed = 0;

        this.animations = [];
        this.loadAnimations();

    };

    loadAnimations() {
        for (var i = 0; i < 4; i++) {//4 directions
            this.animations.push([]);
        }

        this.animations[0] = new Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 160, 10, 0.2);
        this.animations[1] = new Animator(ASSET_MANAGER.getAsset("./walkleft.png"), 0, 0, 160, 160, 10, 0.2);
        this.animations[2] = new Animator(ASSET_MANAGER.getAsset("./walkleft.png"), 0, 0, 160, 160, 10, 0.2);
        this.animations[3] = new Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 160, 10, 0.2)
        this.animations[4] = new Animator(ASSET_MANAGER.getAsset("./idle1.png"), 0, 0, 160, 160, 4, 0.2)

    };

    update() {
        this.x += this.speed*this.game.clockTick;

        if (game.keys['w']) {
            this.facing = 0;
            this.y -= 2;
        }
        else if (game.keys['s']) {
            this.facing = 1;
            this.y += 2;
        }
        //determine horizontal
        if (game.keys['a']) {
            this.facing = 2;
            this.x -= 2;
        }
        else if (game.keys['d']) {
            this.facing = 3;
            this.x += 2;
        }

        if (!game.keys['w'] && !game.keys['s'] && !game.keys['d'] && !game.keys['a']) {
            this.facing = 4;
            this.x -= 0;
            this.y -= 0;
        }

        if(this.x > 1024) this.x = -100;
        
    };

    draw(ctx) {
        this.animations[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };

}