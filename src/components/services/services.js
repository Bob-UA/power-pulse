export const handleFulfilledRegister = (state, { payload }) => {
      state.user.email = payload.email;
      state.user.name = payload.name;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
};

export const handleFulfilledLogin = (state, { payload }) => {
      state.user.email = payload.user.email;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
};

export const handleFulfilledLogout = (state) => {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
};

export const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user.name = payload.ResponseBody.name;
    state.user.avatarUrl = payload.ResponseBody.avatarUrl;
  state.user.email = payload.ResponseBody.email;
  state.user.bodyParams = payload.ResponseBody.bodyParams;
  state.isLoggedIn = true;
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

export const handleFulfilledMetricData = (state, { payload }) => {
  state.user.name = payload.ResponseBody.name;
    state.user.bodyParams = payload.ResponseBody.bodyParams;
      state.isLoading = false;
};

export const handlePendingCurrentUser = (state) => {
      state.isFetchingCurrentUser = true;
      state.isLoading = true;
};

export const handleRejectedCurrentUser = (state) => {
  state.isFetchingCurrentUser = false;
  state.isLoading = false;
};

export const handleFulfilled = (state, { payload }) => {
  state.data = payload;
  state.isLoading = false;
};

export const handlePending = (state) => {
  state.isLoading = true;
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};