import { Project, CaseStudy, JourneyStep, PracticeArea, CredentialItem, NowItem, SocialLink } from '../types';

export const personalInfo = {
  name: "Lucas Barata",
  shortRole: "CRM • Automação • IA • Growth",
  location: "Espírito Santo, Brasil",
  heroTitle: "Construindo coisas que resolvem problemas.",
  heroLead: "Trabalho na interseção entre aquisição, comportamento do cliente, CRM, automação, IA e dados.",
  heroJourneyNote: "Não olho apenas para o anúncio ou para a ferramenta. Gosto de entender o caminho completo: de onde o cliente veio, o que ele faz, como se relaciona com a empresa e onde o processo pode melhorar.",
  heroProductsNote: "Também crio meus próprios produtos e projetos para testar ideias na prática.",
  
  customerJourney: {
    title: "Eu gosto de olhar o caminho inteiro.",
    introLines: [
      "Um anúncio pode trazer o cliente.",
      "O CRM organiza o relacionamento.",
      "A automação evita tarefas repetitivas.",
      "A IA pode melhorar o atendimento.",
      "E os dados mostram o que realmente aconteceu."
    ],
    closingNote: "Para mim, essas coisas não são partes isoladas. Elas fazem parte da mesma jornada."
  },

  thinking: {
    title: "Gosto de transformar problemas em coisas que funcionam.",
    paragraphs: [
      "Muitas vezes o problema não é falta de tecnologia.",
      "É ter processos complicados, informações espalhadas ou tarefas que alguém precisa repetir todos os dias.",
      "Gosto justamente dessa parte: entender o problema, conectar as ferramentas e tentar encontrar uma maneira mais simples de fazer aquilo funcionar."
    ],
    highlightQuote: [
      "Às vezes a solução é uma automação.",
      "Às vezes é um processo melhor.",
      "Às vezes é simplesmente parar de complicar."
    ]
  },

  about: {
    title: "Um pouco sobre mim",
    avatarUrl: "/lucas-barata.png",
    paragraphs: [
      "Sou o Lucas.",
      "Trabalho com tecnologia, CRM, automação, IA e processos comerciais, mas não gosto muito de ficar parado em uma única coisa.",
      "Além dos projetos profissionais, gosto de criar produtos próprios, testar ideias e aprender novas ferramentas.",
      "Também participo da minha comunidade e sou catequista. Fora do computador, essa é uma parte importante da minha vida.",
      "No fim, gosto de duas coisas: entender como as coisas funcionam e tentar descobrir como fazê-las funcionar melhor."
    ]
  },

  contact: {
    title: "Tem uma ideia, problema ou projeto?",
    description: "Se quiser conversar sobre tecnologia, automação, CRM, IA ou simplesmente trocar uma ideia, pode me chamar.",
    whatsappNumber: "5528999465293",
    whatsappDefaultMessage: "Olá Lucas! Vi seu site pessoal e gostaria de conversar.",
  }
};

export const journeySteps: JourneyStep[] = [
  {
    id: "aquisicao",
    stepNumber: "01",
    title: "AQUISIÇÃO",
    subitems: "Meta Ads • Google Ads"
  },
  {
    id: "comportamento",
    stepNumber: "02",
    title: "COMPORTAMENTO",
    subitems: "Clique • Lead • Interesse"
  },
  {
    id: "crm",
    stepNumber: "03",
    title: "CRM",
    subitems: "Organização • Segmentação • Pipeline"
  },
  {
    id: "relacionamento",
    stepNumber: "04",
    title: "RELACIONAMENTO",
    subitems: "WhatsApp • E-mail • Follow-up"
  },
  {
    id: "automacao",
    stepNumber: "05",
    title: "AUTOMAÇÃO",
    subitems: "Integrações • Workflows • IA"
  },
  {
    id: "resultado",
    stepNumber: "06",
    title: "RESULTADO",
    subitems: "Venda • Retenção • Dados"
  }
];

