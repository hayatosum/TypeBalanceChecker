$('.pokemon-name').change(function () {
    let id = '#' + $(this).attr('id');
    $(id + '-on').val(1);

    resetDefenseNumberList();
});

function resetDefenseNumberList() {
    let defenseNumberList = new Object();
    defenseNumberList.x4 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    defenseNumberList.x2 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    defenseNumberList.x1 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    defenseNumberList.x05 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    defenseNumberList.x025 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }
    defenseNumberList.x0 = { 'ノーマル': 0, 'ほのお': 0, 'みず': 0, 'でんき': 0, 'くさ': 0, 'こおり': 0, 'かくとう': 0, 'どく': 0, 'じめん': 0, 'ひこう': 0, 'エスパー': 0, 'むし': 0, 'いわ': 0, 'ゴースト': 0, 'ドラゴン': 0, 'あく': 0, 'はがね': 0, 'フェアリー': 0 }

    let index = ['#p1Name', '#p2Name', '#p3Name', '#p4Name', '#p5Name', '#p6Name', '#p7Name', '#p8Name'];
    let indexEffective = ['#p1Name-on', '#p2Name-on', '#p3Name-on', '#p4Name-on', '#p5Name-on', '#p6Name-on', '#p7Name-on', '#p8Name-on'];
    let pokemonTypeList = [];
    for (let i = 0; i < index.length; i++) {
        if (0 < $(indexEffective[i]).val()) {
            isExcludePokemon(i + 1, false);
            let type = getPokemonType($(index[i]).val());
            pokemonTypeList.push(type);
        } else {
            isExcludePokemon(i + 1, true);
        }
    }
    for (let i = 0; i < pokemonTypeList.length; i++) {
        defenseNumberList = calcDefenseNumber(defenseNumberList, pokemonTypeList[i]);
    }

    let dfx4IdList = ['#dfx4Normal', '#dfx4Fire', '#dfx4Wdfer', '#dfx4Electric', '#dfx4Grass', '#dfx4Ice', '#dfx4Fighting', '#dfx4Poison', '#dfx4Ground', '#dfx4Flying', '#dfx4Psychic', '#dfx4Bug', '#dfx4Rock', '#dfx4Ghost', '#dfx4Dragon', '#dfx4Dark', '#dfx4Steel', '#dfx4Fairy'];
    let dfx2IdList = ['#dfx2Normal', '#dfx2Fire', '#dfx2Wdfer', '#dfx2Electric', '#dfx2Grass', '#dfx2Ice', '#dfx2Fighting', '#dfx2Poison', '#dfx2Ground', '#dfx2Flying', '#dfx2Psychic', '#dfx2Bug', '#dfx2Rock', '#dfx2Ghost', '#dfx2Dragon', '#dfx2Dark', '#dfx2Steel', '#dfx2Fairy'];
    let dfx1IdList = ['#dfx1Normal', '#dfx1Fire', '#dfx1Wdfer', '#dfx1Electric', '#dfx1Grass', '#dfx1Ice', '#dfx1Fighting', '#dfx1Poison', '#dfx1Ground', '#dfx1Flying', '#dfx1Psychic', '#dfx1Bug', '#dfx1Rock', '#dfx1Ghost', '#dfx1Dragon', '#dfx1Dark', '#dfx1Steel', '#dfx1Fairy'];
    let dfx05IdList = ['#dfx05Normal', '#dfx05Fire', '#dfx05Wdfer', '#dfx05Electric', '#dfx05Grass', '#dfx05Ice', '#dfx05Fighting', '#dfx05Poison', '#dfx05Ground', '#dfx05Flying', '#dfx05Psychic', '#dfx05Bug', '#dfx05Rock', '#dfx05Ghost', '#dfx05Dragon', '#dfx05Dark', '#dfx05Steel', '#dfx05Fairy'];
    let dfx025IdList = ['#dfx025Normal', '#dfx025Fire', '#dfx025Wdfer', '#dfx025Electric', '#dfx025Grass', '#dfx025Ice', '#dfx025Fighting', '#dfx025Poison', '#dfx025Ground', '#dfx025Flying', '#dfx025Psychic', '#dfx025Bug', '#dfx025Rock', '#dfx025Ghost', '#dfx025Dragon', '#dfx025Dark', '#dfx025Steel', '#dfx025Fairy'];
    let dfx0IdList = ['#dfx0Normal', '#dfx0Fire', '#dfx0Wdfer', '#dfx0Electric', '#dfx0Grass', '#dfx0Ice', '#dfx0Fighting', '#dfx0Poison', '#dfx0Ground', '#dfx0Flying', '#dfx0Psychic', '#dfx0Bug', '#dfx0Rock', '#dfx0Ghost', '#dfx0Dragon', '#dfx0Dark', '#dfx0Steel', '#dfx0Fairy'];

    setDefenseNumberList(dfx4IdList, defenseNumberList.x4);
    setDefenseNumberList(dfx2IdList, defenseNumberList.x2);
    setDefenseNumberList(dfx1IdList, defenseNumberList.x1);
    setDefenseNumberList(dfx05IdList, defenseNumberList.x05);
    setDefenseNumberList(dfx025IdList, defenseNumberList.x025);
    setDefenseNumberList(dfx0IdList, defenseNumberList.x0);

    console.log(defenseNumberList);
}

