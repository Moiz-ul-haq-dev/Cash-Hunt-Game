
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

		// timer_changed_6_x_15
		const timer_changed_6_x_15 = this.add.image(640, 345.2049014243382, "timer changed 6 x 15");
		timer_changed_6_x_15.scaleX = 0.665291941670825;
		timer_changed_6_x_15.scaleY = 0.6199909232882627;

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

		// Box-1
		const box_1 = this.add.image(227, 197, "Comp 201");
		box_1.name = "Box-1";
		box_1.scaleX = 0.125;
		box_1.scaleY = 0.125;

		// Box-2
		const box_2 = this.add.image(227, 268, "Comp 201");
		box_2.name = "Box-2";
		box_2.scaleX = 0.125;
		box_2.scaleY = 0.125;

		// Box-3
		const box_3 = this.add.image(227, 339, "Comp 201");
		box_3.name = "Box-3";
		box_3.scaleX = 0.125;
		box_3.scaleY = 0.125;

		// Box-4
		const box_4 = this.add.image(227, 415, "Comp 201");
		box_4.name = "Box-4";
		box_4.scaleX = 0.125;
		box_4.scaleY = 0.125;

		// Box-5
		const box_5 = this.add.image(227, 486, "Comp 201");
		box_5.name = "Box-5";
		box_5.scaleX = 0.125;
		box_5.scaleY = 0.125;

		// Box-6
		const box_6 = this.add.image(227, 557, "Comp 201");
		box_6.name = "Box-6";
		box_6.scaleX = 0.125;
		box_6.scaleY = 0.125;

		// Box-12
		const box_12 = this.add.image(286, 557, "Comp 201");
		box_12.name = "Box-12";
		box_12.scaleX = 0.125;
		box_12.scaleY = 0.125;

		// Box-11
		const box_11 = this.add.image(286, 486, "Comp 201");
		box_11.name = "Box-11";
		box_11.scaleX = 0.125;
		box_11.scaleY = 0.125;

		// Box-10
		const box_10 = this.add.image(286, 415, "Comp 201");
		box_10.name = "Box-10";
		box_10.scaleX = 0.125;
		box_10.scaleY = 0.125;

		// Box-9
		const box_9 = this.add.image(286, 339, "Comp 201");
		box_9.name = "Box-9";
		box_9.scaleX = 0.125;
		box_9.scaleY = 0.125;

		// Box-8
		const box_8 = this.add.image(286, 268, "Comp 201");
		box_8.name = "Box-8";
		box_8.scaleX = 0.125;
		box_8.scaleY = 0.125;

		// Box-7
		const box_7 = this.add.image(286, 197, "Comp 201");
		box_7.name = "Box-7";
		box_7.scaleX = 0.125;
		box_7.scaleY = 0.125;

		// Box-13
		const box_13 = this.add.image(345, 197, "Comp 201");
		box_13.name = "Box-13";
		box_13.scaleX = 0.125;
		box_13.scaleY = 0.125;

		// Box-14
		const box_14 = this.add.image(345, 268, "Comp 201");
		box_14.name = "Box-14";
		box_14.scaleX = 0.125;
		box_14.scaleY = 0.125;

		// Box-15
		const box_15 = this.add.image(345, 339, "Comp 201");
		box_15.name = "Box-15";
		box_15.scaleX = 0.125;
		box_15.scaleY = 0.125;

		// Box-16
		const box_16 = this.add.image(345, 415, "Comp 201");
		box_16.name = "Box-16";
		box_16.scaleX = 0.125;
		box_16.scaleY = 0.125;

		// Box-17
		const box_17 = this.add.image(345, 486, "Comp 201");
		box_17.name = "Box-17";
		box_17.scaleX = 0.125;
		box_17.scaleY = 0.125;

		// Box-18
		const box_18 = this.add.image(345, 557, "Comp 201");
		box_18.name = "Box-18";
		box_18.scaleX = 0.125;
		box_18.scaleY = 0.125;

		// play_btn
		const play_btn = this.add.image(640, 649, "play_btn");
		play_btn.scaleX = 0.5;
		play_btn.scaleY = 0.5;

		// amount
		const amount = this.add.image(770, 649.5, "amount");
		amount.scaleX = 0.5;
		amount.scaleY = 0.5;

		// slot_setting
		const slot_setting = this.add.image(515, 651, "slot_setting");
		slot_setting.scaleX = 0.5;
		slot_setting.scaleY = 0.5;

		// Box-19
		const box_19 = this.add.image(404, 197, "Comp 201");
		box_19.name = "Box-19";
		box_19.scaleX = 0.125;
		box_19.scaleY = 0.125;

		// Box-24
		const box_24 = this.add.image(404, 557, "Comp 201");
		box_24.name = "Box-24";
		box_24.scaleX = 0.125;
		box_24.scaleY = 0.125;

		// Box-23
		const box_23 = this.add.image(404, 486, "Comp 201");
		box_23.name = "Box-23";
		box_23.scaleX = 0.125;
		box_23.scaleY = 0.125;

		// Box-22
		const box_22 = this.add.image(404, 415, "Comp 201");
		box_22.name = "Box-22";
		box_22.scaleX = 0.125;
		box_22.scaleY = 0.125;

		// Box-21
		const box_21 = this.add.image(404, 339, "Comp 201");
		box_21.name = "Box-21";
		box_21.scaleX = 0.125;
		box_21.scaleY = 0.125;

		// Box-20
		const box_20 = this.add.image(404, 268, "Comp 201");
		box_20.name = "Box-20";
		box_20.scaleX = 0.125;
		box_20.scaleY = 0.125;

		// Box-25
		const box_25 = this.add.image(463, 197, "Comp 201");
		box_25.name = "Box-25";
		box_25.scaleX = 0.125;
		box_25.scaleY = 0.125;

		// Box-26
		const box_26 = this.add.image(463, 268, "Comp 201");
		box_26.name = "Box-26";
		box_26.scaleX = 0.125;
		box_26.scaleY = 0.125;

		// Box-27
		const box_27 = this.add.image(463, 339, "Comp 201");
		box_27.name = "Box-27";
		box_27.scaleX = 0.125;
		box_27.scaleY = 0.125;

		// Box-28
		const box_28 = this.add.image(463, 415, "Comp 201");
		box_28.name = "Box-28";
		box_28.scaleX = 0.125;
		box_28.scaleY = 0.125;

		// Box-29
		const box_29 = this.add.image(463, 486, "Comp 201");
		box_29.name = "Box-29";
		box_29.scaleX = 0.125;
		box_29.scaleY = 0.125;

		// Box-30
		const box_30 = this.add.image(463, 557, "Comp 201");
		box_30.name = "Box-30";
		box_30.scaleX = 0.125;
		box_30.scaleY = 0.125;

		// Box-31
		const box_31 = this.add.image(522, 197, "Comp 201");
		box_31.name = "Box-31";
		box_31.scaleX = 0.125;
		box_31.scaleY = 0.125;

		// Box-42
		const box_42 = this.add.image(581, 557, "Comp 201");
		box_42.name = "Box-42";
		box_42.scaleX = 0.125;
		box_42.scaleY = 0.125;

		// Box-41
		const box_41 = this.add.image(581, 486, "Comp 201");
		box_41.name = "Box-41";
		box_41.scaleX = 0.125;
		box_41.scaleY = 0.125;

		// Box-40
		const box_40 = this.add.image(581, 415, "Comp 201");
		box_40.name = "Box-40";
		box_40.scaleX = 0.125;
		box_40.scaleY = 0.125;

		// Box-39
		const box_39 = this.add.image(581, 339, "Comp 201");
		box_39.name = "Box-39";
		box_39.scaleX = 0.125;
		box_39.scaleY = 0.125;

		// Box-38
		const box_38 = this.add.image(581, 268, "Comp 201");
		box_38.name = "Box-38";
		box_38.scaleX = 0.125;
		box_38.scaleY = 0.125;

		// Box-37
		const box_37 = this.add.image(581, 197, "Comp 201");
		box_37.name = "Box-37";
		box_37.scaleX = 0.125;
		box_37.scaleY = 0.125;

		// Box-32
		const box_32 = this.add.image(522, 268, "Comp 201");
		box_32.name = "Box-32";
		box_32.scaleX = 0.125;
		box_32.scaleY = 0.125;

		// Box-33
		const box_33 = this.add.image(522, 339, "Comp 201");
		box_33.name = "Box-33";
		box_33.scaleX = 0.125;
		box_33.scaleY = 0.125;

		// Box-34
		const box_34 = this.add.image(522, 415, "Comp 201");
		box_34.name = "Box-34";
		box_34.scaleX = 0.125;
		box_34.scaleY = 0.125;

		// Box-35
		const box_35 = this.add.image(522, 486, "Comp 201");
		box_35.name = "Box-35";
		box_35.scaleX = 0.125;
		box_35.scaleY = 0.125;

		// Box-36
		const box_36 = this.add.image(522, 557, "Comp 201");
		box_36.name = "Box-36";
		box_36.scaleX = 0.125;
		box_36.scaleY = 0.125;

		// Box-43
		const box_43 = this.add.image(640, 197, "Comp 201");
		box_43.name = "Box-43";
		box_43.scaleX = 0.125;
		box_43.scaleY = 0.125;

		// Box-60
		const box_60 = this.add.image(758, 557, "Comp 201");
		box_60.name = "Box-60";
		box_60.scaleX = 0.125;
		box_60.scaleY = 0.125;

		// Box-59
		const box_59 = this.add.image(758, 486, "Comp 201");
		box_59.name = "Box-59";
		box_59.scaleX = 0.125;
		box_59.scaleY = 0.125;

		// Box-58
		const box_58 = this.add.image(758, 415, "Comp 201");
		box_58.name = "Box-58";
		box_58.scaleX = 0.125;
		box_58.scaleY = 0.125;

		// Box-57
		const box_57 = this.add.image(758, 339, "Comp 201");
		box_57.name = "Box-57";
		box_57.scaleX = 0.125;
		box_57.scaleY = 0.125;

		// Box-56
		const box_56 = this.add.image(758, 268, "Comp 201");
		box_56.name = "Box-56";
		box_56.scaleX = 0.125;
		box_56.scaleY = 0.125;

		// Box-61
		const box_61 = this.add.image(817, 197, "Comp 201");
		box_61.name = "Box-61";
		box_61.scaleX = 0.125;
		box_61.scaleY = 0.125;

		// Box-62
		const box_62 = this.add.image(817, 268, "Comp 201");
		box_62.name = "Box-62";
		box_62.scaleX = 0.125;
		box_62.scaleY = 0.125;

		// Box-63
		const box_63 = this.add.image(817, 339, "Comp 201");
		box_63.name = "Box-63";
		box_63.scaleX = 0.125;
		box_63.scaleY = 0.125;

		// Box-64
		const box_64 = this.add.image(817, 415, "Comp 201");
		box_64.name = "Box-64";
		box_64.scaleX = 0.125;
		box_64.scaleY = 0.125;

		// Box-65
		const box_65 = this.add.image(817, 486, "Comp 201");
		box_65.name = "Box-65";
		box_65.scaleX = 0.125;
		box_65.scaleY = 0.125;

		// Box-66
		const box_66 = this.add.image(817, 557, "Comp 201");
		box_66.name = "Box-66";
		box_66.scaleX = 0.125;
		box_66.scaleY = 0.125;

		// Box-55
		const box_55 = this.add.image(758, 197, "Comp 201");
		box_55.name = "Box-55";
		box_55.scaleX = 0.125;
		box_55.scaleY = 0.125;

		// Box-54
		const box_54 = this.add.image(699, 557, "Comp 201");
		box_54.name = "Box-54";
		box_54.scaleX = 0.125;
		box_54.scaleY = 0.125;

		// Box-53
		const box_53 = this.add.image(699, 486, "Comp 201");
		box_53.name = "Box-53";
		box_53.scaleX = 0.125;
		box_53.scaleY = 0.125;

		// Box-52
		const box_52 = this.add.image(699, 415, "Comp 201");
		box_52.name = "Box-52";
		box_52.scaleX = 0.125;
		box_52.scaleY = 0.125;

		// Box-51
		const box_51 = this.add.image(699, 339, "Comp 201");
		box_51.name = "Box-51";
		box_51.scaleX = 0.125;
		box_51.scaleY = 0.125;

		// Box-50
		const box_50 = this.add.image(699, 268, "Comp 201");
		box_50.name = "Box-50";
		box_50.scaleX = 0.125;
		box_50.scaleY = 0.125;

		// Box-49
		const box_49 = this.add.image(699, 197, "Comp 201");
		box_49.name = "Box-49";
		box_49.scaleX = 0.125;
		box_49.scaleY = 0.125;

		// Box-44
		const box_44 = this.add.image(640, 268, "Comp 201");
		box_44.name = "Box-44";
		box_44.scaleX = 0.125;
		box_44.scaleY = 0.125;

		// Box-45
		const box_45 = this.add.image(640, 339, "Comp 201");
		box_45.name = "Box-45";
		box_45.scaleX = 0.125;
		box_45.scaleY = 0.125;

		// Box-46
		const box_46 = this.add.image(640, 415, "Comp 201");
		box_46.name = "Box-46";
		box_46.scaleX = 0.125;
		box_46.scaleY = 0.125;

		// Box-47
		const box_47 = this.add.image(640, 486, "Comp 201");
		box_47.name = "Box-47";
		box_47.scaleX = 0.125;
		box_47.scaleY = 0.125;

		// Box-48
		const box_48 = this.add.image(640, 557, "Comp 201");
		box_48.name = "Box-48";
		box_48.scaleX = 0.125;
		box_48.scaleY = 0.125;

		// Box-67
		const box_67 = this.add.image(876, 197, "Comp 201");
		box_67.name = "Box-67";
		box_67.scaleX = 0.125;
		box_67.scaleY = 0.125;

		// Box-78
		const box_78 = this.add.image(936, 557, "Comp 201");
		box_78.name = "Box-78";
		box_78.scaleX = 0.125;
		box_78.scaleY = 0.125;

		// Box-77
		const box_77 = this.add.image(936, 486, "Comp 201");
		box_77.name = "Box-77";
		box_77.scaleX = 0.125;
		box_77.scaleY = 0.125;

		// Box-76
		const box_76 = this.add.image(936, 415, "Comp 201");
		box_76.name = "Box-76";
		box_76.scaleX = 0.125;
		box_76.scaleY = 0.125;

		// Box-75
		const box_75 = this.add.image(936, 339, "Comp 201");
		box_75.name = "Box-75";
		box_75.scaleX = 0.125;
		box_75.scaleY = 0.125;

		// Box-74
		const box_74 = this.add.image(936, 268, "Comp 201");
		box_74.name = "Box-74";
		box_74.scaleX = 0.125;
		box_74.scaleY = 0.125;

		// Box-73
		const box_73 = this.add.image(936, 197, "Comp 201");
		box_73.name = "Box-73";
		box_73.scaleX = 0.125;
		box_73.scaleY = 0.125;

		// Box-68
		const box_68 = this.add.image(876, 268, "Comp 201");
		box_68.name = "Box-68";
		box_68.scaleX = 0.125;
		box_68.scaleY = 0.125;

		// Box-69
		const box_69 = this.add.image(876, 339, "Comp 201");
		box_69.name = "Box-69";
		box_69.scaleX = 0.125;
		box_69.scaleY = 0.125;

		// Box-70
		const box_70 = this.add.image(876, 415, "Comp 201");
		box_70.name = "Box-70";
		box_70.scaleX = 0.125;
		box_70.scaleY = 0.125;

		// Box-71
		const box_71 = this.add.image(876, 486, "Comp 201");
		box_71.name = "Box-71";
		box_71.scaleX = 0.125;
		box_71.scaleY = 0.125;

		// Box-72
		const box_72 = this.add.image(876, 557, "Comp 201");
		box_72.name = "Box-72";
		box_72.scaleX = 0.125;
		box_72.scaleY = 0.125;

		// Box-79
		const box_79 = this.add.image(995, 197, "Comp 201");
		box_79.name = "Box-79";
		box_79.scaleX = 0.125;
		box_79.scaleY = 0.125;

		// Box-84
		const box_84 = this.add.image(995, 557, "Comp 201");
		box_84.name = "Box-84";
		box_84.scaleX = 0.125;
		box_84.scaleY = 0.125;

		// Box-83
		const box_83 = this.add.image(995, 486, "Comp 201");
		box_83.name = "Box-83";
		box_83.scaleX = 0.125;
		box_83.scaleY = 0.125;

		// Box-82
		const box_82 = this.add.image(995, 415, "Comp 201");
		box_82.name = "Box-82";
		box_82.scaleX = 0.125;
		box_82.scaleY = 0.125;

		// Box-81
		const box_81 = this.add.image(995, 339, "Comp 201");
		box_81.name = "Box-81";
		box_81.scaleX = 0.125;
		box_81.scaleY = 0.125;

		// Box-80
		const box_80 = this.add.image(995, 268, "Comp 201");
		box_80.name = "Box-80";
		box_80.scaleX = 0.125;
		box_80.scaleY = 0.125;

		// Box-85
		const box_85 = this.add.image(1054, 197, "Comp 201");
		box_85.name = "Box-85";
		box_85.scaleX = 0.125;
		box_85.scaleY = 0.125;

		// Box-86
		const box_86 = this.add.image(1054, 268, "Comp 201");
		box_86.name = "Box-86";
		box_86.scaleX = 0.125;
		box_86.scaleY = 0.125;

		// Box-87
		const box_87 = this.add.image(1054, 339, "Comp 201");
		box_87.name = "Box-87";
		box_87.scaleX = 0.125;
		box_87.scaleY = 0.125;

		// Box-88
		const box_88 = this.add.image(1054, 415, "Comp 201");
		box_88.name = "Box-88";
		box_88.scaleX = 0.125;
		box_88.scaleY = 0.125;

		// Box-89
		const box_89 = this.add.image(1054, 486, "Comp 201");
		box_89.name = "Box-89";
		box_89.scaleX = 0.125;
		box_89.scaleY = 0.125;

		// Box-90
		const box_90 = this.add.image(1054, 557, "Comp 201");
		box_90.name = "Box-90";
		box_90.scaleX = 0.125;
		box_90.scaleY = 0.125;

		// cashout
		const cashout = this.add.image(770, 650, "cashout");
		cashout.scaleX = 0.5;
		cashout.scaleY = 0.5;
		cashout.visible = false;

		// shuffle
		const shuffle = this.add.image(640, 646.5, "shuffle");
		shuffle.scaleX = 0.5;
		shuffle.scaleY = 0.5;
		shuffle.visible = false;

		// lists
		const interactiveImages = [exit_button, setings_button, info_button, sound_button, timer_button, sound_close_btn, play_btn, amount, slot_setting, cashout, shuffle];
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

	numbers = [];
	sprites = [];
	play_btn_click = false;
	isPointerDown = false;
	boxNumber;
	xIncrement = 0;
	counter = 0; 



	// Write more your code here

	create() {

		this.editorCreate();
		this.setImagesInteractive();
		this.input.on('gameobjectdown', this.imageClick.bind(this));

		this.timerText = this.add.text(1220, 343, "", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});

		this.Pricetag1 = this.add.text(1017, 97, "Price", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.price1 = this.add.text(1025, 120, "150000", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.symbol1 = this.add.text(995, 117, "\u20A6", {
			"fontSize": "25px",
			"fontFamily": "Arial",
		});
		this.Pricetag2 = this.add.text(190, 97, "Balance", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.price2 = this.add.text(215, 118, "150000", {
			"fontSize": "20px",
			"fontFamily": "Arial",
		});
		this.symbol2 = this.add.text(185, 117, "\u20A6", {
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

		this.allSprites = this.add.group();

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
		if (image.texture.key === 'play_btn') {
			this.numbers = [];
			this.generateRandomNumbers(1, 6, 1);
			console.log(this.numbers[0]);
			this.sprites.forEach(sprite => {
				sprite.visible = false;
			});
			this.allSprites.clear(true, true);
			this.sprites = [];
			this.xIncrement = 59;
			this.counter = 1;
			this.play_btn_click = true;
			image.visible = false;
			this.interactiveImages.forEach((image) => {
				if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
					image.visible = true;
					image.setInteractive();
				}
			});

			const sprite1 = this.add.sprite(227, 197, 'boxLine').play('boxLine');
			sprite1.scale = 0.125;
			sprite1.setInteractive();
			sprite1.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 1;
			});
			this.sprites.push(sprite1);
			this.allSprites.add(sprite1);
			const sprite2 = this.add.sprite(227, 268, 'boxLine').play('boxLine');
			sprite2.scale = 0.125;
			sprite2.setInteractive();
			sprite2.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 2;
			});
			this.sprites.push(sprite2);
			this.allSprites.add(sprite2);
			const sprite3 = this.add.sprite(227, 339, 'boxLine').play('boxLine');
			sprite3.scale = 0.125;
			sprite3.setInteractive();
			sprite3.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 3;
			});
			this.sprites.push(sprite3);
			this.allSprites.add(sprite3);
			const sprite4 = this.add.sprite(227, 415, 'boxLine').play('boxLine');
			sprite4.scale = 0.125;
			sprite4.setInteractive();
			sprite4.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 4;
			});
			this.sprites.push(sprite4);
			this.allSprites.add(sprite4);
			const sprite5 = this.add.sprite(227, 486, 'boxLine').play('boxLine');
			sprite5.scale = 0.125;
			sprite5.setInteractive();
			sprite5.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 5;
			});
			this.sprites.push(sprite5);
			this.allSprites.add(sprite5);
			const sprite6 = this.add.sprite(227, 557, 'boxLine').play('boxLine');
			sprite6.scale = 0.125;
			sprite6.setInteractive();
			sprite6.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 6;
			});
			this.sprites.push(sprite6);
			this.allSprites.add(sprite6);
			console.log(this.sprites);
		}

		if(image.texture.key === 'shuffle' && this.counter < 15){
			this.numbers = [];
			this.generateRandomNumbers(1, 6, 1);
			console.log(this.numbers[0]);
			this.sprites = [];
			const sprite1 = this.add.sprite(227 + this.xIncrement, 197, 'boxLine').play('boxLine');
			sprite1.scale = 0.125;
			sprite1.setInteractive();
			this.sprites.push(sprite1);
			this.allSprites.add(sprite1);
			sprite1.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 1;
			});
			const sprite2 = this.add.sprite(227 + this.xIncrement, 268, 'boxLine').play('boxLine');
			sprite2.scale = 0.125;
			sprite2.setInteractive();
			this.sprites.push(sprite2);
			this.allSprites.add(sprite2);
			sprite2.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 2;
			});
			const sprite3 = this.add.sprite(227 + this.xIncrement, 339, 'boxLine').play('boxLine');
			sprite3.scale = 0.125;
			sprite3.setInteractive();
			this.sprites.push(sprite3);
			this.allSprites.add(sprite3);
			sprite3.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 3;
			});
			const sprite4 = this.add.sprite(227 + this.xIncrement, 415, 'boxLine').play('boxLine');
			sprite4.scale = 0.125;
			sprite4.setInteractive();
			this.sprites.push(sprite4);
			this.allSprites.add(sprite4);
			sprite4.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 4;
			});
			const sprite5 = this.add.sprite(227 + this.xIncrement, 486, 'boxLine').play('boxLine');
			sprite5.scale = 0.125;
			sprite5.setInteractive();
			this.sprites.push(sprite5);
			this.allSprites.add(sprite5);
			sprite5.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 5;
			});
			const sprite6 = this.add.sprite(227 + this.xIncrement, 557, 'boxLine').play('boxLine');
			sprite6.scale = 0.125;
			sprite6.setInteractive();
			this.sprites.push(sprite6);
			this.allSprites.add(sprite6);
			sprite6.on('pointerdown', () => {
				this.isPointerDown = true;
				this.boxNumber = 6;
			});

			this.xIncrement += 59;
			this.counter++;
		}

	}

	showTimer() {
		let maxTime = 15;
		time = Math.floor(this.timer.getElapsedSeconds());
		console.log("time",time);
		timeLeft = maxTime - time;
		console.log("timeLeft",timeLeft);
		if (timeLeft <= 0) {
			timeLeft = 0;
			this.timerOver = true;
		}

		let sec = time % 60;

		this.timerText.setText(sec);
	}

	update() {
		if (this.timerOver === false && this.play_btn_click === true) {
			this.showTimer();			
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
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});
				this.isPointerDown = false;
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
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});
				this.isPointerDown = false;
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
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 3 && this.boxNumber !== 3) {
				console.log(this.sprites[2].scale);
				this.sprites[2].play('boxRed');
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 4 && this.boxNumber === 4) {
				this.sprites[3].play('boxBomb');
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
						image.visible = false;
					}
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 4 && this.boxNumber !== 4) {
				console.log(this.sprites[3].scale);
				this.sprites[3].play('boxRed');
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 5 && this.boxNumber === 5) {
				this.sprites[4].play('boxBomb');
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
						image.visible = false;
					}
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 5 && this.boxNumber !== 5) {
				console.log(this.sprites[4].scale);
				this.sprites[4].play('boxRed');
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 6 && this.boxNumber === 6) {
				this.sprites[5].play('boxBomb');
				this.interactiveImages.forEach((image) => {
					if (image.texture.key === 'shuffle' || image.texture.key === 'cashout') {
						image.visible = false;
					}
					if(image.texture.key === 'play_btn'){
						image.visible = true;
					}
				});
				this.isPointerDown = false;
			}
			if (this.numbers[0] === 6 && this.boxNumber !== 6) {
				console.log(this.sprites[5].scale);
				this.sprites[5].play('boxRed');
				this.isPointerDown = false;
			}
			for(let i = 0; i < this.sprites.length; i++){
				if(i !== this.numbers[0] - 1){
					this.sprites[i].play('boxGreen');
				}
			}
		}
	}
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
