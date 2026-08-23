/* ── CONTATO: fonte única de verdade para telefone e mensagens de WhatsApp ── */
const CONTATO = {
  telefone: '5545998112533',
  telefoneFormatado: '(45) 99811-2533',
  msg: {
    hero: 'Oi, quero automatizar meu negócio',
    diagnostico: 'Quero fazer um diagnóstico operacional',
    orcamento: 'Quero um orçamento',
    ctaFinal: 'Quero resolver um problema na minha operação',
    botFlutuante: 'Oi, quero saber mais sobre a Montejano'
  }
};

function linkWhatsApp(mensagem) {
  return mensagem
    ? 'https://wa.me/' + CONTATO.telefone + '?text=' + encodeURIComponent(mensagem)
    : 'https://wa.me/' + CONTATO.telefone;
}

/* ── SERVIÇOS ── */
const SERVICOS = [
  {
    numero: '01',
    nome: 'AUTOMAÇÕES',
    descCurta: 'Transforme tarefas repetitivas em processos automáticos.',
    preco: null,
    colunas: [
      {
        titulo: 'O que fazemos',
        itens: [
          'Bots para WhatsApp',
          'Reservas automáticas',
          'Agendamentos',
          'Confirmações e lembretes',
          'Fluxos automatizados',
          'Integrações entre sistemas',
          'Notificações automáticas'
        ]
      },
      {
        titulo: 'Benefícios',
        beneficios: true,
        itens: [
          'Menos trabalho manual',
          'Menos erros operacionais',
          'Mais agilidade',
          'Atendimento mais eficiente'
        ]
      }
    ],
    ctaTexto: 'Falar sobre automação →',
    ctaMsg: 'Quero saber mais sobre automações'
  },
  {
    numero: '02',
    nome: 'DADOS',
    descCurta: 'Transforme informações em decisões.',
    preco: null,
    colunas: [
      {
        titulo: 'O que fazemos',
        itens: [
          'Dashboards personalizados',
          'Relatórios automáticos',
          'Organização de dados',
          'Estruturação de informações',
          'Migração de controles manuais',
          'Indicadores de desempenho'
        ]
      },
      {
        titulo: 'Benefícios',
        beneficios: true,
        itens: [
          'Mais controle',
          'Melhor tomada de decisão',
          'Visualização clara dos resultados',
          'Informações centralizadas'
        ]
      }
    ],
    ctaTexto: 'Falar sobre dados →',
    ctaMsg: 'Quero saber mais sobre dados e dashboards'
  },
  {
    numero: '03',
    nome: 'SISTEMAS',
    descCurta: 'Ferramentas desenvolvidas para a realidade da sua operação.',
    preco: null,
    colunas: [
      {
        titulo: 'O que fazemos',
        itens: [
          'Controle de caixa',
          'Controle de estoque',
          'Gestão de clientes',
          'Gestão de reservas',
          'Sistemas personalizados',
          'Portais internos',
          'Soluções para eventos'
        ]
      },
      {
        titulo: 'Soluções para Eventos',
        itens: [
          'Caixa para eventos',
          'Controle de vendas',
          'Comandas digitais',
          'Relatórios de fechamento',
          'Gestão operacional temporária'
        ],
        extra: {
          titulo: 'Benefícios',
          beneficios: true,
          itens: [
            'Processos organizados',
            'Operação mais eficiente',
            'Menos retrabalho',
            'Mais controle do negócio'
          ]
        }
      }
    ],
    ctaTexto: 'Falar sobre sistemas →',
    ctaMsg: 'Quero saber mais sobre sistemas'
  },
  {
    numero: '04',
    nome: 'SOLUÇÕES WEB',
    descCurta: 'Sua presença digital conectada ao seu negócio.',
    preco: null,
    colunas: [
      {
        titulo: 'O que fazemos',
        itens: [
          'Sites institucionais',
          'Landing Pages',
          'Portais Web',
          'Formulários inteligentes',
          'Captação de leads',
          'Integrações com WhatsApp'
        ]
      },
      {
        titulo: 'Benefícios',
        beneficios: true,
        itens: [
          'Mais credibilidade',
          'Mais oportunidades de contato',
          'Presença digital profissional',
          'Integração com seus processos internos'
        ]
      }
    ],
    ctaTexto: 'Falar sobre presença digital →',
    ctaMsg: 'Quero saber mais sobre soluções web'
  },
  {
    numero: '05',
    nome: 'SUPORTE E EVOLUÇÃO',
    descCurta: 'Acompanhamento contínuo para garantir que suas soluções continuem funcionando e evoluindo.',
    preco: null,
    planos: [
      {
        nome: 'ESSENCIAL',
        itens: ['Suporte básico', 'Correções simples', 'Monitoramento']
      },
      {
        nome: 'OPERACIONAL',
        destaque: true,
        itens: ['Ajustes periódicos', 'Atendimento prioritário', 'Melhorias operacionais']
      },
      {
        nome: 'PARCEIRO',
        itens: ['Evolução contínua', 'Novas automações', 'Reuniões estratégicas', 'Acompanhamento próximo']
      }
    ],
    ctaTexto: 'Falar sobre planos →',
    ctaMsg: 'Quero saber mais sobre planos de suporte'
  }
];

/* ── CASES ── */
const CASES = [
  {
    emAndamento: true,
    nicho: 'Restaurante',
    titulo: 'AUTOMAÇÃO DE RESERVAS',
    problema: 'Demanda alta de clientes mandando mensagens a qualquer hora — o maître perdia tempo respondendo uma a uma, o tempo todo, sem conseguir focar na operação.',
    resultados: [
      '100% das reservas via WhatsApp automático',
      '3 horas economizadas por dia na operação',
      '60% menos no-shows com lembrete automático'
    ],
    stack: 'n8n · WhatsApp API'
  },
  {
    nicho: 'Laboratório',
    titulo: 'DASHBOARD UNIFICADO',
    problema: 'Mais de 15 planilhas sem padrão. Horas toda semana só para consolidar dados e gerar um relatório.',
    resultados: [
      '80% menos tempo de consolidação',
      '1 painel substituiu todas as planilhas',
      'Atualização automática, sem intervenção'
    ],
    stack: 'Power BI · Excel · Modelagem de dados'
  },
  {
    nicho: 'Restaurante',
    titulo: 'SISTEMA DE COMANDAS DIGITAL',
    problema: 'Pedidos perdidos no papel, erros na cozinha, clientes esperando mais do que deveriam.',
    resultados: [
      'Zero pedidos perdidos',
      '40% menos tempo de atendimento',
      'Sistema 100% personalizado, sem mensalidade'
    ],
    stack: 'Python · SQL · Docker · Sistema Web'
  },
  {
    nicho: 'Evento',
    titulo: 'CONTROLE DE CAIXA EM TEMPO REAL',
    problema: 'Cálculos manuais geravam erros, fechamento demorava horas, sem visibilidade do faturamento durante o evento.',
    resultados: [
      'Zero erros no fechamento',
      '90% menos tempo para fechar o caixa',
      'Faturamento visível em tempo real'
    ],
    stack: 'Python · Excel · Dashboard · Automação'
  }
];
