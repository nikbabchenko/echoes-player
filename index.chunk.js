webpackJsonp(["index"],{

/***/ "./src/app/containers/user/index.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModuleNgFactory", function() { return UserModuleNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__("./src/app/containers/user/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_ngx_tooltip_TooltipContent_ngfactory__ = __webpack_require__("./node_modules/ngx-tooltip/TooltipContent.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playlist_view_playlist_view_component_ngfactory__ = __webpack_require__("./src/app/containers/playlist-view/playlist-view.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_component_ngfactory__ = __webpack_require__("./src/app/containers/user/user.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__playlists_playlists_component_ngfactory__ = __webpack_require__("./src/app/containers/user/playlists/playlists.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_youtube_player__ = __webpack_require__("./node_modules/ngx-youtube-player/esm5/ngx-youtube-player.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__playlist_view_playlist_view_proxy__ = __webpack_require__("./src/app/containers/playlist-view/playlist-view.proxy.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__core_store_user_profile_user_profile_actions__ = __webpack_require__("./src/app/core/store/user-profile/user-profile.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__core_api_app_player_api__ = __webpack_require__("./src/app/core/api/app-player.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__core_api_app_api__ = __webpack_require__("./src/app/core/api/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_guard__ = __webpack_require__("./src/app/containers/user/user.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__core_services_authorization_service__ = __webpack_require__("./src/app/core/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_player_service__ = __webpack_require__("./src/app/containers/user/user-player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__core_services_now_playlist_service__ = __webpack_require__("./src/app/core/services/now-playlist.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__core_services_user_profile_service__ = __webpack_require__("./src/app/core/services/user-profile.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_infinite_scroll__ = __webpack_require__("./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_ngx_typeahead__ = __webpack_require__("./node_modules/ngx-typeahead/esm5/ngx-typeahead.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_tooltip_index__ = __webpack_require__("./node_modules/ngx-tooltip/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_tooltip_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_tooltip_index__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__shared_index__ = __webpack_require__("./src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__app_navbar_index__ = __webpack_require__("./src/app/containers/app-navbar/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__playlist_view_index__ = __webpack_require__("./src/app/containers/playlist-view/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__playlist_view_playlist_view_component__ = __webpack_require__("./src/app/containers/playlist-view/playlist-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__core_resolvers_playlist_videos_resolver__ = __webpack_require__("./src/app/core/resolvers/playlist-videos.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__core_resolvers_playlist_resolver__ = __webpack_require__("./src/app/core/resolvers/playlist.resolver.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__user_component__ = __webpack_require__("./src/app/containers/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__playlists_playlists_component__ = __webpack_require__("./src/app/containers/user/playlists/playlists.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_index,_.._.._.._node_modules_ngx_tooltip_TooltipContent.ngfactory,_playlist_view_playlist_view.component.ngfactory,_user.component.ngfactory,_playlists_playlists.component.ngfactory,_angular_common,_angular_forms,ngx_youtube_player,_angular_common_http,_playlist_view_playlist_view.proxy,_ngrx_store,_.._core_store_user_profile_user_profile.actions,_.._core_api_app_player.api,_.._core_api_app.api,_user.guard,_.._core_services_authorization.service,_angular_router,_user_player.service,_.._core_services_now_playlist.service,_.._core_services_user_profile.service,ngx_infinite_scroll,ngx_typeahead,ngx_tooltip_index,_.._shared_index,_app_navbar_index,_playlist_view_index,_playlist_view_playlist_view.component,_.._core_resolvers_playlist_videos.resolver,_.._core_resolvers_playlist.resolver,_user.component,_playlists_playlists.component PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_index,_.._.._.._node_modules_ngx_tooltip_TooltipContent.ngfactory,_playlist_view_playlist_view.component.ngfactory,_user.component.ngfactory,_playlists_playlists.component.ngfactory,_angular_common,_angular_forms,ngx_youtube_player,_angular_common_http,_playlist_view_playlist_view.proxy,_ngrx_store,_.._core_store_user_profile_user_profile.actions,_.._core_api_app_player.api,_.._core_api_app.api,_user.guard,_.._core_services_authorization.service,_angular_router,_user_player.service,_.._core_services_now_playlist.service,_.._core_services_user_profile.service,ngx_infinite_scroll,ngx_typeahead,ngx_tooltip_index,_.._shared_index,_app_navbar_index,_playlist_view_index,_playlist_view_playlist_view.component,_.._core_resolvers_playlist_videos.resolver,_.._core_resolvers_playlist.resolver,_user.component,_playlists_playlists.component PURE_IMPORTS_END */
































var UserModuleNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcmf"](__WEBPACK_IMPORTED_MODULE_1__index__["a" /* UserModule */], [], function (_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmod"]([__WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵCodegenComponentFactoryResolver"], [[8, [__WEBPACK_IMPORTED_MODULE_2__node_modules_ngx_tooltip_TooltipContent_ngfactory__["a" /* TooltipContentNgFactory */], __WEBPACK_IMPORTED_MODULE_3__playlist_view_playlist_view_component_ngfactory__["a" /* PlaylistViewComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_4__user_component_ngfactory__["a" /* UserComponentNgFactory */], __WEBPACK_IMPORTED_MODULE_5__playlists_playlists_component_ngfactory__["a" /* PlaylistsComponentNgFactory */]]], [3, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModuleRef"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_6__angular_common__["NgLocalization"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["NgLocaleLocalization"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["LOCALE_ID"], [2, __WEBPACK_IMPORTED_MODULE_6__angular_common__["ɵa"]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["o" /* ɵi */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["o" /* ɵi */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_8_ngx_youtube_player__["c" /* ɵb */], __WEBPACK_IMPORTED_MODULE_8_ngx_youtube_player__["c" /* ɵb */], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["k" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["u" /* ɵh */], [__WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["PLATFORM_ID"], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["s" /* ɵf */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["v" /* ɵi */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["v" /* ɵi */], [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["k" /* HttpXsrfTokenExtractor */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["t" /* ɵg */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["o" /* ɵb */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["q" /* ɵd */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["l" /* JsonpClientBackend */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["l" /* JsonpClientBackend */], [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["o" /* ɵb */], __WEBPACK_IMPORTED_MODULE_6__angular_common__["DOCUMENT"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](5120, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */], function (p0_0, p1_0) { return [p0_0, new __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["m" /* JsonpInterceptor */](p1_0)]; }, [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["v" /* ɵi */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["l" /* JsonpClientBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["r" /* ɵe */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["r" /* ɵe */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["n" /* XhrFactory */], null, [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["r" /* ɵe */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["j" /* HttpXhrBackend */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["j" /* HttpXhrBackend */], [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["n" /* XhrFactory */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](6144, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpBackend */], null, [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["j" /* HttpXhrBackend */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["g" /* HttpHandler */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["p" /* ɵc */], [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["b" /* HttpBackend */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClient */], [__WEBPACK_IMPORTED_MODULE_9__angular_common_http__["g" /* HttpHandler */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_10__playlist_view_playlist_view_proxy__["a" /* PlaylistProxy */], __WEBPACK_IMPORTED_MODULE_10__playlist_view_playlist_view_proxy__["a" /* PlaylistProxy */], [__WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_12__core_store_user_profile_user_profile_actions__["b" /* UserProfileActions */], __WEBPACK_IMPORTED_MODULE_13__core_api_app_player_api__["a" /* AppPlayerApi */], __WEBPACK_IMPORTED_MODULE_14__core_api_app_api__["a" /* AppApi */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_15__user_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__user_guard__["a" /* AuthGuard */], [__WEBPACK_IMPORTED_MODULE_16__core_services_authorization_service__["a" /* Authorization */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["k" /* Router */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](4608, __WEBPACK_IMPORTED_MODULE_18__user_player_service__["a" /* UserPlayerService */], __WEBPACK_IMPORTED_MODULE_18__user_player_service__["a" /* UserPlayerService */], [__WEBPACK_IMPORTED_MODULE_19__core_services_now_playlist_service__["a" /* NowPlaylistService */], __WEBPACK_IMPORTED_MODULE_20__core_services_user_profile_service__["a" /* UserProfile */], __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["m" /* Store */]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_common__["CommonModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["m" /* ɵba */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["m" /* ɵba */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_7__angular_forms__["g" /* FormsModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_17__angular_router__["n" /* RouterModule */], __WEBPACK_IMPORTED_MODULE_17__angular_router__["n" /* RouterModule */], [[2, __WEBPACK_IMPORTED_MODULE_17__angular_router__["s" /* ɵa */]], [2, __WEBPACK_IMPORTED_MODULE_17__angular_router__["k" /* Router */]]]), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_8_ngx_youtube_player__["a" /* YoutubePlayerModule */], __WEBPACK_IMPORTED_MODULE_8_ngx_youtube_player__["a" /* YoutubePlayerModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_21_ngx_infinite_scroll__["b" /* InfiniteScrollModule */], __WEBPACK_IMPORTED_MODULE_21_ngx_infinite_scroll__["b" /* InfiniteScrollModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["f" /* HttpClientXsrfModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["f" /* HttpClientXsrfModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["e" /* HttpClientModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["e" /* HttpClientModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["d" /* HttpClientJsonpModule */], __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["d" /* HttpClientJsonpModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_22_ngx_typeahead__["a" /* NgxTypeaheadModule */], __WEBPACK_IMPORTED_MODULE_22_ngx_typeahead__["a" /* NgxTypeaheadModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_23_ngx_tooltip_index__["TooltipModule"], __WEBPACK_IMPORTED_MODULE_23_ngx_tooltip_index__["TooltipModule"], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_24__shared_index__["a" /* SharedModule */], __WEBPACK_IMPORTED_MODULE_24__shared_index__["a" /* SharedModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_25__app_navbar_index__["a" /* AppNavbarModule */], __WEBPACK_IMPORTED_MODULE_25__app_navbar_index__["a" /* AppNavbarModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_26__playlist_view_index__["a" /* PlaylistViewModule */], __WEBPACK_IMPORTED_MODULE_26__playlist_view_index__["a" /* PlaylistViewModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](512, __WEBPACK_IMPORTED_MODULE_1__index__["a" /* UserModule */], __WEBPACK_IMPORTED_MODULE_1__index__["a" /* UserModule */], []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["s" /* ɵf */], "XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](256, __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["t" /* ɵg */], "X-XSRF-TOKEN", []), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵmpd"](1024, __WEBPACK_IMPORTED_MODULE_17__angular_router__["i" /* ROUTES */], function () { return [[{ path: "playlist/:id", component: __WEBPACK_IMPORTED_MODULE_27__playlist_view_playlist_view_component__["a" /* PlaylistViewComponent */], resolve: { videos: __WEBPACK_IMPORTED_MODULE_28__core_resolvers_playlist_videos_resolver__["a" /* PlaylistVideosResolver */], playlist: __WEBPACK_IMPORTED_MODULE_29__core_resolvers_playlist_resolver__["a" /* PlaylistResolver */] } }], [{ path: "", component: __WEBPACK_IMPORTED_MODULE_30__user_component__["a" /* UserComponent */], children: [{ path: "", redirectTo: "playlists", pathMatch: "full" }, { path: "playlists", component: __WEBPACK_IMPORTED_MODULE_31__playlists_playlists_component__["a" /* PlaylistsComponent */] }, { path: "playlist/:id", component: __WEBPACK_IMPORTED_MODULE_27__playlist_view_playlist_view_component__["a" /* PlaylistViewComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_15__user_guard__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_15__user_guard__["a" /* AuthGuard */]], resolve: { videos: __WEBPACK_IMPORTED_MODULE_28__core_resolvers_playlist_videos_resolver__["a" /* PlaylistVideosResolver */], playlist: __WEBPACK_IMPORTED_MODULE_29__core_resolvers_playlist_resolver__["a" /* PlaylistResolver */] } }] }]]; }, [])]); });




/***/ }),

/***/ "./src/app/containers/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
var UserModule = /*@__PURE__*/ (function () {
    function UserModule() {
    }
    return UserModule;
}());




/***/ }),

/***/ "./src/app/containers/user/playlists/playlists.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_PlaylistsComponent */
/* unused harmony export View_PlaylistsComponent_0 */
/* unused harmony export View_PlaylistsComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_components_youtube_playlist_youtube_playlist_ngfactory__ = __webpack_require__("./src/app/shared/components/youtube-playlist/youtube-playlist.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_components_youtube_playlist_youtube_playlist__ = __webpack_require__("./src/app/shared/components/youtube-playlist/youtube-playlist.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__playlists_component__ = __webpack_require__("./src/app/containers/user/playlists/playlists.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_player_service__ = __webpack_require__("./src/app/containers/user/user-player.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _angular_core,_.._.._shared_components_youtube_playlist_youtube_playlist.ngfactory,_.._.._shared_components_youtube_playlist_youtube_playlist,_angular_common,_playlists.component,_ngrx_store,_user_player.service PURE_IMPORTS_END */
/** PURE_IMPORTS_START _angular_core,_.._.._shared_components_youtube_playlist_youtube_playlist.ngfactory,_.._.._shared_components_youtube_playlist_youtube_playlist,_angular_common,_playlists.component,_ngrx_store,_user_player.service PURE_IMPORTS_END */







var styles_PlaylistsComponent = [];
var RenderType_PlaylistsComponent = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_PlaylistsComponent, data: {} });

function View_PlaylistsComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 2, "youtube-playlist", [["link", "/user/"]], null, [[null, "play"], [null, "queue"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("play" === en)) {
                var pd_0 = (_co.playSelectedPlaylist(_v.context.$implicit) !== false);
                ad = (pd_0 && ad);
            }
            if (("queue" === en)) {
                var pd_1 = (_co.queueSelectedPlaylist(_v.context.$implicit) !== false);
                ad = (pd_1 && ad);
            }
            return ad;
        }, __WEBPACK_IMPORTED_MODULE_1__shared_components_youtube_playlist_youtube_playlist_ngfactory__["b" /* View_YoutubePlaylistComponent_0 */], __WEBPACK_IMPORTED_MODULE_1__shared_components_youtube_playlist_youtube_playlist_ngfactory__["a" /* RenderType_YoutubePlaylistComponent */])), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 49152, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_components_youtube_playlist_youtube_playlist__["a" /* YoutubePlaylistComponent */], [], { media: [0, "media"], link: [1, "link"] }, { play: "play", queue: "queue" }), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "]))], function (_ck, _v) { var currVal_0 = _v.context.$implicit; var currVal_1 = "/user/"; _ck(_v, 1, 0, currVal_0, currVal_1); }, null);
}
function View_PlaylistsComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](1, 0, null, null, 8, "section", [["class", "videos-list"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](3, 0, null, null, 5, "div", [["class", "list-unstyled ux-maker youtube-items-container clearfix"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵand"](16777216, null, null, 2, null, View_PlaylistsComponent_1)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](6, 802816, null, 0, __WEBPACK_IMPORTED_MODULE_3__angular_common__["NgForOf"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_3__angular_common__["AsyncPipe"], [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵunv"](_v, 6, 0, __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵnov"](_v, 7).transform(_co.playlists$)); _ck(_v, 6, 0, currVal_0); }, null); }
function View_PlaylistsComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵeld"](0, 0, null, null, 1, "playlists", [], null, null, null, View_PlaylistsComponent_0, RenderType_PlaylistsComponent)), __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__playlists_component__["a" /* PlaylistsComponent */], [__WEBPACK_IMPORTED_MODULE_5__ngrx_store__["m" /* Store */], __WEBPACK_IMPORTED_MODULE_6__user_player_service__["a" /* UserPlayerService */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PlaylistsComponentNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_0__angular_core__["ɵccf"]("playlists", __WEBPACK_IMPORTED_MODULE_4__playlists_component__["a" /* PlaylistsComponent */], View_PlaylistsComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/containers/user/playlists/playlists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistsComponent; });
var PlaylistsComponent = /*@__PURE__*/ (function () {
    function PlaylistsComponent(store, userPlayerService) {
        this.store = store;
        this.userPlayerService = userPlayerService;
        this.playlists$ = this.store.select(function (state) { return state.user.playlists; });
    }
    PlaylistsComponent.prototype.ngOnInit = function () { };
    PlaylistsComponent.prototype.playSelectedPlaylist = function (playlist) {
        this.userPlayerService.playSelectedPlaylist(playlist);
    };
    PlaylistsComponent.prototype.queueSelectedPlaylist = function (playlist) {
        this.userPlayerService.queuePlaylist(playlist);
    };
    return PlaylistsComponent;
}());




/***/ }),

/***/ "./src/app/containers/user/user-player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_store_now_playlist__ = __webpack_require__("./src/app/core/store/now-playlist/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_store_app_player__ = __webpack_require__("./src/app/core/store/app-player/index.ts");


var UserPlayerService = /*@__PURE__*/ (function () {
    function UserPlayerService(nowPlaylistService, userProfile, store) {
        this.nowPlaylistService = nowPlaylistService;
        this.userProfile = userProfile;
        this.store = store;
    }
    UserPlayerService.prototype.playSelectedPlaylist = function (playlist) {
        var _this = this;
        this.userProfile
            .fetchPlaylistItems(playlist.id, '')
            .subscribe(function (items) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_store_now_playlist__["h" /* QueueVideos */](items));
            _this.nowPlaylistService.updateIndexByMedia(items[0].id);
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__core_store_app_player__["c" /* LoadAndPlay */](items[0]));
        });
    };
    UserPlayerService.prototype.queuePlaylist = function (playlist) {
        var _this = this;
        this.userProfile
            .fetchPlaylistItems(playlist.id, '')
            .subscribe(function (items) {
            _this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_store_now_playlist__["h" /* QueueVideos */](items));
            return items;
        });
    };
    UserPlayerService.prototype.queueVideo = function (media) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_store_now_playlist__["g" /* QueueVideo */](media));
    };
    UserPlayerService.prototype.playVideo = function (media) {
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_1__core_store_app_player__["c" /* LoadAndPlay */](media));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_store_now_playlist__["g" /* QueueVideo */](media));
        this.store.dispatch(new __WEBPACK_IMPORTED_MODULE_0__core_store_now_playlist__["n" /* SelectVideo */](media));
    };
    return UserPlayerService;
}());




/***/ }),

/***/ "./src/app/containers/user/user.component.ngfactory.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RenderType_UserComponent */
/* unused harmony export View_UserComponent_0 */
/* unused harmony export View_UserComponent_Host_0 */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponentNgFactory; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_scss_ngstyle__ = __webpack_require__("./src/app/containers/user/user.scss.ngstyle.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_directives_icon_icon_directive__ = __webpack_require__("./src/app/shared/directives/icon/icon.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_navbar_app_navbar_component_ngfactory__ = __webpack_require__("./src/app/containers/app-navbar/app-navbar.component.ngfactory.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_navbar_app_navbar_component__ = __webpack_require__("./src/app/containers/app-navbar/app-navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__core_services_authorization_service__ = __webpack_require__("./src/app/core/services/authorization.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__core_api_app_api__ = __webpack_require__("./src/app/core/api/app.api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_component__ = __webpack_require__("./src/app/containers/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("./node_modules/@ngrx/store/@ngrx/store.es5.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START _user.scss.ngstyle,_angular_core,_.._shared_directives_icon_icon.directive,_app_navbar_app_navbar.component.ngfactory,_app_navbar_app_navbar.component,_.._core_services_authorization.service,_.._core_api_app.api,_angular_common,_angular_router,_user.component,_ngrx_store PURE_IMPORTS_END */
/** PURE_IMPORTS_START _user.scss.ngstyle,_angular_core,_.._shared_directives_icon_icon.directive,_app_navbar_app_navbar.component.ngfactory,_app_navbar_app_navbar.component,_.._core_services_authorization.service,_.._core_api_app.api,_angular_common,_angular_router,_user.component,_ngrx_store PURE_IMPORTS_END */











var styles_UserComponent = [__WEBPACK_IMPORTED_MODULE_0__user_scss_ngstyle__["a" /* styles */]];
var RenderType_UserComponent = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵcrt"]({ encapsulation: 2, styles: styles_UserComponent, data: {} });

function View_UserComponent_1(_l) {
    return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 7, "p", [["class", "well lead"]], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n      To view your playlists in youtube, you need to sign in.\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](2, 0, null, null, 4, "button", [["class", "btn btn-lg btn-primary"]], null, [[null, "click"]], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (("click" === en)) {
                var pd_0 = (_co.signInUser() !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n        "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](4, 0, null, null, 1, "icon", [["name", "google"]], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](5, 606208, null, 0, __WEBPACK_IMPORTED_MODULE_2__shared_directives_icon_icon_directive__["a" /* IconDirective */], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer2"]], { name: [0, "name"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, [" Sign In\n      "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "]))], function (_ck, _v) { var currVal_0 = "google"; _ck(_v, 5, 0, currVal_0); }, null);
}
function View_UserComponent_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](1, 0, null, null, 11, "article", [], null, null, null, null, null)), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](3, 0, null, null, 1, "app-navbar", [], null, null, null, __WEBPACK_IMPORTED_MODULE_3__app_navbar_app_navbar_component_ngfactory__["b" /* View_AppNavbarComponent_0 */], __WEBPACK_IMPORTED_MODULE_3__app_navbar_app_navbar_component_ngfactory__["a" /* RenderType_AppNavbarComponent */])), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](4, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_4__app_navbar_app_navbar_component__["a" /* AppNavbarComponent */], [__WEBPACK_IMPORTED_MODULE_5__core_services_authorization_service__["a" /* Authorization */], __WEBPACK_IMPORTED_MODULE_6__core_api_app_api__["a" /* AppApi */]], { header: [0, "header"], headerIcon: [1, "headerIcon"] }, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵand"](16777216, null, null, 2, null, View_UserComponent_1)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](7, 16384, null, 0, __WEBPACK_IMPORTED_MODULE_7__angular_common__["NgIf"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵpid"](131072, __WEBPACK_IMPORTED_MODULE_7__angular_common__["AsyncPipe"], [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]]), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n    "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](10, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](11, 212992, null, 0, __WEBPACK_IMPORTED_MODULE_8__angular_router__["o" /* RouterOutlet */], [__WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ChildrenOutletContexts */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ComponentFactoryResolver"], [8, null], __WEBPACK_IMPORTED_MODULE_1__angular_core__["ChangeDetectorRef"]], null, null), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "])), (_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵted"](-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = "My Profile - My Playlists"; var currVal_1 = "heart"; _ck(_v, 4, 0, currVal_0, currVal_1); var currVal_2 = !__WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵunv"](_v, 7, 0, __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵnov"](_v, 8).transform(_co.isSignedIn$)); _ck(_v, 7, 0, currVal_2); _ck(_v, 11, 0); }, null); }
function View_UserComponent_Host_0(_l) { return __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵvid"](0, [(_l()(), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵeld"](0, 0, null, null, 1, "app-user", [], null, null, null, View_UserComponent_0, RenderType_UserComponent)), __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵdid"](1, 114688, null, 0, __WEBPACK_IMPORTED_MODULE_9__user_component__["a" /* UserComponent */], [__WEBPACK_IMPORTED_MODULE_6__core_api_app_api__["a" /* AppApi */], __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["m" /* Store */]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var UserComponentNgFactory = /*@__PURE__*/ __WEBPACK_IMPORTED_MODULE_1__angular_core__["ɵccf"]("app-user", __WEBPACK_IMPORTED_MODULE_9__user_component__["a" /* UserComponent */], View_UserComponent_Host_0, {}, {}, []);




/***/ }),

/***/ "./src/app/containers/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_store_user_profile_user_profile_selectors__ = __webpack_require__("./src/app/core/store/user-profile/user-profile.selectors.ts");

var UserComponent = /*@__PURE__*/ (function () {
    function UserComponent(appApi, store) {
        this.appApi = appApi;
        this.store = store;
        this.playlists$ = this.store.select(__WEBPACK_IMPORTED_MODULE_0__core_store_user_profile_user_profile_selectors__["c" /* getUserPlaylists */]);
        this.currentPlaylist$ = this.store.select(__WEBPACK_IMPORTED_MODULE_0__core_store_user_profile_user_profile_selectors__["d" /* getUserViewPlaylist */]);
        this.isSignedIn$ = this.store.select(__WEBPACK_IMPORTED_MODULE_0__core_store_user_profile_user_profile_selectors__["a" /* getIsUserSignedIn */]);
    }
    UserComponent.prototype.ngOnInit = function () { };
    UserComponent.prototype.signInUser = function () {
        this.appApi.signinUser();
    };
    return UserComponent;
}());




/***/ }),

/***/ "./src/app/containers/user/user.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var AuthGuard = /*@__PURE__*/ (function () {
    function AuthGuard(authorization, router) {
        this.authorization = authorization;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        // console.log('AuthGuard#canActivate called', { state });
        var url = state.url;
        return this.checkLogin(url);
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (this.authorization.isSignIn()) {
            return true;
        }
        // Store the attempted URL for redirecting
        // this.authService.redirectUrl = url;
        // Navigate to the login page with extras
        this.router.navigate(['/user']);
        return false;
    };
    return AuthGuard;
}());




/***/ }),

/***/ "./src/app/containers/user/user.scss.ngstyle.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
/** PURE_IMPORTS_START  PURE_IMPORTS_END */
var styles = ["app-user article {\n  padding-bottom: 5rem;\n  padding-top: 7rem; }\n\napp-user h2 small {\n  color: gray; }\n\napp-user .youtube-items-container {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n"];




/***/ })

});
//# sourceMappingURL=index.chunk.js.map