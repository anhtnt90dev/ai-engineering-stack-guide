import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH ?? '/ai-engineering-stack-guide/'

const enSidebar = [
  {
    text: 'Start Here',
    items: [
      { text: 'Guide Overview', link: '/en/' },
      { text: 'AI-DLC', link: '/en/foundations/ai-dlc' },
      { text: 'Spec-Driven Development', link: '/en/foundations/sdd' },
      { text: 'Harness vs Workflow', link: '/en/foundations/agent-harness-vs-workflow' }
    ]
  },
  {
    text: 'Decision Tools',
    items: [
      { text: 'One-Page Cheat Sheet', link: '/en/tools/cheat-sheet' },
      { text: 'Interactive Decision Wizard', link: '/en/tools/decision-wizard' },
      { text: 'Templates and Starter Artifacts', link: '/en/tools/templates' },
      { text: 'Scenario Lab', link: '/en/tools/scenario-lab' },
      { text: 'Adjacent Agent Ecosystem Map', link: '/en/tools/ecosystem-map' }
    ]
  },
  {
    text: 'AI Engineering Stack',
    items: [
      { text: 'Stack Map', link: '/en/stack/' },
      { text: 'Model & Serving Layer', link: '/en/stack/model-serving' },
      { text: 'Data, RAG & Retrieval', link: '/en/stack/data-rag' },
      { text: 'Tools, MCP & Gateways', link: '/en/stack/tools-mcp' },
      { text: 'Evals & Observability', link: '/en/stack/evals-observability' },
      { text: 'Security & Governance', link: '/en/stack/security-governance' },
      { text: 'Reference Architectures', link: '/en/stack/reference-architectures' },
      { text: 'Maturity Model', link: '/en/stack/maturity-model' },
      { text: 'Glossary', link: '/en/stack/glossary' },
      { text: 'Anti-Patterns', link: '/en/stack/anti-patterns' }
    ]
  },
  {
    text: 'Framework Deep Dives',
    items: [
      { text: 'GitHub Spec Kit', link: '/en/frameworks/spec-kit' },
      { text: 'OpenSpec', link: '/en/frameworks/openspec' },
      { text: 'AWS AI-DLC Workflows', link: '/en/frameworks/aws-ai-dlc' },
      { text: 'GSD / Get Shit Done', link: '/en/frameworks/gsd' },
      { text: 'Superpowers', link: '/en/frameworks/superpowers' }
    ]
  },
  {
    text: 'Agent App Frameworks',
    items: [
      { text: 'LangChain', link: '/en/app-frameworks/langchain' },
      { text: 'LangGraph', link: '/en/app-frameworks/langgraph' },
      { text: 'LangChain/LangGraph vs Hermes', link: '/en/app-frameworks/langchain-langgraph-hermes' }
    ]
  },
  {
    text: 'Agent Harnesses',
    items: [
      { text: 'Hermes Agent', link: '/en/harnesses/hermes' },
      { text: 'Codex vs Claude Code vs Hermes', link: '/en/harnesses/codex-claude-hermes' }
    ]
  },
  {
    text: 'Compare and Adopt',
    items: [
      { text: 'Comparison Matrix', link: '/en/compare/' },
      { text: 'Same Flow, Different Purpose', link: '/en/compare/same-flow-different-purpose' },
      { text: 'Decision Guide', link: '/en/compare/decision-guide' },
      { text: 'Framework Combinations', link: '/en/compare/combinations' },
      { text: 'Real-World Use Cases', link: '/en/compare/use-cases' },
      { text: 'Adoption Playbook', link: '/en/compare/adoption' },
      { text: 'Expert Review', link: '/en/compare/expert-review' }
    ]
  }
]

