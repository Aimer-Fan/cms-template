import { AppModuleState } from './modules/app'
import { PermissionModuleState } from './modules/permission'
import { UserModuleState } from './modules/user'

export interface RootStoreTypes {
  app: AppModuleState;
  user: UserModuleState;
  permission: PermissionModuleState;
}
