import * as React from 'react'
import * as ace from 'brace'
import 'brace/ext/language_tools'
import 'brace/theme/github'
import { Editor } from 'brace'
import { IEditSession } from 'brace'
import SuggestorMode from './mode'
import { getFields } from './analyzer'


interface Props {

}

interface State {
    value: string,
    isInAutoCompleteMode: boolean
}


const staticWordCompleter = {
    getCompletions: (_editor: Editor,
                     _session: IEditSession,
                     _pos: { row: number, column: number },
                     _prefix: string,
                     callback: (x: object | null, y: object[]) => void) => {
        const token = _session.getTokenAt(_pos.row, _pos.column) as any

        if (token.type === 'fieldName' || token.type === 'fieldNameSeparator') {
            const value = _session.getValue().substr(0, _pos.column)
            const startOfExpression = value.lastIndexOf('{{')
            const expressionStr = value.substr(startOfExpression + 2, _pos.column - startOfExpression + 2)
            callback(null, getFields(expressionStr).map((word) => {
                return {
                    caption: word,
                    value: word
                }
            }))
        }
        callback(null, [])
    }
}

export default class App extends React.Component<Props, State> {
    state: State = {
        value: 'test',
        isInAutoCompleteMode: false
    }

    render() {
        return (
            <div
                id="editor"
                style={{marginTop: '400px', marginLeft: '300px', border: 'solid 1px', width: '300px'}}
                ref={this._configureEditor}
            />

        )
    }

    private _configureEditor = () => {
        const editor: ace.Editor = ace.edit('editor')
        // editor.completer = []

        const session = editor.getSession()
        const sessionUntyped = session as any
        sessionUntyped.setMode(new SuggestorMode())
        session.setValue('test')
        session.setTabSize(2)
        editor.on('paste', (e: { text: string }) => {
            e.text = e.text.replace(/[\r\n]+/g, ' ')
        })

        editor.on('change', function (e: {
            action: string, lines: string[], start: {
                row: number,
                column: number
            }
        }) {
            if (e.lines.length > 1 && e.action === 'insert') {
                editor.find(String.fromCharCode(10))
                editor.replaceAll('')
                setTimeout(() => {
                    editor.moveCursorToPosition({row: e.start.row, column: e.start.column})
                    editor.clearSelection()
                },         0)
            }
        })

        // (editor.commands as any).on('afterExec', function (e: any) {
        //     if (e.command.name === 'insertstring' && /^[\w.]$/.test(e.args)) {
        //         editor.execCommand('startAutocomplete')
        //     }
        // })


        editor.setOptions({
            width: 'initial',
            maxLines: 1,
            showGutter: true,
            highlightActiveLine: true,
            wrapBehavioursEnabled: true,
            enableSnippets: true,
            enableBasicAutocompletion: [staticWordCompleter],
            enableLiveAutocompletion: true
        })
        editor.setTheme('ace/theme/github')
    }
}
