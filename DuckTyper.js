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
    isValidHttpUrl(s) {
        let url;
        try {
            url = new URL(s);
        }
        catch (err) {
            return false;
        }
        return url.protocol === "http:" || url.protocol === "https:";
    }
    isHexColor(s) {
        if (s[0] !== '#')
            return false;
        const hex = s.substring(1);
        return typeof hex === 'string'
            && hex.length === 6
            && !isNaN(Number('0x' + hex));
    }
    async setType() {
        const val = this.proxy.value;
        const { checkDate, checkNumeric, checkUrl, checkColor } = this.props;
        if (checkNumeric) {
            const num = Number(val);
            if (!isNaN(num)) {
                this.proxy.type = 'number';
                return;
            }
        }
        if (checkDate) {
            const dte = Date.parse(val);
            if (!isNaN(dte)) {
                this.proxy.type = 'date';
                return;
            }
        }
        if (checkUrl) {
            if (this.isValidHttpUrl(val)) {
                this.proxy.type = 'url';
                return;
            }
        }
        if (checkColor) {
            if (this.isHexColor(val)) {
                this.proxy.type = 'color';
                return;
            }
        }
    }
}
export const proxyPropDefaults = {
    checkDate: true,
    checkNumeric: true,
    checkUrl: true,
    checkColor: true,
};
