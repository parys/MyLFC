'use strict';
angular.module('liverpoolApp')
    .factory('MarkItUpFactory', [
        function() {
            var markset = [
                { name: 'Полужирный', className: 'bold', key: 'B', openWith: '(!(<strong>|!|<b>)!)', closeWith: '(!(</strong>|!|</b>)!)' },
                { name: 'Курсив', className: 'italic', key: 'I', openWith: '(!(<em>|!|<i>)!)', closeWith: '(!(</em>|!|</i>)!)' },
                { name: 'Stroke through', className: 'stroke', key: 'S', openWith: '<del>', closeWith: '</del>' },
                { name: 'Underline', className: 'underline', key: 'U', openWith: '<u>', closeWith: '</u>' },
                { separator: '---------------' },
                { name: 'Bulleted List', className: 'bulletedList', openWith: '    <li>', closeWith: '</li>', multiline: true, openBlockWith: '<ul>\n', closeBlockWith: '\n</ul>' },
                { name: 'Numeric List', className: 'numericList', openWith: '    <li>', closeWith: '</li>', multiline: true, openBlockWith: '<ol>\n', closeBlockWith: '\n</ol>' },
                { separator: '---------------' },
                { name: 'Изображение', className: 'img', key: 'P', replaceWith: '<img src="[![Source:!:http://]!]" alt="[![Alternative text]!]" />' },
                { name: 'Ссылка', className: 'link', key: 'L', openWith: '<a href="[![Link:!:http://]!]"(!( title="[![Title]!]")!)>', closeWith: '</a>', placeHolder: 'Your text to link...' },
                { name: 'Вставить видео', className: 'video', key: 'V', openWith: '<iframe type="text/html" width="640" height="400" src="[![Link:!:http://]!]" frameborder="0">', closeWith: '</iframe>' },
                { separator: '---------------' },
                { name: 'Clean', className: 'clean', replaceWith: function(markitup) { return markitup.selection.replace(/<(.*?)>/g, "") } },
                { name: 'Превью', className: 'preview', call: 'preview' }
            ];
            var factory = {};
            factory.create = function(callback) {
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
        }
    ]);

//MarkItUpFactory.$inject = []