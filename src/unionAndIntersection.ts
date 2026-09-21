//union

type UserRole = "admin" | "user" | "guest";

const getDashboard = (role: UserRole) => {
    if (role === "admin") {
        return "Admin Dashboard";
    } else if (role === "user") {
        return "User Dashboard";
    } else {
        return "Guest Dashboard";
    }
};

getDashboard("admin"); // returns "Admin Dashboard"

getDashboard("user"); // returns "User Dashboard"

getDashboard("guest"); // returns "Guest Dashboard"

type employee = {
    id: number,
    name: string,
    phone: number,
}

type manager = {
    id: number,
    name: string,
    email: string,
}

type employeeOrManager = employee & manager;

const employee1: employeeOrManager = {
    id: 1,
    name: "John Doe",
    phone: 1234567890,
    email: "john.doe@example.com"
}