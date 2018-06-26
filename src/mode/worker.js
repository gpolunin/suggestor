// import * as ace from 'brace';
// import './worker'
//
// ace.define('ace/worker/my-worker',["exports","module","ace/lib/oop","ace/worker/mirror"], function(exports, module) {
//     "use strict";
//
//     const oop = ace.acequire("ace/lib/oop");
//     const Mirror = ace.acequire("ace/worker/mirror").Mirror;
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
