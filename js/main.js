$(document).ready(function () {

    const pokemonNameList = Object.keys(POKEMON_DATA);
    const moveNameList = Object.keys(MOVE_DATA);
    moveNameList.unshift('-');

    // セレクトボックスを設定
    $('.select-pokemon').select2({ // ポケモン名情報
        data: pokemonNameList,
        width: 'resolve'
    });
    $('.select-move').select2({ // わざ情報
        data: moveNameList,
        width: 'resolve'
    });

    for (let i = 1; i <= 8; i++) {
        isExcludePokemon(i, true);
    }
});

$(function () {
    function customMatcher(params, data) {
        if ($.trim(params.term) === '') {
            return data;
        }

        if (typeof data.text === 'undefined') {
            return null;
        }
        /*
        ZEtoHE 英数字を半角に
        HKtoZK 半角カタカナを全角カタカナに
        HGtoKK ひらがなをカタカナに
        */
        let term = moji(params.term.toUpperCase())
            .convert('ZEtoHE').convert('HKtoZK').convert('HGtoKK').toString();

        let text = moji(data.text.toUpperCase())
            .convert('ZEtoHE').convert('HKtoZK').convert('HGtoKK').toString();

        if (text.indexOf(term) > -1) {
            return data;
        }

        let searchText = $(data.element).data('search');
        if (searchText) {
            //ホントはdata-searchに記載前にconvertしておく方が良い。
            searchText = moji(searchText.toUpperCase())
                .convert('ZEtoHE').convert('HKtoZK').convert('HGtoKK').toString();
            if (searchText.indexOf(term) > -1) {
                return data;
            }

        }
        return null;
    }
    $('.suggest').select2({
        language: 'ja',
        matcher: customMatcher
    });
});
