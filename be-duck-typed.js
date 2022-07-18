import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
import { DuckTyper, proxyPropDefaults } from './DuckTyper.js';
export class BeDuckTyped {
    #duckTyper;
    intro(proxy, target, beDecorProps) {
        if (this.#duckTyper === undefined) {
            this.#duckTyper = new DuckTyper(proxy, beDecorProps);
            this.#duckTyper.setType();
        }
    }
    batonPass(proxy, target, beDecorProps, baton) {
        this.#duckTyper = baton;
    }
    finale(proxy, target, beDecorProps) {
    }
}
const tagName = 'be-duck-typed';
const ifWantsToBe = 'duck-typed';
const upgrade = 'input';
define({
    config: {
        tagName,
        propDefaults: {
            ifWantsToBe,
            upgrade,
            virtualProps: [],
            intro: 'intro',
            batonPass: 'batonPass',
            finale: 'finale',
            proxyPropDefaults
        }
    },
    complexPropDefaults: {
        controller: BeDuckTyped
    }
});
register(ifWantsToBe, upgrade, tagName);
