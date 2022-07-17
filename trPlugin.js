import { register } from 'trans-render/lib/pluginMgr.js';
import { DuckTyper, proxyPropDefaults } from './DuckTyper.js';
import { passTheBaton } from 'be-decorated/relay.js';
export const trPlugin = {
    selector: 'beDuckTypedAttribs',
    ready: true,
    processor: async ({ target, val, attrib, host }) => {
        let defaults = { ...proxyPropDefaults };
        if (val) {
            const params = JSON.parse(val);
            Object.assign(defaults, params);
        }
        const duckTyper = new DuckTyper(target, defaults);
        await duckTyper.setType();
        passTheBaton('duck-typed', target, duckTyper);
    }
};
register(trPlugin);
