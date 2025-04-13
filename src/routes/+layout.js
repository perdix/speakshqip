export const load = async ({ data }) => {
  return {
    session: data.session,
    user: data.user,
    userDetails: data.userDetails,
  };
};