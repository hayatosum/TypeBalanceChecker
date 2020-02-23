$('#p1m1Name').change(function () {
    let p1m1Name = $('#p1m1Name').val();
    let move = MOVE_DATA[p1m1Name];

    p1m1Name !== '-' ? $('#p1m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p1m1Type').html('');
    p1m1Name !== '-' ? $('#p1m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p1m1Category').html('');

    console.log(`change-p1m1Name: ${p1m1Name}`);
});

$('#p1m2Name').change(function () {
    let p1m2Name = $('#p1m2Name').val();
    let move = MOVE_DATA[p1m2Name];
    
    p1m2Name !== '-' ? $('#p1m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p1m2Type').html('');
    p1m2Name !== '-' ? $('#p1m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p1m2Category').html('');

    console.log(`change-p1m2Name: ${p1m2Name}`);
});

$('#p1m3Name').change(function () {
    let p1m3Name = $('#p1m3Name').val();
    let move = MOVE_DATA[p1m3Name];
    
    p1m3Name !== '-' ? $('#p1m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p1m3Type').html('');
    p1m3Name !== '-' ? $('#p1m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p1m3Category').html('');

    console.log(`change-p1m3Name: ${p1m3Name}`);
});

$('#p1m4Name').change(function () {
    let p1m4Name = $('#p1m4Name').val();
    let move = MOVE_DATA[p1m4Name];
    
    p1m4Name !== '-' ? $('#p1m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p1m4Type').html('');
    p1m4Name !== '-' ? $('#p1m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p1m4Category').html('');

    console.log(`change-p1m4Name: ${p1m4Name}`);
});

$('#p2m1Name').change(function () {
    let p2m1Name = $('#p2m1Name').val();
    let move = MOVE_DATA[p2m1Name];
    
    p2m1Name !== '-' ? $('#p2m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p2m1Type').html('');
    p2m1Name !== '-' ? $('#p2m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p2m1Category').html('');

    console.log(`change-p2m1Name: ${p2m1Name}`);
});

$('#p2m2Name').change(function () {
    let p2m2Name = $('#p2m2Name').val();
    let move = MOVE_DATA[p2m2Name];
    
    p2m2Name !== '-' ? $('#p2m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p2m2Type').html('');
    p2m2Name !== '-' ? $('#p2m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p2m2Category').html('');

    console.log(`change-p2m2Name: ${p2m2Name}`);
});

$('#p2m3Name').change(function () {
    let p2m3Name = $('#p2m3Name').val();
    let move = MOVE_DATA[p2m3Name];
    
    p2m3Name !== '-' ? $('#p2m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p2m3Type').html('');
    p2m3Name !== '-' ? $('#p2m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p2m3Category').html('');

    console.log(`change-p2m3Name: ${p2m3Name}`);
});

$('#p2m4Name').change(function () {
    let p2m4Name = $('#p2m4Name').val();
    let move = MOVE_DATA[p2m4Name];
    
    p2m4Name !== '-' ? $('#p2m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p2m4Type').html('');
    p2m4Name !== '-' ? $('#p2m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p2m4Category').html('');

    console.log(`change-p2m4Name: ${p2m4Name}`);
});

$('#p3m1Name').change(function () {
    let p3m1Name = $('#p3m1Name').val();
    let move = MOVE_DATA[p3m1Name];
    
    p3m1Name !== '-' ? $('#p3m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p3m1Type').html('');
    p3m1Name !== '-' ? $('#p3m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p3m1Category').html('');

    console.log(`change-p3m1Name: ${p3m1Name}`);
});

$('#p3m2Name').change(function () {
    let p3m2Name = $('#p3m2Name').val();
    let move = MOVE_DATA[p3m2Name];
    
    p3m2Name !== '-' ? $('#p3m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p3m2Type').html('');
    p3m2Name !== '-' ? $('#p3m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p3m2Category').html('');

    console.log(`change-p3m2Name: ${p3m2Name}`);
});

$('#p3m3Name').change(function () {
    let p3m3Name = $('#p3m3Name').val();
    let move = MOVE_DATA[p3m3Name];
    
    p3m3Name !== '-' ? $('#p3m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p3m3Type').html('');
    p3m3Name !== '-' ? $('#p3m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p3m3Category').html('');

    console.log(`change-p3m3Name: ${p3m3Name}`);
});

