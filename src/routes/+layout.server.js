// src/routes/+layout.server.js
export const load = async ({ locals: { safeGetSession } }) => {
  const { session, user, userDetails } = await safeGetSession();

  return {
    session,
    user,
    userDetails
  };
};
