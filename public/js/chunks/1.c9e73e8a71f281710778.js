(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-ripple-directive */ "./node_modules/vue-ripple-directive/src/ripple.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/eventBus */ "./resources/js/src/@core/utils/eventBus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    Ripple: vue_ripple_directive__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  components: {
    BBreadcrumb: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumb"],
    BBreadcrumbItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBreadcrumbItem"],
    BRow: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BRow"],
    BCol: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCol"],
    BDropdown: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdown"],
    BDropdownItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BDropdownItem"],
    BButton: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BButton"]
  },
  setup: function setup() {
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
      t = _useI18nUtils.t;
    return {
      // i18n
      t: t
    };
  },
  methods: {
    action: function action(val) {
      _core_utils_eventBus__WEBPACK_IMPORTED_MODULE_3__["default"].$emit(val);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"]
  },
  data: function data() {
    return {
      app: _themeConfig__WEBPACK_IMPORTED_MODULE_1__["$themeConfig"].app
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BNavItem: bootstrap_vue__WEBPACK_IMPORTED_MODULE_2__["BNavItem"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_0__["default"])(),
      skin = _useAppConfig.skin;
    var isDark = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
      return skin.value === 'dark';
    });
    return {
      skin: skin,
      isDark: isDark
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      routerTransition = _useAppConfig.routerTransition,
      contentWidth = _useAppConfig.contentWidth;
    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      routerTransition = _useAppConfig.routerTransition,
      contentWidth = _useAppConfig.contentWidth;
    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/components/AppBreadcrumb.vue */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AppBreadcrumb: _core_layouts_components_AppBreadcrumb_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  setup: function setup() {
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_1__["default"])(),
      routerTransition = _useAppConfig.routerTransition,
      contentWidth = _useAppConfig.contentWidth;
    return {
      routerTransition: routerTransition,
      contentWidth: contentWidth
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/app-config/useAppConfig */ "./resources/js/src/@core/app-config/useAppConfig.js");
/* harmony import */ var _themeConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @themeConfig */ "./resources/js/themeConfig.js");
/* harmony import */ var _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vertical-nav-menu-items/VerticalNavMenuItems.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue");
/* harmony import */ var _useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useVerticalNavMenu */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a,
    VerticalNavMenuItems: _components_vertical_nav_menu_items_VerticalNavMenuItems_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BImg: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BImg"]
  },
  props: {
    isVerticalMenuActive: {
      type: Boolean,
      required: true
    },
    toggleVerticalMenuActive: {
      type: Function,
      required: true
    },
    navMenuItems: {
      type: Array,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenu = Object(_useVerticalNavMenu__WEBPACK_IMPORTED_MODULE_6__["default"])(props),
      isMouseHovered = _useVerticalNavMenu.isMouseHovered,
      isVerticalMenuCollapsed = _useVerticalNavMenu.isVerticalMenuCollapsed,
      collapseTogglerIcon = _useVerticalNavMenu.collapseTogglerIcon,
      toggleCollapsed = _useVerticalNavMenu.toggleCollapsed,
      updateMouseHovered = _useVerticalNavMenu.updateMouseHovered;
    var _useAppConfig = Object(_core_app_config_useAppConfig__WEBPACK_IMPORTED_MODULE_3__["default"])(),
      skin = _useAppConfig.skin;

    // Shadow bottom is UI specific and can be removed by user => It's not in `useVerticalNavMenu`
    var shallShadowBottom = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["provide"])('isMouseHovered', isMouseHovered);
    var perfectScrollbarSettings = {
      maxScrollbarLength: 60,
      wheelPropagation: false
    };
    var collapseTogglerIconFeather = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
      return collapseTogglerIcon.value === 'unpinned' ? 'CircleIcon' : 'DiscIcon';
    });

    // App Name
    var _$themeConfig$app = _themeConfig__WEBPACK_IMPORTED_MODULE_4__["$themeConfig"].app,
      appName = _$themeConfig$app.appName,
      appLogoImage = _$themeConfig$app.appLogoImage;
    return {
      perfectScrollbarSettings: perfectScrollbarSettings,
      isVerticalMenuCollapsed: isVerticalMenuCollapsed,
      collapseTogglerIcon: collapseTogglerIcon,
      toggleCollapsed: toggleCollapsed,
      isMouseHovered: isMouseHovered,
      updateMouseHovered: updateMouseHovered,
      collapseTogglerIconFeather: collapseTogglerIconFeather,
      // Shadow Bottom
      shallShadowBottom: shallShadowBottom,
      // Skin
      skin: skin,
      // App Name
      appName: appName,
      appLogoImage: appLogoImage
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./useVerticalNavMenuGroup */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js");
/* harmony import */ var _mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mixinVerticalNavMenuGroup */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








// Composition Function


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'VerticalNavMenuGroup',
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_4__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BBadge"],
    BCollapse: bootstrap_vue__WEBPACK_IMPORTED_MODULE_0__["BCollapse"]
  },
  mixins: [_mixinVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_7__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuGr = Object(_useVerticalNavMenuGroup__WEBPACK_IMPORTED_MODULE_6__["default"])(props.item),
      isOpen = _useVerticalNavMenuGr.isOpen,
      isActive = _useVerticalNavMenuGr.isActive,
      updateGroupOpen = _useVerticalNavMenuGr.updateGroupOpen,
      updateIsActive = _useVerticalNavMenuGr.updateIsActive;
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
      t = _useI18nUtils.t;
    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_3__["useUtils"])(),
      canViewVerticalNavMenuGroup = _useAclUtils.canViewVerticalNavMenuGroup;
    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["resolveVerticalNavMenuItemComponent"],
      isOpen: isOpen,
      isActive: isActive,
      updateGroupOpen: updateGroupOpen,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuGroup: canViewVerticalNavMenuGroup,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertical-nav-menu-header */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js");
