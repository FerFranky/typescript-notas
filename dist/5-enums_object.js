"use strict";
//Enums
var Roles;
(function (Roles) {
    Roles["User"] = "User";
    Roles["Admin"] = "Admin";
    Roles["SuperAdmin"] = "SuperAdmin";
})(Roles || (Roles = {}));
// console.log(Roles.Admin);
// Objects
const roles = {
    User: 0,
    Admin: 1,
    SuperAdmin: 2
};
console.log(roles.SuperAdmin);
