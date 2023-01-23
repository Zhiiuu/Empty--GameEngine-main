class walk {
    constructor(game) {
        this.game = game;
        this.animation = new Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 150, 10, 0.2);

        this.x = -100;
        this.y = 0;
        this.speed = 250;

        this.facing = 0;

        this.directions = [];
        this.loadAnimations();

    };

    loadAnimations() {
        for (var i=0; i<5; i++) { // 0=idle 1-4=directions
            this.directions.push([]);
        }

        this.directions[0] = new this.Animator(ASSET_MANAGER.getAsset("./idle1.png"), 0, 0, 160, 150, 10, 0.2);      //idle
        this.directions[1] = new this.Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 150, 10, 0.2);       //right
        this.directions[2] = new this.Animator(ASSET_MANAGER.getAsset("./walk.png"), 0, 0, 160, 150, 10, 0.2);       //up
        this.directions[3] = new this.Animator(ASSET_MANAGER.getAsset("./walkleft.png"), 0, 0, 160, 150, 10, 0.2);   //left
        this.directions[4] = new this.Animator(ASSET_MANAGER.getAsset("./walkleft.png"), 0, 0, 160, 150, 10, 0.2);   //down
        
    }

    update() {
        this.x += this.speed*this.game.clockTick;

        if (game.keys['w']) {
            this.facing = 2;
            this.y -= 2;
        }
        else if (game.keys['s']) {
            this.facing = 4;
            this.y += 2;
        }
        //determine horizontal
        if (game.keys['a']) {
            this.facing = 3;
            this.x -= 2;
        }
        else if (game.keys['d']) {
            this.facing = 1;
            this.x += 2;
        }                                                                                         
        if(this.x > 1024) this.x = -100;
        
    };

    draw(ctx) {
        this.directions[this.facing].drawFrame(this.game.clockTick, ctx, this.x, this.y);
    };
}