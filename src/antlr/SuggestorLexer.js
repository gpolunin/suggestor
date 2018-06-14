// Generated from Suggestor.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0007\u001f\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0003\u0002\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004\u0003",
    "\u0004\u0003\u0005\u0006\u0005\u0017\n\u0005\r\u0005\u000e\u0005\u0018",
    "\u0003\u0006\u0006\u0006\u001c\n\u0006\r\u0006\u000e\u0006\u001d\u0003",
    "\u001d\u0002\u0007\u0003\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b",
    "\u0007\u0003\u0002\u0003\u0004\u0002C\\c|\u0002 \u0002\u0003\u0003\u0002",
    "\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007\u0003\u0002",
    "\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b\u0003\u0002",
    "\u0002\u0002\u0003\r\u0003\u0002\u0002\u0002\u0005\u0010\u0003\u0002",
    "\u0002\u0002\u0007\u0013\u0003\u0002\u0002\u0002\t\u0016\u0003\u0002",
    "\u0002\u0002\u000b\u001b\u0003\u0002\u0002\u0002\r\u000e\u0007}\u0002",
    "\u0002\u000e\u000f\u0007}\u0002\u0002\u000f\u0004\u0003\u0002\u0002",
    "\u0002\u0010\u0011\u0007\u007f\u0002\u0002\u0011\u0012\u0007\u007f\u0002",
    "\u0002\u0012\u0006\u0003\u0002\u0002\u0002\u0013\u0014\u00070\u0002",
    "\u0002\u0014\b\u0003\u0002\u0002\u0002\u0015\u0017\t\u0002\u0002\u0002",
    "\u0016\u0015\u0003\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002",
    "\u0018\u0016\u0003\u0002\u0002\u0002\u0018\u0019\u0003\u0002\u0002\u0002",
    "\u0019\n\u0003\u0002\u0002\u0002\u001a\u001c\u000b\u0002\u0002\u0002",
    "\u001b\u001a\u0003\u0002\u0002\u0002\u001c\u001d\u0003\u0002\u0002\u0002",
    "\u001d\u001e\u0003\u0002\u0002\u0002\u001d\u001b\u0003\u0002\u0002\u0002",
    "\u001e\f\u0003\u0002\u0002\u0002\u0005\u0002\u0018\u001d\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function SuggestorLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

SuggestorLexer.prototype = Object.create(antlr4.Lexer.prototype);
SuggestorLexer.prototype.constructor = SuggestorLexer;

Object.defineProperty(SuggestorLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

SuggestorLexer.EOF = antlr4.Token.EOF;
SuggestorLexer.T__0 = 1;
SuggestorLexer.T__1 = 2;
SuggestorLexer.T__2 = 3;
SuggestorLexer.FIELD_NAME = 4;
SuggestorLexer.STRING = 5;

SuggestorLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

SuggestorLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

SuggestorLexer.prototype.literalNames = [ null, "'{{'", "'}}'", "'.'" ];

SuggestorLexer.prototype.symbolicNames = [ null, null, null, null, "FIELD_NAME", 
                                           "STRING" ];

SuggestorLexer.prototype.ruleNames = [ "T__0", "T__1", "T__2", "FIELD_NAME", 
                                       "STRING" ];

SuggestorLexer.prototype.grammarFileName = "Suggestor.g4";



exports.SuggestorLexer = SuggestorLexer;

