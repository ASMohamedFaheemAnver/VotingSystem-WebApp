(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin-home/admin-home.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/admin-home/admin-home.component.ts ***!
  \**********************************************************/
/*! exports provided: AdminHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminHomeComponent", function() { return AdminHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function AdminHomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Queries");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onViewAllMembers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " View eligible members ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "First poll actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.onEnableFirstPoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Trigger first poll ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onDisableFirstPoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Disable first poll ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onFirstPollResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Get first poll results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Second poll actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onEnableSecondPoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Trigger second poll ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onDisableSecondPoll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Disable second poll ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AdminHomeComponent_section_0_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSecondPollResult(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Get second poll results ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.pollData.is_first_poll_enabled || ctx_r0.pollData.is_second_poll_enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.pollData.is_first_poll_enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.pollData.is_second_poll_enabled || ctx_r0.pollData.is_first_poll_enabled);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.pollData.is_second_poll_enabled);
} }
class AdminHomeComponent {
    constructor(router, adminService) {
        this.router = router;
        this.adminService = adminService;
    }
    ngOnInit() {
        this.adminService.getPollData();
        this.pollDataSub = this.adminService
            .getPollDataListener()
            .subscribe((pollData) => {
            this.pollData = pollData;
        });
    }
    onViewAllMembers() {
        this.router.navigateByUrl("/admin/veiw-all-members");
    }
    onEnableFirstPoll() {
        this.adminService.enableFirstPoll(this.pollData);
    }
    onDisableFirstPoll() {
        this.adminService.disableFirstPoll(this.pollData);
    }
    onEnableSecondPoll() {
        this.adminService.enableSecondPoll(this.pollData);
    }
    onDisableSecondPoll() {
        this.adminService.disableSecondPoll(this.pollData);
    }
    onFirstPollResult() {
        this.router.navigateByUrl("admin/view-poll-result/1");
    }
    onSecondPollResult() {
        this.router.navigateByUrl("admin/view-poll-result/2");
    }
}
AdminHomeComponent.ɵfac = function AdminHomeComponent_Factory(t) { return new (t || AdminHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"])); };
AdminHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminHomeComponent, selectors: [["app-admin-home"]], decls: 1, vars: 1, consts: [["class", "admin-home", 4, "ngIf"], [1, "admin-home"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "disabled", "click"], ["mat-raised-button", "", "color", "warn", 3, "disabled", "click"]], template: function AdminHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AdminHomeComponent_section_0_Template, 21, 4, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.pollData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".admin-home[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  padding-top: 50px;\n}\n\n.admin-home[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  width: 250px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vYWRtaW4taG9tZS9hZG1pbi1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWhvbWUvYWRtaW4taG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkbWluLWhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5hZG1pbi1ob21lIGJ1dHRvbiB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHdpZHRoOiAyNTBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-admin-home",
                templateUrl: "./admin-home.component.html",
                styleUrls: ["./admin-home.component.css"],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/admin.service.ts":
/*!****************************************!*\
  !*** ./src/app/admin/admin.service.ts ***!
  \****************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");







class AdminService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.backEndUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backEndUrl;
        this.secondYearMembers = [];
        this.thirdYearMembers = [];
        this.fourthYearMembers = [];
        this.membersListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pollDataListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.pollResultsListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
            uri: this.backEndUrl,
            headers: {
                Authorization: this.authService.getToken(),
            },
        });
    }
    getMembersListener() {
        return this.membersListenner;
    }
    getPollDataListener() {
        return this.pollDataListenner;
    }
    getpollResultsListenner() {
        return this.pollResultsListenner;
    }
    getAllMembers() {
        console.log({ called: "getAllMembers" });
        const getAllMembers = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getAllMembers {
          _id
          secret
          year
          gender
          name
        }
      }
    `;
        this.client
            .query({ query: getAllMembers })
            .then((res) => {
            this.fourthYearMembers = [];
            this.thirdYearMembers = [];
            this.secondYearMembers = [];
            console.log({ getAllMembers: res["data"].getAllMembers });
            this.members = res["data"].getAllMembers;
            this.members.forEach((member) => {
                if (member.year === 4) {
                    this.fourthYearMembers.push(member);
                }
                else if (member.year === 3) {
                    this.thirdYearMembers.push(member);
                }
                else if (member.year === 2) {
                    this.secondYearMembers.push(member);
                }
            });
            this.membersListenner.next({
                second: this.secondYearMembers,
                third: this.thirdYearMembers,
                fourth: this.fourthYearMembers,
            });
        })
            .catch((err) => {
            console.log(err);
        });
    }
    enableFirstPoll(pollData) {
        const enableFirstPoll = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        enableFirstPoll {
          msg
        }
      }
    `;
        this.client
            .mutate({ mutation: enableFirstPoll })
            .then((res) => {
            console.log(res);
            pollData.is_first_poll_enabled = true;
        })
            .catch((err) => {
            console.log(err);
        });
    }
    disableFirstPoll(pollData) {
        const disableFirstPoll = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        disableFirstPoll {
          msg
        }
      }
    `;
        this.client
            .mutate({ mutation: disableFirstPoll })
            .then((res) => {
            console.log(res);
            pollData.is_first_poll_enabled = false;
        })
            .catch((err) => {
            console.log(err);
        });
    }
    enableSecondPoll(pollData) {
        const enableSecondPoll = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        enableSecondPoll {
          msg
        }
      }
    `;
        this.client
            .mutate({ mutation: enableSecondPoll })
            .then((res) => {
            console.log(res);
            pollData.is_second_poll_enabled = true;
        })
            .catch((err) => {
            console.log(err);
        });
    }
    disableSecondPoll(pollData) {
        const disableSecondPoll = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        disableSecondPoll {
          msg
        }
      }
    `;
        this.client
            .mutate({ mutation: disableSecondPoll })
            .then((res) => {
            console.log(res);
            pollData.is_second_poll_enabled = false;
        })
            .catch((err) => {
            console.log(err);
        });
    }
    getFirstPollResult(pollCount) {
        const getFirstPollAllResult = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getFirstPollAllResult {
          position {
            _id
            title
          }
          eligible_member_infos {
            member {
              _id
              name
              year
              eligible_for {
                _id
              }
            }
            vote_recieved
          }
        }
      }
    `;
        const getSecondPollAllResult = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getSecondPollAllResult {
          position {
            title
          }
          eligible_member_infos {
            member {
              _id
              name
              year
              eligible_for {
                _id
              }
            }
            vote_recieved
          }
        }
      }
    `;
        this.client
            .query({
            query: pollCount == 1 ? getFirstPollAllResult : getSecondPollAllResult,
        })
            .then((res) => {
            this.pollResults =
                pollCount == 1
                    ? res["data"].getFirstPollAllResult
                    : res["data"].getSecondPollAllResult;
            console.log({ getAllPollResult: this.pollResults });
            this.pollResultsListenner.next(this.pollResults);
        });
    }
    makeAMemberEligible(_id, position) {
        const makeAMemberEligible = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        makeAMemberEligible(_id: "${_id}", position: "${position}") {
          msg
        }
      }
    `;
        this.client.mutate({ mutation: makeAMemberEligible }).then((res) => {
            console.log({ makeAMemberEligible: res["data"].makeAMemberEligible });
            this.pollResults = this.pollResults.map((pollResult) => {
                return Object.assign(Object.assign({}, pollResult), { eligible_member_infos: pollResult.eligible_member_infos.map((member_info) => {
                        if (member_info.member._id === _id) {
                            return Object.assign(Object.assign({}, member_info), { member: Object.assign(Object.assign({}, member_info.member), { eligible_for: Object.assign(Object.assign({}, member_info.member.eligible_for), { _id: position }) }) });
                        }
                        return member_info;
                    }) });
            });
            console.log({ getAllPollResult: this.pollResults });
            this.pollResultsListenner.next([...this.pollResults]);
        });
    }
    makeAMemberNotEligible(_id, position) {
        const makeAMemberNotEligible = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        makeAMemberNotEligible(_id: "${_id}", position: "${position}" ) {
          msg
        }
      }
    `;
        this.client.mutate({ mutation: makeAMemberNotEligible }).then((res) => {
            console.log({
                makeAMemberNotEligible: res["data"].makeAMemberNotEligible,
            });
            this.pollResults = this.pollResults.map((pollResult) => {
                return Object.assign(Object.assign({}, pollResult), { eligible_member_infos: pollResult.eligible_member_infos.map((member_info) => {
                        if (member_info.member._id === _id) {
                            return Object.assign(Object.assign({}, member_info), { member: Object.assign(Object.assign({}, member_info.member), { eligible_for: null }) });
                        }
                        return member_info;
                    }) });
            });
            console.log({ getAllPollResult: this.pollResults });
            this.pollResultsListenner.next([...this.pollResults]);
        });
    }
    getPollData() {
        const getPollData = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getPollData {
          is_first_poll_enabled
          is_second_poll_enabled
        }
      }
    `;
        this.client.query({ query: getPollData }).then((res) => {
            console.log({ getPollData: res["data"].getPollData });
            this.pollData = res["data"].getPollData;
            this.pollDataListenner.next(this.pollData);
        });
    }
}
AdminService.ɵfac = function AdminService_Factory(t) { return new (t || AdminService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
AdminService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AdminService, factory: AdminService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/view-members/view-members.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/view-members/view-members.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewMembersComponent", function() { return ViewMembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function ViewMembersComponent_section_0_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r13.secret);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r13.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r13.gender);
} }
function ViewMembersComponent_section_0_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r14.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r14.secret);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r14.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r14.gender);
} }
function ViewMembersComponent_section_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r15.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r15.secret);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r15.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r15.gender);
} }
function ViewMembersComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Second year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewMembersComponent_section_0_div_12_Template, 9, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Third year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ViewMembersComponent_section_0_div_24_Template, 9, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forth year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Secret");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Gender");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, ViewMembersComponent_section_0_div_36_Template, 9, 4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.members.second);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.members.third);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.members.fourth);
} }
class ViewMembersComponent {
    constructor(adminService) {
        this.adminService = adminService;
    }
    ngOnDestroy() {
        this.membersSub.unsubscribe();
    }
    ngOnInit() {
        this.adminService.getAllMembers();
        this.membersSub = this.adminService
            .getMembersListener()
            .subscribe((members) => {
            this.members = members;
            console.log({ seperatedMembersFromViewMembers: this.members });
        });
    }
}
ViewMembersComponent.ɵfac = function ViewMembersComponent_Factory(t) { return new (t || ViewMembersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"])); };
ViewMembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewMembersComponent, selectors: [["app-view-members"]], decls: 1, vars: 1, consts: [["class", "members", 4, "ngIf"], [1, "members"], [1, "row"], ["class", "row", 4, "ngFor", "ngForOf"]], template: function ViewMembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ViewMembersComponent_section_0_Template, 37, 3, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.members);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".members[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 50px;\n}\n\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  width: 50%;\n  justify-content: space-around;\n  padding: 5px;\n  text-align: center;\n}\n\n.row[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  \n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy1tZW1iZXJzL3ZpZXctbWVtYmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsT0FBTztBQUNUIiwiZmlsZSI6InNyYy9hcHAvYWRtaW4vdmlldy1tZW1iZXJzL3ZpZXctbWVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbWJlcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDUwcHg7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogNTAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgcGFkZGluZzogNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5yb3cgcCB7XG4gIC8qIG1hcmdpbjogMCA1MHB4OyAqL1xuICBmbGV4OiAxO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewMembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-view-members",
                templateUrl: "./view-members.component.html",
                styleUrls: ["./view-members.component.css"],
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/admin/view-results/view-results.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/view-results/view-results.component.ts ***!
  \**************************************************************/
/*! exports provided: ViewResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewResultsComponent", function() { return ViewResultsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../admin.service */ "./src/app/admin/admin.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");






