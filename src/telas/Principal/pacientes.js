const pacientes = [
  {
    id: 1,
    nome: "Larissa Santana",
    tipoConsulta: "Atendimento na secretaria",
    horario: "16:00 - 17:00 (1h)",
    foto: require("../../assets/larissa.png"),
    icon: "map-pin",
    perfil: "Aluna do 2o ano tecnico",
    sobre: "Solicitou segunda via de documento e precisa confirmar os dados de cadastro antes do fim do turno.",
    endereco: "Secretaria - Bloco A"
  },
  {
    id: 2,
    nome: "Marcos Correia",
    tipoConsulta: "Reuniao online com responsavel",
    horario: "17:20 - 18:00 (40 minutos)",
    foto: require("../../assets/marcos.png"),
    icon: "video",
    perfil: "Responsavel pelo aluno Pedro",
    sobre: "Conversar sobre frequencia, atividades pendentes e combinados para a proxima semana.",
    endereco: "Sala virtual da coordenacao"
  },
  {
    id: 3,
    nome: "Clara Lemos",
    tipoConsulta: "Orientacao pedagogica",
    horario: "18:00 - 19:00 (1h)",
    foto: require("../../assets/clara.png"),
    icon: "map-pin",
    perfil: "Professora de mobile",
    sobre: "Alinhar entrega do projeto, criterios de avaliacao e organizacao dos grupos em sala.",
    endereco: "Sala dos professores"
  },
  {
    id: 4,
    nome: "Luciana Dias",
    tipoConsulta: "Chamada com secretaria",
    horario: "19:20 - 20:00 (40 minutos)",
    foto: require("../../assets/luciana.png"),
    icon: "video",
    perfil: "Equipe da secretaria",
    sobre: "Conferir lista de presenca, pendencias de matricula e avisos que precisam ser enviados para a turma.",
    endereco: "Atendimento remoto"
  },
]

export default pacientes;
