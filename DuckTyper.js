export class DuckTyper {
    proxy;
    props;
    constructor(proxy, props) {
        this.proxy = proxy;
        this.props = props;
        if (props === undefined) {
            this.props = proxy;
        }
    }
    async setType() {
        const val = this.proxy.value;
        const num = Number(val);
        if (!isNaN(num)) {
            this.proxy.type = 'number';
        }
    }
}
export const proxyPropDefaults = {};