function getPokemonType(pokemonName) {
    console.log(POKEMON_DATA[pokemonName]);
    let type1 = POKEMON_DATA[pokemonName].type1;
    let type2 = POKEMON_DATA[pokemonName].type2;
    return [type1, type2];
}

function calcDefenseNumber(defenseNumberList, typeList) {
    let type1 = typeList[0];
    let type2 = typeList[1];

    let weakness1 = TYPE_DATA[type1].weakness;
    let weakness2 = TYPE_DATA[type2].weakness;

    // タイプを複合
    let index = ['ノーマル', 'ほのお', 'みず', 'でんき', 'くさ', 'こおり', 'かくとう', 'どく', 'じめん', 'ひこう', 'エスパー', 'むし', 'いわ', 'ゴースト', 'ドラゴン', 'あく', 'はがね', 'フェアリー'];
    for (let i = 0; i < index.length; i++) {
        weakness = weakness1[index[i]] * weakness2[index[i]];
        if (weakness === 4) {
            defenseNumberList.x4[index[i]]++;
        } else if (weakness === 2) {
            defenseNumberList.x2[index[i]]++;
        } else if (weakness === 1) {
            defenseNumberList.x1[index[i]]++;
        } else if (weakness === 0.5) {
            defenseNumberList.x05[index[i]]++;
        } else if (weakness === 0.25) {
            defenseNumberList.x025[index[i]]++;
        } else if (weakness === 0) {
            defenseNumberList.x0[index[i]]++;
        }
    }
    return defenseNumberList;
}

function setDefenseNumberList(targetIdList, numberList) {
    let index = ['ノーマル', 'ほのお', 'みず', 'でんき', 'くさ', 'こおり', 'かくとう', 'どく', 'じめん', 'ひこう', 'エスパー', 'むし', 'いわ', 'ゴースト', 'ドラゴン', 'あく', 'はがね', 'フェアリー'];
    for (let i = 0; i < targetIdList.length; i++) {
        $(targetIdList[i]).text(numberList[index[i]]);
        let color = (15 - (numberList[index[i]]) * 2).toString(16);
        $(`${targetIdList[i]}-cell`).css('background-color', `#${color}${color}${color}`);
        4 <= numberList[index[i]] ? $(`${targetIdList[i]}-cell`).css('color', '#ffffff') : $(`${targetIdList[i]}-cell`).css('color', '');
    }
}

function isExcludePokemon(num, isExclude) {
    let id = '#p' + num + 'Exclude';
    isExclude ? $(id).css('background-color', '#aaaaaa') : $(id).css('background-color', '');
}

$('.panel-icon').click(function () {
    let id = '#' + $(this).attr('id');
    $(id.replace('Exclude', 'Name-on')).val() < 1 ? $(id.replace('Exclude', 'Name-on')).val(1) : $(id.replace('Exclude', 'Name-on')).val(0);

    isExcludePokemon(id.replace('#', '').replace('Exclude', ''), $(id.replace('Exclude', 'Name-on')).val() <= 1);

    resetDefenseNumberList();
});