function ViewResultsComponent_div_1_p_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Action");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewResultsComponent_div_1_div_12_button_7_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewResultsComponent_div_1_div_12_button_7_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const memberInfo_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const pollResult_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.onMakeEligible(memberInfo_r20.member._id, pollResult_r17.position._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Make eligible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewResultsComponent_div_1_div_12_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewResultsComponent_div_1_div_12_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const memberInfo_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const pollResult_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.onMakeAMemberNotEligible(memberInfo_r20.member._id, pollResult_r17.position._id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Remove from eligible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ViewResultsComponent_div_1_div_12_button_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Already eligible");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
} }
function ViewResultsComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewResultsComponent_div_1_div_12_button_7_Template, 3, 0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewResultsComponent_div_1_div_12_button_8_Template, 3, 0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ViewResultsComponent_div_1_div_12_button_9_Template, 3, 1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const memberInfo_r20 = ctx.$implicit;
    const pollResult_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberInfo_r20.member.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberInfo_r20.member.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](memberInfo_r20.vote_recieved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !memberInfo_r20.member.eligible_for && ctx_r19.pollCount === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", memberInfo_r20.member.eligible_for && memberInfo_r20.member.eligible_for._id === pollResult_r17.position._id && ctx_r19.pollCount === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", memberInfo_r20.member.eligible_for && memberInfo_r20.member.eligible_for._id !== pollResult_r17.position._id && ctx_r19.pollCount === 1);
} }
function ViewResultsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Year");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Recieved Votes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ViewResultsComponent_div_1_p_11_Template, 2, 0, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ViewResultsComponent_div_1_div_12_Template, 10, 6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pollResult_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](pollResult_r17.position.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.pollCount === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pollResult_r17.eligible_member_infos.slice(0, 5));
} }
class ViewResultsComponent {
    constructor(adminService, route, router) {
        this.adminService = adminService;
        this.route = route;
        this.router = router;
    }
    ngOnDestroy() {
        this.pollResultsSub.unsubscribe();
    }
    ngOnInit() {
        this.pollResultsSub = this.adminService
            .getpollResultsListenner()
            .subscribe((pollResults) => {
            pollResults = pollResults.map((pollResult) => {
                return Object.assign(Object.assign({}, pollResult), { eligible_member_infos: pollResult.eligible_member_infos.sort(function (x, y) {
                        if (x.vote_recieved > y.vote_recieved)
                            return -1;
                        if (x.vote_recieved < y.vote_recieved)
                            return 1;
                        return 0;
                    }) });
            });
            this.pollResults = pollResults;
        });
        this.route.paramMap.subscribe((paramMap) => {
            if (paramMap.has("pollCount")) {
                this.pollCount = parseInt(paramMap.get("pollCount"));
                console.log({ viewPollResultRouteParam: this.pollCount });
                this.adminService.getFirstPollResult(this.pollCount);
            }
        });
    }
    onMakeEligible(_id, position) {
        console.log({ onMakeEligible: { _id: _id, position: position } });
        this.adminService.makeAMemberEligible(_id, position);
    }
    onMakeAMemberNotEligible(_id, position) {
        this.adminService.makeAMemberNotEligible(_id, position);
    }
}
ViewResultsComponent.ɵfac = function ViewResultsComponent_Factory(t) { return new (t || ViewResultsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewResultsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewResultsComponent, selectors: [["app-view-results"]], decls: 2, vars: 1, consts: [[1, "wrapper"], ["class", "inner-wrapper", 4, "ngFor", "ngForOf"], [1, "inner-wrapper"], [1, "member-info-wrapper"], [1, "member-info"], [4, "ngIf"], ["class", "member-info", 4, "ngFor", "ngForOf"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "disabled", 4, "ngIf"], ["mat-button", "", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], ["mat-button", "", "color", "primary", 3, "disabled"]], template: function ViewResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewResultsComponent_div_1_Template, 13, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pollResults);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.wrapper[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 20px 0;\n}\n\n.inner-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.member-info-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  justify-content: center;\n}\n\n.member-info[_ngcontent-%COMP%] {\n  display: flex;\n  width: 80%;\n  justify-content: space-between;\n  align-items: center;\n  padding: 20px;\n  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.1);\n}\n\n.member-info[_ngcontent-%COMP%]:hover {\n  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.2);\n}\n\n.member-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .member-info[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRtaW4vdmlldy1yZXN1bHRzL3ZpZXctcmVzdWx0cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsMENBQTBDO0FBQzVDOztBQUVBO0VBQ0UsMENBQTBDO0FBQzVDOztBQUVBOztFQUVFLE9BQU87RUFDUCxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9hZG1pbi92aWV3LXJlc3VsdHMvdmlldy1yZXN1bHRzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi53cmFwcGVyIGgxIHtcbiAgbWFyZ2luOiAyMHB4IDA7XG59XG5cbi5pbm5lci13cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5tZW1iZXItaW5mby13cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubWVtYmVyLWluZm8ge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogODAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLm1lbWJlci1pbmZvOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMXB4IDNweCA2cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xufVxuXG4ubWVtYmVyLWluZm8gcCxcbi5tZW1iZXItaW5mbyBidXR0b24ge1xuICBmbGV4OiAxO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewResultsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-view-results",
                templateUrl: "./view-results.component.html",
                styleUrls: ["./view-results.component.css"],
            }]
    }], function () { return [{ type: _admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/angular-material.module.ts":
/*!********************************************!*\
  !*** ./src/app/angular-material.module.ts ***!
  \********************************************/
/*! exports provided: AngularMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularMaterialModule", function() { return AngularMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");














class AngularMaterialModule {
}
AngularMaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AngularMaterialModule });
AngularMaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AngularMaterialModule_Factory(t) { return new (t || AngularMaterialModule)(); }, imports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AngularMaterialModule, { exports: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AngularMaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_5__["MatProgressSpinnerModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_10__["MatDatepickerModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _admin_view_members_view_members_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/view-members/view-members.component */ "./src/app/admin/view-members/view-members.component.ts");
/* harmony import */ var _admin_view_results_view_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/view-results/view-results.component */ "./src/app/admin/view-results/view-results.component.ts");
/* harmony import */ var _auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/admin-login/admin-login.component */ "./src/app/auth/admin-login/admin-login.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
/* harmony import */ var _auth_member_login_member_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth/member-login/member-login.component */ "./src/app/auth/member-login/member-login.component.ts");
/* harmony import */ var _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./member/member-home/member-home.component */ "./src/app/member/member-home/member-home.component.ts");











