import * as ace from 'brace';
import 'brace/mode/text';

export class CustomHighlightRules extends ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules {
    constructor() {
        super();
        this.$rules = {
            'start': [
                { token : 'paren.lparen', regex : /({{)/, next: 'fieldAccess' },
                { token : 'string.text', regex : '\\s+' }
            ],
            'fieldAccess' : [
                { token : 'paren.rparen', regex : /(}})/, next: 'start' },
                { token : 'variable.instance.fieldName', regex : '[a-zA-Z]+' },
                { token : 'fieldNameSeparator', regex : '(\.)' }
            ]
        };
    }
}

export default class SuggestorMode extends ace.acequire('ace/mode/text').Mode {
    constructor() {
        super();
        this.HighlightRules = CustomHighlightRules;
        this.$id = 'ace/mode/Suggestor';
    }
}

