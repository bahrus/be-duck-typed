import { BeDuckTypedVirtualProps } from './types';

export class DuckTyper {

    constructor(public proxy: HTMLInputElement, public props: BeDuckTypedVirtualProps){
        if(props === undefined){
            this.props = proxy as any as BeDuckTypedVirtualProps;
        }
    }

    async setType(){
        const val = this.proxy.value;
        const num = Number(val);
        if(!isNaN(num)){
            this.proxy.type = 'number';
        }
    }

}

export const proxyPropDefaults: BeDuckTypedVirtualProps = {

};