/* harmony import */ var _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vertical-nav-menu-link/VerticalNavMenuLink.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue");
/* harmony import */ var _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../vertical-nav-menu-group/VerticalNavMenuGroup.vue */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue");
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VerticalNavMenuHeader: _vertical_nav_menu_header__WEBPACK_IMPORTED_MODULE_2__["default"],
    VerticalNavMenuLink: _vertical_nav_menu_link_VerticalNavMenuLink_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    VerticalNavMenuGroup: _vertical_nav_menu_group_VerticalNavMenuGroup_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  setup: function setup() {
    Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["provide"])('openGroups', Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])([]));
    return {
      resolveNavItemComponent: _core_layouts_utils__WEBPACK_IMPORTED_MODULE_0__["resolveVerticalNavMenuItemComponent"]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");
/* harmony import */ var bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue */ "./node_modules/bootstrap-vue/esm/index.js");
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useVerticalNavMenuLink */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js");
/* harmony import */ var _mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mixinVerticalNavMenuLink */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    BLink: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BLink"],
    BBadge: bootstrap_vue__WEBPACK_IMPORTED_MODULE_1__["BBadge"]
  },
  mixins: [_mixinVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_4__["default"]],
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  setup: function setup(props) {
    var _useVerticalNavMenuLi = Object(_useVerticalNavMenuLink__WEBPACK_IMPORTED_MODULE_3__["default"])(props.item),
      isActive = _useVerticalNavMenuLi.isActive,
      linkProps = _useVerticalNavMenuLi.linkProps,
      updateIsActive = _useVerticalNavMenuLi.updateIsActive;
    var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_2__["useUtils"])(),
      t = _useI18nUtils.t;
    var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
      canViewVerticalNavMenuLink = _useAclUtils.canViewVerticalNavMenuLink;
    return {
      isActive: isActive,
      linkProps: linkProps,
      updateIsActive: updateIsActive,
      // ACL
      canViewVerticalNavMenuLink: canViewVerticalNavMenuLink,
      // i18n
      t: t
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*=========================================================================================\n    File Name: vertical-menu.scss\n    Description: A classic vertical modern style menu with expand and collops support. It support\n    light & dark version, flipped layout, right side icons, native scroll and borders menu\n    item separation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vertical-layout.vertical-menu-modern .main-menu {\n  transition: 0.4s cubic-bezier(0.25, 0.8, 0.25, 1), background 0s;\n  backface-visibility: hidden;\n}\n[dir] .vertical-layout.vertical-menu-modern .main-menu {\n  transform: translate3d(0, 0, 0);\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation li a {\n  align-items: center;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n  flex-shrink: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-right: 1.1rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation > li > a i {\n  margin-left: 1.1rem;\n}\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg,\n.vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  font-size: 11px;\n  height: 11px;\n  width: 11px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=ltr] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-right: 1.45rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a svg, [dir=rtl] .vertical-layout.vertical-menu-modern .main-menu .navigation .menu-content > li > a i {\n  margin-left: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > i:before,\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation > li > a > svg:before {\n  height: 20px;\n  width: 20px;\n  font-size: 1.45rem;\n}\n.vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-left: 260px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-expanded .footer {\n  margin-right: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  width: 80px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header {\n  float: right;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header .modern-nav-toggle {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded {\n  width: 260px;\n  z-index: 1000;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .navbar .navbar-header.expanded .modern-nav-toggle {\n  display: block;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.fixed-top, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .navbar.floating-nav {\n  right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n  width: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navbar-header .brand-text,\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .modern-nav-toggle {\n  display: none;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-left: 2.2rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header {\n  margin-right: 2.2rem;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation-header .feather-more-horizontal {\n  display: block;\n  font-size: 1.285rem;\n  width: 18px;\n  height: 18px;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li:last-child {\n  margin-bottom: 1.25rem !important;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  color: #565656;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu:not(.expanded) .navigation li.active a {\n  background: whitesmoke;\n  box-shadow: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded {\n  width: 260px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header span {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation > li.navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .navbar-header .brand-text {\n  display: inline;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu.expanded .modern-nav-toggle {\n  display: block;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation {\n  overflow: visible;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li.navigation-header span {\n  display: none;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu .navigation > li > a {\n  text-overflow: inherit;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-left: 80px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n  margin-right: 80px;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.floating-nav {\n  width: calc(100vw - (100vw - 100%) - 4.4rem - 74px);\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  width: calc(100vw - (100vw - 100%) - 74px);\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  left: 74px;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .header-navbar.navbar-static-top {\n  right: 74px;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=ltr] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-right: 0.425rem;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .toggle-icon, [dir=rtl] .vertical-layout.vertical-menu-modern .collapse-toggle-icon {\n  margin-left: 0.425rem;\n}\n.vertical-layout.vertical-menu-modern .toggle-icon:focus,\n.vertical-layout.vertical-menu-modern .collapse-toggle-icon:focus {\n  outline: none;\n}\n@media (min-width: 992px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 260px;\n}\n}\n@media (max-width: 1199.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=ltr] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .app-content, [dir=rtl] .vertical-layout.vertical-menu-modern.menu-collapsed .footer {\n    margin-right: 0;\n}\n.vertical-layout.vertical-menu-modern.menu-collapsed .main-menu {\n    width: 0;\n}\n}\n@media (max-width: 767.98px) {\n.vertical-layout.vertical-menu-modern .main-menu {\n    width: 0;\n}\n.vertical-layout.vertical-menu-modern .navbar .navbar-header {\n    width: 0;\n}\n[dir=ltr] .vertical-layout.vertical-menu-modern .content, [dir=ltr] .vertical-layout.vertical-menu-modern .footer {\n    margin-left: 0;\n}\n[dir=rtl] .vertical-layout.vertical-menu-modern .content, [dir=rtl] .vertical-layout.vertical-menu-modern .footer {\n    margin-right: 0;\n}\n}\n@keyframes fadein {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fadeout {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\n[dir=ltr] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    animation: none;\n}\n[dir=rtl] .vertical-menu-modern.vertical-layout .main-menu .navigation > li > a > span {\n    animation: none;\n}\n}\n/*=========================================================================================\n    File Name: vertical-overlay-menu.scss\n    Description: A overlay style vertical menu with show and hide support. It support\n    light & dark version, filpped layout, right side icons, native scroll and borders menu\n    item seperation.\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuexy - Vuejs, React, Angular, HTML & Laravel Admin Dashboard Template\n    Author: PIXINVENT\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n[dir=ltr] .vertical-overlay-menu .content {\n  margin-left: 0;\n}\n[dir=rtl] .vertical-overlay-menu .content {\n  margin-right: 0;\n}\n.vertical-overlay-menu .navbar .navbar-header {\n  width: 260px;\n}\n[dir=ltr] .vertical-overlay-menu .navbar .navbar-header {\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .navbar .navbar-header {\n  float: right;\n}\n.vertical-overlay-menu .main-menu, .vertical-overlay-menu.menu-hide .main-menu {\n  opacity: 0;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n  width: 260px;\n}\n[dir] .vertical-overlay-menu .main-menu, [dir] .vertical-overlay-menu.menu-hide .main-menu {\n  transform: translate3d(0, 0, 0);\n}\n[dir=ltr] .vertical-overlay-menu .main-menu, [dir=ltr] .vertical-overlay-menu.menu-hide .main-menu {\n  left: -260px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu, [dir=rtl] .vertical-overlay-menu.menu-hide .main-menu {\n  right: -260px;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg,\n.vertical-overlay-menu .main-menu .navigation > li > a > i {\n  transition: 200ms ease all;\n  height: 20px;\n  width: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=ltr] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-right: 14px;\n  float: left;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > svg, [dir=rtl] .vertical-overlay-menu .main-menu .navigation > li > a > i {\n  margin-left: 14px;\n  float: right;\n}\n.vertical-overlay-menu .main-menu .navigation > li > a > svg:before,\n.vertical-overlay-menu .main-menu .navigation > li > a > i:before {\n  transition: 200ms ease all;\n  font-size: 1.429rem;\n}\n.vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  content: \"\";\n  height: 1rem;\n  width: 1rem;\n  display: inline-block;\n  position: absolute;\n  top: 14px;\n  transition: all 0.2s ease-out;\n}\n[dir] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236e6b7b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-chevron-right'%3E%3Cpolyline points='9 18 15 12 9 6'%3E%3C/polyline%3E%3C/svg%3E\");\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: 1rem;\n  transform: rotate(0deg);\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  right: 20px;\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub > a:after {\n  left: 20px;\n}\n[dir=ltr] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(90deg);\n}\n[dir=rtl] .vertical-overlay-menu .main-menu .navigation li.has-sub.open:not(.menu-item-closing) > a:after {\n  transform: rotate(-90deg);\n}\n.vertical-overlay-menu .main-menu .navigation .navigation-header .feather-more-horizontal {\n  display: none;\n}\n.vertical-overlay-menu.menu-open .main-menu {\n  opacity: 1;\n  transition: width 0.25s, opacity 0.25s, transform 0.25s;\n}\n[dir=ltr] .vertical-overlay-menu.menu-open .main-menu {\n  transform: translate3d(260px, 0, 0);\n}\n[dir=rtl] .vertical-overlay-menu.menu-open .main-menu {\n  transform: translate3d(-260px, 0, 0);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
    ? _c(
        "b-row",
        { staticClass: "content-header" },
        [
          _c(
            "b-col",
            {
              staticClass: "content-header-left mb-2",
              attrs: { cols: "12", md: "9" },
            },
            [
              _c(
                "b-row",
                { staticClass: "breadcrumbs-top" },
                [
                  _c("b-col", { attrs: { cols: "12" } }, [
                    _c(
                      "h2",
                      {
                        staticClass:
                          "content-header-title float-left pr-1 mb-0",
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(_vm.t(_vm.$route.meta.pageTitle)) +
                            "\n        "
                        ),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "breadcrumb-wrapper" },
                      [
                        _c(
                          "b-breadcrumb",
                          [
                            _c(
                              "b-breadcrumb-item",
                              { attrs: { to: "/" } },
                              [
                                _c("feather-icon", {
                                  staticClass: "align-text-top",
                                  attrs: { icon: "HomeIcon", size: "16" },
                                }),
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _vm._l(_vm.$route.meta.breadcrumb, function (item) {
                              return _c(
                                "b-breadcrumb-item",
                                {
                                  key: item.text,
                                  attrs: { active: item.active, to: item.to },
                                },
                                [
                                  _vm._v(
                                    "\n              " +
                                      _vm._s(_vm.t(item.text)) +
                                      "\n            "
                                  ),
                                ]
                              )
                            }),
                          ],
                          2
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _vm.$route.meta.tombol_add
            ? [
                _c(
                  "b-col",
                  {
                    staticClass:
                      "content-header-right text-md-right d-md-block d-none mb-1",
                    attrs: { md: "3", cols: "12" },
                  },
                  [
                    _vm.$route.meta.tombol_add.action
                      ? _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: { 400: true },
                              },
                            ],
                            attrs: {
                              variant: _vm.$route.meta.tombol_add.variant,
                            },
                            on: {
                              click: function ($event) {
                                return _vm.action(
                                  _vm.$route.meta.tombol_add.action
                                )
                              },
                            },
                          },
                          [
                            _vm._v(
                              "\n        " +
                                _vm._s(_vm.$route.meta.tombol_add.text) +
                                "\n      "
                            ),
                          ]
                        )
                      : _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "ripple",
                                rawName: "v-ripple.400",
                                value: "rgba(255, 255, 255, 0.15)",
                                expression: "'rgba(255, 255, 255, 0.15)'",
                                modifiers: { 400: true },
                              },
                            ],
                            attrs: {
                              variant: _vm.$route.meta.tombol_add.variant,
                              href: _vm.$route.meta.tombol_add.link,
                              target: "_blank",
                            },
                          },
                          [
                            _vm._v(
                              "\n        " +
                                _vm._s(_vm.$route.meta.tombol_add.text) +
                                "\n      "
                            ),
                          ]
                        ),
                  ],
                  1
                ),
              ]
            : _vm._e(),
        ],
        2
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("p", { staticClass: "clearfix mb-0" }, [
      _c(
        "span",
        { staticClass: "float-md-left d-block d-md-inline-block mt-25" },
        [
          _vm._v(
            "\n      Copyright © " +
              _vm._s(new Date().getFullYear()) +
              "\n      "
          ),
          _c(
            "b-link",
            {
              staticClass: "ml-25",
              attrs: { href: "https://mas-adi.net/", target: "_blank" },
            },
            [_vm._v("Mas Adi ™")]
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "span",
        { staticClass: "float-md-right d-none d-md-block" },
        [
          _vm._v("v." + _vm._s(_vm.app.appVersion) + "\n      "),
          _c("feather-icon", {
            staticClass: "text-danger stroke-current",
            attrs: { icon: "HeartIcon", size: "21" },
          }),
        ],
        1
      ),
    ]),
    _vm._v(" "),
    _c("p", { staticClass: "d-block d-md-none small" }, [
      _vm._v("Untuk tampilan terbaik minimal resolusi 1360 x 768"),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "b-nav-item",
    {
      on: {
        click: function ($event) {
          _vm.skin = _vm.isDark ? "light" : "dark"
        },
      },
    },
    [
      _c("feather-icon", {
        attrs: { size: "21", icon: (_vm.isDark ? "Sun" : "Moon") + "Icon" },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass,
      ],
      staticStyle: { "padding-top": "110px" },
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "content-wrapper",
          class: _vm.contentWidth === "boxed" ? "container p-0" : null,
        },
        [
          _vm._t("breadcrumb", [_c("app-breadcrumb")]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-body" },
            [
              _c(
                "transition",
                { attrs: { name: _vm.routerTransition, mode: "out-in" } },
                [_vm._t("default")],
                2
              ),
            ],
            1
          ),
        ],
        2
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass,
      ],
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-area-wrapper",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null,
            },
            [
              _vm._t("breadcrumb", [_c("app-breadcrumb")]),
              _vm._v(" "),
              _c("portal-target", {
                attrs: { name: "content-renderer-sidebar-left", slim: "" },
              }),
              _vm._v(" "),
              _c("div", { staticClass: "content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  ),
                ]),
              ]),
            ],
            2
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "app-content content",
      class: [
        { "show-overlay": _vm.$store.state.app.shallShowOverlay },
        _vm.$route.meta.contentClass,
      ],
    },
    [
      _c("div", { staticClass: "content-overlay" }),
      _vm._v(" "),
      _c("div", { staticClass: "header-navbar-shadow" }),
      _vm._v(" "),
      _c(
        "transition",
        { attrs: { name: _vm.routerTransition, mode: "out-in" } },
        [
          _c(
            "div",
            {
              staticClass: "content-wrapper clearfix",
              class: _vm.contentWidth === "boxed" ? "container p-0" : null,
            },
            [
              _vm._t("breadcrumb", [_c("app-breadcrumb")]),
              _vm._v(" "),
              _c("div", { staticClass: "content-detached content-right" }, [
                _c("div", { staticClass: "content-wrapper" }, [
                  _c(
                    "div",
                    { staticClass: "content-body" },
                    [_vm._t("default")],
                    2
                  ),
                ]),
              ]),
              _vm._v(" "),
              _c("portal-target", {
                attrs: {
                  name: "content-renderer-sidebar-detached-left",
                  slim: "",
                },
              }),
            ],
            2
          ),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "main-menu menu-fixed menu-accordion menu-shadow",
      class: [
        {
          expanded:
            !_vm.isVerticalMenuCollapsed ||
            (_vm.isVerticalMenuCollapsed && _vm.isMouseHovered),
        },
        _vm.skin === "light" || _vm.skin === "bordered"
          ? "menu-light"
          : "menu-dark",
      ],
      on: {
        mouseenter: function ($event) {
          return _vm.updateMouseHovered(true)
        },
        mouseleave: function ($event) {
          return _vm.updateMouseHovered(false)
        },
      },
    },
    [
      _c(
        "div",
        { staticClass: "navbar-header expanded" },
        [
          _vm._t(
            "header",
            [
              _c("ul", { staticClass: "nav navbar-nav flex-row" }, [
                _c(
                  "li",
                  { staticClass: "nav-item mr-auto" },
                  [
                    _c(
                      "b-link",
                      {
                        staticClass: "navbar-brand",
                        attrs: { to: { name: "beranda" } },
                      },
                      [
                        _c(
                          "span",
                          { staticClass: "brand-logo" },
                          [
                            _c("b-img", {
                              attrs: { src: _vm.appLogoImage, alt: "logo" },
                            }),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "h2",
                          {
                            staticClass: "brand-text",
                            staticStyle: { "font-size": "1.4rem" },
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.appName) +
                                "\n            "
                            ),
                          ]
                        ),
                      ]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "li",
                  { staticClass: "nav-item nav-toggle" },
                  [
                    _c(
                      "b-link",
                      { staticClass: "nav-link modern-nav-toggle" },
                      [
                        _c("feather-icon", {
                          staticClass: "d-block d-xl-none",
                          attrs: { icon: "XIcon", size: "20" },
                          on: { click: _vm.toggleVerticalMenuActive },
                        }),
                        _vm._v(" "),
                        _c("feather-icon", {
                          staticClass: "d-none d-xl-block collapse-toggle-icon",
                          attrs: {
                            icon: _vm.collapseTogglerIconFeather,
                            size: "20",
                          },
                          on: { click: _vm.toggleCollapsed },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ]),
            ],
            {
              toggleVerticalMenuActive: _vm.toggleVerticalMenuActive,
              toggleCollapsed: _vm.toggleCollapsed,
              collapseTogglerIcon: _vm.collapseTogglerIcon,
            }
          ),
        ],
        2
      ),
      _vm._v(" "),
      _c("div", {
        staticClass: "shadow-bottom",
        class: { "d-block": _vm.shallShadowBottom },
      }),
      _vm._v(" "),
      _c(
        "vue-perfect-scrollbar",
        {
          staticClass: "main-menu-content scroll-area",
          attrs: { settings: _vm.perfectScrollbarSettings, tagname: "ul" },
          on: {
            "ps-scroll-y": function (evt) {
              _vm.shallShadowBottom = evt.srcElement.scrollTop > 0
            },
          },
        },
        [
          _c("vertical-nav-menu-items", {
            staticClass: "navigation navigation-main",
            attrs: { items: _vm.navMenuItems },
          }),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canViewVerticalNavMenuGroup(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item has-sub",
          class: {
            open: _vm.isOpen,
            disabled: _vm.item.disabled,
            "sidebar-group-active": _vm.isActive,
          },
        },
        [
          _c(
            "b-link",
            {
              staticClass: "d-flex align-items-center",
              on: {
                click: function () {
                  return _vm.updateGroupOpen(!_vm.isOpen)
                },
              },
            },
            [
              _c("font-awesome-icon", {
                attrs: { icon: "fa-solid fa-" + _vm.item.icon, size: "2xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title))),
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary",
                      },
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e(),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "b-collapse",
            {
              staticClass: "menu-content",
              attrs: { tag: "ul" },
              model: {
                value: _vm.isOpen,
                callback: function ($$v) {
                  _vm.isOpen = $$v
                },
                expression: "isOpen",
              },
            },
            _vm._l(_vm.item.children, function (child) {
              return _c(_vm.resolveNavItemComponent(child), {
                key: child.header,
                ref: "groupChild",
                refInFor: true,
                tag: "component",
                attrs: { item: child },
              })
            }),
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "ul",
    _vm._l(_vm.items, function (item) {
      return _c(_vm.resolveNavItemComponent(item), {
        key: item.header,
        tag: "component",
        attrs: { item: item },
      })
    }),
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.canViewVerticalNavMenuLink(_vm.item)
    ? _c(
        "li",
        {
          staticClass: "nav-item",
          class: {
            active: _vm.isActive,
            disabled: _vm.item.disabled,
          },
        },
        [
          _c(
            "b-link",
            _vm._b(
              {
                staticClass: "d-flex align-items-center",
                class: { "text-danger": _vm.item.variant },
              },
              "b-link",
              _vm.linkProps,
              false
            ),
            [
              _c("font-awesome-icon", {
                attrs: { icon: "fa-solid fa-" + _vm.item.icon, size: "2xl" },
              }),
              _vm._v(" "),
              _c("span", { staticClass: "menu-title text-truncate" }, [
                _vm._v(_vm._s(_vm.t(_vm.item.title))),
              ]),
              _vm._v(" "),
              _vm.item.tag
                ? _c(
                    "b-badge",
                    {
                      staticClass: "mr-1 ml-auto",
                      attrs: {
                        pill: "",
                        variant: _vm.item.tagVariant || "primary",
                      },
                    },
                    [_vm._v("\n      " + _vm._s(_vm.item.tag) + "\n    ")]
                  )
                : _vm._e(),
            ],
            1
          ),
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/sass-loader/dist/cjs.js??ref--11-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss& */ "./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue":
/*!*********************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppBreadcrumb.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=template&id=0c43242a& */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&");
/* harmony import */ var _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/AppBreadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBreadcrumb.vue?vue&type=template&id=0c43242a& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppBreadcrumb.vue?vue&type=template&id=0c43242a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBreadcrumb_vue_vue_type_template_id_0c43242a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppFooter.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppFooter.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=template&id=3448057c& */ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&");
/* harmony import */ var _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/AppFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppFooter.vue?vue&type=template&id=3448057c& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/AppFooter.vue?vue&type=template&id=3448057c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppFooter_vue_vue_type_template_id_3448057c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=template&id=81eb8db0& */ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&");
/* harmony import */ var _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DarkToggler.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DarkToggler.vue?vue&type=template&id=81eb8db0& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/app-navbar/components/DarkToggler.vue?vue&type=template&id=81eb8db0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DarkToggler_vue_vue_type_template_id_81eb8db0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&");
/* harmony import */ var _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&":
/*!*******************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& ***!
  \*******************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererDefault.vue?vue&type=template&id=215a1b24&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererDefault_vue_vue_type_template_id_215a1b24___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&");
/* harmony import */ var _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeft.vue?vue&type=template&id=7f5275ac&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeft_vue_vue_type_template_id_7f5275ac___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&");
/* harmony import */ var _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["render"],
  _LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&":
/*!************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/components/layout-content-renderer/LayoutContentRendererLeftDetached.vue?vue&type=template&id=397a2c88&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LayoutContentRendererLeftDetached_vue_vue_type_template_id_397a2c88___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=template&id=2f85298e& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&");
/* harmony import */ var _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VerticalNavMenu_vue_vue_type_style_index_0_id_2f85298e_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss&":
/*!*******************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss& ***!
  \*******************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_2f85298e_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/style-loader!../../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../../../node_modules/sass-loader/dist/cjs.js??ref--11-0!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=style&index=0&id=2f85298e&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_2f85298e_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_2f85298e_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_2f85298e_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_sass_loader_dist_cjs_js_ref_11_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_style_index_0_id_2f85298e_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&":
/*!****************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e& ***!
  \****************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenu.vue?vue&type=template&id=2f85298e& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/VerticalNavMenu.vue?vue&type=template&id=2f85298e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenu_vue_vue_type_template_id_2f85298e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&");
/* harmony import */ var _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/VerticalNavMenuGroup.vue?vue&type=template&id=4ef8cc54&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuGroup_vue_vue_type_template_id_4ef8cc54___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js":
/*!*****************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/mixinVerticalNavMenuGroup.js ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-group/useVerticalNavMenuGroup.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuGroup; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


// eslint-disable-next-line object-curly-newline



function useVerticalNavMenuGroup(item) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_3__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isVerticalMenuCollapsed, function (val) {
    /* eslint-disable no-use-before-define */
    // * Handles case if routing is done outside of vertical menu
    // i.e. From Customizer Collapse or Using Link
    if (!isMouseHovered.value) {
      if (val) isOpen.value = false;else if (!val && isActive.value) isOpen.value = true;
    }
    /* eslint-enable */
  });

  // ------------------------------------------------
  // isMouseHovered
  // ------------------------------------------------
  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["inject"])('isMouseHovered');

  // Collapse menu when menu is collapsed and show on open
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isMouseHovered, function (val) {
    if (isVerticalMenuCollapsed.value) {
      // * we have used `val && val && isActive.value` to only open active menu on mouseEnter and close all menu on mouseLeave
      // * If we don't use `isActive.value` with `val` it can open other groups which are not active as well
      // eslint-disable-next-line no-use-before-define
      isOpen.value = val && isActive.value;
    }
  });

  // ------------------------------------------------
  // openGroups
  // ------------------------------------------------
  var openGroups = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["inject"])('openGroups');

  // Collapse other groups if one group is opened
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(openGroups, function (currentOpenGroups) {
    var clickedGroup = currentOpenGroups[currentOpenGroups.length - 1];

    // If current group is not clicked group or current group is not active => Proceed with closing it
    // eslint-disable-next-line no-use-before-define
    if (clickedGroup !== item.title && !isActive.value) {
      // If clicked group is not child of current group
      // eslint-disable-next-line no-use-before-define
      if (!doesHaveChild(clickedGroup)) isOpen.value = false;
    }
  });

  // ------------------------------------------------
  // isOpen
  // ------------------------------------------------
  var isOpen = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isOpen, function (val) {
    // if group is opened push it to the array
    if (val) openGroups.value.push(item.title);
  });
  var updateGroupOpen = function updateGroupOpen(val) {
    // eslint-disable-next-line no-use-before-define
    isOpen.value = val;
  };

  // ------------------------------------------------
  // isActive
  // ------------------------------------------------
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["ref"])(false);
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_2__["watch"])(isActive, function (val) {
    /*
      If menu is collapsed and not hovered(optional) then don't open group
    */
    if (val) {
      if (!isVerticalMenuCollapsed.value) isOpen.value = val;
    } else {
      isOpen.value = val;
    }
  });
  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_4__["isNavGroupActive"])(item.children);
  };

  // ------------------------------------------------
  // Other Methods
  // ------------------------------------------------

  var doesHaveChild = function doesHaveChild(title) {
    return item.children.some(function (child) {
      return child.title === title;
    });
  };
  return {
    isOpen: isOpen,
    isActive: isActive,
    updateGroupOpen: updateGroupOpen,
    openGroups: openGroups,
    isMouseHovered: isMouseHovered,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js":
/*!**********************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-header/index.js ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/libs/i18n */ "./resources/js/src/@core/libs/i18n/index.js");
/* harmony import */ var _core_libs_acl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/libs/acl */ "./resources/js/src/@core/libs/acl/index.js");


var _useI18nUtils = Object(_core_libs_i18n__WEBPACK_IMPORTED_MODULE_0__["useUtils"])(),
  t = _useI18nUtils.t;
var _useAclUtils = Object(_core_libs_acl__WEBPACK_IMPORTED_MODULE_1__["useUtils"])(),
  canViewVerticalNavMenuHeader = _useAclUtils.canViewVerticalNavMenuHeader;
/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  render: function render(h) {
    var span = h('span', {}, t(this.item.header));
    var icon = h('feather-icon', {
      props: {
        icon: 'MoreHorizontalIcon',
        size: '18'
      }
    });
    if (canViewVerticalNavMenuHeader(this.item)) {
      return h('li', {
        "class": 'navigation-header text-truncate'
      }, [span, icon]);
    }
    return h();
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=template&id=4db36714& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&");
/* harmony import */ var _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuItems.vue?vue&type=template&id=4db36714& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-items/VerticalNavMenuItems.vue?vue&type=template&id=4db36714&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuItems_vue_vue_type_template_id_4db36714___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue":
/*!***********************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue ***!
  \***********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&");
/* harmony import */ var _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../../../../node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8& */ "./node_modules/laravel-mix/node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/VerticalNavMenuLink.vue?vue&type=template&id=4f4927f8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_laravel_mix_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VerticalNavMenuLink_vue_vue_type_template_id_4f4927f8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js":
/*!***************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/mixinVerticalNavMenuLink.js ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  watch: {
    $route: {
      immediate: true,
      handler: function handler() {
        this.updateIsActive();
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js":
/*!*************************************************************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/components/vertical-nav-menu-link/useVerticalNavMenuLink.js ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenuLink; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/layouts/utils */ "./resources/js/src/@core/layouts/utils.js");


function useVerticalNavMenuLink(item) {
  var isActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var linkProps = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["navLinkProps"])(item);
  var updateIsActive = function updateIsActive() {
    isActive.value = Object(_core_layouts_utils__WEBPACK_IMPORTED_MODULE_1__["isNavLinkActive"])(item);
  };
  return {
    isActive: isActive,
    linkProps: linkProps,
    updateIsActive: updateIsActive
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/components/vertical-nav-menu/useVerticalNavMenu.js ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalNavMenu; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");


function useVerticalNavMenu(props) {
  // ------------------------------------------------
  // isVerticalMenuCollapsed
  // ------------------------------------------------
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])({
    get: function get() {
      return _store__WEBPACK_IMPORTED_MODULE_1__["default"].state.verticalMenu.isVerticalMenuCollapsed;
    },
    set: function set(val) {
      _store__WEBPACK_IMPORTED_MODULE_1__["default"].commit('verticalMenu/UPDATE_VERTICAL_MENU_COLLAPSED', val);
    }
  });

  // ------------------------------------------------
  // collapseTogglerIcon
  // ------------------------------------------------
  var collapseTogglerIcon = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["computed"])(function () {
    if (props.isVerticalMenuActive) {
      return isVerticalMenuCollapsed.value ? 'unpinned' : 'pinned';
    }
    return 'close';
  });
  var isMouseHovered = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["ref"])(false);
  var updateMouseHovered = function updateMouseHovered(val) {
    isMouseHovered.value = val;
  };
  var toggleCollapsed = function toggleCollapsed() {
    isVerticalMenuCollapsed.value = !isVerticalMenuCollapsed.value;
  };
  return {
    isMouseHovered: isMouseHovered,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    collapseTogglerIcon: collapseTogglerIcon,
    toggleCollapsed: toggleCollapsed,
    updateMouseHovered: updateMouseHovered
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/layout-vertical/useVerticalLayout.js":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/@core/layouts/layout-vertical/useVerticalLayout.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return useVerticalLayout; });
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/store */ "./resources/js/src/store/index.js");



function useVerticalLayout(navbarType, footerType) {
  var isVerticalMenuActive = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])(true);
  var toggleVerticalMenuActive = function toggleVerticalMenuActive() {
    isVerticalMenuActive.value = !isVerticalMenuActive.value;
  };
  var currentBreakpoint = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["ref"])('xl');
  var isVerticalMenuCollapsed = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    return _store__WEBPACK_IMPORTED_MODULE_2__["default"].state.verticalMenu.isVerticalMenuCollapsed;
  });
  var layoutClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    var classes = [];
    if (currentBreakpoint.value === 'xl') {
      classes.push('vertical-menu-modern');
      classes.push(isVerticalMenuCollapsed.value ? 'menu-collapsed' : 'menu-expanded');
    } else {
      classes.push('vertical-overlay-menu');
      classes.push(isVerticalMenuActive.value ? 'menu-open' : 'menu-hide');
    }

    // Navbar
    classes.push("navbar-".concat(navbarType.value));

    // Footer
    if (footerType.value === 'sticky') classes.push('footer-fixed');
    if (footerType.value === 'static') classes.push('footer-static');
    if (footerType.value === 'hidden') classes.push('footer-hidden');
    return classes;
  });

  // ------------------------------------------------
  // Resize handler for Breakpoint
  // ------------------------------------------------
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["watch"])(currentBreakpoint, function (val) {
    isVerticalMenuActive.value = val === 'xl';
  });
  var resizeHandler = function resizeHandler() {
    // ? This closes vertical menu when title bar is shown/hidden in mobile browsers.
    // ? We will watch for breakpoint to overcome this issue
    // isVerticalMenuActive.value = window.innerWidth >= 1200

    // ! You can use store getter to get breakpoint
    if (window.innerWidth >= 1200) currentBreakpoint.value = 'xl';else if (window.innerWidth >= 992) currentBreakpoint.value = 'lg';else if (window.innerWidth >= 768) currentBreakpoint.value = 'md';else if (window.innerWidth >= 576) currentBreakpoint.value = 'sm';else currentBreakpoint.value = 'xs';
  };
  var overlayClasses = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    if (currentBreakpoint.value !== 'xl' && isVerticalMenuActive.value) return 'show';
    return null;
  });
  var navbarTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    if (navbarType.value === 'sticky') return 'fixed-top';
    if (navbarType.value === 'static') return 'navbar-static-top';
    if (navbarType.value === 'hidden') return 'd-none';
    return 'floating-nav';
  });
  var footerTypeClass = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["computed"])(function () {
    if (footerType.value === 'static') return 'footer-static';
    if (footerType.value === 'hidden') return 'd-none';
    return '';
  });
  return {
    isVerticalMenuActive: isVerticalMenuActive,
    toggleVerticalMenuActive: toggleVerticalMenuActive,
    isVerticalMenuCollapsed: isVerticalMenuCollapsed,
    layoutClasses: layoutClasses,
    overlayClasses: overlayClasses,
    navbarTypeClass: navbarTypeClass,
    footerTypeClass: footerTypeClass,
    resizeHandler: resizeHandler
  };
}

/***/ }),

/***/ "./resources/js/src/@core/layouts/utils.js":
/*!*************************************************!*\
  !*** ./resources/js/src/@core/layouts/utils.js ***!
  \*************************************************/
/*! exports provided: resolveVerticalNavMenuItemComponent, resolveHorizontalNavMenuItemComponent, resolveNavDataRouteName, isNavLinkActive, isNavGroupActive, navLinkProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveVerticalNavMenuItemComponent", function() { return resolveVerticalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveHorizontalNavMenuItemComponent", function() { return resolveHorizontalNavMenuItemComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveNavDataRouteName", function() { return resolveNavDataRouteName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavLinkActive", function() { return isNavLinkActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNavGroupActive", function() { return isNavGroupActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navLinkProps", function() { return navLinkProps; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _core_utils_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/utils */ "./resources/js/src/@core/utils/utils.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");






/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */
var resolveVerticalNavMenuItemComponent = function resolveVerticalNavMenuItemComponent(item) {
  if (item.header) return 'vertical-nav-menu-header';
  if (item.children) return 'vertical-nav-menu-group';
  return 'vertical-nav-menu-link';
};

/**
 * Return which component to render based on it's data/context
 * @param {Object} item nav menu item
 */
var resolveHorizontalNavMenuItemComponent = function resolveHorizontalNavMenuItemComponent(item) {
  if (item.children) return 'horizontal-nav-menu-group';
  return 'horizontal-nav-menu-link';
};

/**
 * Return route name for navigation link
 * If link is string then it will assume it is route-name
 * IF link is object it will resolve the object and will return the link
 * @param {Object, String} link navigation link object/string
 */
var resolveNavDataRouteName = function resolveNavDataRouteName(link) {
  if (Object(_core_utils_utils__WEBPACK_IMPORTED_MODULE_3__["isObject"])(link.route)) {
    var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(link.route),
      route = _router$resolve.route;
    return route.name;
  }
  return link.route;
};

/**
 * Check if nav-link is active
 * @param {Object} link nav-link object
 */
var isNavLinkActive = function isNavLinkActive(link) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.matched;

  // Check if provided route matches route's matched route
  var resolveRoutedName = resolveNavDataRouteName(link);
  if (!resolveRoutedName) return false;
  return matchedRoutes.some(function (route) {
    return route.name === resolveRoutedName || route.meta.navActiveLink === resolveRoutedName;
  });
};

/**
 * Check if nav group is
 * @param {Array} children Group children
 */
var isNavGroupActive = function isNavGroupActive(children) {
  // Matched routes array of current route
  var matchedRoutes = _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.matched;
  return children.some(function (child) {
    // If child have children => It's group => Go deeper(recursive)
    if (child.children) {
      return isNavGroupActive(child.children);
    }

    // else it's link => Check for matched Route
    return isNavLinkActive(child, matchedRoutes);
  });
};

/**
 * Return b-link props to use
 * @param {Object, String} item navigation routeName or route Object provided in navigation data
 */
// prettier-ignore
var navLinkProps = function navLinkProps(item) {
  return Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_4__["computed"])(function () {
    var props = {};

    // If route is string => it assumes => Create route object from route name
    // If route is not string => It assumes it's route object => returns route object
    if (item.route) props.to = typeof item.route === 'string' ? {
      name: item.route
    } : item.route;else {
      props.href = item.href;
      props.target = '_blank';
      props.rel = 'nofollow';
    }
    if (!props.target) props.target = item.target || null;
    return props;
  });
};

/***/ }),

/***/ "./resources/js/src/@core/libs/acl/index.js":
/*!**************************************************!*\
  !*** ./resources/js/src/@core/libs/acl/index.js ***!
  \**************************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/libs/acl/utils.js");


var useUtils = function useUtils() {
  return Object(d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils__WEBPACK_IMPORTED_MODULE_1__);
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/libs/acl/utils.js":
/*!**************************************************!*\
  !*** ./resources/js/src/@core/libs/acl/utils.js ***!
  \**************************************************/
/*! exports provided: can, canViewVerticalNavMenuLink, canViewVerticalNavMenuGroup, canViewVerticalNavMenuHeader, canViewHorizontalNavMenuLink, canViewHorizontalNavMenuHeaderLink, canViewHorizontalNavMenuGroup, canViewHorizontalNavMenuHeaderGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "can", function() { return can; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuLink", function() { return canViewVerticalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuGroup", function() { return canViewVerticalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewVerticalNavMenuHeader", function() { return canViewVerticalNavMenuHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuLink", function() { return canViewHorizontalNavMenuLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderLink", function() { return canViewHorizontalNavMenuHeaderLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuGroup", function() { return canViewHorizontalNavMenuGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canViewHorizontalNavMenuHeaderGroup", function() { return canViewHorizontalNavMenuHeaderGroup; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



/**
 * Returns ability result if ACL is configured or else just return true
 * Useful if you don't know if ACL is configured or not
 * Used in @core files to handle absence of ACL without errors
 * @param {String} action CASL Actions // https://casl.js.org/v4/en/guide/intro#basics
 * @param {String} subject CASL Subject // https://casl.js.org/v4/en/guide/intro#basics
 */
var can = function can(action, subject) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__["getCurrentInstance"])().proxy;
  return vm.$can ? vm.$can(action, subject) : true;
};

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
var canViewVerticalNavMenuLink = function canViewVerticalNavMenuLink(item) {
  if (item.action) {
    return can(item.action, item.resource);
  } else {
    return true;
  }
};

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style
var canViewVerticalNavMenuGroup = function canViewVerticalNavMenuGroup(item) {
  // ! This same logic is used in canViewHorizontalNavMenuGroup and canViewHorizontalNavMenuHeaderGroup. So make sure to update logic in them as well
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  });

  // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child
  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }
  return can(item.action, item.resource) && hasAnyVisibleChild;
};

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
var canViewVerticalNavMenuHeader = function canViewVerticalNavMenuHeader(item) {
  return can(item.action, item.resource);
};

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
var canViewHorizontalNavMenuLink = function canViewHorizontalNavMenuLink(item) {
  //return can(item.action, item.resource)
  if (item.action) {
    return can(item.action, item.resource);
  } else {
    return true;
  }
};

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource
 * @param {Object} item navigation object item
 */
