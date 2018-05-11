import {NodeType} from './node-types'



export type Node = A_Star | ColumnRef | SelectStmt | FromClause | ResTarget

export interface A_Star {
    type: NodeType.A_Star
}

export interface ColumnRef {
    type: NodeType.ColumnRef

    fields: Array<string | A_Star>
}

export interface FromClause {
    type: NodeType.FromClause

    relname: string
}

export interface ResTarget {
    type: NodeType.ResTarget

    name?: string
    node: ColumnRef
}

export interface SelectStmt {
    type: NodeType.SelectStmt

    fromClause: FromClause
    targetList: ResTarget[]
    larg?: SelectStmt
    rarg?: SelectStmt
    op: 0 | 1
}