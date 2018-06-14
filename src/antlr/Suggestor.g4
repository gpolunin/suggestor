grammar Suggestor;

program
    : (STRING | block)+
    ;

block
    : '{{' fieldAccess '}}'
    ;

fieldAccess
    : FIELD_NAME ('.' FIELD_NAME)*
    ;


FIELD_NAME
    : [a-zA-Z]+
    ;

STRING
    : (.)+?
    ;
