type User = {
  email: string,
  is_active: boolean,
  is_superuser: boolean,
  full_name: string,
  id: number,
  trails: [any]
}

export default User;