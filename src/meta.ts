export type FieldTypeName = 'Int' | 'Number' | 'String' | EntityTypeName

export type EntityTypeName = 'UserStory' | 'Feature' | 'Epic' | 'Project'

export interface IEntityTypeField {
    readonly name: string
    readonly type: FieldTypeName
    readonly isReference: boolean
}

export interface IEntityType {
    readonly name: EntityTypeName
    readonly fields: IEntityTypeField[]
}

export interface IMeta {
    entityTypes: IEntityType[]
}

export const meta: IMeta = {
    entityTypes: [
        {
            name: 'UserStory',
            fields: [
                {
                    name: 'Name',
                    type: 'String',
                    isReference: false
                }, {
                    name: 'Feature',
                    type: 'Feature',
                    isReference: true
                }, {
                    name: 'Project',
                    type: 'Project',
                    isReference: true
                }
            ]
        }, {
            name: 'Feature',
            fields: [
                {
                    name: 'Name',
                    type: 'String',
                    isReference: false
                }, {
                    name: 'Epic',
                    type: 'Epic',
                    isReference: true
                }, {
                    name: 'Project',
                    type: 'Project',
                    isReference: true
                }
            ]
        }, {
            name: 'Epic',
            fields: [
                {
                    name: 'Name',
                    type: 'String',
                    isReference: false
                }, {
                    name: 'Project',
                    type: 'Project',
                    isReference: true
                }
            ]
        }, {
            name: 'Project',
            fields: [
                {
                    name: 'Name',
                    type: 'String',
                    isReference: false
                }
            ]
        }
    ]
}