const viSidebar = [
  {
    text: 'Bắt đầu',
    items: [
      { text: 'Tổng quan', link: '/vi/' },
      { text: 'AI-DLC', link: '/vi/foundations/ai-dlc' },
      { text: 'Spec-Driven Development', link: '/vi/foundations/sdd' },
      { text: 'Harness vs Workflow', link: '/vi/foundations/agent-harness-vs-workflow' }
    ]
  },
  {
    text: 'Công cụ áp dụng',
    items: [
      { text: 'Cheat sheet một trang', link: '/vi/tools/cheat-sheet' },
      { text: 'Decision wizard tương tác', link: '/vi/tools/decision-wizard' },
      { text: 'Templates và starter artifacts', link: '/vi/tools/templates' },
      { text: 'Scenario lab', link: '/vi/tools/scenario-lab' },
      { text: 'Bản đồ ecosystem agent', link: '/vi/tools/ecosystem-map' }
    ]
  },
  {
    text: 'AI Engineering Stack',
    items: [
      { text: 'Bản đồ stack', link: '/vi/stack/' },
      { text: 'Tầng model và serving', link: '/vi/stack/model-serving' },
      { text: 'Data, RAG và Retrieval', link: '/vi/stack/data-rag' },
      { text: 'Tools, MCP và Gateway', link: '/vi/stack/tools-mcp' },
      { text: 'Evals và Observability', link: '/vi/stack/evals-observability' },
      { text: 'Security và Governance', link: '/vi/stack/security-governance' },
      { text: 'Reference Architectures', link: '/vi/stack/reference-architectures' },
      { text: 'Maturity Model', link: '/vi/stack/maturity-model' },
      { text: 'Glossary', link: '/vi/stack/glossary' },
      { text: 'Anti-patterns', link: '/vi/stack/anti-patterns' }
    ]
  },
  {
    text: 'Đi sâu từng framework',
    items: [
      { text: 'GitHub Spec Kit', link: '/vi/frameworks/spec-kit' },
      { text: 'OpenSpec', link: '/vi/frameworks/openspec' },
      { text: 'AWS AI-DLC Workflows', link: '/vi/frameworks/aws-ai-dlc' },
      { text: 'GSD / Get Shit Done', link: '/vi/frameworks/gsd' },
      { text: 'Superpowers', link: '/vi/frameworks/superpowers' }
    ]
  },
  {
    text: 'Agent App Frameworks',
    items: [
      { text: 'LangChain', link: '/vi/app-frameworks/langchain' },
      { text: 'LangGraph', link: '/vi/app-frameworks/langgraph' },
      { text: 'LangChain/LangGraph vs Hermes', link: '/vi/app-frameworks/langchain-langgraph-hermes' }
    ]
  },
  {
    text: 'Agent Harnesses',
    items: [
      { text: 'Hermes Agent', link: '/vi/harnesses/hermes' },
      { text: 'Codex vs Claude Code vs Hermes', link: '/vi/harnesses/codex-claude-hermes' }
    ]
  },
  {
    text: 'So sánh và áp dụng',
    items: [
      { text: 'Ma trận so sánh', link: '/vi/compare/' },
      { text: 'Cùng flow, khác mục đích', link: '/vi/compare/same-flow-different-purpose' },
      { text: 'Hướng dẫn chọn', link: '/vi/compare/decision-guide' },
      { text: 'Kết hợp framework', link: '/vi/compare/combinations' },
      { text: 'Use case thực tế', link: '/vi/compare/use-cases' },
      { text: 'Playbook triển khai', link: '/vi/compare/adoption' },
      { text: 'Expert review', link: '/vi/compare/expert-review' }
    ]
  }
]

export default defineConfig({
  title: 'AI Engineering Stack Guide',
  description: 'A bilingual guide to the AI engineering stack: AI-DLC, SDD, agent runtimes, app frameworks, RAG, tools, evals, observability, security, and governance.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['link', { rel: 'icon', href: `${base}favicon.svg` }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'AI Engineering Stack Guide' }],
    ['meta', { property: 'og:description', content: 'A bilingual field guide for AI-DLC, SDD, agent harnesses, app frameworks, RAG, tools, evals, observability, security, and governance.' }],
    ['meta', { property: 'og:image', content: 'https://anhtnt90dev.github.io/ai-engineering-stack-guide/social-preview.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'AI Engineering Stack Guide' }],
    ['meta', { name: 'twitter:description', content: 'Choose the right AI workflow, harness, app framework, and governance layer.' }],
    ['meta', { name: 'twitter:image', content: 'https://anhtnt90dev.github.io/ai-engineering-stack-guide/social-preview.svg' }]
  ],
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    },
    lineNumbers: true
  },
  themeConfig: {
    logo: '/favicon.svg',
    siteTitle: 'AI Stack Guide',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'English', link: '/en/' },
      { text: 'Tiếng Việt', link: '/vi/' },
      {
        text: 'References',
        items: [
          { text: 'GitHub Spec Kit', link: 'https://github.com/github/spec-kit' },
          { text: 'OpenSpec', link: 'https://github.com/Fission-AI/OpenSpec' },
          { text: 'AWS AI-DLC Workflows', link: 'https://github.com/awslabs/aidlc-workflows' },
          { text: 'GSD Core', link: 'https://github.com/open-gsd/gsd-core' },
          { text: 'Superpowers', link: 'https://github.com/obra/superpowers' },
          { text: 'Hermes Agent', link: 'https://github.com/NousResearch/hermes-agent' },
          { text: 'LangChain Docs', link: 'https://docs.langchain.com/oss/python/langchain/overview' },
          { text: 'LangGraph Docs', link: 'https://docs.langchain.com/oss/python/langgraph/overview' },
          { text: 'OpenAI Agents SDK', link: 'https://platform.openai.com/docs/guides/agents-sdk/' },
          { text: 'Microsoft AutoGen', link: 'https://microsoft.github.io/autogen/' },
          { text: 'CrewAI', link: 'https://docs.crewai.com/' },
          { text: 'Google ADK', link: 'https://google.github.io/adk-docs/' },
          { text: 'Azure AI Foundry Agents', link: 'https://learn.microsoft.com/azure/ai-foundry/agents/overview' },
          { text: 'Amazon Bedrock Agents', link: 'https://docs.aws.amazon.com/bedrock/latest/userguide/agents.html' },
          { text: 'Dify', link: 'https://docs.dify.ai/' },
          { text: 'n8n AI Agent', link: 'https://docs.n8n.io/integrations/builtin/cluster-nodes/root-nodes/n8n-nodes-langchain.agent/' },
          { text: 'Model Context Protocol', link: 'https://modelcontextprotocol.io/' },
          { text: 'OpenTelemetry', link: 'https://opentelemetry.io/' }
        ]
      }
    ],
    sidebar: {
      '/en/': enSidebar,
      '/vi/': viSidebar
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/anhtnt90dev/ai-engineering-stack-guide' }
    ],
    footer: {
      message: 'Built as a static bilingual AI engineering stack guide.',
      copyright: 'MIT-style content structure. Verify upstream framework docs before production adoption.'
    },
    outline: {
      level: [2, 3],
      label: 'On this page'
    },
    docFooter: {
      prev: 'Previous',
      next: 'Next'
    }
  }
})
