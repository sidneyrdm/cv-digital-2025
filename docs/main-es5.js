function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _busca_cep_busca_cep_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./busca-cep/busca-cep.component */
    "./src/app/busca-cep/busca-cep.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'buscaCep',
      component: _busca_cep_busca_cep_component__WEBPACK_IMPORTED_MODULE_3__["BuscaCepComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! jquery */
    "./node_modules/jquery/dist/jquery.js");
    /* harmony import */


    var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./template/navbar/navbar.component */
    "./src/app/template/navbar/navbar.component.ts");
    /* harmony import */


    var _template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./template/sidebar/sidebar.component */
    "./src/app/template/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'clientes-app';
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          (function ($) {
            "use strict"; // Add active state to sidbar nav links

            var path = window.location.href; // because the 'href' property of the DOM element is the absolute path

            $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
              if (this.href === path) {
                $(this).addClass("active");
              }
            }); // Toggle the side navigation

            $("#sidebarToggle").on("click", function (e) {
              e.preventDefault();
              $("body").toggleClass("sb-sidenav-toggled");
            });
          })(jquery__WEBPACK_IMPORTED_MODULE_1___default.a);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 18,
      vars: 0,
      consts: [["id", "layoutSidenav"], ["id", "layoutSidenav_content"], [1, "container-fluid"], [1, "py-4", "bg-light", "mt-auto"], [1, "d-flex", "align-items-center", "justify-content-between", "small"], [1, "text-muted"], ["href", "#"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Copyright \xA9 Sidney Digital CV 2025");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " \xB7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Terms & Conditions");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_template_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _template_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _template_template_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./template/template.module */
    "./src/app/template/template.module.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _teste_teste_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./teste/teste.component */
    "./src/app/teste/teste.component.ts");
    /* harmony import */


    var _busca_cep_busca_cep_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./busca-cep/busca-cep.component */
    "./src/app/busca-cep/busca-cep.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _teste_teste_component__WEBPACK_IMPORTED_MODULE_6__["TesteComponent"], _busca_cep_busca_cep_component__WEBPACK_IMPORTED_MODULE_7__["BuscaCepComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
        exports: [_teste_teste_component__WEBPACK_IMPORTED_MODULE_6__["TesteComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], _teste_teste_component__WEBPACK_IMPORTED_MODULE_6__["TesteComponent"], _busca_cep_busca_cep_component__WEBPACK_IMPORTED_MODULE_7__["BuscaCepComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _template_template_module__WEBPACK_IMPORTED_MODULE_4__["TemplateModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]],
          exports: [_teste_teste_component__WEBPACK_IMPORTED_MODULE_6__["TesteComponent"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/busca-cep/ViaCepModel.ts":
  /*!******************************************!*\
    !*** ./src/app/busca-cep/ViaCepModel.ts ***!
    \******************************************/

  /*! exports provided: ViaCepModel */

  /***/
  function srcAppBuscaCepViaCepModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViaCepModel", function () {
      return ViaCepModel;
    });

    var ViaCepModel = function ViaCepModel() {
      _classCallCheck(this, ViaCepModel);
    };
    /***/

  },

  /***/
  "./src/app/busca-cep/busca-cep.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/busca-cep/busca-cep.component.ts ***!
    \**************************************************/

  /*! exports provided: BuscaCepComponent */

  /***/
  function srcAppBuscaCepBuscaCepComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BuscaCepComponent", function () {
      return BuscaCepComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ViaCepModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./ViaCepModel */
    "./src/app/busca-cep/ViaCepModel.ts");
    /* harmony import */


    var _viacep_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./viacep.service */
    "./src/app/busca-cep/viacep.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var BuscaCepComponent = /*#__PURE__*/function () {
      function BuscaCepComponent(viaCepService) {
        _classCallCheck(this, BuscaCepComponent);

        this.viaCepService = viaCepService;
        this.viaCepModel = new _ViaCepModel__WEBPACK_IMPORTED_MODULE_1__["ViaCepModel"]();
        this.mostraArea = false;
      }

      _createClass(BuscaCepComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "buscaCep",
        value: function buscaCep() {
          var _this = this;

          this.viaCepService.getCep(this.cep).subscribe(function (resposta) {
            if (resposta.estado == null) {
              alert('Cep não encontrado!');
            }

            console.log(resposta);
            _this.viaCepModel = resposta;
            _this.mostraArea = true;
          });
        }
      }, {
        key: "copiarTexto",
        value: function copiarTexto() {
          var textoParaCopiar = 'CEP: ' + this.viaCepModel.cep + ' , ' + 'RUA: ' + this.viaCepModel.logradouro + ' , ' + 'COMPLEMENTO: ' + this.viaCepModel.complemento + ' , ' + 'UNIDADE: ' + this.viaCepModel.unidade + ' , ' + 'BAIRRO: ' + this.viaCepModel.bairro + ' , ' + 'CIDADE: ' + this.viaCepModel.localidade + ' , ' + 'UF: ' + this.viaCepModel.uf + ' , ' + 'ESTADO: ' + this.viaCepModel.estado + ' , ' + 'REGIÃO: ' + this.viaCepModel.regiao + ' , ' + 'IBGE: ' + this.viaCepModel.ibge + ' , ' + 'GIA: ' + this.viaCepModel.gia + ' , ' + 'DDD: ' + this.viaCepModel.ddd + ' , ' + 'SIAFI: ' + this.viaCepModel.siafi;
          navigator.clipboard.writeText(textoParaCopiar);
          alert('texto copiado!');
        }
      }]);

      return BuscaCepComponent;
    }();

    BuscaCepComponent.ɵfac = function BuscaCepComponent_Factory(t) {
      return new (t || BuscaCepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_viacep_service__WEBPACK_IMPORTED_MODULE_2__["ViacepService"]));
    };

    BuscaCepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BuscaCepComponent,
      selectors: [["app-busca-cep"]],
      decls: 45,
      vars: 20,
      consts: [[1, "mt-4"], [1, "breadcrumb", "mb-4"], [1, "breadcrumb-item", "active"], ["cepForm", "ngForm"], [1, "row", "p-0"], [1, "mb-3", "col-md-12"], ["for", "cep", 1, "form-label"], ["name", "cep", "type", "text", "id", "cep", "placeholder", "Digite o cep", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"], ["for", "logradouro", 1, "form-label"], ["name", "logradouro", "type", "text", "id", "logradouro", 1, "form-control", 3, "ngModel"], [1, "mb-3", "col-md-4"], ["for", "bairro", 1, "form-label"], ["name", "bairro", "type", "text", "id", "bairro", 1, "form-control", 3, "ngModel"], ["for", "cidade", 1, "form-label"], ["name", "cidade", "type", "text", "id", "cidade", 1, "form-control", 3, "ngModel"], ["for", "estado", 1, "form-label"], ["name", "estado", "type", "text", "id", "estado", 1, "form-control", 3, "ngModel"], ["name", "uf", "type", "text", "id", "uf", 1, "form-control", 3, "ngModel"], ["for", "ddd", 1, "form-label"], ["name", "ddd", "type", "text", "id", "ddd", 1, "form-control", 3, "ngModel"], [1, "container"], ["name", "area", "id", "area", "disabled", "mostraArea"], [1, "btn", "btn-success", 3, "click"]],
      template: function BuscaCepComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Busca Endere\xE7o By ViaCep");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ol", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", null, 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Cep");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BuscaCepComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.cep = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuscaCepComponent_Template_button_click_11_listener() {
            return ctx.buscaCep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "buscar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Rua");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bairro");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Cidade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Estado");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "UF");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "DDD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "textarea", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BuscaCepComponent_Template_button_click_43_listener() {
            return ctx.copiarTexto();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Copiar Texto");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cep);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viaCepModel.logradouro);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viaCepModel.bairro);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viaCepModel.localidade);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viaCepModel.estado);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viaCepModel.uf);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.viaCepModel.ddd);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolateV"](["        CEP: ", ctx.viaCepModel.cep, "\n        RUA: ", ctx.viaCepModel.logradouro, "\n        COMPLEMENTO: ", ctx.viaCepModel.complemento, "\n        UNIDADE: ", ctx.viaCepModel.unidade, "\n        BAIRRO: ", ctx.viaCepModel.bairro, "\n        CIDADE: ", ctx.viaCepModel.localidade, "\n        UF: ", ctx.viaCepModel.uf, "\n        ESTADO: ", ctx.viaCepModel.estado, "\n        REGI\xC3O: ", ctx.viaCepModel.regiao, "\n        IBGE: ", ctx.viaCepModel.ibge, "\n        GIA: ", ctx.viaCepModel.gia, "\n        DDD: ", ctx.viaCepModel.ddd, "\n        SIAFI: ", ctx.viaCepModel.siafi, "\n        "]);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]],
      styles: ["textarea[_ngcontent-%COMP%] {\r\n    border: 1px solid #C5C5C5;\r\n    color: #323232;\r\n    background-color: #FFF;\r\n    border-radius: 4px;\r\n    box-sizing: border-box;\r\n    box-shadow: 0px 1px 3px rgba(128, 128, 128, 0.1) inset;\r\n    padding: 4px 6px;\r\n    margin: 0px;\r\n    min-height: 30px;\r\n    line-height: 20px;\r\n    outline: medium none;\r\n    width: 80%;\r\n    height: 290px;\r\n\r\n  }\r\n\r\n  p[_ngcontent-%COMP%] {\r\n    box-sizing: border-box;\r\n  \r\n    width: 80% auto;\r\n    height: 350px;\r\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYnVzY2EtY2VwL2J1c2NhLWNlcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixzREFBc0Q7SUFDdEQsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixVQUFVO0lBQ1YsYUFBYTs7RUFFZjs7RUFFQTtJQUdFLHNCQUFzQjs7SUFFdEIsZUFBZTtJQUNmLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL2J1c2NhLWNlcC9idXNjYS1jZXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRleHRhcmVhIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNDNUM1QzU7XHJcbiAgICBjb2xvcjogIzMyMzIzMjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDFweCAzcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjEpIGluc2V0O1xyXG4gICAgcGFkZGluZzogNHB4IDZweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgbWluLWhlaWdodDogMzBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgb3V0bGluZTogbWVkaXVtIG5vbmU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyOTBweDtcclxuXHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgXHJcbiAgICB3aWR0aDogODAlIGF1dG87XHJcbiAgICBoZWlnaHQ6IDM1MHB4O1xyXG4gIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BuscaCepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-busca-cep',
          templateUrl: './busca-cep.component.html',
          styleUrls: ['./busca-cep.component.css']
        }]
      }], function () {
        return [{
          type: _viacep_service__WEBPACK_IMPORTED_MODULE_2__["ViacepService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/busca-cep/viacep.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/busca-cep/viacep.service.ts ***!
    \*********************************************/

  /*! exports provided: ViacepService */

  /***/
  function srcAppBuscaCepViacepServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViacepService", function () {
      return ViacepService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ViacepService = /*#__PURE__*/function () {
      function ViacepService(http) {
        _classCallCheck(this, ViacepService);

        this.http = http;
        this.apiURL = 'https://viacep.com.br/ws/';
      }

      _createClass(ViacepService, [{
        key: "getCep",
        value: function getCep(cep) {
          return this.http.get(this.apiURL + cep + '/json');
        }
      }]);

      return ViacepService;
    }();

    ViacepService.ɵfac = function ViacepService_Factory(t) {
      return new (t || ViacepService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ViacepService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ViacepService,
      factory: ViacepService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViacepService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "email",
        value: function email() {
          alert('sidneyfornet@gmail.com');
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 201,
      vars: 0,
      consts: [["http-equiv", "Content-Type", "content", "text/html; charset=UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1"], ["rel", "stylesheet", "href", "https://www.w3schools.com/w3css/4/w3.css"], ["rel", "stylesheet", "href", "https://fonts.googleapis.com/css?family=Roboto"], ["rel", "stylesheet", "href", "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"], ["cz-shortcut-listen", "true", 1, "w3-light-grey"], [1, "w3-content", "w3-margin-top", 2, "max-width", "1400px"], [1, "w3-row-padding"], [1, "w3-third"], [1, "w3-white", "w3-text-grey", "w3-card-4"], [1, "w3-container"], [1, "fa", "fa-briefcase", "fa-fw", "w3-margin-right", "w3-large", "w3-text-teal"], [1, "fa", "fa-home", "fa-fw", "w3-margin-right", "w3-large", "w3-text-teal"], [1, "fa", "fa-envelope", "fa-fw", "w3-margin-right", "w3-large", "w3-text-teal"], ["href", "#", 3, "click"], [1, "fa", "fa-phone", "fa-fw", "w3-margin-right", "w3-large", "w3-text-teal"], [1, "w3-large"], [1, "fa", "fa-asterisk", "fa-fw", "w3-margin-right", "w3-text-teal"], [1, "w3-light-grey", "w3-round-xlarge", "w3-small"], [1, "w3-container", "w3-center", "w3-round-xlarge", "w3-teal", 2, "width", "30%"], [1, "w3-container", "w3-center", "w3-round-xlarge", "w3-teal", 2, "width", "20%"], [1, "w3-large", "w3-text-theme"], [1, "fa", "fa-globe", "fa-fw", "w3-margin-right", "w3-text-teal"], [1, "w3-light-grey", "w3-round-xlarge"], [1, "w3-round-xlarge", "w3-teal", 2, "height", "24px", "width", "100%"], [1, "w3-round-xlarge", "w3-teal", 2, "height", "24px", "width", "20%"], [1, "w3-round-xlarge", "w3-teal", 2, "height", "24px", "width", "10%"], [1, "w3-twothird"], [1, "w3-container", "w3-card", "w3-white", "w3-margin-bottom"], [1, "w3-text-grey", "w3-padding-16"], [1, "fa", "fa-terminal", "fa-fw", "w3-margin-right", "w3-xxlarge", "w3-text-teal"], [1, "fa", "fa-suitcase", "fa-fw", "w3-margin-right", "w3-xxlarge", "w3-text-teal"], [1, "w3-opacity"], [1, "w3-text-teal"], [1, "fa", "fa-calendar", "fa-fw", "w3-margin-right"], [1, "w3-tag", "w3-teal", "w3-round"], ["target", "_blank", "href", "https://www.udemy.com/course/full-stack-angular9-spring-boot/?couponCode=25BBPMXACCAGE1"], ["href", "https://www.udemy.com/", "target", "_blank"], [1, "w3-container", "w3-card", "w3-white"], [1, "fa", "fa-graduation-cap", "fa-fw", "w3-margin-right", "w3-xxlarge", "w3-text-teal"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "html");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "head");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sidney cv");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "meta", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "meta", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "link", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "link", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "link", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "body", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sidney Brito Cavalcanti");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Java jr developer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Bauru - SP, Brasil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_a_click_26_listener() {
            return ctx.email();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "+55 81 99158-8298");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Skills");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Java");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Angular");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "JavaScript");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Sql");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "20%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Portug\xEAs-BR");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "100%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "English");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "30%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Spanish");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "10%");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Gosto de programar, estou sempre aprendendo novas tecnologias e estou a procura de uma oportunidade para dar o start na minha carreira como desenvolvedor java j\xFAnior. Tenho facilidade em aprender diferentes linguagens de programa\xE7\xE3o, diferentes paradigmas, tecnologias e tenho conhecimento em l\xF3gica de programa\xE7\xE3o, sql, springboot, javaScrip, html, css.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Work Experience");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Programming Student");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, " - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "Abril de 2025");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "Atualmente o curso ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Angular + Spring Boot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " na plataforma da ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Udemmy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Auxiliar de TI");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "2018 - 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Principais atividades: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, " - Criar e manter usu\xE1rio do sistema ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118, " - Realizar backup do banco de dados ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, " - Instala\xE7\xE3o e configura\xE7\xE3o de impressoras ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " - Instala\xE7\xE3o, manuten\xE7\xE3o e upgrade de computadores ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, " - Instala\xE7\xE3o de redes, roteadores, cabeamento. - Dar suporte a usu\xE1rios nas lojas e no escrit\xF3rio. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Operador de CPD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, "2016 - 2018");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Principais atividades: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " - Dar entrada e conferir notas fiscais no recebimento de mercadorias ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, " - Gerar relat\xF3rios de venda, de entrada de mercadorias, de impostos ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " - Dar suporte ao pessoal de frente de loja, fazendo instala\xE7\xE3o e manuten\xE7\xE3o de computadores. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](141, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "h2", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "i", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Education");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Technology and Languages");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "Forever");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](154, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](159, "Udemmy - curso Angular + SpringBoot");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, "Abril 2025 - ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164, "Current");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "Trilha de aprendizado java com Springboot gerando uma API, consumo da API com um app Angular em desenvolvimento");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h5", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](170, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, "bootcamps j\xE1 conclu\xEDdos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](173, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, "2025");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](177, "Bradesco - Java Cloud Native 90h - Abril 2025");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "h6", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "2021 - 2024");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, "TQI Java Developer - 125h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " Spread Java Developer - 95h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](187, " Santander Bootcamp | Fullstack Developer - 125h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](188, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, " Philips Fullstack Developer - 132h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](191, " GFT START #2 Java - 82h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, " everis Quality Assurance Beginner - 44h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](194, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " everis New Talents - Java - 88h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " Eduzz Fullstack Developer - 95h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Cognizant Java Developer - 96h ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */", "html[_ngcontent-%COMP%], body[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {font-family: \"Roboto\", sans-serif}"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/navbar/navbar.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/template/navbar/navbar.component.ts ***!
    \*****************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppTemplateNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 5,
      vars: 0,
      consts: [[1, "sb-topnav", "navbar", "navbar-expand", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["id", "sidebarToggle", "href", "#", 1, "btn", "btn-link", "btn-sm", "order-1", "order-lg-0"], [1, "fas", "fa-bars"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sidney Digital CV");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/sidebar/sidebar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/template/sidebar/sidebar.component.ts ***!
    \*******************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppTemplateSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var SidebarComponent = /*#__PURE__*/function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)();
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 16,
      vars: 0,
      consts: [["id", "layoutSidenav_nav"], ["id", "sidenavAccordion", 1, "sb-sidenav", "accordion", "sb-sidenav-dark"], [1, "sb-sidenav-menu"], [1, "nav"], ["routerLink", "/home", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed"], [1, "sb-nav-link-icon"], [1, "fas", "fa-home"], [1, "sb-sidenav-menu-heading"], ["routerLink", "/buscaCep", "data-toggle", "collapse", "data-target", "#collapseLayouts", "aria-expanded", "false", "aria-controls", "collapseLayouts", 1, "nav-link", "collapsed"], [1, "sb-sidenav-footer"], [1, "small"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Home ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projetos");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " BuscaCep ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Logged in as:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Start Bootstrap ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/template/template.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/template/template.module.ts ***!
    \*********************************************/

  /*! exports provided: TemplateModule */

  /***/
  function srcAppTemplateTemplateModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TemplateModule", function () {
      return TemplateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./navbar/navbar.component */
    "./src/app/template/navbar/navbar.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/template/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TemplateModule = function TemplateModule() {
      _classCallCheck(this, TemplateModule);
    };

    TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: TemplateModule
    });
    TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function TemplateModule_Factory(t) {
        return new (t || TemplateModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TemplateModule, {
        declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
        exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TemplateModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]],
          exports: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/teste/teste.component.ts":
  /*!******************************************!*\
    !*** ./src/app/teste/teste.component.ts ***!
    \******************************************/

  /*! exports provided: TesteComponent */

  /***/
  function srcAppTesteTesteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TesteComponent", function () {
      return TesteComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var TesteComponent = /*#__PURE__*/function () {
      function TesteComponent() {
        _classCallCheck(this, TesteComponent);
      }

      _createClass(TesteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TesteComponent;
    }();

    TesteComponent.ɵfac = function TesteComponent_Factory(t) {
      return new (t || TesteComponent)();
    };

    TesteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TesteComponent,
      selectors: [["app-teste"]],
      decls: 2,
      vars: 0,
      template: function TesteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "teste works!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rlc3RlL3Rlc3RlLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TesteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-teste',
          templateUrl: './teste.component.html',
          styleUrls: ['./teste.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\Sidney\Downloads\clientes-app-template\clientes-app-template\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map