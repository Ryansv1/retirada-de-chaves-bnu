import { Ambiente, Armario, Usuarios } from '../src/types/prisma/client';
import { v7 as uuidv7 } from 'uuid';
import { PrismaClient } from '../src/types/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';
import 'dotenv/config';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL });
const database = new PrismaClient({ adapter });

const ambientes: Pick<
  Ambiente,
  'codigo' | 'capacidade' | 'localizacao' | 'nome' | 'tipo'
>[] = [
  {
    nome: 'Sala de aula',
    codigo: 'B009',
    localizacao: 'SNO',
    capacidade: 40,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B016',
    localizacao: 'SNO',
    capacidade: 40,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B101',
    localizacao: 'SNO',
    capacidade: 68,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B102',
    localizacao: 'SNO',
    capacidade: 41,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B103',
    localizacao: 'SNO',
    capacidade: 55,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B104',
    localizacao: 'SNO',
    capacidade: 40,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B105',
    localizacao: 'SNO',
    capacidade: 55,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B106',
    localizacao: 'SNO',
    capacidade: 25,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B110',
    localizacao: 'SNO',
    capacidade: 55,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B111',
    localizacao: 'SNO',
    capacidade: 55,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B113',
    localizacao: 'SNO',
    capacidade: 55,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B114',
    localizacao: 'SNO',
    capacidade: 55,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B108',
    localizacao: 'SNO',
    capacidade: 31,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B107',
    localizacao: 'SNO',
    capacidade: 49,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B112',
    localizacao: 'SNO',
    capacidade: 45,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B207',
    localizacao: 'SNO',
    capacidade: 37,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B208',
    localizacao: 'SNO',
    capacidade: 37,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'Sala de aula',
    codigo: 'B302',
    localizacao: 'SNO',
    capacidade: 57,
    tipo: 'SALA_DE_AULA',
  },
  {
    nome: 'LABCOP - Laboratório de Controle e Processos',
    codigo: 'B021',
    localizacao: 'SNO',
    capacidade: 35,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABCID - Laboratório de Circuitos e Sistemas Digitais',
    codigo: 'B020',
    localizacao: 'SNO',
    capacidade: 33,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LEMA - Laboratório Ensino de Matemática',
    codigo: 'BS02',
    localizacao: 'SNO',
    capacidade: 50,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABFIS - Laboratório de Física',
    codigo: 'BS01',
    localizacao: 'SNO',
    capacidade: 30,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'Sala de atendimento',
    codigo: 'B005',
    localizacao: 'SNO',
    capacidade: 5,
    tipo: 'SALA_ADMINISTRATIVA',
  },
  {
    nome: 'LABINFO I - Laboratórios de Informática',
    codigo: 'B201',
    localizacao: 'SNO',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABINFO II - Laboratórios de Informática',
    codigo: 'B202',
    localizacao: 'SNO',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABEX - Laboratório de Expressão Gráfica',
    codigo: 'B301',
    localizacao: 'SNO',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LDPT - Laboratório de Desenvolvimento de Produtos Têxteis',
    codigo: 'B004',
    localizacao: 'SNO',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LabM3 - Laboratório de Magnetismo e Materiais Magnéticos',
    codigo: 'A029',
    localizacao: 'SNO',
    capacidade: 2,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABMAC - Laboratório de Matemática Aplicada e Computacional',
    codigo: 'B204',
    localizacao: 'SNO',
    capacidade: 5,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABTEC - Laboratório de Tecidos e Malhas',
    codigo: 'B001',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LAFET/LABMAM - Lab. Fenômenos de Transporte/Laboratório do Meio Ambiente',
    codigo: 'B002',
    localizacao: 'VELHA',
    capacidade: 23,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABCT - Laboratório de Cuidados Têxteis',
    codigo: 'B003',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABENE - Laboratório de Beneficiamento',
    codigo: 'B004',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LAMAT - Laboratório de Materialografia',
    codigo: 'B005',
    localizacao: 'VELHA',
    capacidade: 15,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABQI - Laboratório de Química Inorgânica',
    codigo: 'B010',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABQO - Laboratório de Química Orgânica',
    codigo: 'B011',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LASER - Laboratório de Sistemas Embarcados e Robótico',
    codigo: 'B015',
    localizacao: 'VELHA',
    capacidade: 16,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABIND - Laboratório de Informática Industrial',
    codigo: 'B016',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LMP - Laboratório de Multiuso para Prototipagem',
    codigo: 'B017',
    localizacao: 'VELHA',
    capacidade: 10,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LEM - Laboratório de Ensaios Mecânicos',
    codigo: 'B018',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABNANO - Laboratório de Nanoestruturas e Optoeletrônicas',
    codigo: 'B019',
    localizacao: 'VELHA',
    capacidade: 10,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LAMAE - Laboratório de Microscopia e Análise Estrutural',
    codigo: 'B020',
    localizacao: 'VELHA',
    capacidade: 2,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LTE - Laboratório de Análises Térmicas e Espectroscopia',
    codigo: 'B021',
    localizacao: 'VELHA',
    capacidade: 20,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LPM - Laboratório de Processamento de Materiais',
    codigo: 'B022',
    localizacao: 'VELHA',
    capacidade: 20,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LAPRO - Laboratório de Projetos',
    codigo: 'B024',
    localizacao: 'VELHA',
    capacidade: 20,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABCTI - Laboratório de Ciência Tecnologia e Inovação',
    codigo: 'B110',
    localizacao: 'VELHA',
    capacidade: 5,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LTMA - Lab. de Transformações e Materiais Avançados',
    codigo: 'B112',
    localizacao: 'VELHA',
    capacidade: 15,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABQA - Laboratório de Química Analítica',
    codigo: 'B113',
    localizacao: 'VELHA',
    capacidade: 20,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABEP - Laboratório de Eletrotécnica e Pneumática',
    codigo: 'B114',
    localizacao: 'VELHA',
    capacidade: 20,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LINTEX - Laboratório Integrado Têxtil',
    codigo: 'B116',
    localizacao: 'VELHA',
    capacidade: 10,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LAFIF - Laboratório de Fibras e Fiação',
    codigo: 'B117',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'LABEX - Laboratório de Expressão Gráfica',
    codigo: 'B118',
    localizacao: 'VELHA',
    capacidade: 25,
    tipo: 'LABORATORIO',
  },
  {
    nome: 'Apoio Técnico Engenharia de Controle e Automação',
    codigo: 'B119',
    localizacao: 'VELHA',
    capacidade: 3,
    tipo: 'LABORATORIO',
  },
];
const armarios: Pick<Armario, 'codigo'>[] = Array.from(
  { length: 48 },
  (_, i) => ({
    codigo: `B3.${(i + 1).toString().padStart(3, '0')}`,
  }),
);

