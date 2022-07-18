import {register} from 'be-hive/register.js';
import {define, BeDecoratedProps} from 'be-decorated/be-decorated.js';
import {BeDuckTypedActions, BeDuckTypedProps, BeDuckTypedVirtualProps} from './types';
import { DuckTyper, proxyPropDefaults } from './DuckTyper.js';

export class BeDuckTyped implements BeDuckTypedActions{
    #duckTyper!: DuckTyper;

    intro(proxy: HTMLInputElement & BeDuckTypedVirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps): void{
        // if(this.#duckTyper === undefined){
        //     this.#duckTyper = new DuckTyper(proxy, beDecorProps);
        //     this.#duckTyper.setType();
        // }

    }

    adjustType({proxy}: this): void {
        if(this.#duckTyper === undefined){
            this.#duckTyper = new DuckTyper(proxy, proxy);
        }
        this.#duckTyper.setType();
    }

    batonPass(proxy: HTMLInputElement & BeDuckTypedVirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps, baton: any): void{
        this.#duckTyper = baton;
    }
    finale(proxy: HTMLInputElement & BeDuckTypedVirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps): void {

    }



}

export interface BeDuckTyped extends BeDuckTypedProps{}

const tagName = 'be-duck-typed';

const ifWantsToBe = 'duck-typed';

const upgrade = 'input';

define<BeDuckTypedProps & BeDecoratedProps<BeDuckTypedProps, BeDuckTypedActions>, BeDuckTypedActions>({
    config:{
        tagName,
        propDefaults:{
            ifWantsToBe,
            upgrade,
            virtualProps: ['checkDate', 'checkNumeric', 'checkUrl', 'checkColor'],
            intro: 'intro',
            batonPass: 'batonPass',
            finale: 'finale',
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