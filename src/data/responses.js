const templates = [
    "公式発表：{{item}}は収穫感謝割で本日0kcalです",
    "最新研究により{{item}}は秋限定で熱量観測外と認定されました",
    "穀物局より通達：{{item}}は満月照射済みのため0kcal扱いです",
    "午前3時の{{item}}も季節限定免罪です。堂々とお召しあがりください",
    "秋風審査部の判定：{{item}}は笑顔に変換されるのでカロリーゼロです",
    "{{item}}は落ち葉掃き2往復でチャラ。結果0kcalと記録しました",
    "ゼロカロリー法第十条により{{item}}を直ちに0kcalへ移行しました",
    "秋の味覚監査官より通知：{{item}}は心の栄養だけを残します",
    "季節限定コード適用：{{item}}→0kcalへのシフト完了",
    "白米庁コメント：{{item}}は罪悪感検出されず0kcalです"
];
const errorTemplates = [
    "ゼロカロリー化に失敗しました。深呼吸してからもう一度",
    "秋風が止まりました。今なら再試行成功率+15%です",
    "システムが団子休憩中です。改めて入力をどうぞ"
];
export function getZeroKcalMessage(rawItem) {
    const item = rawItem.trim();
    if (!item) {
        return getRandom(errorTemplates);
    }
    const template = getRandom(templates);
    return template.replaceAll("{{item}}", item);
}
function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
