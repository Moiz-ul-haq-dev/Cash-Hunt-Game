
// You can write more code here

/* START OF COMPILED CODE */

class FrameScene extends Phaser.Scene {

	constructor() {
		super("FrameScene");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = this.add.image(640, 340, "background");
		background.scaleX = 0.7268502635277192;
		background.scaleY = 0.739203605768162;

		// exit_button
		const exit_button = this.add.image(26.099999999999998, 26.099999999999998, "exit button");
		exit_button.scaleX = 0.6;
		exit_button.scaleY = 0.6;

		// setings_button
		const setings_button = this.add.image(1253.8999999999999, 26.099999999999998, "setings button");
		setings_button.scaleX = 0.6;
		setings_button.scaleY = 0.6;

		// cash_Hunt_Logo_removebg_preview
		const cash_Hunt_Logo_removebg_preview = this.add.image(640, 75, "Cash_Hunt_Logo-removebg-preview");
		cash_Hunt_Logo_removebg_preview.scaleX = 0.3;
		cash_Hunt_Logo_removebg_preview.scaleY = 0.3;

		// machineFrame
		const machineFrame = this.add.image(640, 340, "MachineFrame");
		machineFrame.scaleX = 0.6712334223289863;
		machineFrame.scaleY = 0.6418304600479019;

		// amount
		const amount = this.add.image(786, 650, "amount");
		amount.scaleX = 0.5;
		amount.scaleY = 0.5;

		// play_btn
		const play_btn = this.add.image(630, 649, "play_btn");
		play_btn.scaleX = 0.5;
		play_btn.scaleY = 0.5;

		// shuffle
		const shuffle = this.add.image(630, 649, "shuffle");
		shuffle.scaleX = 0.5;
		shuffle.scaleY = 0.5;
		shuffle.visible = false;

		// cashout
		const cashout = this.add.image(786, 650, "cashout");
		cashout.scaleX = 0.5;
		cashout.scaleY = 0.5;
		cashout.visible = false;

		// timer_button
		const timer_button = this.add.image(640, 340, "timer button");
		timer_button.scaleX = 0.6;
		timer_button.scaleY = 0.6;
		timer_button.visible = false;

		// sound_close_btn
		const sound_close_btn = this.add.image(640, 340, "sound close btn");
		sound_close_btn.scaleX = 0.6;
		sound_close_btn.scaleY = 0.6;
		sound_close_btn.visible = false;

		// sound_button
		const sound_button = this.add.image(640, 340, "sound button");
		sound_button.scaleX = 0.6;
		sound_button.scaleY = 0.6;
		sound_button.visible = false;

		// info_button
		const info_button = this.add.image(640, 340, "info button");
		info_button.scaleX = 0.6;
		info_button.scaleY = 0.6;
		info_button.visible = false;

		// Box-1
		const box_1 = this.add.image(523, 230, "Comp 201");
		box_1.scaleX = 0.4;
		box_1.scaleY = 0.3;

		// Box-4
		const box_4 = this.add.image(753, 230, "Comp 201");
		box_4.scaleX = 0.4;
		box_4.scaleY = 0.3;

		// Box-2
		const box_2 = this.add.image(523, 371, "Comp 201");
		box_2.scaleX = 0.4;
		box_2.scaleY = 0.3;

		// Box-5
		const box_5 = this.add.image(753, 371, "Comp 201");
		box_5.scaleX = 0.4;
		box_5.scaleY = 0.3;

		// Box-3
		const box_3 = this.add.image(523, 512, "Comp 201");
		box_3.scaleX = 0.4;
		box_3.scaleY = 0.3;

		// Box-6
		const box_6 = this.add.image(753, 512, "Comp 201");
		box_6.scaleX = 0.4;
		box_6.scaleY = 0.3;

		// buttonFrame
		const buttonFrame = this.add.image(481, 651, "ButtonFrame");
		buttonFrame.scaleX = 0.5;
		buttonFrame.scaleY = 0.5;

		// frames_Menu
		const frames_Menu = this.add.image(484, 556, "Frames_Menu");
		frames_Menu.scaleX = 0.5;
		frames_Menu.scaleY = 0.5;
		frames_Menu.visible = false;

		// price_Menu
		const price_Menu = this.add.image(786, 556, "Price_Menu");
		price_Menu.scaleX = 0.5;
		price_Menu.scaleY = 0.5;
		price_Menu.visible = false;

		// 15x6_text
		const frame15x6 = this.add.image(484, 608, "15x6 text");
		frame15x6.scaleX = 0.8;
		frame15x6.scaleY = 0.8;
		frame15x6.visible = false;

		// lists
		const interactiveImages = [play_btn, amount, shuffle, cashout, buttonFrame, price_Menu, frames_Menu, frame15x6];
		const box_Col_1 = [box_1, box_2, box_3];
		const box_Col_2 = [box_4, box_5, box_6];

		this.interactiveImages = interactiveImages;
		this.box_Col_1 = box_Col_1;
		this.box_Col_2 = box_Col_2;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Image[]} */
	interactiveImages;
	/** @type {Phaser.GameObjects.Image[]} */
	box_Col_1;
	/** @type {Phaser.GameObjects.Image[]} */
	box_Col_2;

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

