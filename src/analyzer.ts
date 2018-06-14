import { IEntityTypeField, meta } from './meta'

const root = 'UserStory'

function getFieldsForRoot(currentRoot: string): string[] {
    return meta.entityTypes
        .filter(item => item.name === currentRoot)
        .reduce((_memo: IEntityTypeField[], item) => item.fields, [])
        .map(item => item.name)
}

export function getFields(expressionStr: string): string[] {
    let currentRoot = root
    const splited = expressionStr.split('.')
    let currentFields = getFieldsForRoot(currentRoot)

    if (splited.length === 0) {
        return currentFields
    }

    for (let i = 0; i < splited.length - 1; i++) {
        currentRoot = splited[i]

        if (currentRoot.trim() === '') {
            return currentFields
        }
        currentFields = getFieldsForRoot(currentRoot)
    }

    return currentFields
}

