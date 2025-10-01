import { database } from '../lib/prisma.js';

export async function isAuthorized(
  usuarioId: string,
  codigo: string,
): Promise<boolean> {
  console.log(codigo);
  const ambientesNecessariosAutorizacao = [
    'B.301',
    'B.020',
    'B.021',
    'B.201',
    'B.202',
    'B.S02',
    'A.029',
    'B122',
  ];

  // Bypass para caso o ambiente que o usuário solicite não esteja incluido nessa lista.
  if (!ambientesNecessariosAutorizacao.includes(codigo)) {
    console.log('caui aqui');
    return true;
  }

  const userHavePermission = await database.chaves_Usuarios.findFirst({
    where: {
      AND: [
        { usuarioId: usuarioId },
        {
          Chave: {
            Ambiente: {
              codigo: codigo,
            },
          },
        },
      ],
    },
  });

  console.log(userHavePermission);

  if (!userHavePermission) return false;

  return true;
}