var canViewHorizontalNavMenuHeaderLink = function canViewHorizontalNavMenuHeaderLink(item) {
  //can(item.action, item.resource)
  if (item.action) {
    return can(item.action, item.resource);
  } else {
    return true;
  }
};

/**
 * Check if user can view item based on it's ability
 * Based on item's action and resource & Hide group if all of it's children are hidden
 * @param {Object} item navigation object item
 */
// eslint-disable-next-line arrow-body-style
var canViewHorizontalNavMenuGroup = function canViewHorizontalNavMenuGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup
  var hasAnyVisibleChild = item.children.some(function (i) {
    return can(i.action, i.resource);
  });

  // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child
  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }
  return can(item.action, item.resource) && hasAnyVisibleChild;
};

// eslint-disable-next-line arrow-body-style
var canViewHorizontalNavMenuHeaderGroup = function canViewHorizontalNavMenuHeaderGroup(item) {
  // ? Same logic as canViewVerticalNavMenuGroup but with extra content

  // eslint-disable-next-line arrow-body-style
  var hasAnyVisibleChild = item.children.some(function (grpOrItem) {
    // If it have children => It's grp
    // Call ACL function based on grp/link
    return grpOrItem.children ? canViewHorizontalNavMenuGroup(grpOrItem) : canViewHorizontalNavMenuLink(grpOrItem);
  });

  // If resource and action is defined in item => Return based on children visibility (Hide group if no child is visible)
  // Else check for ability using provided resource and action along with checking if has any visible child
  if (!(item.action && item.resource)) {
    return hasAnyVisibleChild;
  }
  return can(item.action, item.resource) && hasAnyVisibleChild;
};

