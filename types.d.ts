import {BeDecoratedProps} from 'be-decorated/types';

export interface BeDuckTypedVirtualProps{

}

export interface BeDuckTypedProps extends BeDuckTypedVirtualProps{
    proxy: HTMLInputElement & BeDuckTypedProps;
}

export interface BeDuckTypedActions{
    intro(proxy: HTMLInputElement & BeDuckTypedVirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps): void;
    batonPass(proxy: HTMLInputElement & BeDuckTypedVirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps, baton: any): void;
    finale(proxy: HTMLInputElement & BeDuckTypedVirtualProps, target: HTMLInputElement, beDecorProps: BeDecoratedProps): void;
}