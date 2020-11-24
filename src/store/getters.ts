const getters = {
  token: (state: any) => state.user.token,
  device: (state: any) => state.app.device,
  roles: (state: any) => state.user.roles
}

export default getters
