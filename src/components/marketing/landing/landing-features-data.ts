export type FeatureStatus = 'included' | 'soon' | 'module';

export type LandingFeature = {
  name: string;
  text: string;
  status: FeatureStatus;
};

export type LandingFeatureGroup = {
  title: string;
  visible: LandingFeature[];
  more: LandingFeature[];
};

const included = (name: string, text: string): LandingFeature => ({ name, text, status: 'included' });
const soon = (name: string, text: string): LandingFeature => ({ name, text, status: 'soon' });
const module = (name: string, text: string): LandingFeature => ({ name, text, status: 'module' });

export const LANDING_FEATURE_GROUPS: LandingFeatureGroup[] = [
  {
    title: 'Propostas',
    visible: [
      included(
        'Propostas que encantam',
        'Monte Propostas bonitas, com roteiro dia a dia, fotos e Serviços organizados, sem precisar de ferramenta de design.',
      ),
      included(
        'Proposta por link, sempre atualizada',
        'O cliente abre a Proposta no celular, sem baixar nada. Se você ajustar, o mesmo link já mostra a versão nova, sem reenviar.',
      ),
      included(
        'O cliente responde no próprio link',
        'O cliente aceita ou recusa a Proposta direto no link, e a resposta fica registrada no Negócio.',
      ),
      included(
        'Margem na hora de montar',
        'Registre o custo e o valor de venda de cada Serviço e veja a margem da Proposta enquanto monta.',
      ),
      included(
        'A marca da sua agência',
        'A Proposta leva o logo da agência e o perfil do agente, com nome, foto e contato.',
      ),
      soon(
        'Propostas com a ajuda da IA',
        'Conte como é a viagem, e o assistente ajuda a montar a Proposta, do roteiro aos textos de cada dia.',
      ),
    ],
    more: [
      included(
        'Opções de Proposta',
        'Envie alternativas para a mesma viagem, como outra categoria de hotel ou outro roteiro, para o cliente comparar.',
      ),
      included(
        'Preço total ou detalhado por Serviço',
        'Mostre só o valor total da viagem ou abra o valor de cada Serviço, conforme a estratégia de cada Proposta.',
      ),
      included(
        'Histórico de versões',
        'Cada ajuste gera uma nova versão, e o histórico mostra o que mudou ao longo da negociação.',
      ),
      included(
        'Duplicar Proposta',
        'Crie uma nova Proposta a partir de outra em um clique, mantendo Serviços, Roteiro e valores.',
      ),
      included(
        'Voo pelo número',
        'Informe a companhia aérea e o número do voo, e o Cormora preenche horários, aeroportos e os demais detalhes do voo.',
      ),
      included(
        'Hotéis Favoritos',
        'Salve os hotéis que você mais indica e reaproveite nas próximas Propostas.',
      ),
      included(
        'Serviços em qualquer moeda',
        'Lance cada Serviço na moeda em que foi contratado, e o cliente sempre vê a Proposta em reais.',
      ),
      included('Exportar em PDF', 'Gere a Proposta em PDF para enviar, imprimir ou arquivar.'),
      module(
        'Contrato com assinatura eletrônica',
        'Gere o Contrato a partir da Proposta aceita e colete a assinatura eletrônica do cliente.',
      ),
      soon(
        'Importação de conteúdo por IA',
        'Envie o PDF ou o e-mail do fornecedor, e a IA transforma o conteúdo em Serviços e Roteiro na Proposta.',
      ),
    ],
  },
  {
    title: 'Negócios e pipeline',
    visible: [
      included(
        'Um funil só, do primeiro contato ao fim da viagem',
        'Veja em um só funil onde está cada cliente: negociando, fechando, embarcando ou já de volta da viagem.',
      ),
      included(
        'Nenhum cliente sem retorno',
        'Cada Negócio mostra a próxima Atividade, e o Cormora avisa o que está atrasado, para nenhum orçamento esfriar.',
      ),
      included(
        'Quadro ou lista, do seu jeito',
        'Veja os Negócios em colunas por Etapa ou em uma lista, como preferir trabalhar.',
      ),
    ],
    more: [
      included(
        'Atividades com tipos personalizados',
        'Agende ligações, reuniões, tarefas e e-mails, e crie tipos de Atividade próprios da sua agência.',
      ),
      included(
        'Etiquetas e Origem',
        'Classifique os Negócios por tipo ou prioridade e registre de onde cada cliente chegou.',
      ),
      included(
        'Campos personalizados',
        'Crie campos próprios para guardar as informações de que a sua agência precisa.',
      ),
      soon('Motivos de perda', 'Registre por que um Negócio foi perdido e entenda o que pode melhorar.'),
    ],
  },
  {
    title: 'Viagem e operação',
    visible: [
      included(
        'A Viagem nasce pronta',
        'O cliente aceitou? A Viagem já nasce com os Serviços, os Passageiros e o Roteiro das Propostas aceitas, sem digitar nada de novo.',
      ),
      included(
        'Cada Serviço sob controle',
        'Cada Serviço como reservado, confirmado ou cancelado. Trocas e remarcações não mexem na Proposta aceita.',
      ),
    ],
    more: [
      included(
        'Passageiros e Pagantes',
        'Defina quem viaja e quem paga em cada Proposta, inclusive com o pagamento dividido entre mais de um Pagante.',
      ),
      soon(
        'Checklists por destino e por Serviço',
        'Tarefas da Viagem com as exigências de cada destino: PID, visto, vacinação e seguro obrigatório.',
      ),
    ],
  },
  {
    title: 'Contatos e comunicação',
    visible: [
      included(
        'Perfil de viajante que se reaproveita',
        'Guarde os dados de cada viajante, como preferências, programas de fidelidade e restrições, e reaproveite em todas as viagens.',
      ),
      included(
        'Clientes e fornecedores na mesma base',
        'Pessoas, empresas, hotéis, operadoras e consolidadoras ficam em uma única base de Contatos, ligados aos Negócios.',
      ),
    ],
    more: [
      included(
        'Importação de contatos por planilha',
        'Traga a sua base de clientes de uma planilha em poucos passos.',
      ),
      soon(
        'Integração com e-mail e histórico no Negócio',
        'Conecte o seu e-mail ao Cormora, e o histórico de conversas com o cliente fica reunido no Negócio.',
      ),
      soon(
        'Formulários personalizados',
        'Envie um formulário ao cliente, e as respostas atualizam o perfil de cada Pessoa, sem digitar nada.',
      ),
    ],
  },
  {
    title: 'Gestão e segurança',
    visible: [
      included(
        'A carteira é da agência',
        'Contatos, Negócios e Viagens pertencem à agência. Se um agente sair, a carteira de clientes fica.',
      ),
      included(
        'Cada um vê o que precisa',
        'Cada pessoa do time tem o próprio acesso, e o administrador define o que cada uma pode ver e fazer.',
      ),
      included(
        'Seus dados protegidos e em conformidade com a LGPD',
        'Os dados de clientes e viajantes são tratados de acordo com a LGPD, com criptografia e backup automático.',
      ),
    ],
    more: [
      included(
        'Dashboard da agência',
        'Acompanhe vendas, Negócios e Viagens da agência em um painel, para decidir com dados.',
      ),
      included('Exportação de dados', 'Exporte os seus dados quando quiser. Eles são da agência, não do sistema.'),
      soon('Autenticação em dois fatores', 'Uma camada extra de proteção no login de cada pessoa do time.'),
    ],
  },
];
