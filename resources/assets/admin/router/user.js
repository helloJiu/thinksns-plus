/**
 * The file is defined "/setting" route.
 *
 * @author Seven Du <shiweidu@outlook.com>
 */

import User from '../component/User';
import UserAdd from '../component/user/UserAdd';
import UserManage from '../component/user/UserManage';
import Manage from '../component/user/Manage';
import Roles from '../component/user/Roles';
import RoleManage from '../component/user/RoleManage';
import Abilities from '../component/user/Abilities';
import Setting from '../component/user/Setting';

const routers = {
  path: 'users',
  component: User,
  children: [
    { path: '', component: Manage },
    { path: 'manage/:userId', component: UserManage },
    { path: 'add', component: UserAdd },
    { path: 'roles', component: Roles },
    { path: 'roles/:role', component: RoleManage },
    { path: 'abilities', component: Abilities },
    { path: 'setting', component: Setting }
  ]
};

export default routers;