	// red box animation

	redBox = [
		{ key: 'red-boxes-(1)' },
		{ key: 'red-boxes-(2)' },
		{ key: 'red-boxes-(3)' },
		{ key: 'red-boxes-(4)' },
		{ key: 'red-boxes-(5)' },
		{ key: 'red-boxes-(6)' },
		{ key: 'red-boxes-(7)' },
		{ key: 'red-boxes-(8)' },
		{ key: 'red-boxes-(9)' },
		{ key: 'red-boxes-(10)' },
		{ key: 'red-boxes-(11)' },
		{ key: 'red-boxes-(12)' },
		{ key: 'red-boxes-(13)' },
		{ key: 'red-boxes-(14)' },
		{ key: 'red-boxes-(15)' },
		{ key: 'red-boxes-(16)' },
		{ key: 'red-boxes-(17)' },
		{ key: 'red-boxes-(18)' },
		{ key: 'red-boxes-(19)' },
		{ key: 'red-boxes-(20)' },
		{ key: 'red-boxes-(21)' },
		{ key: 'red-boxes-(22)' },
		{ key: 'red-boxes-(23)' },
		{ key: 'red-boxes-(24)' },
		{ key: 'red-boxes-(25)' },
		{ key: 'red-boxes-(26)' },
		{ key: 'red-boxes-(27)' },
		{ key: 'red-boxes-(28)' },
		{ key: 'red-boxes-(29)' },
		{ key: 'red-boxes-(30)' },
		{ key: 'red-boxes-(31)' },
		{ key: 'red-boxes-(32)' },
		{ key: 'red-boxes-(33)' },
		{ key: 'red-boxes-(34)' },
		{ key: 'red-boxes-(35)' },
		{ key: 'red-boxes-(36)' },
		{ key: 'red-boxes-(37)' },
		{ key: 'red-boxes-(38)' },
		{ key: 'red-boxes-(39)' },
		{ key: 'red-boxes-(40)' },
		{ key: 'red-boxes-(41)' },
		{ key: 'red-boxes-(42)' },
		{ key: 'red-boxes-(43)' },
		{ key: 'red-boxes-(44)' },
		{ key: 'red-boxes-(45)' },
		{ key: 'red-boxes-(46)' },
		{ key: 'red-boxes-(47)' },
		{ key: 'red-boxes-(48)' },
	];

