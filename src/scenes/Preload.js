
// You can write more code here

/* START OF COMPILED CODE */

class Preload extends Phaser.Scene {

	constructor() {
		super("Preload");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorPreload() {
		this.load.pack("asset-pack", "assets/asset-pack.json");
	}

	/** @returns {void} */
	editorCreate() {

		// rectangle_1
		const rectangle_1 = this.add.rectangle(640, 340, 128, 128);
		rectangle_1.scaleX = 10.582980741467217;
		rectangle_1.scaleY = 5.910724691963938;
		rectangle_1.isFilled = true;
		rectangle_1.fillColor = 274945;

		// progress
		const progress = this.add.text(640, 474, "", {});
		progress.setOrigin(0.5, 0.5);
		progress.text = "0%";
		progress.setStyle({ "fontSize": "30px" });

		// cash_Hunt_Logo
		const cash_Hunt_Logo = this.add.image(640, 340, "Cash Hunt Logo");
		cash_Hunt_Logo.scaleX = 0.2;
		cash_Hunt_Logo.scaleY = 0.2;
		
		// progress (components)
		new PreloadText(progress);

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	preload() {

		this.editorCreate();

		this.editorPreload();
		if(this.game.device.os.desktop){
			console.log("Desktop");
			this.load.on(Phaser.Loader.Events.COMPLETE, () => this.scene.start("Level"));
		}
		else if(this.game.device.os.android || this.game.device.os.iOS){
			console.log("Mobile");
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
