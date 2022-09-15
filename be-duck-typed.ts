import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeDuckTypedActions, ProxyProps, VirtualProps, PP} from './types';
import { DuckTyper, proxyPropDefaults } from './DuckTyper.js';

export class BeDuckTyped implements BeDuckTypedActions{
    #duckTyper!: DuckTyper;

    adjustType({proxy}: PP): void {
        if(this.#duckTyper === undefined){
            this.#duckTyper = new DuckTyper(proxy, proxy);
        }
        this.#duckTyper.setType();
    }

    batonPass(proxy: HTMLInputElement & VirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps, baton: any): void{
        this.#duckTyper = baton;
    }




}


const tagName = 'be-duck-typed';

const ifWantsToBe = 'duck-typed';

const upgrade = 'input';

define<ProxyProps & BeDecoratedProps<ProxyProps, BeDuckTypedActions>, BeDuckTypedActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            virtualProps: ['checkDate', 'checkNumeric', 'checkUrl', 'checkColor'],
            batonPass: 'batonPass',
            proxyPropDefaults
        },
        actions:{
            adjustType:{
                ifAtLeastOneOf:['checkDate', 'checkNumeric', 'checkUrl', 'checkColor']
            }
        }
    },
    complexPropDefaults:{
        controller: BeDuckTyped
    }
});

register(ifWantsToBe, upgrade, tagName);