/***/ }),

/***/ "./resources/js/src/@core/libs/i18n/index.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/libs/i18n/index.js ***!
  \***************************************************/
/*! exports provided: useUtils, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useUtils", function() { return useUtils; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./resources/js/src/@core/libs/i18n/utils.js");


var useUtils = function useUtils() {
  return Object(d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _utils__WEBPACK_IMPORTED_MODULE_1__);
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/libs/i18n/utils.js":
/*!***************************************************!*\
  !*** ./resources/js/src/@core/libs/i18n/utils.js ***!
  \***************************************************/
/*! exports provided: t, _ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_", function() { return _; });
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");


/**
 * Returns translated string if i18n package is available to Vue
 * If i18n is not configured then it will simply return what is being passed
 * Useful if you don't know if i18n is configured or not
 * Used in @core files to handle absence of i18n without errors
 * @param {String} key i18n key to use for translation
 */
var t = function t(key) {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__["getCurrentInstance"])().proxy;
  return vm.$t ? vm.$t(key) : key;
};
var _ = null;

/***/ }),

/***/ "./resources/js/src/@core/utils/eventBus.js":
/*!**************************************************!*\
  !*** ./resources/js/src/@core/utils/eventBus.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);

var eventBus = new vue__WEBPACK_IMPORTED_MODULE_0___default.a();
/* harmony default export */ __webpack_exports__["default"] = (eventBus);

