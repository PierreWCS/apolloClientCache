"use strict";
/** @format */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mutations = exports.Queries = void 0;
let user = {
    id: 1,
    firstname: "Maxime",
    lastname: "Charruel",
};
const getMe = () => {
    try {
        return user;
    }
    catch (error) {
        throw error;
    }
};
const updateUser = (_, { updateUserInput }) => {
    const { firstname, lastname } = updateUserInput;
    try {
        user.firstname = firstname;
        user.lastname = lastname;
        return user;
    }
    catch (error) {
        throw error;
    }
};
exports.Queries = { getMe };
exports.Mutations = { updateUser };
//# sourceMappingURL=resolvers.js.map