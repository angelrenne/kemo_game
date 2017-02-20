//=============================================================================
// ALICE_battle_command_SP.js
// by デスポン
// 最終更新: 2016.7.13
//=============================================================================

/*:
 * @plugindesc バトルコマンドでスキル選択を省いて指定したスキルを強制的に発動する。
 * @author デスポン
 * @version 1.0
 * 
 * @help
 * 攻撃・スキルなどを使用したときの挙動を弄ります。
 */
 
(function() {
    
    //消費回数スキルの情報をここで設定する。
    Yanfly.BEC.BattleManager_initMembers = BattleManager.initMembers;
    BattleManager.initMembers = function() {
        Yanfly.BEC.BattleManager_initMembers.call(this);
        this._forceSelection = false;
        this._allSelection = false;
        this._victoryPhase = false;
        this._forceActionQueue = [];
        //PT全員の持ってるスキルをリストアップする。
        for (var i = 0; i < $gameParty.size(); i++) {
            $gameVariables.setValue($gameParty.members()[i].skills()[0].id + 200,$gameParty.members()[i].skills()[0].mpCost)
            if ($gameParty.members()[i].skills()[1]){
                $gameVariables.setValue($gameParty.members()[i].skills()[1].id + 200,$gameParty.members()[i].skills()[1].mpCost)
            }
        }  
    };
    
    Game_BattlerBase.prototype.paySkillCost = function(skill) {
        $gameVariables.setValue(skill.id + 200, $gameVariables.value(skill.id + 200) - 1);
    };
    

    Scene_Battle.prototype.createActorCommandWindow = function() {
        this._actorCommandWindow = new Window_ActorCommand();
        this._actorCommandWindow.setHandler('attack', this.commandAttack.bind(this));
        this._actorCommandWindow.setHandler('skill',  this.commandSkill.bind(this));
        this._actorCommandWindow.setHandler('guard',  this.commandGuard.bind(this));
        this._actorCommandWindow.setHandler('item',   this.commandItem.bind(this));
        //this._actorCommandWindow.setHandler('cancel', this.selectPreviousCommand.bind(this));
        this.addWindow(this._actorCommandWindow);
    };
    
    //エネミー選択WINを消す
    Scene_Battle.prototype.createEnemyWindow = function() {
        this._enemyWindow = new Window_BattleEnemy(0, this._statusWindow.y);
        this._enemyWindow.x = Graphics.boxWidth - this._enemyWindow.width;
        this._enemyWindow.opacity = 0;
        this._enemyWindow.setHandler('ok',     this.onEnemyOk.bind(this));
        this._enemyWindow.setHandler('cancel', this.onEnemyCancel.bind(this));
        this.addWindow(this._enemyWindow);
    };
    Scene_Battle.prototype.selectEnemySelection = function() {
        this._enemyWindow.refresh();
        this._enemyWindow.show();
        this._enemyWindow.select(0);
        this._enemyWindow.activate();
    };
    Window_BattleEnemy.prototype.initialize = function(x, y) {
        this._enemies = [];
        var width = this.windowWidth();
        var height = this.windowHeight();
        Window_Selectable.prototype.initialize.call(this, x, y, width, height);
        this.contentsOpacity = 0;
        this.refresh();
        this.hide();
    };


    Scene_Battle.prototype.commandAttack = function() {
        //攻撃を入力すると武器に応じたスキルが自動的に発動します。
        var e_id  = BattleManager.actor()._equips[0]._item._itemId
        //console.log($dataWeapons[e_id].wtypeId)
        if (e_id != 0){
            switch ($dataWeapons[e_id].wtypeId){
            case 1:
              var skill = $dataSkills[13]
              break
            case 2:
              var skill = $dataSkills[14] 
              break
            case 3:
              var skill = $dataSkills[15] 
              break
            case 4:
              var skill = $dataSkills[16] 
              break
            case 5:
              var skill = $dataSkills[17] 
              break
            }
        } else {
            var skill = $dataSkills[13]
        }
        var skill = $dataSkills[1]
        var action = BattleManager.inputtingAction();
        action.setSkill(skill.id);
        BattleManager.actor().setLastBattleSkill(skill);
        this.onSelectAction();
    };

    Scene_Skill.prototype.commandSkill = function() {
        //this._itemWindow.activate();
        //this._itemWindow.selectLast();
    };

    Scene_Battle.prototype.commandSkill = function() {
        //スキルを入力するとクラスに応じたスキルが自動的に発動します。
        var skill = $dataSkills[this._actorCommandWindow.currentExt()]
        //使用回数がムリなときは塞ぐ
        if ($gameVariables.value(skill.id + 200) >= 1){
            var action = BattleManager.inputtingAction();
            action.setSkill(skill.id);
            BattleManager.actor().setLastBattleSkill(skill);
            this.onSelectAction();
        }else{
            AudioManager.playSe(
                {
                    name:"Buzzer1",
                    volume:100,
                    pitch:100,
                    pan:0
                }
            );
            this._actorCommandWindow.activate();
        }
    };

    Scene_Battle.prototype.onEnemyCancel = function() {
        this._enemyWindow.hide();
        this._actorCommandWindow.activate();
    };
    
    Scene_Battle.prototype.onSelectAction = function() {
        var action = BattleManager.inputtingAction();
        this._skillWindow.hide();
        this._itemWindow.hide();
        if (!action.needsSelection()) {
            this.selectNextCommand();
        } else if (action.isForOpponent()) {
            this.selectEnemySelection();
        } else {
            this.selectActorSelection();
        }
    };
    
    Scene_Battle.prototype.onActorCancel = function() {
        this._actorWindow.hide();
        this._actorCommandWindow.activate();
    };
    
    //コマンド入力WINの背景を描画しない。
    Window_BattleLog.prototype.refresh = function() {
        //this.drawBackground();
        this.contents.clear();
        for (var i = 0; i < this._lines.length; i++) {
            this.drawLineText(i);
        }
    };

})();