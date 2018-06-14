// Generated from Suggestor.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');
var SuggestorListener = require('./SuggestorListener').SuggestorListener;
var grammarFileName = "Suggestor.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003\u0007\u001b\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0003\u0002\u0003\u0002\u0006\u0002\u000b\n\u0002\r\u0002\u000e",
    "\u0002\f\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0007\u0004\u0016\n\u0004\f\u0004\u000e\u0004",
    "\u0019\u000b\u0004\u0003\u0004\u0002\u0002\u0005\u0002\u0004\u0006\u0002",
    "\u0002\u0002\u001a\u0002\n\u0003\u0002\u0002\u0002\u0004\u000e\u0003",
    "\u0002\u0002\u0002\u0006\u0012\u0003\u0002\u0002\u0002\b\u000b\u0007",
    "\u0007\u0002\u0002\t\u000b\u0005\u0004\u0003\u0002\n\b\u0003\u0002\u0002",
    "\u0002\n\t\u0003\u0002\u0002\u0002\u000b\f\u0003\u0002\u0002\u0002\f",
    "\n\u0003\u0002\u0002\u0002\f\r\u0003\u0002\u0002\u0002\r\u0003\u0003",
    "\u0002\u0002\u0002\u000e\u000f\u0007\u0003\u0002\u0002\u000f\u0010\u0005",
    "\u0006\u0004\u0002\u0010\u0011\u0007\u0004\u0002\u0002\u0011\u0005\u0003",
    "\u0002\u0002\u0002\u0012\u0017\u0007\u0006\u0002\u0002\u0013\u0014\u0007",
    "\u0005\u0002\u0002\u0014\u0016\u0007\u0006\u0002\u0002\u0015\u0013\u0003",
    "\u0002\u0002\u0002\u0016\u0019\u0003\u0002\u0002\u0002\u0017\u0015\u0003",
    "\u0002\u0002\u0002\u0017\u0018\u0003\u0002\u0002\u0002\u0018\u0007\u0003",
    "\u0002\u0002\u0002\u0019\u0017\u0003\u0002\u0002\u0002\u0005\n\f\u0017"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'{{'", "'}}'", "'.'" ];

var symbolicNames = [ null, null, null, null, "FIELD_NAME", "STRING" ];

var ruleNames =  [ "program", "block", "fieldAccess" ];

function SuggestorParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

SuggestorParser.prototype = Object.create(antlr4.Parser.prototype);
SuggestorParser.prototype.constructor = SuggestorParser;

Object.defineProperty(SuggestorParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

SuggestorParser.EOF = antlr4.Token.EOF;
SuggestorParser.T__0 = 1;
SuggestorParser.T__1 = 2;
SuggestorParser.T__2 = 3;
SuggestorParser.FIELD_NAME = 4;
SuggestorParser.STRING = 5;

SuggestorParser.RULE_program = 0;
SuggestorParser.RULE_block = 1;
SuggestorParser.RULE_fieldAccess = 2;

function ProgramContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SuggestorParser.RULE_program;
    return this;
}

ProgramContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ProgramContext.prototype.constructor = ProgramContext;

ProgramContext.prototype.STRING = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SuggestorParser.STRING);
    } else {
        return this.getToken(SuggestorParser.STRING, i);
    }
};


ProgramContext.prototype.block = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(BlockContext);
    } else {
        return this.getTypedRuleContext(BlockContext,i);
    }
};

ProgramContext.prototype.enterRule = function(listener) {
    if(listener instanceof SuggestorListener ) {
        listener.enterProgram(this);
	}
};

ProgramContext.prototype.exitRule = function(listener) {
    if(listener instanceof SuggestorListener ) {
        listener.exitProgram(this);
	}
};




SuggestorParser.ProgramContext = ProgramContext;

SuggestorParser.prototype.program = function() {

    var localctx = new ProgramContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, SuggestorParser.RULE_program);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 8; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 8;
            this._errHandler.sync(this);
            switch(this._input.LA(1)) {
            case SuggestorParser.STRING:
                this.state = 6;
                this.match(SuggestorParser.STRING);
                break;
            case SuggestorParser.T__0:
                this.state = 7;
                this.block();
                break;
            default:
                throw new antlr4.error.NoViableAltException(this);
            }
            this.state = 10; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===SuggestorParser.T__0 || _la===SuggestorParser.STRING);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function BlockContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SuggestorParser.RULE_block;
    return this;
}

BlockContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
BlockContext.prototype.constructor = BlockContext;

BlockContext.prototype.fieldAccess = function() {
    return this.getTypedRuleContext(FieldAccessContext,0);
};

BlockContext.prototype.enterRule = function(listener) {
    if(listener instanceof SuggestorListener ) {
        listener.enterBlock(this);
	}
};

BlockContext.prototype.exitRule = function(listener) {
    if(listener instanceof SuggestorListener ) {
        listener.exitBlock(this);
	}
};




SuggestorParser.BlockContext = BlockContext;

SuggestorParser.prototype.block = function() {

    var localctx = new BlockContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, SuggestorParser.RULE_block);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 12;
        this.match(SuggestorParser.T__0);
        this.state = 13;
        this.fieldAccess();
        this.state = 14;
        this.match(SuggestorParser.T__1);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function FieldAccessContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = SuggestorParser.RULE_fieldAccess;
    return this;
}

FieldAccessContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
FieldAccessContext.prototype.constructor = FieldAccessContext;

FieldAccessContext.prototype.FIELD_NAME = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(SuggestorParser.FIELD_NAME);
    } else {
        return this.getToken(SuggestorParser.FIELD_NAME, i);
    }
};


FieldAccessContext.prototype.enterRule = function(listener) {
    if(listener instanceof SuggestorListener ) {
        listener.enterFieldAccess(this);
	}
};

FieldAccessContext.prototype.exitRule = function(listener) {
    if(listener instanceof SuggestorListener ) {
        listener.exitFieldAccess(this);
	}
};




SuggestorParser.FieldAccessContext = FieldAccessContext;

SuggestorParser.prototype.fieldAccess = function() {

    var localctx = new FieldAccessContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, SuggestorParser.RULE_fieldAccess);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 16;
        this.match(SuggestorParser.FIELD_NAME);
        this.state = 21;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===SuggestorParser.T__2) {
            this.state = 17;
            this.match(SuggestorParser.T__2);
            this.state = 18;
            this.match(SuggestorParser.FIELD_NAME);
            this.state = 23;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


exports.SuggestorParser = SuggestorParser;
