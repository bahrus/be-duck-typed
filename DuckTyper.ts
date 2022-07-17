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
            return;
        }
        const dte = Date.parse(val);
        if(!isNaN(dte)){
            this.proxy.type = 'date';
            return;
        }
    }

}

export const proxyPropDefaults: BeDuckTypedVirtualProps = {

};