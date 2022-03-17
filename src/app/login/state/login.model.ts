export interface Login {
  id: number;
  fistName: string;
  lastName: string;
  email: string;
  password: number;
  priorityId: number;
  roleId:number;
  telNumber:string;
  createdAt:any;
  updatedAt:any;
}

export function createLogin(params: Partial<Login>) {
  return {

  } as Login;
}
