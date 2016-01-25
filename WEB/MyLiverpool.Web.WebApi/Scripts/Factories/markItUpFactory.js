var MarkItUpFactory = function () {
    var markset = [
        { name: 'Bold', className: 'bold', key: 'B', openWith: '(!(<strong>|!|<b>)!)', closeWith: '(!(</strong>|!|</b>)!)' },
        { name: 'Italic', className: 'italic', key: 'I', openWith: '(!(<em>|!|<i>)!)', closeWith: '(!(</em>|!|</i>)!)' },
        { name: 'Stroke through', className: 'stroke', key: 'S', openWith: '<del>', closeWith: '</del>' },
        { name: 'Underline', className: 'underline', key: 'U', openWith: '<u>', closeWith: '</u>' },
        { separator: '---------------' },
        { name: 'Bulleted List', className: 'bulletedList', openWith: '    <li>', closeWith: '</li>', multiline: true, openBlockWith: '<ul>\n', closeBlockWith: '\n</ul>' },
        { name: 'Numeric List', className: 'numericList', openWith: '    <li>', closeWith: '</li>', multiline: true, openBlockWith: '<ol>\n', closeBlockWith: '\n</ol>' },
        { separator: '---------------' },
        { name: 'Изображение', className: 'img', key: 'P', replaceWith: '<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
        { name: 'Link', className: 'link', key: 'L', openWith: '<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith: '</a>', placeHolder: 'Your text to link...' },
        { separator: '---------------' },
        { name: 'Clean', className: 'clean', replaceWith: function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
        { name: 'Превью', className: 'preview', call: 'preview' }
    ];
    var factory = {};
    factory.create = function (callback) {
        return {
            afterInsert: callback,
            previewParserPath: '',
            markupSet: markset,
         //   onShiftEnter: { keepDefault: false, replaceWith: '<br />\n' },
            onEnter: { keepDefault: false, replaceWith: '<br />\n' },
         //   onCtrlEnter: { keepDefault: false, openWith: '\n<p>', closeWith: '</p>' },
            onTab: { keepDefault: false, replaceWith: '    ' },
        };
    };
    return factory;
};

MarkItUpFactory.$inject = []