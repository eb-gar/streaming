import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Auth } from '../../auth/decorators/auth.decorator';
import { GetUser } from '../../auth/decorators/user.decorator';
import { JwtPayload } from '../../auth/interfaces/auth.interfaces';
import { ChangeRoleDto } from './change-role.dto';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('me')
  @Auth()
  async getMe(@GetUser() user: JwtPayload) {
    const userData = await this.usersService.findUserById(user.sub);
    return {
      id: userData.id,
      email: userData.email,
      role: userData.role.name,
      permissions: userData.role.permissions.map(p => p.permission.name),
    };
  }

  @Patch(':id/role')
  @Auth({ roles: ['ADMIN'], permissions: ['manage_roles'] })
  async changeUserRole(
    @Param('id') userId: string,
    @Body() changeRoleDto: ChangeRoleDto,
    @GetUser() adminUser: JwtPayload,
  ) {
    const targetUser = await this.usersService.findUserById(Number(userId));

    if (!targetUser) {
      throw new NotFoundException('Usuario no encontrado');
    }

    if (targetUser.id === adminUser.sub) {
      throw new ForbiddenException('No puedes cambiar tu propio rol');
    }

    const updatedUser = await this.usersService.changeUserRole(
      Number(userId),
      changeRoleDto.role,
    );

    return {
      id: updatedUser.id,
      email: updatedUser.email,
      role: updatedUser.role.name,
      permissions: updatedUser.role.permissions.map(p => p.permission.name),
    };
  }

  @Get('roles/available')
  @Auth({ roles: ['ADMIN'], permissions: ['view_roles'] })
  async getAvailableRoles() {
    return this.usersService.getAvailableRoles();
  }

  @Get()
  @Auth({ roles: ['ADMIN'], permissions: ['view_users'] })
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}