// Criei pq alguns usuários eu crio o ID aqui mesmo. Outros não.
type CustomUsuarioType = Array<{
  id?: string;
  nome: string;
  matricula: string;
}>;

const usuarios: CustomUsuarioType = [
  {
    id: 'LANCAMENTO_ADMINISTRATIVO',
    nome: 'LANCAMENTO_ADMINISTRATIVO',
    matricula: 'SISTEMA',
  },
  {
    nome: 'teste',
    matricula: '12345678',
  },
];

async function main() {
  console.debug('Iniciando seed.');
  await database.$transaction(async (tx) => {
    for (const ambiente of ambientes) {
      await tx.ambiente.upsert({
        where: {
          codigo_localizacao: {
            codigo: ambiente.codigo,
            localizacao: ambiente.localizacao,
          },
        },
        update: {},
        create: {
          id: uuidv7(),
          ...ambiente,
          Chave: {
            create: {
              id: uuidv7(),
              tipo: 'AMBIENTE',
            },
          },
        },
      });
    }
  });
  console.log('Ambientes Criados.');
  await database.$transaction(async (tx) => {
    for (const armario of armarios) {
      await tx.armario.upsert({
        where: {
          codigo: armario.codigo,
        },
        update: {},
        create: {
          id: uuidv7(),
          codigo: armario.codigo,
          localizacao: `${armario.codigo.charAt(1)}° Andar`,
          bloco: `Bloco ${armario.codigo.charAt(0)}`,
          Chave: {
            create: {
              id: uuidv7(),
              tipo: 'ARMARIO',
            },
          },
        },
      });
    }
  });
  console.log('Armarios Criados');
  for (const usuario of usuarios) {
    await database.usuarios.upsert({
      where: {
        matricula: usuario.matricula,
      },
      update: {},
      create: {
        id: usuario.id ?? uuidv7(),
        matricula: usuario.matricula,
        nome: usuario.nome,
      },
    });
  }
  console.log('Usuários Criados.');
}

await main().then(() => {
  console.warn('Seed finalizado.');
  process.exit(1);
});
