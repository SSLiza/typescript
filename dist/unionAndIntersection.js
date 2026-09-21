"use strict";
//union
Object.defineProperty(exports, "__esModule", { value: true });
const getDashboard = (role) => {
    if (role === "admin") {
        return "Admin Dashboard";
    }
    else if (role === "user") {
        return "User Dashboard";
    }
    else {
        return "Guest Dashboard";
    }
};
getDashboard("admin"); // returns "Admin Dashboard"
getDashboard("user"); // returns "User Dashboard"
getDashboard("guest"); // returns "Guest Dashboard"
const employee1 = {
    id: 1,
    name: "John Doe",
    phone: 1234567890,
    email: "john.doe@example.com"
};
//# sourceMappingURL=unionAndIntersection.js.map