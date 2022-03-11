/** @format */

let user = {
  id: 1,
  firstname: "Maxime",
  lastname: "Charruel",
};

const getMe = () => {
  try {
    console.log("GETME called", user);
    return user;
  } catch (error) {
    throw error;
  }
};

interface UpdateUserInput {
  updateUserInput: {
    firstname: string;
    lastname: string;
  };
}

const updateUser = (_: any, { updateUserInput }: UpdateUserInput) => {
  const { firstname, lastname } = updateUserInput;
  try {
    user.firstname = firstname;
    user.lastname = lastname;
    console.log("UPDATEUSER called", user);
    return user;
  } catch (error) {
    throw error;
  }
};

export const Queries = { getMe };
export const Mutations = { updateUser };
