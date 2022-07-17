import {BeDecoratedProps} from 'be-decorated/types';

export interface BeDuckTypedVirtualProps{

}

export interface BeDuckTypedProps extends BeDuckTypedVirtualProps{
    proxy: HTMLInputElement & BeDuckTypedProps;
}

export interface BeDuckTypedActions{
    
}