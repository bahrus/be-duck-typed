import {RenderContext, TransformPluginSettings} from 'trans-render/lib/types';
import {register} from 'trans-render/lib/pluginMgr.js';
import {VirtualProps} from './types';
import {DuckTyper, proxyPropDefaults} from './DuckTyper.js';
import {passTheBaton} from 'be-decorated/relay.js';

export const trPlugin: TransformPluginSettings = {
    selector: 'beDuckTypedAttribs',
    ready: true,
    processor: async ({target, val, attrib, host}: RenderContext) => {
        let defaults = {...proxyPropDefaults};
        if(val){
            const params = JSON.parse(val) as VirtualProps;
            Object.assign(defaults, params);
        }
        const duckTyper = new DuckTyper(target as HTMLInputElement, defaults);
        await duckTyper.setType();
        passTheBaton('duck-typed', target!, duckTyper);
    }
}

register(trPlugin);
