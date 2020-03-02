"use strict";

define("nodes/components/driver-arvan/component", ["exports", "shared/mixins/node-driver"], function (exports, _nodeDriver) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var LAYOUT = "PHNlY3Rpb24gY2xhc3M9Imhvcml6b250YWwtZm9ybSI+CiAge3sjaWYgbmVlZEFQSVRva2VufX0KICA8Zm9ybT4KICAgIDxkaXYgY2xhc3M9Im92ZXItaHIgci1tYjIwIj4KICAgICAgPHNwYW4+QWNjb3VudCBBY2Nlc3M8L3NwYW4+CiAgICA8L2Rpdj4KICAgIDxkaXYgY2xhc3M9InJvdyBmb3JtLWdyb3VwIj4KICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTIiPgogICAgICAgIDxsYWJlbCBjbGFzcz0iZm9ybS1jb250cm9sLXN0YXRpYyI+QVBJIFRva2VuKjwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTAiPgogICAgICAgIHt7aW5wdXQgdHlwZT0icGFzc3dvcmQiIHZhbHVlPW1vZGVsLmFydmFuQ29uZmlnLmFwaVRva2VuIGNsYXNzTmFtZXM9ImZvcm0tY29udHJvbCIgcGxhY2Vob2xkZXI9IllvdXIgQXJ2YW5DbG91ZCBBUEkgVG9rZW4ifX0KICAgICAgICA8cCBjbGFzcz0iaGVscC1ibG9jayI+WW91IGNhbiBjcmVhdGUgYW4gQVBJIFRva2VuIGluIEFydmFuQ2xvdWQgcGFuZWwuIDxhIGhyZWY9Imh0dHBzOi8vbnBhbmVsLmFydmFuY2xvdWQuY29tL3Byb2ZpbGUvYXBpLWtleXMiIHRhcmdldD0iX2JsYW5rIj5DbGljayBoZXJlIHRvIGNyZWF0ZSBvbmU8L2E+PC9wPgogICAgICA8L2Rpdj4KICAgIDwvZGl2PgogICAge3t0b3AtZXJyb3JzIGVycm9ycz1lcnJvcnN9fQogICAgPGRpdiBjbGFzcz0iZm9vdGVyLWFjdGlvbnMiPgogICAgICB7eyNpZiBnZXR0aW5nUmVnaW9uc319CiAgICAgIDxidXR0b24gY2xhc3M9ImJ0biBiZy1wcmltYXJ5IGJ0bi1kaXNhYmxlZCI+CiAgICAgICAgPGkgY2xhc3M9Imljb24gaWNvbi1zcGlubmVyIGljb24tc3BpbiI+PC9pPiB7e3QgJ2dlbmVyaWMubG9hZGluZyd9fTwvYnV0dG9uPgogICAgICB7e2Vsc2V9fQogICAgICA8YnV0dG9uIHt7YWN0aW9uICJnZXRSZWdpb25zIiB9fSBjbGFzcz0iYnRuIGJnLXByaW1hcnkiIGRpc2FibGVkPXt7bm90IG1vZGVsLmFydmFuQ29uZmlnLmFwaVRva2VufX0+IEF1dGhlbnRpY2F0ZTwvYnV0dG9uPgogICAgICB7ey9pZn19CiAgICAgIDxidXR0b24ge3thY3Rpb24gImNhbmNlbCJ9fSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij57e3QgJ2dlbmVyaWMuY2FuY2VsJ319PC9idXR0b24+CiAgICA8L2Rpdj4KICA8L2Zvcm0+CiAge3tlbHNlfX0KICA8ZGl2IGNsYXNzPSJjb250YWluZXItZmx1aWQiPgogICAgPGRpdiBjbGFzcz0ib3Zlci1ociI+CiAgICAgIDxzcGFuPnt7dGVtcGxhdGVPcHRpb25zVGl0bGV9fTwvc3Bhbj4KICAgIDwvZGl2PgogICAgPGRpdiBjbGFzcz0ib3Zlci1ociByLW10MjAgci1tYjIwIj4KICAgICAgPHNwYW4+U2V0dGluZ3M8L3NwYW4+CiAgICA8L2Rpdj4KICAgIHt7I2lmIHJlZ2lvbnN9fQogICAgPGZvcm0+CiAgICA8ZGl2IGNsYXNzPSJyb3cgZm9ybS1ncm91cCI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0yIj4KICAgICAgICA8bGFiZWwgY2xhc3M9ImZvcm0tY29udHJvbC1zdGF0aWMiPlJlZ2lvbjwvbGFiZWw+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMTAiPgogICAgICAgIDxzZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIgb25jaGFuZ2U9e3thY3Rpb24gKG11dCBtb2RlbC5hcnZhbkNvbmZpZy5yZWdpb24pIHZhbHVlPSJ0YXJnZXQudmFsdWUiIH19PgogICAgICAgICAge3sjZWFjaCByZWdpb25zIGFzIHxyZWdpb258fX0KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17e3JlZ2lvbi5jb2RlfX0gc2VsZWN0ZWQ9e3tlcSBtb2RlbC5hcnZhbkNvbmZpZy5yZWdpb24gcmVnaW9uLmNvZGV9fT57e3JlZ2lvbi5jb3VudHJ5fX0gLSB7e3JlZ2lvbi5jaXR5fX0gLSB7e3JlZ2lvbi5kY319ICh7e3JlZ2lvbi5jb2RlfX0pPC9vcHRpb24+CiAgICAgICAgICB7ey9lYWNofX0KICAgICAgICA8L3NlbGVjdD4KICAgICAgPC9kaXY+CiAgICA8L2Rpdj4KICAgIHt7dG9wLWVycm9ycyBlcnJvcnM9ZXJyb3JzfX0KICAgIDxkaXYgY2xhc3M9ImZvb3Rlci1hY3Rpb25zIj4KICAgICAge3sjaWYgZ2V0dGluZ0RhdGF9fQogICAgICA8YnV0dG9uIGNsYXNzPSJidG4gYmctcHJpbWFyeSBidG4tZGlzYWJsZWQiPgogICAgICAgIDxpIGNsYXNzPSJpY29uIGljb24tc3Bpbm5lciBpY29uLXNwaW4iPjwvaT4ge3t0ICdnZW5lcmljLmxvYWRpbmcnfX08L2J1dHRvbj4KICAgICAge3tlbHNlfX0KICAgICAgPGJ1dHRvbiB7e2FjdGlvbiAiZ2V0RGF0YSIgfX0gY2xhc3M9ImJ0biBiZy1wcmltYXJ5IiBkaXNhYmxlZD17e25vdCBtb2RlbC5hcnZhbkNvbmZpZy5yZWdpb259fT4gU2V0IFJlZ2lvbjwvYnV0dG9uPgogICAgICB7ey9pZn19CiAgICAgIDxidXR0b24ge3thY3Rpb24gImNhbmNlbCJ9fSBjbGFzcz0iYnRuIGJnLXRyYW5zcGFyZW50Ij57e3QgJ2dlbmVyaWMuY2FuY2VsJ319PC9idXR0b24+CiAgICA8L2Rpdj4KICAgIDwvZm9ybT4KICAgIHt7L2lmfX0KICAgIHt7I2lmIGltYWdlc319CiAgICA8ZGl2IGNsYXNzPSJyb3cgZm9ybS1ncm91cCI+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC0yIj4KICAgICAgICA8bGFiZWwgY2xhc3M9ImZvcm0tY29udHJvbC1zdGF0aWMiPkltYWdlPC9sYWJlbD4KICAgICAgPC9kaXY+CiAgICAgIDxkaXYgY2xhc3M9ImNvbC1tZC00Ij4KICAgICAgICA8c2VsZWN0IGNsYXNzPSJmb3JtLWNvbnRyb2wiIG9uY2hhbmdlPXt7YWN0aW9uIChtdXQgbW9kZWwuYXJ2YW5Db25maWcuaW1hZ2UpIHZhbHVlPSJ0YXJnZXQudmFsdWUiIH19PgogICAgICAgICAge3sjZWFjaCBpbWFnZXMgYXMgfGltYWdlfH19CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9e3tpbWFnZS5pZH19IHNlbGVjdGVkPXt7ZXEgbW9kZWwuYXJ2YW5Db25maWcuaW1hZ2UgaW1hZ2UuaWR9fT57e2ltYWdlLm5hbWV9fTwvb3B0aW9uPgogICAgICAgICAge3svZWFjaH19CiAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgICA8ZGl2IGNsYXNzPSJjb2wtbWQtMiI+CiAgICAgICAgPGxhYmVsIGNsYXNzPSJmb3JtLWNvbnRyb2wtc3RhdGljIj5GbGF2b3I8L2xhYmVsPgogICAgICA8L2Rpdj4KICAgICAgPGRpdiBjbGFzcz0iY29sLW1kLTQiPgogICAgICAgIDxzZWxlY3QgY2xhc3M9ImZvcm0tY29udHJvbCIgb25jaGFuZ2U9e3thY3Rpb24gKG11dCBtb2RlbC5hcnZhbkNvbmZpZy5zZXJ2ZXJGbGF2b3IpIHZhbHVlPSJ0YXJnZXQudmFsdWUiIH19PgogICAgICAgICAge3sjZWFjaCBmbGF2b3JzIGFzIHxmbGF2b3J8fX0KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17e2ZsYXZvci5pZH19IHNlbGVjdGVkPXt7ZXEgbW9kZWwuYXJ2YW5Db25maWcuc2VydmVyRmxhdm9yIGZsYXZvci5uYW1lfX0+e3tmbGF2b3IubmFtZX19IC0ge3tmbGF2b3IuaWR9fTwvb3B0aW9uPgogICAgICAgICAge3svZWFjaH19CiAgICAgICAgPC9zZWxlY3Q+CiAgICAgIDwvZGl2PgogICAgPC9kaXY+CiAKICAgICB7eyEtLSBUaGlzIGZvbGxvd2luZyBjb250YWlucyB0aGUgTmFtZSwgTGFiZWxzIGFuZCBFbmdpbmUgT3B0aW9ucyBmaWVsZHMgLS19fQogICAgIHt7Zm9ybS1uYW1lLWRlc2NyaXB0aW9uIG1vZGVsPW1vZGVsIG5hbWVSZXF1aXJlZD10cnVlfX0KICAgICB7e2Zvcm0tdXNlci1sYWJlbHMgaW5pdGlhbExhYmVscz1sYWJlbFJlc291cmNlLmxhYmVscyBzZXRMYWJlbHM9KGFjdGlvbiAnc2V0TGFiZWxzJykgZXhwYW5kQWxsPWV4cGFuZEFsbCBleHBhbmQ9KGFjdGlvbiBleHBhbmRGbikgfX0KICAgICB7e2Zvcm0tZW5naW5lLW9wdHMgbWFjaGluZT1tb2RlbCBzaG93RW5naW5lVXJsPXNob3dFbmdpbmVVcmwgfX0KICAgICB7eyEtLSBUaGlzIGNvbXBvbmVudCBzaG93cyBlcnJvcnMgcHJvZHVjZWQgYnkgdmFsaWRhdGUoKSBpbiB0aGUgY29tcG9uZW50IC0tfX0KICAgICB7e3RvcC1lcnJvcnMgZXJyb3JzPWVycm9yc319CiAgICAge3shLS0gVGhpcyBjb21wb25lbnQgc2hvd3MgdGhlIENyZWF0ZSBhbmQgQ2FuY2VsIGJ1dHRvbnMgLS19fQogICAgIHt7c2F2ZS1jYW5jZWwgc2F2ZT0ic2F2ZSIgY2FuY2VsPSJjYW5jZWwifX0KCiAgICAgIHt7L2lmfX0KCiAgPC9kaXY+CiAKICB7ey9pZn19Cjwvc2VjdGlvbj4K";
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var service = Ember.inject.service;
  exports.default = Ember.Component.extend(_nodeDriver.default, {
    driverName: 'arvan',
    needAPIToken: true,
    config: alias('model.arvanConfig'),
    app: service(),
    init: function init() {
      var decodedLayout = window.atob(LAYOUT);
      var template = Ember.HTMLBars.compile(decodedLayout, {
        moduleName: 'nodes/components/driver-arvan/template'
      });
      set(this, 'layout', template);

      this._super.apply(this, arguments);
    },
    bootstrap: function bootstrap() {
      var config = get(this, 'globalStore').createRecord({
        type: 'arvanConfig',
        serverFlavor: 'ar-2-1-15',
        region: 'nl-ams-su1',
        image: ''
      });
      set(this, 'model.arvanConfig', config);
    },
    validate: function validate() {
      this._super();

      var errors = get(this, 'errors') || [];

      if (!get(this, 'model.name')) {
        errors.push('Name is required');
      }

      if (!this.get('model.arvanConfig.serverFlavor')) {
        errors.push('arvan Region is required');
      }

      if (!this.get('model.arvanConfig.region')) {
        errors.push('arvan Region is required');
      }

      if (!this.get('model.arvanConfig.image')) {
        errors.push('arvan Image is required');
      }

      if (get(errors, 'length')) {
        set(this, 'errors', errors);
        return false;
      } else {
        set(this, 'errors', null);
        return true;
      }
    },
    actions: {
      getRegions: function getRegions() {
        this.set('gettingRegions', true);
        var that = this;
        Promise.all([this.apiRequest('/regions')]).then(function (responses) {
          that.setProperties({
            errors: [],
            needAPIToken: false,
            gettingRegions: false,
            regions: responses[0].data
          });
        }).catch(function (err) {
          err.then(function (msg) {
            that.setProperties({
              errors: ['Error received from ArvanCloud: ' + msg.error.message],
              gettingRegions: false
            });
          });
        });
      },
      getData: function getData() {
        this.set('gettingData', true);
        var that = this;
        Promise.all([this.apiRequest('/regions/' + this.get('model.arvanConfig.region') + '/options')]).then(function (responses) {
          var images = [];
          var flavors = [];
          responses[0].data.distributions.forEach(function (dist) {
            dist.images.forEach(function (image) {
              images.push({
                id: image.id,
                name: image.distribution_name + ' ' + image.name
              });
            });
          });
          responses[0].data.sizes.forEach(function (flavor) {
            flavors.push({
              id: flavor.id,
              name: flavor.name
            });
          });
          that.setProperties({
            errors: [],
            needAPIToken: false,
            gettingData: false,
            images: images,
            flavors: flavors
          });
        }).catch(function (err) {
          err.then(function (msg) {
            that.setProperties({
              errors: ['Error received from ArvanCloud: ' + msg.error.message],
              gettingData: false
            });
          });
        });
      }
    },
    apiRequest: function apiRequest(path) {
      return fetch('https://napi.arvancloud.com/ecc/v1' + path, {
        headers: {
          'authorization': 'Apikey ' + this.get('model.arvanConfig.apiToken')
        }
      }).then(function (res) {
        return res.ok ? res.json() : Promise.reject(res.json());
      });
    }
  });
});;
"use strict";

define("ui/components/driver-arvan/component", ["exports", "nodes/components/driver-arvan/component"], function (exports, _component) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function () {
      return _component.default;
    }
  });
});