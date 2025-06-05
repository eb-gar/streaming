import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  await prisma.rolePermission.deleteMany();
  await prisma.permission.deleteMany();
  await prisma.role.deleteMany();
  await prisma.user.deleteMany();

  const permissionsData = [
    // Contenido
    { name: 'create_content', description: 'Crear contenido' },
    { name: 'view_content', description: 'Ver contenido' },
    { name: 'edit_content', description: 'Editar contenido' },
    { name: 'delete_content', description: 'Eliminar contenido' },

    // Películas
    { name: 'view_movies', description: 'Ver películas' },
    { name: 'manage_movies', description: 'Gestionar películas' },

    // Series
    { name: 'view_series', description: 'Ver series' },
    { name: 'manage_series', description: 'Gestionar series' },

    // Usuarios
    { name: 'view_users', description: 'Ver usuarios' },
    { name: 'manage_users', description: 'Gestionar usuarios' },
  ];

  await prisma.permission.createMany({
    data: permissionsData,
    skipDuplicates: true,
  });

  const rolesData = [
    {
      name: 'USER',
      permissions: ['view_content', 'view_movies', 'view_series'],
    },
    {
      name: 'EDITOR',
      permissions: [
        'view_content', 'create_content', 'edit_content',
        'view_movies', 'manage_movies',
        'view_series', 'manage_series',
      ],
    },
    {
      name: 'ADMIN',
      permissions: permissionsData.map(p => p.name), // Todos los permisos
    },
  ];

  for (const role of rolesData) {
    const createdRole = await prisma.role.create({
      data: { name: role.name },
    });

    for (const permissionName of role.permissions) {
      const permission = await prisma.permission.findUnique({
        where: { name: permissionName },
      });
      if (permission) {
        await prisma.rolePermission.create({
          data: {
            roleId: createdRole.id,
            permissionId: permission.id,
          },
        });
      }
    }
  }

  console.log('Roles y permisos creados correctamente');

  const adminRole = await prisma.role.findUnique({ where: { name: 'ADMIN' } });

  if (!adminRole) {
    throw new Error('Rol ADMIN no encontrado');
  }

  await prisma.user.create({
    data: {
      email: 'yop@admin.com',
      password: await bcrypt.hash('yop123', 10),
      roleId: adminRole.id,
    },
  });

  console.log('Usuario administrador creado correctamente');
}

main()
  .catch((e) => {
    console.error('Error en el seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