const routes = [
    {
        path: "",
        redirectTo: "auth/member-login",
        pathMatch: "full",
    },
    {
        path: "auth/member-login",
        component: _auth_member_login_member_login_component__WEBPACK_IMPORTED_MODULE_7__["MemberLoginComponent"],
    },
    {
        path: "auth/admin-login",
        component: _auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_5__["AdminLoginComponent"],
    },
    {
        path: "admin/admin-home",
        component: _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_2__["AdminHomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
    {
        path: "admin/view-poll-result/:pollCount",
        component: _admin_view_results_view_results_component__WEBPACK_IMPORTED_MODULE_4__["ViewResultsComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
    {
        path: "admin/veiw-all-members",
        component: _admin_view_members_view_members_component__WEBPACK_IMPORTED_MODULE_3__["ViewMembersComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
    {
        path: "member/member-home",
        component: _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_8__["MemberHomeComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
    },
    {
        path: "**",
        redirectTo: "auth/member-login",
        pathMatch: "full",
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _shared_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/top-nav/top-nav.component */ "./src/app/shared/top-nav/top-nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.authService.autoAuthUser();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-top-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
    } }, directives: [_shared_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__["TopNavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-root",
                templateUrl: "./app.component.html",
                styleUrls: ["./app.component.css"],
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./angular-material.module */ "./src/app/angular-material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/top-nav/top-nav.component */ "./src/app/shared/top-nav/top-nav.component.ts");
/* harmony import */ var _auth_member_login_member_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/member-login/member-login.component */ "./src/app/auth/member-login/member-login.component.ts");
/* harmony import */ var _auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/admin-login/admin-login.component */ "./src/app/auth/admin-login/admin-login.component.ts");
/* harmony import */ var _error_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./error-interceptor */ "./src/app/error-interceptor.ts");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin-home/admin-home.component */ "./src/app/admin/admin-home/admin-home.component.ts");
/* harmony import */ var _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./member/member-home/member-home.component */ "./src/app/member/member-home/member-home.component.ts");
/* harmony import */ var _admin_view_members_view_members_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/view-members/view-members.component */ "./src/app/admin/view-members/view-members.component.ts");
/* harmony import */ var _member_select_person_dialog_select_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./member/select-person-dialog/select-person-dialog.component */ "./src/app/member/select-person-dialog/select-person-dialog.component.ts");
/* harmony import */ var _admin_view_results_view_results_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/view-results/view-results.component */ "./src/app/admin/view-results/view-results.component.ts");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
            useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_9__["TopNavComponent"],
        _auth_member_login_member_login_component__WEBPACK_IMPORTED_MODULE_10__["MemberLoginComponent"],
        _auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_11__["AdminLoginComponent"],
        _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
        _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_14__["AdminHomeComponent"],
        _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_15__["MemberHomeComponent"],
        _admin_view_members_view_members_component__WEBPACK_IMPORTED_MODULE_16__["ViewMembersComponent"],
        _member_select_person_dialog_select_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__["SelectPersonDialogComponent"],
        _admin_view_results_view_results_component__WEBPACK_IMPORTED_MODULE_18__["ViewResultsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_9__["TopNavComponent"],
                    _auth_member_login_member_login_component__WEBPACK_IMPORTED_MODULE_10__["MemberLoginComponent"],
                    _auth_admin_login_admin_login_component__WEBPACK_IMPORTED_MODULE_11__["AdminLoginComponent"],
                    _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"],
                    _admin_admin_home_admin_home_component__WEBPACK_IMPORTED_MODULE_14__["AdminHomeComponent"],
                    _member_member_home_member_home_component__WEBPACK_IMPORTED_MODULE_15__["MemberHomeComponent"],
                    _admin_view_members_view_members_component__WEBPACK_IMPORTED_MODULE_16__["ViewMembersComponent"],
                    _member_select_person_dialog_select_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__["SelectPersonDialogComponent"],
                    _admin_view_results_view_results_component__WEBPACK_IMPORTED_MODULE_18__["ViewResultsComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_module__WEBPACK_IMPORTED_MODULE_5__["AngularMaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HTTP_INTERCEPTORS"],
                        useClass: _error_interceptor__WEBPACK_IMPORTED_MODULE_12__["ErrorInterceptor"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
                entryComponents: [_member_select_person_dialog_select_person_dialog_component__WEBPACK_IMPORTED_MODULE_17__["SelectPersonDialogComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/auth/admin-login/admin-login.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/auth/admin-login/admin-login.component.ts ***!
  \***********************************************************/
/*! exports provided: AdminLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminLoginComponent", function() { return AdminLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









class AdminLoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isAuth = false;
    }
    ngOnInit() {
        this.isAuth = this.authService.isUserAuth();
        this.userCategory = this.authService.getUserCategory();
        if (this.isAuth && this.userCategory === "admin") {
            this.router.navigateByUrl("/admin/admin-home");
        }
        else if (this.isAuth && this.userCategory === "member") {
            this.router.navigateByUrl("/member/member-home");
        }
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email],
            }),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)],
            }),
        });
    }
    onLoginDeveloper() {
        console.log({ adminLoginFormData: this.form.value });
        this.authService.loginDeveloper(Object.assign({}, this.form.value));
    }
}
AdminLoginComponent.ɵfac = function AdminLoginComponent_Factory(t) { return new (t || AdminLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AdminLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminLoginComponent, selectors: [["app-admin-login"]], decls: 16, vars: 2, consts: [[1, "wrapper", "member-login"], [1, "form", 3, "formGroup", "submit"], [1, "input-wrapper"], ["appearance", "outline"], ["formControlName", "email", "matInput", ""], ["formControlName", "password", "type", "password", "matInput", ""], ["type", "submit", "mat-raised-button", "", "color", "primary", 3, "disabled"]], template: function AdminLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function AdminLoginComponent_Template_form_submit_1_listener() { return ctx.onLoginDeveloper(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Admin login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enter your email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Login ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.form.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], styles: [".member-login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.member-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 50px;\n}\n\n.input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  flex-direction: column;\n  align-items: center;\n}\n\n.member-login[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: block;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi1sb2dpbi9hZG1pbi1sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztFQUNkLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRtaW4tbG9naW4vYWRtaW4tbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXItbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbWJlci1sb2dpbiBmb3JtIGgxIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLm1lbWJlci1sb2dpbiBmb3JtIGJ1dHRvbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-admin-login",
                templateUrl: "./admin-login.component.html",
                styleUrls: ["./admin-login.component.css"],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        const isAuth = this.authService.isUserAuth();
        if (!isAuth) {
            this.router.navigate(["/"]);
        }
        return isAuth;
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");







class AuthService {
    constructor(router, http) {
        this.router = router;
        this.http = http;
        this.backEndUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backEndUrl;
        this.authStatusListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.userCategoryListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
            uri: this.backEndUrl,
        });
    }
    getAuthStatusListener() {
        return this.authStatusListenner;
    }
    getUserCategoryStatusListener() {
        return this.userCategoryListenner;
    }
    loginDeveloper(developerLoginInput) {
        const loginDeveloper = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        loginDeveloper(
          data: { email: "${developerLoginInput.email}", password: "${developerLoginInput.password}" }
        ) {
          _id
          token
          expiresIn
        }
      }
    `;
        // const loginDeveloper = `
        //   query {
        //     loginDeveloper(
        //       data: { email: "${developerLoginInput.email}", password: "${developerLoginInput.password}" }
        //     ) {
        //       _id
        //       token
        //       expiresIn
        //     }
        //   }
        // `;
        /*this.http
          .post(this.backEndUrl, { query: loginDeveloper })
          .subscribe((res) => {
            console.log(res);
          });*/
        this.client
            .query({ query: loginDeveloper })
            .then((res) => {
            console.log(res);
            const expiresIn = res["data"].loginDeveloper.expiresIn;
            const userId = res["data"].loginDeveloper._id;
            const token = res["data"].loginDeveloper.token;
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiresIn * 1000);
            this.userCategory = "developer";
            this.isUserLoggedIn = true;
            this.token = token;
            this.saveAuthData(token, expirationDate, userId, this.userCategory);
            this.setAuthTimer(expiresIn);
            this.userCategoryListenner.next(this.userCategory);
            this.authStatusListenner.next(true);
            this.router.navigateByUrl("admin/admin-home");
        })
            .catch((err) => {
            console.log(err.message);
        });
    }
    loginMember(secret) {
        const loginMember = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
          loginMember(data: { secret: "${secret}" }) {
            _id
            token
            expiresIn
          }
        }
    `;
        this.client
            .query({ query: loginMember })
            .then((res) => {
            console.log(res);
            const expiresIn = res["data"].loginMember.expiresIn;
            const userId = res["data"].loginMember._id;
            const token = res["data"].loginMember.token;
            const now = new Date();
            const expirationDate = new Date(now.getTime() + expiresIn * 1000);
            this.userCategory = "member";
            this.isUserLoggedIn = true;
            this.token = token;
            this.saveAuthData(token, expirationDate, userId, this.userCategory);
            this.setAuthTimer(expiresIn);
            this.userCategoryListenner.next(this.userCategory);
            this.authStatusListenner.next(true);
            this.router.navigateByUrl("member/member-home");
        })
            .catch((err) => {
            console.log(err.message);
        });
    }
    saveAuthData(token, expirationDate, userId, userCategory) {
        localStorage.setItem("token", token);
        localStorage.setItem("userId", userId);
        localStorage.setItem("userCategory", userCategory);
        localStorage.setItem("expirationDate", expirationDate.toISOString());
    }
    clearAuthData() {
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("userCategory");
        localStorage.removeItem("expirationDate");
    }
    setAuthTimer(expiresIn) {
        this.tokenTimer = setTimeout(() => {
            this.logOutUser();
        }, expiresIn * 1000);
    }
    autoAuthUser() {
        const authInformation = this.getAuthData();
        if (authInformation) {
            const now = new Date();
            const expiresIn = new Date(authInformation.expirationDate).getTime() - now.getTime();
            if (expiresIn > 0) {
                this.token = authInformation.token;
                this.userId = authInformation.userId;
                this.isUserLoggedIn = true;
                this.userCategory = authInformation.userCategory;
                this.setAuthTimer(expiresIn / 1000);
                this.authStatusListenner.next(true);
            }
        }
    }
    getAuthData() {
        const token = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");
        const userCategory = localStorage.getItem("userCategory");
        const expirationDate = localStorage.getItem("expirationDate");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            userId: userId,
            userCategory: userCategory,
            expirationDate: expirationDate,
        };
    }
    logOutUser() {
        this.token = null;
        this.isUserLoggedIn = false;
        this.authStatusListenner.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.userId = null;
        if (this.userCategory === "developer") {
            this.router.navigateByUrl("/auth/admin-login");
        }
        else {
            this.router.navigateByUrl("/");
        }
        this.userCategory = null;
    }
    isUserAuth() {
        return this.isUserLoggedIn;
    }
    getToken() {
        return this.token;
    }
    getUserCategory() {
        return this.userCategory;
    }
    getUserId() {
        return this.userId;
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/auth/member-login/member-login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/auth/member-login/member-login.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberLoginComponent", function() { return MemberLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");








class MemberLoginComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.hide = true;
        this.isAuth = false;
    }
    ngOnInit() {
        this.isAuth = this.authService.isUserAuth();
        this.userCategory = this.authService.getUserCategory();
        if (this.isAuth && this.userCategory === "admin") {
            this.router.navigateByUrl("/admin/admin-home");
        }
        else if (this.isAuth && this.userCategory === "member") {
            this.router.navigateByUrl("/member/member-home");
        }
    }
    onMemberLogin(secret) {
        this.authService.loginMember(secret);
    }
}
MemberLoginComponent.ɵfac = function MemberLoginComponent_Factory(t) { return new (t || MemberLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
MemberLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberLoginComponent, selectors: [["app-member-login"]], decls: 11, vars: 4, consts: [[1, "wrapper", "member-login"], ["appearance", "fill"], ["matInput", "", 3, "type"], ["secret", ""], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function MemberLoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Enter your secret");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberLoginComponent_Template_button_click_6_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberLoginComponent_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5); return ctx.onMemberLogin(_r33.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Verify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", "hide")("aria-pressed", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.hide ? "visibility_off" : "visibility");
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: [".member-login[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9tZW1iZXItbG9naW4vbWVtYmVyLWxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9hdXRoL21lbWJlci1sb2dpbi9tZW1iZXItbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW1iZXItbG9naW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIHdpZHRoOiAxMDBweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-member-login",
                templateUrl: "./member-login.component.html",
                styleUrls: ["./member-login.component.css"],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/error-interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/error-interceptor.ts ***!
  \**************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");






class ErrorInterceptor {
    constructor(dialog) {
        this.dialog = dialog;
        this.message = "UNKNOWN!";
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            // console.log(error);
            // alert(error.error.errors[0].message);
            if (error.error.errors[0].message) {
                this.message = error.error.errors[0].message;
            }
            this.dialog.open(_error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"], {
                data: { message: this.message },
                disableClose: true,
            });
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(error);
        }));
    }
}
ErrorInterceptor.ɵfac = function ErrorInterceptor_Factory(t) { return new (t || ErrorInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"])); };
ErrorInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ErrorInterceptor, factory: ErrorInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](ErrorInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ErrorComponent {
    constructor(data) {
        this.data = data;
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["ng-component"]], decls: 8, vars: 2, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "mat-dialog-close"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "AN ERROR OCCURRED!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "OK");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message.toUpperCase());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "./error.component.html"
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/member/member-home/member-home.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/member/member-home/member-home.component.ts ***!
  \*************************************************************/
/*! exports provided: MemberHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberHomeComponent", function() { return MemberHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _select_person_dialog_select_person_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../select-person-dialog/select-person-dialog.component */ "./src/app/member/select-person-dialog/select-person-dialog.component.ts");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







function MemberHomeComponent_section_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberHomeComponent_section_0_div_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const position_r41 = ctx.$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.onSelectPerson(position_r41); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const position_r41 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](position_r41.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", position_r41.to ? position_r41.to.name : "- Please select -", " ");
} }
function MemberHomeComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberHomeComponent_section_0_div_1_Template, 5, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MemberHomeComponent_section_0_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r44.onCreateVotes(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.positions);
} }
function MemberHomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please wait for the administrator to start the poll.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MemberHomeComponent_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Please wait for the administrator start the second poll. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MemberHomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Your vote was recorded.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MemberHomeComponent_div_2_p_3_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r39.memberVoteData.current === "first");
} }
class MemberHomeComponent {
    constructor(memberService, selectPersonDialog) {
        this.memberService = memberService;
        this.selectPersonDialog = selectPersonDialog;
        this.positions = [];
    }
    ngOnInit() {
        this.memberService.getAllPositions();
        this.positionsSub = this.memberService
            .getPositionsListener()
            .subscribe((positions) => {
            this.positions = positions;
        });
        this.memberVoteDataSub = this.memberService
            .getMemberVoteDataListener()
            .subscribe((memberVoteData) => {
            this.memberVoteData = memberVoteData;
        });
        this.memberService.getMemberVoteData();
        this.createVoteSub = this.memberService
            .getCreateVoteListenner()
            .subscribe((isCreated) => {
            this.memberVoteData.is_voted = isCreated;
        });
    }
    ngOnDestroy() {
        this.positionsSub.unsubscribe();
    }
    onSelectPerson(position) {
        const selectPersonDialogRef = this.selectPersonDialog.open(_select_person_dialog_select_person_dialog_component__WEBPACK_IMPORTED_MODULE_1__["SelectPersonDialogComponent"], { data: position, /*disableClose: true,*/ maxWidth: "90vw" });
        selectPersonDialogRef.afterClosed().subscribe((member) => {
            console.log({ memberHomeSelectedMember: member, position: position });
            position.to = member;
        });
    }
    onCreateVotes() {
        this.memberService.createVotes(this.positions);
    }
}
MemberHomeComponent.ɵfac = function MemberHomeComponent_Factory(t) { return new (t || MemberHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
MemberHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MemberHomeComponent, selectors: [["app-member-home"]], decls: 3, vars: 3, consts: [["class", "member-home", 4, "ngIf"], ["class", "please-wait", 4, "ngIf"], ["class", "vote-recorded", 4, "ngIf"], [1, "member-home"], ["class", "form-controll", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", 1, "submit", 3, "click"], [1, "form-controll"], ["mat-raised-button", "", 3, "click"], [1, "please-wait"], [1, "vote-recorded"], [4, "ngIf"]], template: function MemberHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MemberHomeComponent_section_0_Template, 4, 1, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MemberHomeComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MemberHomeComponent_div_2_Template, 4, 1, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.memberVoteData && ctx.memberVoteData.current !== "none" && !ctx.memberVoteData.is_voted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.memberVoteData && ctx.memberVoteData.current === "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.memberVoteData && ctx.memberVoteData.is_voted);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".member-home[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n}\n\n.form-controll[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 30%;\n  margin: 20px 0;\n}\n\n.submit[_ngcontent-%COMP%] {\n  width: 200px;\n  margin-top: 20px;\n}\n\n.form-controll[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 300px;\n}\n\n.vote-recorded[_ngcontent-%COMP%], .please-wait[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n  padding: 20px;\n}\n\n.vote-recorded[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: green;\n  font-size: 22px;\n}\n\n.please-wait[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: red;\n  font-size: 22px;\n}\n\n@media (max-width: 1028px) {\n  .form-controll[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n\n@media (max-width: 768px) {\n  .form-controll[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n}\n\n@media (max-width: 500px) {\n  .form-controll[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .form-controll[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 250px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL21lbWJlci1ob21lL21lbWJlci1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBOztFQUVFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFO0lBQ0UsVUFBVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL21lbWJlci1ob21lL21lbWJlci1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVyLWhvbWUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNTBweDtcbn1cblxuLmZvcm0tY29udHJvbGwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMjBweCAwO1xufVxuXG4uc3VibWl0IHtcbiAgd2lkdGg6IDIwMHB4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZm9ybS1jb250cm9sbCBidXR0b24ge1xuICB3aWR0aDogMzAwcHg7XG59XG5cbi52b3RlLXJlY29yZGVkLFxuLnBsZWFzZS13YWl0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMjBweDtcbn1cblxuLnZvdGUtcmVjb3JkZWQgcCB7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4ucGxlYXNlLXdhaXQgcCB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjhweCkge1xuICAuZm9ybS1jb250cm9sbCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvcm0tY29udHJvbGwge1xuICAgIHdpZHRoOiA4MCU7XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gIC5mb3JtLWNvbnRyb2xsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG4gIC5mb3JtLWNvbnRyb2xsIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDI1MHB4O1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-member-home",
                templateUrl: "./member-home.component.html",
                styleUrls: ["./member-home.component.css"],
            }]
    }], function () { return [{ type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/member/member.service.ts":
/*!******************************************!*\
  !*** ./src/app/member/member.service.ts ***!
  \******************************************/
/*! exports provided: MemberService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MemberService", function() { return MemberService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");







class MemberService {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.backEndUrl = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backEndUrl;
        this.positionsListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.createVoteListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.membersByPositionListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.memberVoteDataListenner = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.positions = [];
        this.membersByPosition = [];
        this.client = new apollo_boost__WEBPACK_IMPORTED_MODULE_1__["default"]({
            uri: this.backEndUrl,
            headers: {
                Authorization: this.authService.getToken(),
            },
        });
    }
    getPositionsListener() {
        return this.positionsListenner;
    }
    getCreateVoteListenner() {
        return this.createVoteListenner;
    }
    getMemberVoteDataListener() {
        return this.memberVoteDataListenner;
    }
    getMembersByPositionListener() {
        return this.membersByPositionListenner;
    }
    getAllPositions() {
        const getAllPositions = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getAllPositions {
          _id
          title
          eligible_year
          eligible_gender
        }
      }
    `;
        this.client.query({ query: getAllPositions }).then((res) => {
            this.positions = res.data.getAllPositions;
            console.log({ getAllPositions: this.positions });
            this.positionsListenner.next([...this.positions]);
        });
    }
    createVotes(positions) {
        const createVotes = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      mutation {
        createVotes(
          data: [
            {
              position: "${positions[0]._id}"
              to: "${positions[0].to._id}"
            }
            {
              position: "${positions[1]._id}"
              to: "${positions[1].to._id}"
            }
            {
              position: "${positions[2]._id}"
              to: "${positions[2].to._id}"
            }
            {
              position: "${positions[3]._id}"
              to: "${positions[3].to._id}"
            }
            {
              position: "${positions[4]._id}"
              to: "${positions[4].to._id}"
            }
            {
             position: "${positions[5]._id}"
              to: "${positions[5].to._id}"
            }
            {
              position: "${positions[6]._id}"
              to: "${positions[6].to._id}"
            }
          ]
        ) {
          _id
        }
      }
    `;
        this.client.mutate({ mutation: createVotes }).then((res) => {
            console.log(res);
            this.createVoteListenner.next(true);
        });
    }
    getAllMembersByPosition(position) {
        const getAllMembersByPosition = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getAllMembersByPosition(position: "${position}") {
          _id
          name
          secret
          year
          gender
        }
      }
    `;
        this.client.query({ query: getAllMembersByPosition }).then((res) => {
            this.membersByPosition = res.data.getAllMembersByPosition;
            console.log({ getAllMembersByPosition: this.membersByPosition });
            this.membersByPositionListenner.next([...this.membersByPosition]);
        });
    }
    getMemberVoteData() {
        const getMemberVoteData = apollo_boost__WEBPACK_IMPORTED_MODULE_1__["gql"] `
      query {
        getMemberVoteData {
          is_voted
          current
        }
      }
    `;
        this.client
            .query({ query: getMemberVoteData, fetchPolicy: "no-cache" })
            .then((res) => {
            console.log({ getMemberVoteData: res.data.getMemberVoteData });
            this.memberVoteData = res.data.getMemberVoteData;
            this.memberVoteDataListenner.next(this.memberVoteData);
        });
    }
}
MemberService.ɵfac = function MemberService_Factory(t) { return new (t || MemberService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
MemberService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MemberService, factory: MemberService.ɵfac, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MemberService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: "root",
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/member/select-person-dialog/select-person-dialog.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/member/select-person-dialog/select-person-dialog.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SelectPersonDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectPersonDialogComponent", function() { return SelectPersonDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../member.service */ "./src/app/member/member.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function SelectPersonDialogComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", member_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r36.name);
} }
class SelectPersonDialogComponent {
    constructor(data, memberService) {
        this.data = data;
        this.memberService = memberService;
        this.membersByPosition = [];
    }
    ngOnDestroy() {
        this.membersByPositionSub.unsubscribe();
    }
    ngOnInit() {
        console.log({ selectPersonDialogComponentData: this.data });
        this.memberService.getAllMembersByPosition(this.data["_id"]);
        this.membersByPositionSub = this.memberService
            .getMembersByPositionListener()
            .subscribe((membersByPosition) => {
            this.membersByPosition = membersByPosition;
            console.log({
                selectPersonDialogComponentMembersByPosition: this.membersByPosition,
            });
        });
    }
    onSelectMember(member) {
        console.log({ selectedMember: member, position: this.data });
    }
}
SelectPersonDialogComponent.ɵfac = function SelectPersonDialogComponent_Factory(t) { return new (t || SelectPersonDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"])); };
SelectPersonDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectPersonDialogComponent, selectors: [["ng-component"]], decls: 5, vars: 1, consts: [[1, "wrapper"], ["class", "member", 3, "mat-dialog-close", 4, "ngFor", "ngForOf"], [1, "member", 3, "mat-dialog-close"]], template: function SelectPersonDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "- Select a person -");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectPersonDialogComponent_div_4_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.membersByPosition);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.member[_ngcontent-%COMP%] {\n  background-color: #f4f4f4;\n  padding: 5px;\n  margin: 5px;\n  width: 250px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.member[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  box-shadow: 1px 3px 4px rgba(0, 0, 0, 0.4);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVtYmVyL3NlbGVjdC1wZXJzb24tZGlhbG9nL3NlbGVjdC1wZXJzb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMENBQTBDO0FBQzVDIiwiZmlsZSI6InNyYy9hcHAvbWVtYmVyL3NlbGVjdC1wZXJzb24tZGlhbG9nL3NlbGVjdC1wZXJzb24tZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm1lbWJlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY0ZjQ7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG4gIHdpZHRoOiAyNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5tZW1iZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJveC1zaGFkb3c6IDFweCAzcHggNHB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectPersonDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                templateUrl: "select-person-dialog.component.html",
                styleUrls: ["select-person-dialog.component.css"],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/top-nav/top-nav.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/shared/top-nav/top-nav.component.ts ***!
  \*****************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/auth/auth.service */ "./src/app/auth/auth.service.ts");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







function TopNavComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TopNavComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TopNavComponent {
    constructor(authService) {
        this.authService = authService;
        this.homeUrl = "auth/member-login";
        this.isAuth = false;
    }
    ngOnDestroy() {
        this.userCategorySub.unsubscribe();
        this.userAuthSub.unsubscribe();
    }
    ngOnInit() {
        this.userCategory = this.authService.getUserCategory();
        this.isAuth = this.authService.isUserAuth();
        this.userCategorySub = this.authService
            .getUserCategoryStatusListener()
            .subscribe((userCategory) => {
            this.userCategory = userCategory;
            console.log({ topNavUserCategory: this.userCategory });
            if (this.userCategory === "developer") {
                this.homeUrl = "admin/admin-home";
            }
            else if (this.userCategory === "member") {
                this.homeUrl = "member/member-home";
            }
            else {
                this.homeUrl = "auth/member-login";
            }
        });
        if (this.userCategory === "developer") {
            this.homeUrl = "admin/admin-home";
        }
        else if (this.userCategory === "member") {
            this.homeUrl = "member/member-home";
        }
        else {
            this.homeUrl = "auth/member-login";
        }
        this.userAuthSub = this.authService
            .getAuthStatusListener()
            .subscribe((isAuth) => {
            this.isAuth = isAuth;
        });
    }
    onLogout() {
        this.authService.logOutUser();
    }
}
TopNavComponent.ɵfac = function TopNavComponent_Factory(t) { return new (t || TopNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
TopNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TopNavComponent, selectors: [["app-top-nav"]], decls: 4, vars: 3, consts: [[1, "mat-elevation-z6"], [3, "href", "routerLink"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]], template: function TopNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Online voting system");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TopNavComponent_button_3_Template, 2, 0, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.homeUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", ctx.homeUrl);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuth);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_2__["MatToolbar"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: ["mat-toolbar[_ngcontent-%COMP%] {\n  background-color: #3f51b5;\n  color: #fff;\n  \n  display: flex;\n  justify-content: space-between;\n}\n\n.mat-elevation-z6[_ngcontent-%COMP%] {\n  box-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\n    0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n}\n\nmat-toolbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFO3NFQUNvRTtBQUN0RTs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZjUxYjU7XG4gIGNvbG9yOiAjZmZmO1xuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1hdC1lbGV2YXRpb24tejYge1xuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMiksXG4gICAgMCA2cHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDE4cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG5tYXQtdG9vbGJhciBhIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TopNavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-top-nav",
                templateUrl: "./top-nav.component.html",
                styleUrls: ["./top-nav.component.css"],
            }]
    }], function () { return [{ type: src_app_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backEndUrl: "http://localhost:4000/",
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/freedom/Desktop/GitHub/VotingSystem/VotingSystem-WebApp/client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map