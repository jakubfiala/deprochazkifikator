var elements = document.getElementsByTagName('*');

chrome.storage.sync.get({
    prochazkaName: 'Baby Voldemort'
}, function(items) {

    var nominativ = items.prochazkaName;
    var genitiv, dativ, akuzativ, lokal, instrumental, plural;
    switch (nominativ) {
        case 'Baby Voldemort':
            genitiv = nominativ + 'a';
            dativ = nominativ + 'ovi';
            akuzativ = nominativ + 'a';
            lokal = nominativ + 'ovi';
            instrumental = nominativ + 'om';
            plural = nominativ + 'ovia';
            break;
        case 'Zradoslav':
            genitiv = nominativ + 'a';
            dativ = nominativ + 'ovi';
            akuzativ = nominativ + 'a';
            lokal = nominativ + 'ovi';
            instrumental = nominativ + 'om';
            plural = nominativ + 'ovia';
            break;
        case 'Chlpáčik':
            genitiv = nominativ + 'a';
            dativ = nominativ + 'ovi';
            akuzativ = nominativ + 'a';
            lokal = nominativ + 'ovi';
            instrumental = nominativ + 'om';
            plural = nominativ + 'ovia';
            break;
        case 'Kocúrik':
            genitiv = nominativ + 'a';
            dativ = nominativ + 'ovi';
            akuzativ = nominativ + 'a';
            lokal = nominativ + 'ovi';
            instrumental = nominativ + 'om';
            plural = nominativ + 'ovia';
            break;
        case 'Macko uško':
            genitiv = 'Macka uška';
            dativ = 'Mackovi uškovi';
            akuzativ = 'Macka uška';
            lokal = 'Mackovi uškovi';
            instrumental = 'Mackom uškom';
            plural = 'Mackovia uškovia';
            break;
        case 'Gazda':
            genitiv = 'Gazdu';
            dativ = 'Gazdovi';
            akuzativ = 'Gazdu';
            lokal = 'Gazdovi';
            instrumental = 'Gazdom';
            plural = 'Gazdovia';
            break;
        case 'Ľutujem':
            genitiv = nominativ;
            dativ = nominativ;
            akuzativ = nominativ;
            lokal = nominativ;
            instrumental = nominativ;
            plural = nominativ;
            break;
        default:
            genitiv = nominativ;
            dativ = nominativ;
            akuzativ = nominativ;
            lokal = nominativ;
            instrumental = nominativ;
            plural = nominativ;
            break;
    }

    console.log(genitiv, dativ, akuzativ, lokal, instrumental, plural);

    for (var i = 0; i < elements.length; i++) {
        var element = elements[i];

        for (var j = 0; j < element.childNodes.length; j++) {
            var node = element.childNodes[j];

            if (node.nodeType === 3) {
                var text = node.nodeValue;
                var replacedText = text .replace(/Radoslav Procházka|Radoslav Prochazka|radoslav procházka|radoslav prochazka/gi, nominativ)
                                        .replace(/Radoslavom Procházkom|Radoslavom Prochazkom|radoslavom procházkom|radoslavom prochazkom/gi, instrumental )
                                        .replace(/Radoslava Procházku|Radoslava Prochazku|radoslava procházku|radoslava prochazku/gi, akuzativ )
                                        .replace(/Radoslavovi Procházkovi|Radoslavovi Prochazkovi|radoslavovi procházkovi|radoslavovi prochazkovi/gi, dativ )
                                        .replace(/Radoslavovia Procházkovia|Radoslavovia Prochazkovia|radoslavovia procházkovia|radoslavovia prochazkovia/gi, plural )
                                        .replace(/Rado Procházka|Rado Prochazka|rado procházka|rado prochazka/gi, nominativ)
                                        .replace(/Radom Procházkom|Radom Prochazkom|radom procházkom|radom prochazkom/gi, instrumental )
                                        .replace(/Rada Procházku|Rada Prochazku|rada procházku|rada prochazku/gi, akuzativ )
                                        .replace(/Radovi Procházkovi|Radovi Prochazkovi|radovi procházkovi|radovi prochazkovi/gi, dativ )
                                        .replace(/Radovia Procházkovia|Radovia Prochazkovia|radovia procházkovia|radovia prochazkovia/gi, plural )
                                        .replace(/Procházka|Prochazka|procházka|prochazka/gi, nominativ)
                                        .replace(/Procházkom|Prochazkom|procházkom|prochazkom/gi, instrumental )
                                        .replace(/Procházku|Prochazku|procházku|prochazku/gi, akuzativ )
                                        .replace(/Procházkovi|Prochazkovi|procházkovi|prochazkovi/gi, dativ)
                                        .replace(/Procházkovia|Prochazkovia|procházkovia|prochazkovia/gi, plural )
                ;

                if (replacedText !== text) {
                    element.replaceChild(document.createTextNode(replacedText), node);
                }
            }
        }
    }
})

