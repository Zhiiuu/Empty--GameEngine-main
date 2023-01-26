const game = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./walk.png");
ASSET_MANAGER.queueDownload("./walkleft.png");
ASSET_MANAGER.queueDownload("./idle1.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	game.addEntity(new walk(game));

	game.init(ctx);

	game.start();
});