export const projects: Project[] = [
  {
    id: "liberte-se",
    name: "Liberte-se",
    category: "Produto / IA",
    description: "Uma aplicação que ajuda pessoas a estruturar um plano diário de mudança de hábitos.",
    status: "Em evolução",
    statusType: "evolving",
    ctaText: "Conhecer projeto →",
    url: "https://libertese.gltechlabs.com.br/",
    longDescription: "O Liberte-se foi concebido para transformar a jornada de construção de novos hábitos em um processo prático, sustentável e personalizado. Utilizando IA, a aplicação auxilia o usuário a mapear gatilhos comportamentais, estruturar micro-metas diárias realistas e acompanhar o progresso consistente sem sobrecarga.",
    highlights: [
      "Estruturação inteligente e progressiva de rotinas diárias",
      "Interações e feedback comportamental assistidos por IA",
      "Foco em consistência, simplicidade e execução real"
    ],
    techStack: ["React", "TypeScript", "Integração de IA", "Tailwind CSS"]
  },
  {
    id: "prospera",
    name: "Prospera",
    category: "Produto / Finanças",
    description: "Controle financeiro pessoal direto e sem complicação, para organizar salário, entradas e contas do mês com clareza.",
    status: "Projeto ativo",
    statusType: "active",
    ctaText: "Conhecer projeto →",
    url: "https://prospera.gltechlabs.com.br/",
    longDescription: "O Prospera foi criado a partir de uma necessidade prática: gerenciar finanças pessoais de forma objetiva, sem a burocracia de planilhas complexas ou aplicativos cheios de anúncios. A aplicação permite lançar salário, mapear contas a pagar do mês e acompanhar o saldo disponível em tempo real.",
    highlights: [
      "Lançamento simples de salário, receitas e entradas do mês",
      "Controle de contas a pagar, vencimentos e previsibilidade de saldo",
      "Interface limpa e rápida focada em usabilidade no dia a dia"
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "Controle Financeiro"]
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "crm-automacao-ia",
    title: "CRM + Automação + IA",
    category: "Processo comercial",
    description: "Estruturação de CRM, segmentação e automações para melhorar o aproveitamento dos leads e o processo comercial.",
    highlight: "+200% de faturamento em 4 meses",
    highlightLabel: "Resultado em destaque",
    contextNote: "Mais do que gerar leads, o objetivo era trabalhar melhor os leads que já chegavam.",
    impact: "Reorganização completa do pipeline comercial e qualificação imediata para evitar perda de oportunidades aquecidas.",
    details: [
      "Mapeamento detalhado dos pontos de fuga entre o primeiro clique e o fechamento.",
      "Automações de qualificação e distribuição ágil de leads para os consultores certos.",
      "Dashboards em tempo real com métricas claras de conversão por etapa."
    ],
    tools: ["Kommo CRM", "Automações Avançadas", "IA de Triagem", "Webhooks"]
  },
  {
    id: "automacao-processos-operacionais",
    title: "Automação de Processos Operacionais",
    category: "Operações & Integrações",
    description: "Automação de processos do cliente, conectando atendimento, sistemas e reservas para reduzir tarefas manuais e tornar a operação mais eficiente.",
    highlight: "Sistemas conversando entre si com operação automática",
    highlightLabel: "Eficiência operacional",
    contextNote: "A ideia era fazer os sistemas conversarem entre si e deixar a operação acontecer de forma mais automática.",
    impact: "Redução drástica de tempo gasto em tarefas operacionais repetitivas e eliminação de falhas de comunicação entre etapas de atendimento e reservas.",
    details: [
      "Conexão direta entre canais de atendimento ao cliente, sistemas de gestão e fluxo de reservas.",
      "Sincronização instantânea de dados sem necessidade de preenchimento manual.",
      "Notificações automáticas para a equipe operacional a cada nova etapa concluída."
    ],
    tools: ["n8n / Make", "APIs REST", "WhatsApp", "Sistemas de Reservas", "Webhooks"]
  },
  {
    id: "automacao-processos-comerciais",
    title: "Automação de processos comerciais",
    category: "Processos",
    description: "Integrações entre CRM, APIs, WhatsApp e outras ferramentas para transformar tarefas manuais em fluxos automáticos.",
    highlight: "Processos mais simples e menos tarefas repetitivas.",
    highlightLabel: "Operação fluida",
    contextNote: "A equipe passa a focar nas conversas que importam enquanto a rotina mecânica roda nos bastidores.",
    impact: "Fluxos de comunicação e sincronização que conectam formulários, mensageria e dados operacionais.",
    details: [
      "Disparo automático e contextual via WhatsApp no timing exato de cada etapa.",
      "Atualização em cascata de status entre plataformas sem necessidade de intervenção humana.",
      "Notificações automáticas de alertas comerciais críticos para o time."
    ],
    tools: ["WhatsApp API", "n8n", "Make", "APIs / Webhooks", "CRM"]
  }
];

