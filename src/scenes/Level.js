
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(660, 360, "background");
		background.scaleX = 0.7268502635277192;
		background.scaleY = 0.739203605768162;

		// cash_Hunt_Logo_removebg_preview
		const cash_Hunt_Logo_removebg_preview = this.add.image(640, 80, "Cash_Hunt_Logo-removebg-preview");
		cash_Hunt_Logo_removebg_preview.scaleX = 0.3;
		cash_Hunt_Logo_removebg_preview.scaleY = 0.3;

		// setings_button
		const setings_button = this.add.image(1245, 33, "setings button");
		setings_button.scaleX = 0.6;
		setings_button.scaleY = 0.6;

		// exit_button
		const exit_button = this.add.image(41, 33, "exit button");
		exit_button.scaleX = 0.6;
		exit_button.scaleY = 0.6;

		// info_button
		const info_button = this.add.image(1191, 33, "info button");
		info_button.scaleX = 0.6;
		info_button.scaleY = 0.6;
		info_button.visible = false;

		// sound_button
		const sound_button = this.add.image(1104, 33, "sound button");
		sound_button.scaleX = 0.6;
		sound_button.scaleY = 0.6;
		sound_button.visible = false;

		// sound_close_btn
		const sound_close_btn = this.add.image(1104, 33, "sound close btn");
		sound_close_btn.scaleX = 0.6;
		sound_close_btn.scaleY = 0.6;
		sound_close_btn.visible = false;

		// timer_button
		const timer_button = this.add.image(1148, 33, "timer button");
		timer_button.scaleX = 0.6;
		timer_button.scaleY = 0.6;
		timer_button.visible = false;

		// modified_6x15
		const modified_6x15 = this.add.image(640, 345.2049014243382, "Modified 6x15");
		modified_6x15.scaleX = 0.665291941670825;
		modified_6x15.scaleY = 0.6199909232882627;

		// Box-1
		const box_1 = this.add.image(235, 197, "Box-1");
		box_1.scaleX = 0.125;
		box_1.scaleY = 0.125;

		// Box-2
		const box_2 = this.add.image(235, 268, "Box-1");
		box_2.scaleX = 0.125;
		box_2.scaleY = 0.125;

		// Box-3
		const box_3 = this.add.image(235, 339, "Box-1");
		box_3.scaleX = 0.125;
		box_3.scaleY = 0.125;

		// Box-4
		const box_4 = this.add.image(235, 415, "Box-1");
		box_4.scaleX = 0.125;
		box_4.scaleY = 0.125;

		// Box-5
		const box_5 = this.add.image(235, 486, "Box-1");
		box_5.scaleX = 0.125;
		box_5.scaleY = 0.125;

		// Box-6
		const box_6 = this.add.image(235, 557, "Box-1");
		box_6.scaleX = 0.125;
		box_6.scaleY = 0.125;

		// Box-7
		const box_7 = this.add.image(297, 197, "Box-1");
		box_7.scaleX = 0.125;
		box_7.scaleY = 0.125;

		// Box-8
		const box_8 = this.add.image(297, 268, "Box-1");
		box_8.scaleX = 0.125;
		box_8.scaleY = 0.125;

		// Box-9
		const box_9 = this.add.image(297, 339, "Box-1");
		box_9.scaleX = 0.125;
		box_9.scaleY = 0.125;

		// Box-10
		const box_10 = this.add.image(297, 415, "Box-1");
		box_10.scaleX = 0.125;
		box_10.scaleY = 0.125;

		// Box-11
		const box_11 = this.add.image(297, 486, "Box-1");
		box_11.scaleX = 0.125;
		box_11.scaleY = 0.125;

		// Box-12
		const box_12 = this.add.image(297, 557, "Box-1");
		box_12.scaleX = 0.125;
		box_12.scaleY = 0.125;

		// Box-13
		const box_13 = this.add.image(359, 197, "Box-1");
		box_13.scaleX = 0.125;
		box_13.scaleY = 0.125;

		// Box-14
		const box_14 = this.add.image(359, 268, "Box-1");
		box_14.scaleX = 0.125;
		box_14.scaleY = 0.125;

		// Box-15
		const box_15 = this.add.image(359, 339, "Box-1");
		box_15.scaleX = 0.125;
		box_15.scaleY = 0.125;

		// Box-16
		const box_16 = this.add.image(359, 415, "Box-1");
		box_16.scaleX = 0.125;
		box_16.scaleY = 0.125;

		// Box-17
		const box_17 = this.add.image(359, 486, "Box-1");
		box_17.scaleX = 0.125;
		box_17.scaleY = 0.125;

		// Box-18
		const box_18 = this.add.image(359, 557, "Box-1");
		box_18.scaleX = 0.125;
		box_18.scaleY = 0.125;

		// Box-19
		const box_19 = this.add.image(421, 197, "Box-1");
		box_19.scaleX = 0.125;
		box_19.scaleY = 0.125;

		// Box-20
		const box_20 = this.add.image(421, 268, "Box-1");
		box_20.scaleX = 0.125;
		box_20.scaleY = 0.125;

		// Box-21
		const box_21 = this.add.image(421, 339, "Box-1");
		box_21.scaleX = 0.125;
		box_21.scaleY = 0.125;

		// Box-22
		const box_22 = this.add.image(421, 415, "Box-1");
		box_22.scaleX = 0.125;
		box_22.scaleY = 0.125;

		// Box-23
		const box_23 = this.add.image(421, 486, "Box-1");
		box_23.scaleX = 0.125;
		box_23.scaleY = 0.125;

		// Box-24
		const box_24 = this.add.image(421, 557, "Box-1");
		box_24.scaleX = 0.125;
		box_24.scaleY = 0.125;

		// Box-25
		const box_25 = this.add.image(483, 197, "Box-1");
		box_25.scaleX = 0.125;
		box_25.scaleY = 0.125;

		// Box-26
		const box_26 = this.add.image(483, 268, "Box-1");
		box_26.scaleX = 0.125;
		box_26.scaleY = 0.125;

		// Box-27
		const box_27 = this.add.image(483, 339, "Box-1");
		box_27.scaleX = 0.125;
		box_27.scaleY = 0.125;

		// Box-28
		const box_28 = this.add.image(483, 415, "Box-1");
		box_28.scaleX = 0.125;
		box_28.scaleY = 0.125;

		// Box-29
		const box_29 = this.add.image(483, 486, "Box-1");
		box_29.scaleX = 0.125;
		box_29.scaleY = 0.125;

		// Box-30
		const box_30 = this.add.image(483, 557, "Box-1");
		box_30.scaleX = 0.125;
		box_30.scaleY = 0.125;

		// Box-31
		const box_31 = this.add.image(545, 197, "Box-1");
		box_31.scaleX = 0.125;
		box_31.scaleY = 0.125;

		// Box-32
		const box_32 = this.add.image(545, 268, "Box-1");
		box_32.scaleX = 0.125;
		box_32.scaleY = 0.125;

		// Box-33
		const box_33 = this.add.image(545, 339, "Box-1");
		box_33.scaleX = 0.125;
		box_33.scaleY = 0.125;

		// Box-34
		const box_34 = this.add.image(545, 415, "Box-1");
		box_34.scaleX = 0.125;
		box_34.scaleY = 0.125;

		// Box-35
		const box_35 = this.add.image(545, 486, "Box-1");
		box_35.scaleX = 0.125;
		box_35.scaleY = 0.125;

		// Box-36
		const box_36 = this.add.image(545, 557, "Box-1");
		box_36.scaleX = 0.125;
		box_36.scaleY = 0.125;

		// Box-37
		const box_37 = this.add.image(607, 197, "Box-1");
		box_37.scaleX = 0.125;
		box_37.scaleY = 0.125;

		// Box-38
		const box_38 = this.add.image(607, 268, "Box-1");
		box_38.scaleX = 0.125;
		box_38.scaleY = 0.125;

		// Box-39
		const box_39 = this.add.image(607, 339, "Box-1");
		box_39.scaleX = 0.125;
		box_39.scaleY = 0.125;

		// Box-40
		const box_40 = this.add.image(607, 415, "Box-1");
		box_40.scaleX = 0.125;
		box_40.scaleY = 0.125;

		// Box-41
		const box_41 = this.add.image(607, 486, "Box-1");
		box_41.scaleX = 0.125;
		box_41.scaleY = 0.125;

		// Box-42
		const box_42 = this.add.image(607, 557, "Box-1");
		box_42.scaleX = 0.125;
		box_42.scaleY = 0.125;

		// Box-43
		const box_43 = this.add.image(669, 197, "Box-1");
		box_43.scaleX = 0.125;
		box_43.scaleY = 0.125;

		// Box-44
		const box_44 = this.add.image(669, 268, "Box-1");
		box_44.scaleX = 0.125;
		box_44.scaleY = 0.125;

		// Box-45
		const box_45 = this.add.image(669, 339, "Box-1");
		box_45.scaleX = 0.125;
		box_45.scaleY = 0.125;

		

		// lists
		const interactiveImages = [exit_button, setings_button, info_button, sound_button, timer_button, sound_close_btn];
		const settings_options = [info_button, timer_button, sound_button, sound_close_btn];
		const sound_options = [sound_close_btn];

		this.interactiveImages = interactiveImages;
		this.settings_options = settings_options;
		this.sound_options = sound_options;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image[]} */
	interactiveImages;
	/** @type {Phaser.GameObjects.Image[]} */
	settings_options;
	/** @type {Phaser.GameObjects.Image[]} */
	sound_options;

	/* START-USER-CODE */
	// box animation
	boxBomb = [
		{ key: 'Comp 100' },
		{ key: 'Comp 101' },
		{ key: 'Comp 102' },
		{ key: 'Comp 103' },
		{ key: 'Comp 104' },
		{ key: 'Comp 105' },
		{ key: 'Comp 106' },
		{ key: 'Comp 107' },
		{ key: 'Comp 108' },
		{ key: 'Comp 109' },
		{ key: 'Comp 110' },
		{ key: 'Comp 111' },
		{ key: 'Comp 112' },
		{ key: 'Comp 113' },
		{ key: 'Comp 114' },
		{ key: 'Comp 115' },
		{ key: 'Comp 116' },
		{ key: 'Comp 117' },
		{ key: 'Comp 118' },
		{ key: 'Comp 119' },
		{ key: 'Comp 120' },
		{ key: 'Comp 121' },
		{ key: 'Comp 122' },
		{ key: 'Comp 123' },
		{ key: 'Comp 124' },
		{ key: 'Comp 125' },
		{ key: 'Comp 126' },
		{ key: 'Comp 127' },
		{ key: 'Comp 128' },
		{ key: 'Comp 129' },
		{ key: 'Comp 130' },
		{ key: 'Comp 131' },
		{ key: 'Comp 132' },
		{ key: 'Comp 133' },
		{ key: 'Comp 134' },
		{ key: 'Comp 135' },
		{ key: 'Comp 136' },
		{ key: 'Comp 137' },
		{ key: 'Comp 138' },
		{ key: 'Comp 139' },
		{ key: 'Comp 140' },
		{ key: 'Comp 141' },
		{ key: 'Comp 142' },
		{ key: 'Comp 143' },
		{ key: 'Comp 144' },
		{ key: 'Comp 145' },
		{ key: 'Comp 146' },
		{ key: 'Comp 147' },
		{ key: 'Comp 148' },
	];

	numbers = [];



	// Write more your code here

	create() {

		this.editorCreate();
		this.setImagesInteractive();
		this.input.on('gameobjectdown', this.imageClick.bind(this));

		this.timerText = this.add.text(1223, 343, "", {
			"fontSize": "20px",
			"fontFamily": "SHOWG",
		});

		this.Pricetag1 = this.add.text(1017, 97, "Price", {
			"fontSize": "20px",
			"fontFamily": "SHOWG",
		});
		this.price1 = this.add.text(1025, 120, "150000", {
			"fontSize": "20px",
			"fontFamily": "SHOWG",
		});
		this.symbol1 = this.add.text(995, 117, "\u20A6", {
			"fontSize": "25px",
			"fontFamily": "SHOWG",
		});
		this.Pricetag2 = this.add.text(190, 97, "Balance", {
			"fontSize": "20px",
			"fontFamily": "SHOWG",
		});
		this.price2 = this.add.text(215, 118, "150000", {
			"fontSize": "20px",
			"fontFamily": "SHOWG",
		});
		this.symbol2 = this.add.text(185, 117, "\u20A6", {
			"fontSize": "25px",
			"fontFamily": "SHOWG",
		});

		this.load.audio("Background Music", "assets/Background Music.mp3");

		this.music = this.sound.play("Background Music", { loop: true });
		this.timerOver = false;
		this.timer = this.time.delayedCall(15000);

		this.anims.create({
			key: 'boxBomb',
			frames: this.boxBomb,
			frameRate: 3,
			repeat: -1,
		});
	}

	setImagesInteractive() {
		this.interactiveImages.forEach((image) => {
			image.setInteractive();
		});
	}

	generateRandomNumbers(min, max, count) {
		for (var i = 0; i < count; i++) {
			var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			this.numbers.push(randomNumber);
		}
		return this.numbers;
	}


	imageClick = (pointer, image) => {

		if (image.texture.key === "exit button") {
			this.sound.destroy();
			window.location.reload();
		}
		if (image.texture.key === 'setings button') {
			this.settings_options.forEach((option) => {
				if (option.texture.key === 'sound close btn') {
					if (option.visible === true) {
						option.visible = false;
					}
				}
				else {
					option.visible = !option.visible;
				}
				option.setInteractive();
			});
		}
		if (image.texture.key === 'sound button') {
			this.sound_options.forEach((option) => {
				if (option.texture.key === 'sound close btn') {
					option.visible = !option.visible;
				}
				option.setInteractive();
			});
			this.sound.pauseAll();
		}
		if (image.texture.key === 'sound close btn') {
			this.sound_options.forEach((option) => {
				option.visible = !option.visible;
				option.setInteractive();
			});
			this.sound.resumeAll();
		}

	}
	showTimer() {
		let maxTime = 15;
		let time = Math.floor(this.timer.getElapsedSeconds());
		let timeLeft = maxTime - time;
		if (timeLeft <= 0) {
			timeLeft = 0;
			this.timerOver = true;
		}

		let sec = time % 60;

		this.timerText.setText(sec);
	}

	update() {
		if (this.timerOver === false) {
			this.showTimer();
		}
		if (this.timerOver === true) {
			this.scene.start('YouWinScene');
			this.music = this.sound.stopAll();
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