/***/ }),

/***/ "./resources/js/src/@core/utils/utils.js":
/*!***********************************************!*\
  !*** ./resources/js/src/@core/utils/utils.js ***!
  \***********************************************/
/*! exports provided: isObject, isToday, getRandomBsVariant, isDynamicRouteActive, useRouter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isObject", function() { return isObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isToday", function() { return isToday; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomBsVariant", function() { return getRandomBsVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isDynamicRouteActive", function() { return isDynamicRouteActive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useRouter", function() { return useRouter; });
/* harmony import */ var d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/router */ "./resources/js/src/router/index.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");



// eslint-disable-next-line object-curly-newline

var isObject = function isObject(obj) {
  return Object(d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_1__["default"])(obj) === 'object' && obj !== null;
};
var isToday = function isToday(date) {
  var today = new Date();
  return (/* eslint-disable operator-linebreak */
    date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
    /* eslint-enable */
  );
};

var getRandomFromArray = function getRandomFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
};

// ? Light and Dark variant is not included
// prettier-ignore
var getRandomBsVariant = function getRandomBsVariant() {
  return getRandomFromArray(['primary', 'secondary', 'success', 'warning', 'danger', 'info']);
};
var isDynamicRouteActive = function isDynamicRouteActive(route) {
  var _router$resolve = _router__WEBPACK_IMPORTED_MODULE_2__["default"].resolve(route),
    resolvedRoute = _router$resolve.route;
  return resolvedRoute.path === _router__WEBPACK_IMPORTED_MODULE_2__["default"].currentRoute.path;
};

