const gameEngine = new GameEngine();

const ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./walk.png");
ASSET_MANAGER.queueDownload("./walkleft.png");
ASSET_MANAGER.queueDownload("./walkidle.png");

ASSET_MANAGER.downloadAll(() => {
	const canvas = document.getElementById("gameWorld");
	const ctx = canvas.getContext("2d");
	ctx.imageSmoothingEnabled = false;

	gameEngine.addEntity(new walk(gameEngine));

	gameEngine.init(ctx);

	gameEngine.start();
});