$('#p3m4Name').change(function () {
    let p3m4Name = $('#p3m4Name').val();
    let move = MOVE_DATA[p3m4Name];
    
    p3m4Name !== '-' ? $('#p3m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p3m4Type').html('');
    p3m4Name !== '-' ? $('#p3m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p3m4Category').html('');

    console.log(`change-p3m4Name: ${p3m4Name}`);
});

$('#p4m1Name').change(function () {
    let p4m1Name = $('#p4m1Name').val();
    let move = MOVE_DATA[p4m1Name];
    
    p4m1Name !== '-' ? $('#p4m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p4m1Type').html('');
    p4m1Name !== '-' ? $('#p4m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p4m1Category').html('');

    console.log(`change-p4m1Name: ${p4m1Name}`);
});

$('#p4m2Name').change(function () {
    let p4m2Name = $('#p4m2Name').val();
    let move = MOVE_DATA[p4m2Name];
    
    p4m2Name !== '-' ? $('#p4m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p4m2Type').html('');
    p4m2Name !== '-' ? $('#p4m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p4m2Category').html('');

    console.log(`change-p4m2Name: ${p4m2Name}`);
});

$('#p4m3Name').change(function () {
    let p4m3Name = $('#p4m3Name').val();
    let move = MOVE_DATA[p4m3Name];
    
    p4m3Name !== '-' ? $('#p4m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p4m3Type').html('');
    p4m3Name !== '-' ? $('#p4m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p4m3Category').html('');

    console.log(`change-p4m3Name: ${p4m3Name}`);
});

$('#p4m4Name').change(function () {
    let p4m4Name = $('#p4m4Name').val();
    let move = MOVE_DATA[p4m4Name];
    
    p4m4Name !== '-' ? $('#p4m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p4m4Type').html('');
    p4m4Name !== '-' ? $('#p4m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p4m4Category').html('');

    console.log(`change-p4m4Name: ${p4m4Name}`);
});

$('#p5m1Name').change(function () {
    let p5m1Name = $('#p5m1Name').val();
    let move = MOVE_DATA[p5m1Name];
    
    p5m1Name !== '-' ? $('#p5m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p5m1Type').html('');
    p5m1Name !== '-' ? $('#p5m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p5m1Category').html('');

    console.log(`change-p5m1Name: ${p5m1Name}`);
});

$('#p5m2Name').change(function () {
    let p5m2Name = $('#p5m2Name').val();
    let move = MOVE_DATA[p5m2Name];
    
    p5m2Name !== '-' ? $('#p5m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p5m2Type').html('');
    p5m2Name !== '-' ? $('#p5m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p5m2Category').html('');

    console.log(`change-p5m2Name: ${p5m2Name}`);
});

$('#p5m3Name').change(function () {
    let p5m3Name = $('#p5m3Name').val();
    let move = MOVE_DATA[p5m3Name];
    
    p5m3Name !== '-' ? $('#p5m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p5m3Type').html('');
    p5m3Name !== '-' ? $('#p5m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p5m3Category').html('');

    console.log(`change-p5m3Name: ${p5m3Name}`);
});

$('#p5m4Name').change(function () {
    let p5m4Name = $('#p5m4Name').val();
    let move = MOVE_DATA[p5m4Name];
    
    p5m4Name !== '-' ? $('#p5m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p5m4Type').html('');
    p5m4Name !== '-' ? $('#p5m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p5m4Category').html('');

    console.log(`change-p5m4Name: ${p5m4Name}`);
});

$('#p6m1Name').change(function () {
    let p6m1Name = $('#p6m1Name').val();
    let move = MOVE_DATA[p6m1Name];
    
    p6m1Name !== '-' ? $('#p6m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p6m1Type').html('');
    p6m1Name !== '-' ? $('#p6m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p6m1Category').html('');

    console.log(`change-p6m1Name: ${p6m1Name}`);
});

$('#p6m2Name').change(function () {
    let p6m2Name = $('#p6m2Name').val();
    let move = MOVE_DATA[p6m2Name];
    
    p6m2Name !== '-' ? $('#p6m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p6m2Type').html('');
    p6m2Name !== '-' ? $('#p6m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p6m2Category').html('');

    console.log(`change-p6m2Name: ${p6m2Name}`);
});

