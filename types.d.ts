import {BeDecoratedProps, MinimalProxy} from 'be-decorated/types';


export interface EndUserProps {
    checkNumeric?: boolean;
    checkDate?: boolean;
    checkUrl?: boolean;
    checkColor?: boolean;
}
export interface VirtualProps extends MinimalProxy<HTMLInputElement>, EndUserProps{

}

export type Proxy = HTMLInputElement & VirtualProps;

export interface ProxyProps extends VirtualProps{
    proxy: HTMLInputElement & ProxyProps;
}

export type PP = ProxyProps;

export interface BeDuckTypedActions{
    batonPass(proxy: Proxy, target: HTMLInputElement, beDecorProps: BeDecoratedProps, baton: any): void;
    adjustType(pp: PP): void;
}