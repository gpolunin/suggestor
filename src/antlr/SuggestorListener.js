// Generated from Suggestor.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by SuggestorParser.
function SuggestorListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

SuggestorListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
SuggestorListener.prototype.constructor = SuggestorListener;

// Enter a parse tree produced by SuggestorParser#program.
SuggestorListener.prototype.enterProgram = function(ctx) {
};

// Exit a parse tree produced by SuggestorParser#program.
SuggestorListener.prototype.exitProgram = function(ctx) {
};


// Enter a parse tree produced by SuggestorParser#block.
SuggestorListener.prototype.enterBlock = function(ctx) {
};

// Exit a parse tree produced by SuggestorParser#block.
SuggestorListener.prototype.exitBlock = function(ctx) {
};


// Enter a parse tree produced by SuggestorParser#fieldAccess.
SuggestorListener.prototype.enterFieldAccess = function(ctx) {
};

// Exit a parse tree produced by SuggestorParser#fieldAccess.
SuggestorListener.prototype.exitFieldAccess = function(ctx) {
};



exports.SuggestorListener = SuggestorListener;