import { Injectable } from '@nestjs/common';
import { PrismaClient as PrismaContenidoClient } from '../../../generated/prisma-contenido'; 

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaContenidoClient) {}

  async findUserById(id: number) {
    return this.prisma.user.findUnique({
      where: { id },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async changeUserRole(userId: number, roleName: string) {
    const role = await this.prisma.role.findUnique({
      where: { name: roleName },
    });

    if (!role) {
      throw new Error(`Role ${roleName} not found`);
    }

    return this.prisma.user.update({
      where: { id: userId },
      data: { roleId: role.id },
      include: {
        role: {
          include: {
            permissions: {
              include: {
                permission: true,
              },
            },
          },
        },
      },
    });
  }

  async getAvailableRoles() {
    return this.prisma.role.findMany({
      include: {
        permissions: {
          include: {
            permission: true,
          },
        },
      },
    });
  }

  async getAllUsers() {
    return this.prisma.user.findMany({
      include: {
        role: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}