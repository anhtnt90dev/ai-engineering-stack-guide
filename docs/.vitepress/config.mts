import { defineConfig } from 'vitepress'

const base = process.env.BASE_PATH ?? '/framework-compare/'

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
  title: 'AI Engineering Workflow & Agent Runtime Guide',
  description: 'A multilingual guide to AI engineering workflow frameworks and agent harness/runtime tools.',
  base,
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: false,
  head: [
    ['meta', { name: 'theme-color', content: '#0f766e' }],
    ['link', { rel: 'icon', href: `${base}favicon.svg` }]
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
    siteTitle: 'AI Engineering Guide',
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
          { text: 'GSD Redux', link: 'https://github.com/open-gsd/get-shit-done-redux' },
          { text: 'Superpowers', link: 'https://github.com/obra/superpowers' },
          { text: 'Hermes Agent', link: 'https://github.com/NousResearch/hermes-agent' },
          { text: 'LangChain Docs', link: 'https://docs.langchain.com/oss/python/langchain/overview' },
          { text: 'LangGraph Docs', link: 'https://docs.langchain.com/oss/python/langgraph/overview' },
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
      { icon: 'github', link: 'https://github.com/anhtnt90dev/framework-compare' }
    ],
    footer: {
      message: 'Built as a static multilingual AI engineering workflow and agent runtime guide.',
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
