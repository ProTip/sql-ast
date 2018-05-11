
import * as Nodes from '../all'
import {NodeType} from '../node-types'
import {deparse} from '../deparse'

it('works', () => {
    const ast = {
        type: NodeType.SelectStmt,

        targetList: [
            {type: NodeType.ResTarget}


        ]
    } as Nodes.SelectStmt

    console.log(deparse(ast))
})