// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"TkoolMV_PluginCommandBook","status":true,"description":"プラグインコマンド集","parameters":{"制御文字の拡張":"はい","スクリプトに制御文字適用":"いいえ"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"YEP_CoreEngine","status":true,"description":"v1.24 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","Update Real Scale":"false","Collection Clear":"true","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"A lotta","---Items---":"","Default Max":"99","Quantity Text Size":"20","---Stats---":"","Max Level":"99","Actor MaxHP":"9999","Actor MaxMP":"9999","Actor Parameter":"999","Enemy MaxHP":"999999","Enemy MaxMP":"9999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","Show Events Transition":"true","Show Events Snapshot":"true","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_BattleEngineCore","status":true,"description":"v1.43a Have more control over the flow of the battle system\nwith this plugin and alter various aspects to your liking.","parameters":{"---General---":"","Action Speed":"agi","Default System":"ctb","---Escape---":"","Escape Ratio":"0.5 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.1","---Animation---":"","Animation Base Delay":"0","Animation Next Delay":"0","Certain Hit Animation":"120","Physical Animation":"52","Magical Animation":"51","Enemy Attack Animation":"39","Reflect Animation":"42","Motion Waiting":"false","---Frontview---":"","Front Position X":"Graphics.boxWidth / 8 + Graphics.boxWidth / 4 * index","Front Position Y":"Graphics.boxHeight - 180","Front Actor Sprite":"false","Front Sprite Priority":"1","---Sideview---":"","Home Position X":"screenWidth - 16 - (maxSize + 2) * 32 + index * 32 - 160","Home Position Y":"screenHeight - statusHeight - maxSize * 96 + (index+1) * 116 + 106","Side Sprite Priority":"1","---Sprites---":"","Default X Anchor":"0.5","Default Y Anchor":"1.0","Step Distance":"48","Flinch Distance":"12","Show Shadows":"true","---Damage Popups---":"","Popup Duration":"128","Newest Popup Bottom":"true","Popup Overlap Rate":"0.9","Critical Popup":"255, 0, 0, 160","Critical Duration":"60","---Tick-Settings---":"","Timed States":"true","Timed Buffs":"true","Turn Time":"100","AI Self Turns":"true","---Window Settings---":"","Lower Windows":"true","Window Rows":"4","Command Window Rows":"4","Command Alignment":"left","Start Actor Command":"true","Current Max":"false","---Selection Help---":"","Mouse Over":"true","Select Help Window":"true","User Help Text":"User","Ally Help Text":"Ally","Allies Help Text":"Allies","Enemy Help Text":"Enemy","Enemies Help Text":"Enemies","All Help Text":"All %1","Random Help Text":"%2 Random %1","---Enemy Select---":"","Visual Enemy Select":"true","Show Enemy Name":"true","Show Select Box":"false","Enemy Font Size":"20","Enemy Auto Select":"this.furthestRight()","---Actor Select---":"","Visual Actor Select":"true","---Battle Log---":"","Show Emerge Text":"false","Show Pre-Emptive Text":"false","Show Surprise Text":"false","Optimize Speed":"true","Show Action Text":"false","Show State Text":"false","Show Buff Text":"false","Show Counter Text":"false","Show Reflect Text":"false","Show Substitute Text":"false","Show Fail Text":"false","Show Critical Text":"false","Show Miss Text":"false","Show Evasion Text":"false","Show HP Text":"false","Show MP Text":"false","Show TP Text":"false"}},
{"name":"YEP_X_BattleSysCTB","status":true,"description":"v1.15 (Requires YEP_BattleEngineCore.js) Add CTB (Charge\nTurn Battle) into your game using this plugin!","parameters":{"---CTB Settings---":"","Per Tick":"user.agi","Initial Speed":"0","Full Gauge":"Math.max(7000, BattleManager.highestBaseAgi() * 120)","Pre-Emptive Bonuses":"0.8","Surprise Bonuses":"0.8","---Escape---":"","Escape Ratio":"0.125 * $gameParty.agility() / $gameTroop.agility()","Fail Escape Boost":"0.025","---Turn---":"","Full Turn":"Math.min(200, BattleManager.lowestBaseAgi() * 8)","---Rubberband---":"","Enable Rubberband":"true","Minimum Speed":"0.5 * BattleManager.highestBaseAgi()","Maximum Speed":"1.5 * BattleManager.highestBaseAgi()","---Sound---":"","Ready Sound":"Decision1","Ready Volume":"90","Ready Pitch":"120","Ready Pan":"0","---Turn Order---":"","Show Turn Order":"true","Icon Size":"32","Position Y":"64","Position X":"left","Turn Direction":"left","Ally Border Color":"","Ally Back Color":"","Ally Icon":"0","Enemy Border Color":"2","Enemy Back Color":"19","Enemy Icon":"0","Enemy SV Battlers":"false"}},
{"name":"YEP_X_VisualHpGauge","status":true,"description":"v1.06 (Requires YEP_BattleEngineCore.js) Reveal HP Gauges\nwhen a battler is selected or takes damage in battle.","parameters":{"---General---":"","Display Actor":"false","Defeat First":"false","Always Visible":"false","---Appearance---":"","Minimum Gauge Width":"144","Gauge Height":"12","Back Color":"19","HP Color 1":"20","HP Color 2":"21","Gauge Duration":"30","Gauge Position":"false","Y Buffer":"-16","Use Thick Gauges":"false","---Text Display---":"","Show HP":"false","Show Value":"false","Show Max":"false"}},
{"name":"ALICE_battle_command_SP","status":true,"description":"バトルコマンドでスキル選択を省いて指定したスキルを強制的に発動する。","parameters":{}},
{"name":"ALICE_make_damage_value_SP","status":true,"description":"ダメージ計算を好き勝手に弄る。","parameters":{}},
{"name":"MOG_BattleHud","status":true,"description":"(v2.1) Permite customizar o layout de batalha.","parameters":{"Hud X-Axis":"-115","Hud Y-Axis":"490","Hud Space X":"0","Hud Space Y":"0","Vertical Mode":"false","Command Auto Adjust":"true","Max Battle Members":"3",">> TURN ===================":"","Turn Visible":"true","Turn X-Axis":"0","Turn Y-Axis":"0",">> FACE ===================":"","Face Visible":"true","Face X-Axis":"127","Face Y-Axis":"65","Face Shake Animation":"true","Face Zoom Animation":"true","Face Frame Animation":"false","Face Priority":"1",">> NAME ===================":"","Name Visible":"false","Name X-Axis":"40","Name Y-Axis":"-30","Name Font Size":"16","Name Bold Size":"4","Name Font Italic":"false",">> HP ===================":"","HP Meter Visible":"true","HP Meter X-Axis":"128","HP Meter Y-Axis":"95","HP Meter Angle":"0","HP Meter Flow Anime":"false","HP Number Visible":"true","HP Number X-Axis":"235","HP Number Y-Axis":"86","MaxHP Number Visible":"false","MaxHP Number X-Axis":"185","MaxHP Number Y-Axis":"0",">> MP ===================":"","MP Meter Visible":"false","MP Meter X-Axis":"125","MP Meter Y-Axis":"77","MP Meter Angle":"0","MP Meter Flow Anime":"false","MP Number Visible":"false","MP Number X-Axis":"186","MP Number Y-Axis":"61","MaxMP Number Visible":"false","MaxMP Number X-Axis":"196","MaxMP Number Y-Axis":"78",">> TP ===================":"","TP Meter Visible":"false","TP Meter X-Axis":"65","TP Meter Y-Axis":"22","TP Meter Angle":"0","TP Meter Flow Anime":"false","TP Number Visible":"false","TP Number X-Axis":"175","TP Number Y-Axis":"99","MaxTP Number Visible":"false","MaxTP Number X-Axis":"185","MaxTP Number Y-Axis":"116",">> ATB ===================":"","ATB Meter Visible":"true","ATB Meter X-Axis":"3","ATB Meter Y-Axis":"33","ATB Meter Angle":"0","ATB Meter Flow Anime":"false",">> STATES ===================":"","States Visible":"true","States X-Axis":"230","States Y-Axis":"12",">> W COMMAND ===================":"","W Command X-Axis":"45","W Command Y-Axis":"0","W Command Width":"192","W Command Height":"180","Layout Command":"true","L Command X-Axis":"-25","L Command Y-Axis":"-35",">> W PARTY ===================":"","W Party X-Axis":"325","W Party Y-Axis":"170","W Party Width":"192","W Party Height":"110","Layout Party":"false","L Party X-Axis":"-325","L Party Y-Axis":"-42",">> W HELP ===================":"","W Help X-Axis":"0","W Help Y-Axis":"0","W Help Width":"816","W Help Height":"108","Layout Help":"true","L Help X-Axis":"0","L Help Y-Axis":"0",">> W SKILL ===================":"","W Skill X-Axis":"0","W Skill Y-Axis":"444","W Skill Width":"816","W Skill Height":"180","W Skill maxCols":"2","Layout Skill":"true","L Skill X-Axis":"0","L Skill Y-Axis":"-67",">> W ITEM ===================":"","W Item X-Axis":"0","W Item Y-Axis":"444","W Item Width":"816","W Item Height":"180","W Item maxCols":"2","Layout Item":"true","L Item X-Axis":"0","L Item Y-Axis":"-67",">> W ACTOR ===================":"","W Actor X-Axis":"0","W Actor Y-Axis":"444","W Actor Width":"816","W Actor Height":"180","W Actor maxCols":"1","Layout Actor":"true","L Actor X-Axis":"0","L Actor Y-Axis":"-67",">> W ENEMY ===================":"","W Enemy X-Axis":"0","W Enemy Y-Axis":"444","W Enemy Width":"816","W Enemy Height":"180","W Enemy maxCols":"2","Layout Enemy":"true","L Enemy X-Axis":"0","L Enemy Y-Axis":"-67",">> SCREEN LAYOUT ===================":"","Screen Layout":"true",">> CUSTOM POSITION ===================":"","Custom Position 1":"","Custom Position 2":"","Custom Position 3":"","Custom Position 4":"","Custom Position 5":"","Custom Position 6":"","Custom Position 7":"","Custom Position 8":""}},
{"name":"MOG_BattleCommands","status":true,"description":"(v1.0) Comandos de batalhas animados por imagens.","parameters":{"Mode":"0","Layout X-axis":"-90","Layout Y-axis":"0","Com X-axis":"320","Com Y-axis":"0","Arrow":"false","Arrow X-axis":"5","Arrow Y-axis":"0","Zoom Animation":"false","Zoom Rate":"1.10","Zoom Speed":"0.015","Zoom Loop":"true","Slide Animation":"false","Slide X":"45","Slide Y":"0","Com Name":"true","Com Name X-axis":"360","Com Name Y-axis":"-18","Com Font Size":"22","Cursor":"false","Cursor X-axis":"0","Cursor Y-axis":"0","Cursor Slide":"true","Row Max":"5","Ring Range":"90","Ring Motion":"true","Pi Range":"2.0","Side Input":"true"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"ConfusionExtend","status":true,"description":"混乱ステート拡張プラグイン","parameters":{"味方対象スキルの対象":"OFF"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"GraniCore","status":true,"description":"グラニーコアJS\r\n吹き出しウィンドウなど","parameters":{"fuki_faceWidth":"130","fuki_faceHeight":"196","fuki_faceOffsetPosX":"10","fuki_faceOffsetPosY":"-30","fuki_seCharFileName":"","fuki_seCharVolume":"0","cmndsp_tuchRgnId":"24","cmndsp_tuchCmnEvId":"130","cmndsp_tuchRgnIdLength":"5"}},
{"name":"TMVplugin","status":true,"description":"文章の表示に使える制御文字を追加します。","parameters":{}},
{"name":"DTextPicture","status":true,"description":"動的文字列ピクチャ生成プラグイン","parameters":{}},
{"name":"ALICE_fast_message","status":true,"description":"メッセージを瞬間表示","parameters":{}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"ALICE_map_create_supplement","status":false,"description":"マップエディタ上で遠景の通行指定を視覚化するプラグイン。","parameters":{"passable tile":"1544","impassable tile":"1552"}},
{"name":"DP_MapZoom","status":false,"description":"マップの拡大率を制御します。v0.452(20160410)","parameters":{"Base Scale":"1","Encount Effect":"true","Camera Controll":"true","Use Hack":"true"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"TMGreedShop","status":true,"description":"お金以外にアイテムも要求されるショップ機能を追加します。","parameters":{"materialWindowWidth":"408","materialMax":"5","greedCommand":"購入する"}},
{"name":"kkdMaxItems","status":true,"description":"アイテムの所持可能数を変更.","parameters":{"ITEM_MAX":"1"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"ALICE_AltMenuScreen","status":true,"description":"装備シーンからコマンドウィンドウを削除し、\nスロットウィンドウに２行分のスペースを追加します。","parameters":{"bgBitmapMenu":"menu_bg","bgBitmapItem":"","bgBitmapSkill":"","bgBitmapEquip":"equip_bg","bgBitmapStatus":"","bgBitmapOptions":"option_bg","bgBitmapFile":"","bgBitmapGameEnd":"","maxColsMenu":"3","commandRows":"1","isDisplayStatus":"1"}},
{"name":"HIME_EquipSlotsCore","status":true,"description":"Provides you with tools to set up custom equip slots for\r\neach actor individually.","parameters":{}},
{"name":"K_OriginalMenuScreen","status":true,"description":"メニュー画面をオリジナルのものに変更します。","parameters":{"Add_LocationInfo":"1","Information_item":"入手したアイテムを使用します。","Information_skill":"習得したスキルを使用します。","Information_equip":"装備を変更します。","Information_status":"ステータスを確認します。","Information_formation":"パーティの並び順を変更します。","Information_options":"オプション画面を開きます。","Information_save":"これまでのデータをセーブします。","Information_gameEnd":"ゲームを終了します。"}},
{"name":"KMS_AccelerateFileScene","status":true,"description":"[v0.1.0] セーブ/ロード画面の描画を高速化します。","parameters":{}},
{"name":"KMS_SaveWithSnap","status":true,"description":"[v0.1.0] セーブ/ロード画面にスクリーンショットを追加します。","parameters":{"Image scale":"0.15","Enable JPEG":"1"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"DevToolsManage","status":true,"description":"デベロッパツール管理プラグイン","parameters":{"開始時に起動":"ON","常に前面表示":"OFF","デベロッパツール表示位置":"0,0,800,600","最小化切替キー":"F8","リロードキー":"F12","画面の左寄せキー":"F11","高速化切替キー":"F10","強制戦闘勝利キー":"F7","FPS表示":"OFF","タイトルカット":"OFF","高速開始":"OFF"}},
{"name":"MapRapid","status":false,"description":"マップ高速化プラグイン","parameters":{"showMessageRapid":"ON","windowOpenRapid":"ON"}},
{"name":"UTA_MessageSkip","status":true,"description":"特定キーを押す事でメッセージをスキップできるようにします。","parameters":{"Skip Key":"control","Show Trace":"false"}},
{"name":"------------------------","status":false,"description":"----------------------------------------------------------------------------------","parameters":{}},
{"name":"UR65_SmartPhoneUI","status":true,"description":"スマホ用UI  ver 1.0.0\nUIのサイズをスマートフォン向けに最適化します。","parameters":{"タイトル":"1","メニュー":"1","アイテム":"1","スキル":"1","装備":"1","オプション":"1","ゲーム終了":"1","戦闘":"0","ショップ":"1","イベント関係":"1","アイコン位置修正":"1"}},
{"name":"ChangeWindowTouchPolicy","status":true,"description":"ウィンドウタッチ仕様変更プラグイン","parameters":{"枠外タッチ動作":"キャンセル"}},
{"name":"ALICE_meme_table","status":false,"description":"jsonファイルの一部をエクセル対応します。","parameters":{}}
];