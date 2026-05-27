import DefaultTheme from 'vitepress/theme'
import { nextTick, onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'
import './custom.css'

async function renderMermaidBlocks() {
  if (typeof document === 'undefined') return

  const blocks = Array.from(
    document.querySelectorAll<HTMLElement>('div.language-mermaid, pre > code.language-mermaid')
  )

  blocks.forEach((block) => {
    const code = block.matches('div.language-mermaid')
      ? block.querySelector('pre code')
      : block
    const target = block.matches('div.language-mermaid') ? block : block.parentElement

    if (!code || !target || target.dataset.mermaidProcessed === 'true') return

    const diagram = document.createElement('div')
    diagram.className = 'mermaid'
    diagram.textContent = code.textContent ?? ''
    target.dataset.mermaidProcessed = 'true'
    target.replaceWith(diagram)
  })

  const diagrams = Array.from(document.querySelectorAll<HTMLElement>('.mermaid'))
    .filter((diagram) => diagram.dataset.processed !== 'true')
  if (diagrams.length === 0) return

  const mermaid = (await import('mermaid')).default
  mermaid.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default'
  })
  await mermaid.run({ nodes: diagrams })
}

export default {
  extends: DefaultTheme,
  setup() {
    const route = useRoute()

    onMounted(() => {
      renderMermaidBlocks()
    })

    watch(
      () => route.path,
      () => nextTick(renderMermaidBlocks)
    )
  }
}