	// current box line animation
	currentBoxLine = [
		{ key: 'Comp 200' },
		{ key: 'Comp 201' },
		{ key: 'Comp 202' },
		{ key: 'Comp 203' },
		{ key: 'Comp 204' },
		{ key: 'Comp 205' },
		{ key: 'Comp 206' },
		{ key: 'Comp 207' },
		{ key: 'Comp 208' },
		{ key: 'Comp 209' },
		{ key: 'Comp 210' },
		{ key: 'Comp 211' },
		{ key: 'Comp 212' },
		{ key: 'Comp 213' },
		{ key: 'Comp 214' },
		{ key: 'Comp 215' },
		{ key: 'Comp 216' },
		{ key: 'Comp 217' },
		{ key: 'Comp 218' },
		{ key: 'Comp 219' },
		{ key: 'Comp 220' },
		{ key: 'Comp 221' },
		{ key: 'Comp 222' },
		{ key: 'Comp 223' },
		{ key: 'Comp 224' },
		{ key: 'Comp 225' },
		{ key: 'Comp 226' },
		{ key: 'Comp 227' },
		{ key: 'Comp 228' },
		{ key: 'Comp 229' },
		{ key: 'Comp 230' },
		{ key: 'Comp 231' },
		{ key: 'Comp 232' },
		{ key: 'Comp 233' },
		{ key: 'Comp 234' },
		{ key: 'Comp 235' },
		{ key: 'Comp 236' },
		{ key: 'Comp 237' },
		{ key: 'Comp 238' },
		{ key: 'Comp 239' },
		{ key: 'Comp 240' },
		{ key: 'Comp 241' },
		{ key: 'Comp 242' },
		{ key: 'Comp 243' },
		{ key: 'Comp 244' },
		{ key: 'Comp 245' },
		{ key: 'Comp 246' },
		{ key: 'Comp 247' },
	];

	// green box animation
	greenBox = [
		{ key: 'Comp 1_100' },
		{ key: 'Comp 1_101' },
		{ key: 'Comp 1_102' },
		{ key: 'Comp 1_103' },
		{ key: 'Comp 1_104' },
		{ key: 'Comp 1_105' },
		{ key: 'Comp 1_106' },
		{ key: 'Comp 1_107' },
		{ key: 'Comp 1_108' },
		{ key: 'Comp 1_109' },
		{ key: 'Comp 1_110' },
		{ key: 'Comp 1_111' },
		{ key: 'Comp 1_112' },
		{ key: 'Comp 1_113' },
		{ key: 'Comp 1_114' },
		{ key: 'Comp 1_115' },
		{ key: 'Comp 1_116' },
		{ key: 'Comp 1_117' },
		{ key: 'Comp 1_118' },
		{ key: 'Comp 1_119' },
		{ key: 'Comp 1_120' },
		{ key: 'Comp 1_121' },
		{ key: 'Comp 1_122' },
		{ key: 'Comp 1_123' },
		{ key: 'Comp 1_125' },
		{ key: 'Comp 1_126' },
		{ key: 'Comp 1_127' },
		{ key: 'Comp 1_128' },
		{ key: 'Comp 1_129' },
		{ key: 'Comp 1_130' },
		{ key: 'Comp 1_131' },
		{ key: 'Comp 1_132' },
		{ key: 'Comp 1_133' },
		{ key: 'Comp 1_134' },
		{ key: 'Comp 1_135' },
		{ key: 'Comp 1_136' },
		{ key: 'Comp 1_137' },
		{ key: 'Comp 1_138' },
		{ key: 'Comp 1_139' },
		{ key: 'Comp 1_140' },
		{ key: 'Comp 1_141' },
		{ key: 'Comp 1_142' },
		{ key: 'Comp 1_143' },
		{ key: 'Comp 1_144' },
		{ key: 'Comp 1_145' },
		{ key: 'Comp 1_146' },
		{ key: 'Comp 1_147' },
		{ key: 'Comp 1_148' },
	];

