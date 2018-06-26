// import * as ace from 'brace';
//
//
// ace.define('ace/worker/my-worker',["exports","module","ace/lib/oop","ace/worker/mirror"], function(exports, module) {
//     const oop = ace.acequire("ace/lib/oop");
//     const Mirror = ace.acequire("ace/worker/mirror").Mirror;
//     console.log('test');
//
//     const MyWorker = function (sender) {
//         Mirror.call(this, sender);
//         this.setTimeout(200);
//         this.$dialect = null;
//     };
//
//     oop.inherits(MyWorker, Mirror);
//
//     (function() {
//
//         this.onUpdate = function() {
//             const value = this.doc.getValue();
//             const annotations = validate(value);
//             this.sender.emit("annotate", annotations);
//             console.log('test');
//         };
//
//     }).call(MyWorker.prototype);
//
//     exports.MyWorker = MyWorker;
// });
//
// const validate = function(input) {
//     return [ { row: 0, column: 0, text: "MyMode says Hello!", type: "error" } ];
// };
//
//
// ace.define('ace/mode/my-mode',["exports","module","ace/lib/oop","ace/mode/text","ace/mode/text_highlight_rules", "ace/worker/worker_client" ], function(exports, module) {
//     const oop = ace.acequire("ace/lib/oop");
//     const TextMode =  ace.acequire("ace/mode/text").Mode;
//     const TextHighlightRules =  ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules;
//
//     const MyHighlightRules = function () {
//         this.$rules = {
//             'start': [
//                 { token : 'paren.lparen', regex : /({{)/, next: 'fieldAccess' },
//                 { token : 'string.text', regex : '\\s+' }
//             ],
//             'fieldAccess' : [
//                 { token : 'paren.rparen', regex : /(}})/, next: 'start' },
//                 { token : 'variable.instance.fieldName', regex : '[a-zA-Z]+' },
//                 { token : 'fieldNameSeparator', regex : '(\.)' }
//             ]
//         };
//     };
//     oop.inherits(MyHighlightRules, TextHighlightRules);
//
//     const MyMode = function () {
//         this.HighlightRules = MyHighlightRules;
//     };
//     oop.inherits(MyMode, TextMode);
//
//     (function() {
//         this.$id = "ace/mode/my-mode";
//         const WorkerClient =  ace.acequire("ace/worker/worker_client").WorkerClient;
//         this.createWorker = function(session) {
//             this.$worker = new WorkerClient(["ace"], "ace/worker/my-worker", "MyWorker");
//             this.$worker.attachToDocument(session.getDocument());
//             console.log('test');
//
//             this.$worker.on("errors", function(e) {
//                 session.setAnnotations(e.data);
//             });
//
//             this.$worker.on("annotate", function(e) {
//                 session.setAnnotations(e.data);
//             });
//
//             this.$worker.on("terminate", function() {
//                 session.clearAnnotations();
//             });
//
//             return this.$worker;
//
//         };
//
//     }).call(MyMode.prototype);
//
//     exports.Mode = MyMode;
// });
//
//
// export {ace};