export const practiceAreas: PracticeArea[] = [
  {
    id: "aquisicao",
    number: "01",
    title: "AQUISIÇÃO",
    skills: "Meta Ads • Google Ads • campanhas • análise",
    description: "Entendo como o cliente chega e o que acontece depois do clique."
  },
  {
    id: "crm",
    number: "02",
    title: "CRM",
    skills: "Funil • segmentação • relacionamento • processos comerciais",
    description: "Organizo as informações para entender melhor cada oportunidade."
  },
  {
    id: "automacao-ia",
    number: "03",
    title: "AUTOMAÇÃO & IA",
    skills: "n8n • APIs • WhatsApp • integrações • IA",
    description: "Conecto ferramentas e automatizo processos que não precisam depender de trabalho manual."
  },
  {
    id: "dados",
    number: "04",
    title: "DADOS",
    skills: "Dashboards • indicadores • análise",
    description: "Transformo dados da operação em informações que ajudam a entender o que está funcionando."
  }
];

export const toolsList: string[] = [
  "Kommo",
  "n8n",
  "Make",
  "Zapier",
  "ActiveCampaign",
  "HubSpot",
  "Pipedrive",
  "WhatsApp API",
  "Meta Ads",
  "Google Ads",
  "Power BI",
  "Looker Studio",
  "APIs / Webhooks",
  "IA / LLMs"
];

export const credentials: CredentialItem[] = [
  {
    id: "parceiro-oficial-kommo",
    title: "Parceiro Oficial Kommo",
    issuer: "Kommo CRM",
    category: "Parceria Oficial",
    badge: "Parceiro Oficial",
    highlight: true
  },
  {
    id: "hubspot-inbound",
    title: "Inbound Marketing",
    issuer: "HubSpot Academy",
    category: "Certificação",
    badge: "Certificado Oficial"
  },
  {
    id: "hubspot-software",
    title: "HubSpot Marketing Software",
    issuer: "HubSpot Academy",
    category: "Certificação",
    badge: "Certificado Oficial"
  },
  {
    id: "graduacao-ads",
    title: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    issuer: "Graduação Tecnológica",
    category: "Formação",
    badge: "Formação Superior"
  }
];

export const certifications = credentials;

export const nowItems: NowItem[] = [
  {
    id: "now-1",
    icon: "🛠️",
    text: "Construindo novos projetos",
    detail: "Criando e testando novas ideias."
  },
  {
    id: "now-2",
    icon: "⚙️",
    text: "Trabalhando com CRM e automações",
    detail: "Projetando processos comerciais mais simples."
  },
  {
    id: "now-3",
    icon: "🤖",
    text: "Explorando novas aplicações de IA",
    detail: "Testando maneiras práticas de usar IA em processos reais."
  },
  {
    id: "now-4",
    icon: "📚",
    text: "Aprendendo e experimentando",
    detail: "Novas ferramentas, integrações e possibilidades."
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    label: "+55 28 99946-5293",
    url: "https://wa.me/5528999465293?text=Ol%C3%A1%20Lucas!%20Vi%20seu%20site%20pessoal%20e%20gostaria%20de%20conversar.",
    icon: "whatsapp",
    isPrimary: true
  },
  {
    name: "LinkedIn",
    label: "Lucas Barata Passabão",
    url: "https://www.linkedin.com/in/lucas-barata-passabao/",
    icon: "linkedin"
  },
  {
    name: "Instagram",
    label: "@lbaratap",
    url: "https://www.instagram.com/lbaratap/",
    icon: "instagram"
  }
];

export const navItems = [
  { name: "Visão", href: "#jornada" },
  { name: "Projetos", href: "#projetos" },
  { name: "Cases", href: "#cases" },
  { name: "Na prática", href: "#na-pratica" },
  { name: "Como penso", href: "#como-penso" },
  { name: "Sobre", href: "#sobre" },
  { name: "Contato", href: "#contato" }
];