// Thanks: https://medium.com/better-programming/reactive-vue-routes-with-the-composition-api-18c1abd878d1
var useRouter = function useRouter() {
  var vm = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["getCurrentInstance"])().proxy;
  var state = Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["reactive"])({
    route: vm.$route
  });
  Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["watch"])(function () {
    return vm.$route;
  }, function (r) {
    state.route = r;
  });
  return Object(d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(d_WinNMP_WWW_ridwan_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, Object(_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__["toRefs"])(state)), {}, {
    router: vm.$router
  });
};

/**
 * This is just enhancement over Object.extend [Gives deep extend]
 * @param {target} a Object which contains values to be overridden
 * @param {source} b Object which contains values to override
 */
// export const objectExtend = (a, b) => {
//   // Don't touch 'null' or 'undefined' objects.
//   if (a == null || b == null) {
//     return a
//   }

//   Object.keys(b).forEach(key => {
//     if (Object.prototype.toString.call(b[key]) === '[object Object]') {
//       if (Object.prototype.toString.call(a[key]) !== '[object Object]') {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = b[key]
//       } else {
//         // eslint-disable-next-line no-param-reassign
//         a[key] = objectExtend(a[key], b[key])
//       }
//     } else {
//       // eslint-disable-next-line no-param-reassign
//       a[key] = b[key]
//     }
//   })

//   return a
// }

/***/ }),

/***/ "./resources/js/src/navigation/vertical/index.js":
/*!*******************************************************!*\
  !*** ./resources/js/src/navigation/vertical/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  icon: 'house',
  route: 'beranda',
  title: 'Dashboard',
  resource: 'Web',
  action: 'read'
}, {
  icon: 'user',
  route: 'profile',
  title: 'Profile',
  resource: 'Web',
  action: 'read'
}, {
  icon: 'share',
  route: 'auto-reply',
  title: 'Auto reply',
  resource: 'Web',
  action: 'read'
}, {
  icon: 'building-user',
  route: 'groups',
  title: 'Groups',
  resource: 'Web',
  action: 'read'
}, {
  icon: 'gear',
  route: 'settings',
  title: 'Setting',
  resource: 'Administrator',
  action: 'read'
}, {
  icon: 'dollar-sign',
  route: 'pricing',
  title: 'Pricing',
  resource: 'Web',
  action: 'read'
}, {
  icon: 'right-to-bracket',
  route: 'logout',
  title: 'Keluar Aplikasi',
  resource: 'Web',
  action: 'read',
  variant: 'danger'
}]);

/***/ })

}]);