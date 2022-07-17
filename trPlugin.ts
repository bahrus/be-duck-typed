import {RenderContext, TransformPluginSettings} from 'trans-render/lib/types';
import {register} from 'trans-render/lib/pluginMgr.js';
import {BeDuckTypedVirtualProps} from './types';
import {DuckTyper, proxyPropDefaults} from './DuckTyper.js';
import {passTheBaton} from 'be-decorated/relay.js';

export const trPlugin: TransformPluginSettings = {
    selector: 'beDuckedTypedAttribs',
    ready: true,
    processor: async ({target, val, attrib, host}: RenderContext) => {
        let defaults = {...proxyPropDefaults};
        if(val){
            const params = JSON.parse(val) as BeDuckTypedVirtualProps;
            Object.assign(defaults, params);
            const duckTyper = new DuckTyper(target!, defaults);
            passTheBaton('duck-typed', target!, duckTyper);
        }
    }
}