$('#p6m3Name').change(function () {
    let p6m3Name = $('#p6m3Name').val();
    let move = MOVE_DATA[p6m3Name];
    
    p6m3Name !== '-' ? $('#p6m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p6m3Type').html('');
    p6m3Name !== '-' ? $('#p6m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p6m3Category').html('');

    console.log(`change-p6m3Name: ${p6m3Name}`);
});

$('#p6m4Name').change(function () {
    let p6m4Name = $('#p6m4Name').val();
    let move = MOVE_DATA[p6m4Name];
    
    p6m4Name !== '-' ? $('#p6m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p6m4Type').html('');
    p6m4Name !== '-' ? $('#p6m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p6m4Category').html('');

    console.log(`change-p6m4Name: ${p6m4Name}`);
});

$('#p7m1Name').change(function () {
    let p7m1Name = $('#p7m1Name').val();
    let move = MOVE_DATA[p7m1Name];
    
    p7m1Name !== '-' ? $('#p7m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p7m1Type').html('');
    p7m1Name !== '-' ? $('#p7m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p7m1Category').html('');

    console.log(`change-p7m1Name: ${p7m1Name}`);
});

$('#p7m2Name').change(function () {
    let p7m2Name = $('#p7m2Name').val();
    let move = MOVE_DATA[p7m2Name];
    
    p7m2Name !== '-' ? $('#p7m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p7m2Type').html('');
    p7m2Name !== '-' ? $('#p7m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p7m2Category').html('');

    console.log(`change-p7m2Name: ${p7m2Name}`);
});

$('#p7m3Name').change(function () {
    let p7m3Name = $('#p7m3Name').val();
    let move = MOVE_DATA[p7m3Name];
    
    p7m3Name !== '-' ? $('#p7m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p7m3Type').html('');
    p7m3Name !== '-' ? $('#p7m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p7m3Category').html('');

    console.log(`change-p7m3Name: ${p7m3Name}`);
});

$('#p7m4Name').change(function () {
    let p7m4Name = $('#p7m4Name').val();
    let move = MOVE_DATA[p7m4Name];
    
    p7m4Name !== '-' ? $('#p7m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p7m4Type').html('');
    p7m4Name !== '-' ? $('#p7m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p7m4Category').html('');

    console.log(`change-p7m4Name: ${p7m4Name}`);
});

$('#p8m1Name').change(function () {
    let p8m1Name = $('#p8m1Name').val();
    let move = MOVE_DATA[p8m1Name];
    
    p8m1Name !== '-' ? $('#p8m1Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p8m1Type').html('');
    p8m1Name !== '-' ? $('#p8m1Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p8m1Category').html('');

    console.log(`change-p8m1Name: ${p8m1Name}`);
});

$('#p8m2Name').change(function () {
    let p8m2Name = $('#p8m2Name').val();
    let move = MOVE_DATA[p8m2Name];
    
    p8m2Name !== '-' ? $('#p8m2Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p8m2Type').html('');
    p8m2Name !== '-' ? $('#p8m2Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p8m2Category').html('');

    console.log(`change-p8m2Name: ${p8m2Name}`);
});

$('#p8m3Name').change(function () {
    let p8m3Name = $('#p8m3Name').val();
    let move = MOVE_DATA[p8m3Name];
    
    p8m3Name !== '-' ? $('#p8m3Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p8m3Type').html('');
    p8m3Name !== '-' ? $('#p8m3Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p8m3Category').html('');

    console.log(`change-p8m3Name: ${p8m3Name}`);
});

$('#p8m4Name').change(function () {
    let p8m4Name = $('#p8m4Name').val();
    let move = MOVE_DATA[p8m4Name];
    
    p8m4Name !== '-' ? $('#p8m4Type').html(`<img src="img/type/tag_${TYPE_DATA[move.type].en}.jpeg" style="width: 72px" />`) : $('#p8m4Type').html('');
    p8m4Name !== '-' ? $('#p8m4Category').html(`<img src="img/move/${translateCategory(move.category)}.png" />`) : $('#p8m4Category').html('');

    console.log(`change-p8m4Name: ${p8m4Name}`);
});

function translateCategory(category) {
    let en = {
        'ぶつり': 'physical',
        'とくしゅ': 'special',
        'へんか': 'status'
    };
    return en[category];
}