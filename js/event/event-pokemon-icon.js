$('#p1Name').change(function () {
    let p1Name = $('#p1Name').val();
    let type1 = POKEMON_DATA[p1Name].type1;
    let type2 = POKEMON_DATA[p1Name].type2;
    $('#p1Icon').html(`<img src="img/pokemon/${p1Name}.png" />`);
    $('#p1Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p1Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p1Type2').html('');

    console.log(`change-p1Name: ${p1Name}`);
});

$('#p2Name').change(function () {
    let p2Name = $('#p2Name').val();
    let type1 = POKEMON_DATA[p2Name].type1;
    let type2 = POKEMON_DATA[p2Name].type2;
    $('#p2Icon').html(`<img src="img/pokemon/${p2Name}.png" />`);
    $('#p2Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p2Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p2Type2').html('');

    console.log(`change-p2Name: ${p2Name}`);
});

$('#p3Name').change(function () {
    let p3Name = $('#p3Name').val();
    let type1 = POKEMON_DATA[p3Name].type1;
    let type2 = POKEMON_DATA[p3Name].type2;
    $('#p3Icon').html(`<img src="img/pokemon/${p3Name}.png" />`);
    $('#p3Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p3Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p3Type2').html('');

    console.log(`change-p3Name: ${p3Name}`);
});

$('#p4Name').change(function () {
    let p4Name = $('#p4Name').val();
    let type1 = POKEMON_DATA[p4Name].type1;
    let type2 = POKEMON_DATA[p4Name].type2;
    $('#p4Icon').html(`<img src="img/pokemon/${p4Name}.png" />`);
    $('#p4Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p4Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p4Type2').html('');

    console.log(`change-p4Name: ${p4Name}`);
});

$('#p5Name').change(function () {
    let p5Name = $('#p5Name').val();
    let type1 = POKEMON_DATA[p5Name].type1;
    let type2 = POKEMON_DATA[p5Name].type2;
    $('#p5Icon').html(`<img src="img/pokemon/${p5Name}.png" />`);
    $('#p5Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p5Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p5Type2').html('');

    console.log(`change-p5Name: ${p5Name}`);
});

$('#p6Name').change(function () {
    let p6Name = $('#p6Name').val();
    let type1 = POKEMON_DATA[p6Name].type1;
    let type2 = POKEMON_DATA[p6Name].type2;
    $('#p6Icon').html(`<img src="img/pokemon/${p6Name}.png" />`);
    $('#p6Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p6Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p6Type2').html('');

    console.log(`change-p6Name: ${p6Name}`);
});

$('#p7Name').change(function () {
    let p7Name = $('#p7Name').val();
    let type1 = POKEMON_DATA[p7Name].type1;
    let type2 = POKEMON_DATA[p7Name].type2;
    $('#p7Icon').html(`<img src="img/pokemon/${p7Name}.png" />`);
    $('#p7Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p7Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p7Type2').html('');

    console.log(`change-p7Name: ${p7Name}`);
});

$('#p8Name').change(function () {
    let p8Name = $('#p8Name').val();
    let type1 = POKEMON_DATA[p8Name].type1;
    let type2 = POKEMON_DATA[p8Name].type2;
    $('#p8Icon').html(`<img src="img/pokemon/${p8Name}.png" />`);
    $('#p8Type1').html(`<img src="img/type/tag_${translateType(type1)}.jpeg" style="width: 72px" />`);
    type2 !== '-' ? $('#p8Type2').html(`<img src="img/type/tag_${translateType(type2)}.jpeg" style="width: 72px" />`) : $('#p8Type2').html('');

    console.log(`change-p8Name: ${p8Name}`);
});

function translateType(type) {
    let en = {
        '-': '-',
        'ノーマル': 'normal',
        'ほのお': 'fire',
        'みず': 'water',
        'でんき': 'electric',
        'くさ': 'grass',
        'こおり': 'ice',
        'かくとう': 'fighting',
        'どく': 'poison',
        'じめん': 'ground',
        'ひこう': 'flying',
        'エスパー': 'psychic',
        'むし': 'bug',
        'いわ': 'rock',
        'ゴースト': 'ghost',
        'ドラゴン': 'dragon',
        'あく': 'dark',
        'はがね': 'steel',
        'フェアリー': 'fairy'
    };
    return en[type];
}