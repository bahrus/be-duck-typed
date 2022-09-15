import { register } from 'be-hive/register.js';
import { define } from 'be-decorated/be-decorated.js';
import { DuckTyper, proxyPropDefaults } from './DuckTyper.js';
export class BeDuckTyped {
    #duckTyper;
    adjustType({ proxy }) {
        if (this.#duckTyper === undefined) {
            this.#duckTyper = new DuckTyper(proxy, proxy);
        }
        this.#duckTyper.setType();
    }
    batonPass(proxy, target, beDecorProps, baton) {
        this.#duckTyper = baton;
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
            virtualProps: ['checkDate', 'checkNumeric', 'checkUrl', 'checkColor'],
            batonPass: 'batonPass',
            proxyPropDefaults
        },
        actions: {
            adjustType: {
                ifAtLeastOneOf: ['checkDate', 'checkNumeric', 'checkUrl', 'checkColor']
            }
        }
    },
    complexPropDefaults: {
        controller: BeDuckTyped
    }
});
register(ifWantsToBe, upgrade, tagName);