	// play button web animation
	playButton = [
		{ key: 'Play-(1)' },
		{ key: 'Play-(2)' },
		{ key: 'Play-(3)' },
		{ key: 'Play-(4)' },
		{ key: 'Play-(5)' },
		{ key: 'Play-(6)' },
		{ key: 'Play-(7)' },
		{ key: 'Play-(8)' },
		{ key: 'Play-(9)' },
		{ key: 'Play-(10)' },
		{ key: 'Play-(11)' },
		{ key: 'Play-(12)' },
		{ key: 'Play-(13)' },
		{ key: 'Play-(14)' },
		{ key: 'Play-(15)' },
		{ key: 'Play-(16)' },
		{ key: 'Play-(17)' },
		{ key: 'Play-(18)' },
		{ key: 'Play-(19)' },
		{ key: 'Play-(20)' },
		{ key: 'Play-(21)' },
		{ key: 'Play-(22)' },
		{ key: 'Play-(23)' },
		{ key: 'Play-(24)' },
		{ key: 'Play-(25)' },
		{ key: 'Play-(26)' },
		{ key: 'Play-(27)' },
		{ key: 'Play-(28)' },
		{ key: 'Play-(29)' },
		{ key: 'Play-(30)' },
		{ key: 'Play-(31)' },
		{ key: 'Play-(32)' },
		{ key: 'Play-(33)' },
		{ key: 'Play-(34)' },
		{ key: 'Play-(35)' },
		{ key: 'Play-(36)' },
		{ key: 'Play-(37)' },
		{ key: 'Play-(38)' },
		{ key: 'Play-(39)' },
		{ key: 'Play-(40)' },
		{ key: 'Play-(41)' },
		{ key: 'Play-(42)' },
		{ key: 'Play-(43)' },
		{ key: 'Play-(44)' },
		{ key: 'Play-(45)' },
		{ key: 'Play-(46)' },
		{ key: 'Play-(47)' },
		{ key: 'Play-(48)' },
		{ key: 'Play-(49)' },
		{ key: 'Play-(50)' },
		{ key: 'Play-(51)' },
		{ key: 'Play-(52)' },
		{ key: 'Play-(53)' },
		{ key: 'Play-(54)' },
		{ key: 'Play-(55)' },
		{ key: 'Play-(56)' },
		{ key: 'Play-(57)' },
		{ key: 'Play-(58)' },
		{ key: 'Play-(59)' },
	];

	numbers = [];
	sprites = [];
	play_btn_click = false;
	frameMenu = false;
	priceMenu = false;
	play_btn;
	gameOver = false;
	maxTime = 15;
	isPointerDown = false;
	boxNumber;
	xIncrement = 0;
	counter = 0;

	// Write your code here

	create() {

		this.editorCreate();
		this.setImagesInteractive();

		this.input.on('gameobjectdown', this.imageClick.bind(this));

		this.timerText = this.add.text(1225, 340, "", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});

