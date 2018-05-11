import * as Nodes from './all'
import {NodeType} from './node-types'


export function deparse(node: Nodes.Node): string {
    switch(node.type) {
        case NodeType.SelectStmt:
            return deparseSelectStmt(node)
        case NodeType.FromClause:
            return deparseFromClause(node)

        case NodeType.A_Star:
            return deparseA_Star(node)
        case NodeType.ResTarget:
            return deparseTargetList(node)
        case NodeType.ColumnRef:
            return deparseColumnRef(node)
    }
}

function deparseA_Star(node: Nodes.A_Star): string {
    return '*'
}

function deparseTargetList(node: Nodes.ResTarget): string {
    return 'FOO'
}

function deparseSelectStmt(node: Nodes.SelectStmt): string {
    const output: string[] = []
    
    output.push('SELECT')

    output.push(node.targetList.map(deparse).join(', '))

    return output.join(' ')
}

function deparseColumnRef(node: Nodes.ColumnRef) {
    return ''
}

function deparseFromClause(node: Nodes.FromClause): string {
    return 'FROM'
}