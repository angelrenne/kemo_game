//=============================================================================
// ALICE_reversal_eventidXy.js  2016/07/30
// 指定位置の情報取得の効果を反転させます　(MIT)
//=============================================================================

/*:
 * @plugindesc 指定位置の情報取得を反転したバージョン
 * @author デスポン
 *
 * @help 指定位置の情報取得でイベントIDを参照するとイベントIDの低いヤツが優先されます。
 * そうじゃないんだよ～！という人向けに、
 * イベントIDの高いヤツが優先されるようになるプラグインコマンドを実装します。
 * スクリプトから、
 * $gameVariables.setValue(ID, $gameMap.reversal_eventsXy(x, y))
 */

(function() {
    Game_Map.prototype.reversal_eventIdXy = function(x, y) {
        var list = this.eventsXy(x, y);
        return list.length === 0 ? 0 : list[list.length-1].eventId();
    };
})();