		this.Pricetag1 = this.add.text(820, 87, "Price", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.price1 = this.add.text(825, 110, "150000", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.symbol1 = this.add.text(795, 107, "\u20A6", {
			"fontSize": "25px",
			"fontFamily": "Arial",
		});
		this.Pricetag2 = this.add.text(400, 87, "Balance", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.price2 = this.add.text(425, 110, "150000", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.symbol2 = this.add.text(395, 107, "\u20A6", {
			"fontSize": "25px",
			"fontFamily": "Arial",
		});

		this.load.audio("Background Music", "assets/Background Music.mp3");

		this.music = this.sound.play("Background Music", { loop: true, volume: 0.5 });
		this.timerOver = false;
		this.timer = this.time.delayedCall(15000);

		this.anims.create({
			key: 'boxBomb',
			frames: this.boxBomb,
			frameRate: 30,
			repeat: 0,
		});

		this.anims.create({
			key: 'boxLine',
			frames: this.currentBoxLine,
			frameRate: 30,
			repeat: -1,
		});

		this.anims.create({
			key: 'boxGreen',
			frames: this.greenBox,
			frameRate: 30,
			repeat: 0,
		});

		this.anims.create({
			key: 'boxRed',
			frames: this.redBox,
			frameRate: 30,
			repeat: 0,
		});

		this.anims.create({
			key: 'playAnimation',
			frames: this.playButton,
			frameRate: 30,
			repeat: 0,
		});

		this.allSprites = this.add.group();
	}


	imageClick(pointer, image) {
		if(image.texture.key === "play_btn"){
			this.numbers = [];
			this.generateRandomNumbers(1, 3, 1);
			console.log(this.numbers[0]);
			this.play_btn_click = true;
			this.xIncrement = 230;
			this.counter = 1;
			this.play_btn = this.add.sprite(630, 650, 'playAnimation').play('playAnimation');
			this.play_btn.scale = 0.25;
			this.play_btn.play('playAnimation').on('animationcomplete', () => {
				this.play_btn.visible = false;
			});

			this.sprites.forEach(sprite => {
				sprite.visible = false;
			});
			this.allSprites.clear(true, true);
			this.sprites = [];
			this.interactiveImages.forEach((image) => {
				if(image.texture.key === "play_btn"){
					image.visible = false;
				}
				if(image.texture.key === 'shuffle' || image.texture.key === 'cashout'){
					image.visible = true;
				}
			});

			const sprite1 = this.add.sprite(523, 230, 'boxLine').play('boxLine');
			sprite1.scaleX = 0.4;
			sprite1.scaleY = 0.3;
			sprite1.setInteractive();
			sprite1.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 1;
			});
			this.sprites.push(sprite1);
			this.allSprites.add(sprite1);
			const sprite2 = this.add.sprite(523, 371, 'boxLine').play('boxLine');
			sprite2.scaleX = 0.4;
			sprite2.scaleY = 0.3;
			sprite2.setInteractive();
			sprite2.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 2;
			});
			this.sprites.push(sprite2);
			this.allSprites.add(sprite2);
			const sprite3 = this.add.sprite(523, 512, 'boxLine').play('boxLine');
			sprite3.scaleX = 0.4;
			sprite3.scaleY = 0.3;
			sprite3.setInteractive();
			sprite3.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 3;
			});
			this.sprites.push(sprite3);
			this.allSprites.add(sprite3);
		}

		if(image.texture.key === 'shuffle' && this.counter < 2){

			this.numbers = [];
			this.generateRandomNumbers(1, 3, 1);
			console.log(this.numbers[0]);
			this.startTimer();
			this.sprites = [];
			const sprite1 = this.add.sprite(523 + this.xIncrement, 230, 'boxLine').play('boxLine');
			sprite1.scaleX = 0.4;
			sprite1.scaleY = 0.3;
			sprite1.setInteractive();
			sprite1.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 1;
			});
			this.sprites.push(sprite1);
			this.allSprites.add(sprite1);
			const sprite2 = this.add.sprite(523 + this.xIncrement, 371, 'boxLine').play('boxLine');
			sprite2.scaleX = 0.4;
			sprite2.scaleY = 0.3;
			sprite2.setInteractive();
			sprite2.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 2;
			});
			this.sprites.push(sprite2);
			this.allSprites.add(sprite2);
			const sprite3 = this.add.sprite(523 + this.xIncrement, 512, 'boxLine').play('boxLine');
			sprite3.scaleX = 0.4;
			sprite3.scaleY = 0.3;
			sprite3.setInteractive();
			sprite3.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 3;
			});
			this.sprites.push(sprite3);
			this.allSprites.add(sprite3);

			this.xIncrement += 230;
			this.counter++;

			if(this.counter === 2){
				this.box_Col_2.forEach((image) => {
					image.visible = false;
				});

				this.interactiveImages.forEach((image) => {
					if(image.texture.key === 'shuffle' || image.texture.key === 'cashout'){
						image.visible = false;
					}
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});

				this.xIncrement = 230;
				this.counter = 1;
				this.gameOver = true;
			}
		}

		if (image.texture.key === 'amount') {
			if (this.priceMenu === false) {
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'Price_Menu') {
						image.visible = true;
					}
				});
				this.priceMenu = true;
			}
			else {
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'Price_Menu') {
						image.visible = false;
					}
				});
				this.priceMenu = false;
			}
		}

		if (image.texture.key === 'ButtonFrame') {
			if (this.frameMenu === false) {
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'Frames_Menu' || image.texture.key === '15x6 text') {
						image.visible = true;
					}
				});
				this.frameMenu = true;
			}
			else {
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'Frames_Menu' || image.texture.key === '15x6 text') {
						image.visible = false;
					}
				});
				this.frameMenu = false;
			}
		}

		if(image.texture.key === '15x6 text'){
			this.sound.stopAll();
			this.scene.start("Level");
		}
	}

	showTimer() {
		let time = Math.floor(this.timer.getElapsed() / 1000);
		let timeLeft = this.maxTime - time;
		if (timeLeft <= 0) {
			timeLeft = 0;
			this.timerOver = true;
		}
		this.timerText.setText(timeLeft);
	}

	startTimer() {
		if (this.timer) {
			this.timer.destroy();
		}
		this.timer = this.time.delayedCall(this.maxTime * 1000, () => {
			this.timerOver = true;
		}, [], this);
		this.timer.paused = false;
		this.timerOver = false;
	}

	generateRandomNumbers(min, max, count) {
		for (var i = 0; i < count; i++) {
			var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
			this.numbers.push(randomNumber);
		}
		return this.numbers;
	}


	setImagesInteractive() {
		this.interactiveImages.forEach((image) => {
			image.setInteractive();
		});
	}

	update() {

		if ((this.timerOver === false && this.play_btn_click === true) || (this.gameOver === false && this.play_btn_click === true)) {
			this.startTimer();
			this.play_btn_click = null;
			for (var i = 0; i < this.box_Col_1.length; i++) {
				this.box_Col_1[i].visible = false;
				this.box_Col_2[i].visible = true;
			}
		}
		if (this.gameOver === false && this.play_btn_click === null) {
			this.showTimer();
		}
		if (this.gameOver === true) {
			console.log('game over');
			this.gameOver = false;
			this.timer.paused = true;
		}
		if (this.timerOver === true) {
			this.scene.start('YouWinScene');
			this.music = this.sound.stopAll();
			this.play_btn_click = false;
		}
		if (this.isPointerDown === true) {
			if (this.numbers[0] === 1 && this.boxNumber === 1) {
				this.sprites[0].play('boxBomb');
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
						image.visible = false;
					}
					if (image.texture.key === 'play_btn') {
						image.visible = true;
					}
				});
				this.isPointerDown = false;
				this.gameOver = true;
			}
			if (this.numbers[0] === 1 && this.boxNumber !== 1) {
				console.log(this.sprites[0].scale);
				this.sprites[0].play('boxRed');
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 2 && this.boxNumber === 2) {
				this.sprites[1].play('boxBomb');
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
						image.visible = false;
					}
					if (image.texture.key === 'play_btn') {
						image.visible = true;
					}
				});
				this.isPointerDown = false;
				this.gameOver = true;
			}
			if (this.numbers[0] === 2 && this.boxNumber !== 2) {
				console.log(this.sprites[1].scale);
				this.sprites[1].play('boxRed');
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 3 && this.boxNumber === 3) {
				this.sprites[2].play('boxBomb');
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
						image.visible = false;
					}
					if (image.texture.key === 'play_btn') {
						image.visible = true;
					}
				});
				this.isPointerDown = false;
				this.gameOver = true;
			}
			if (this.numbers[0] === 3 && this.boxNumber !== 3) {
				console.log(this.sprites[2].scale);
				this.sprites[2].play('boxRed');
				this.isPointerDown = false;
			}
			for (let i = 0; i < this.sprites.length; i++) {
				if (i !== this.numbers[0] - 1) {
					this.sprites[i].play('boxGreen');
				}
			}
		}

	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
