$('.move-name').change(function () {
    resetAttackNumberList();
});

function resetAttackNumberList() {
    let attackNumberList = new Object();
    attackNumberList.x2 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    attackNumberList.x1 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    attackNumberList.x05 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    attackNumberList.x0 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }

    let index = ['#p1m1Name', '#p1m2Name', '#p1m3Name', '#p1m4Name', '#p2m1Name', '#p2m2Name', '#p2m3Name', '#p2m4Name', '#p3m1Name', '#p3m2Name', '#p3m3Name', '#p3m4Name', '#p4m1Name', '#p4m2Name', '#p4m3Name', '#p4m4Name', '#p5m1Name', '#p5m2Name', '#p5m3Name', '#p5m4Name', '#p6m1Name', '#p6m2Name', '#p6m3Name', '#p6m4Name', '#p7m1Name', '#p7m2Name', '#p7m3Name', '#p7m4Name', '#p8m1Name', '#p8m2Name', '#p8m3Name', '#p8m4Name'];
    let moveTypeList = [];
    for (let i = 0; i < index.length; i++) {
        let type = getMoveType($(index[i]).val());
        if (type !== '-') {
            moveTypeList.push(type);
        }
    }

    for (let i = 0; i < moveTypeList.length; i++) {
        attackNumberList = calcAttackNumber(attackNumberList, moveTypeList[i]);
    }

    let atx2IdList = ['#atx2Normal', '#atx2Fire', '#atx2Water', '#atx2Electric', '#atx2Grass', '#atx2Ice', '#atx2Fighting', '#atx2Poison', '#atx2Ground', '#atx2Flying', '#atx2Psychic', '#atx2Bug', '#atx2Rock', '#atx2Ghost', '#atx2Dragon', '#atx2Dark', '#atx2Steel', '#atx2Fairy'];
    let atx1IdList = ['#atx1Normal', '#atx1Fire', '#atx1Water', '#atx1Electric', '#atx1Grass', '#atx1Ice', '#atx1Fighting', '#atx1Poison', '#atx1Ground', '#atx1Flying', '#atx1Psychic', '#atx1Bug', '#atx1Rock', '#atx1Ghost', '#atx1Dragon', '#atx1Dark', '#atx1Steel', '#atx1Fairy'];
    let atx05IdList = ['#atx05Normal', '#atx05Fire', '#atx05Water', '#atx05Electric', '#atx05Grass', '#atx05Ice', '#atx05Fighting', '#atx05Poison', '#atx05Ground', '#atx05Flying', '#atx05Psychic', '#atx05Bug', '#atx05Rock', '#atx05Ghost', '#atx05Dragon', '#atx05Dark', '#atx05Steel', '#atx05Fairy'];
    let atx0IdList = ['#atx0Normal', '#atx0Fire', '#atx0Water', '#atx0Electric', '#atx0Grass', '#atx0Ice', '#atx0Fighting', '#atx0Poison', '#atx0Ground', '#atx0Flying', '#atx0Psychic', '#atx0Bug', '#atx0Rock', '#atx0Ghost', '#atx0Dragon', '#atx0Dark', '#atx0Steel', '#atx0Fairy'];

    setAttackNumberList(atx2IdList, attackNumberList.x2);
    setAttackNumberList(atx1IdList, attackNumberList.x1);
    setAttackNumberList(atx05IdList, attackNumberList.x05);
    setAttackNumberList(atx0IdList, attackNumberList.x0);

    console.log(attackNumberList);
}

function getMoveType(moveName) {
    return moveName !== '-' && MOVE_DATA[moveName].category !== 'へんか' ? MOVE_DATA[moveName].type : '-';
}

function calcAttackNumber(attackNumberList, type) {
    if (type === '-') {
        return attackNumberList;
    }

    let index = ['ノーマル', 'ほのお', 'みず', 'でんき', 'くさ', 'こおり', 'かくとう', 'どく', 'じめん', 'ひこう', 'エスパー', 'むし', 'いわ', 'ゴースト', 'ドラゴン', 'あく', 'はがね', 'フェアリー'];
    let effectiveness = TYPE_DATA[type].effectiveness;
    for (let i = 0; i < index.length; i++) {
        if (effectiveness[index[i]] === 2) {
            attackNumberList.x2[index[i]]++;
        } else if (effectiveness[index[i]] === 1) {
            attackNumberList.x1[index[i]]++;
        } else if (effectiveness[index[i]] === 0.5) {
            attackNumberList.x05[index[i]]++;
        } else if (effectiveness[index[i]] === 0) {
            attackNumberList.x0[index[i]]++;
        }
    }
    return attackNumberList;
}

function setAttackNumberList(targetIdList, numberList) {
    let index = ['ノーマル', 'ほのお', 'みず', 'でんき', 'くさ', 'こおり', 'かくとう', 'どく', 'じめん', 'ひこう', 'エスパー', 'むし', 'いわ', 'ゴースト', 'ドラゴン', 'あく', 'はがね', 'フェアリー'];
    for (let i = 0; i < targetIdList.length; i++) {
        $(targetIdList[i]).text(numberList[index[i]]);
        let color = (15 - numberList[index[i]]).toString(16);
        $(`${targetIdList[i]}-cell`).css('background-color', `#${color}${color}${color}`);
        8 <= numberList[index[i]] ? $(`${targetIdList[i]}-cell`).css('color', '#ffffff') : $(`${targetIdList[i]}-cell`).css('color', '');
    }
}