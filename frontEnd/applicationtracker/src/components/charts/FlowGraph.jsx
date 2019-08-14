import React from 'react';
import {Sankey} from 'react-vis';

export default function FlowGraph() {
    const nodes = [{ name: 'Potential' }, { name: 'Completed' }, { name: 'Interviewed' }, { name: 'No Response' }, { name: 'Denied' }, { name: 'Offered' }, { name: 'Didnt Apply' }];
    const links = [
        { source: 0, target: 1, value: 80 }, //get count of completed
        { source: 1, target: 2, value: 30 }, //get count of currently interviewing + interviewed -> denied + interviewed -> offered
        { source: 1, target: 3, value: 50 }, // get count of currently completed
        { source: 2, target: 4, value: 20 }, //get count of interviewed -> denied
        { source: 2, target: 5, value: 10 }, //get count of offered
        { source: 0, target: 6, value: 20 } //get count of potential
    ];

    return (
        <div>
            <Sankey
                nodes={nodes}
                links={links}
                width={800}
                height={500}
            />
        </div>
    );
}