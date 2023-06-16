
// You can write more code here

/* START OF COMPILED CODE */

class YouWinScene extends Phaser.Scene {

	constructor() {
		super("YouWinScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// blur_bg
		const blur_bg = this.add.image(640, 348, "blur_bg");
		blur_bg.scaleX = 0.6653087165673921;
		blur_bg.scaleY = 0.6347752977463733;

		// you_win
		const you_win = this.add.image(640, 340, "You_win");
		you_win.scaleX = 0.5;
		you_win.scaleY = 0.5;

		// lists
		const interactiveImagesYouWinScene = [you_win, blur_bg];

		this.interactiveImagesYouWinScene = interactiveImagesYouWinScene;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image[]} */
	interactiveImagesYouWinScene;

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
		this.setImagesInteractive();
		this.input.on('gameobjectdown', this.imageClick.bind(this));

	}

	setImagesInteractive() {
		this.interactiveImagesYouWinScene.forEach((image) => {
			image.setInteractive();
		});
	}


	imageClick(pointer, gameObject) {
		if (gameObject.texture.key === 'You_win') {
			this.scene.start("Level");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
