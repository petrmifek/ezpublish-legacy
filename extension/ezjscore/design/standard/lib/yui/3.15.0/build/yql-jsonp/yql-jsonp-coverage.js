/*
YUI 3.15.0 (build 834026e)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/yql-jsonp/yql-jsonp.js']) {
   __coverage__['build/yql-jsonp/yql-jsonp.js'] = {"path":"build/yql-jsonp/yql-jsonp.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0]},"f":{"1":0,"2":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":21},"end":{"line":1,"column":40}}},"2":{"name":"(anonymous_2)","line":12,"loc":{"start":{"line":12,"column":31},"end":{"line":12,"column":49}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":29,"column":51}},"2":{"start":{"line":12,"column":0},"end":{"line":25,"column":2}},"3":{"start":{"line":13,"column":4},"end":{"line":15,"column":5}},"4":{"start":{"line":14,"column":8},"end":{"line":14,"column":28}},"5":{"start":{"line":16,"column":4},"end":{"line":24,"column":5}},"6":{"start":{"line":17,"column":8},"end":{"line":17,"column":38}},"7":{"start":{"line":19,"column":8},"end":{"line":19,"column":30}},"8":{"start":{"line":20,"column":8},"end":{"line":22,"column":9}},"9":{"start":{"line":21,"column":12},"end":{"line":21,"column":58}},"10":{"start":{"line":23,"column":8},"end":{"line":23,"column":27}}},"branchMap":{"1":{"line":13,"type":"if","locations":[{"start":{"line":13,"column":4},"end":{"line":13,"column":4}},{"start":{"line":13,"column":4},"end":{"line":13,"column":4}}]},"2":{"line":16,"type":"if","locations":[{"start":{"line":16,"column":4},"end":{"line":16,"column":4}},{"start":{"line":16,"column":4},"end":{"line":16,"column":4}}]},"3":{"line":20,"type":"if","locations":[{"start":{"line":20,"column":8},"end":{"line":20,"column":8}},{"start":{"line":20,"column":8},"end":{"line":20,"column":8}}]},"4":{"line":20,"type":"binary-expr","locations":[{"start":{"line":20,"column":12},"end":{"line":20,"column":16}},{"start":{"line":20,"column":20},"end":{"line":20,"column":32}}]}},"code":["(function () { YUI.add('yql-jsonp', function (Y, NAME) {","","/**","* Plugin for YQL to use JSONP to make YQL requests. This is the default method,","* when loaded in nodejs or winjs this will not load. The new module is needed","* to make sure that JSONP is not loaded in the environments that it is not needed.","* @module yql","* @submodule yql-jsonp","*/","","//Over writes Y.YQLRequest._send to use IO instead of JSONP","Y.YQLRequest.prototype._send = function (url, o) {","    if (o.allowCache !== false) {","        o.allowCache = true;","    }","    if (!this._jsonp) {","        this._jsonp = Y.jsonp(url, o);","    } else {","        this._jsonp.url = url;","        if (o.on && o.on.success) {","            this._jsonp._config.on.success = o.on.success;","        }","        this._jsonp.send();","    }","};","","","","}, '3.15.0', {\"requires\": [\"jsonp\", \"jsonp-url\"]});","","}());"]};
}
var __cov_SUuw0juKc$Q95K7Rgv9V2g = __coverage__['build/yql-jsonp/yql-jsonp.js'];
__cov_SUuw0juKc$Q95K7Rgv9V2g.s['1']++;YUI.add('yql-jsonp',function(Y,NAME){__cov_SUuw0juKc$Q95K7Rgv9V2g.f['1']++;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['2']++;Y.YQLRequest.prototype._send=function(url,o){__cov_SUuw0juKc$Q95K7Rgv9V2g.f['2']++;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['3']++;if(o.allowCache!==false){__cov_SUuw0juKc$Q95K7Rgv9V2g.b['1'][0]++;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['4']++;o.allowCache=true;}else{__cov_SUuw0juKc$Q95K7Rgv9V2g.b['1'][1]++;}__cov_SUuw0juKc$Q95K7Rgv9V2g.s['5']++;if(!this._jsonp){__cov_SUuw0juKc$Q95K7Rgv9V2g.b['2'][0]++;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['6']++;this._jsonp=Y.jsonp(url,o);}else{__cov_SUuw0juKc$Q95K7Rgv9V2g.b['2'][1]++;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['7']++;this._jsonp.url=url;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['8']++;if((__cov_SUuw0juKc$Q95K7Rgv9V2g.b['4'][0]++,o.on)&&(__cov_SUuw0juKc$Q95K7Rgv9V2g.b['4'][1]++,o.on.success)){__cov_SUuw0juKc$Q95K7Rgv9V2g.b['3'][0]++;__cov_SUuw0juKc$Q95K7Rgv9V2g.s['9']++;this._jsonp._config.on.success=o.on.success;}else{__cov_SUuw0juKc$Q95K7Rgv9V2g.b['3'][1]++;}__cov_SUuw0juKc$Q95K7Rgv9V2g.s['10']++;this._jsonp.send();}};},'3.15.0',{'requires':['jsonp','jsonp-url']});
