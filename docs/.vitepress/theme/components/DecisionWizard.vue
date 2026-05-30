<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  lang?: 'en' | 'vi'
}>()

type Answers = {
  goal: string
  risk: string
  runtime: string
  team: string
  artifact: string
}

const answers = ref<Answers>({
  goal: 'feature',
  risk: 'medium',
  runtime: 'none',
  team: 'small',
  artifact: 'spec'
})

const copy = computed(() => {
  if (props.lang === 'vi') {
    return {
      labels: {
        goal: 'Mục tiêu chính',
        risk: 'Mức rủi ro',
        runtime: 'Nhu cầu runtime/agent app',
        team: 'Bối cảnh team',
        artifact: 'Source of truth mong muốn'
      },
      options: {
        goal: [
          ['feature', 'Build feature trong codebase'],
          ['rag', 'Build RAG hoặc tool-calling app'],
          ['agent', 'Build stateful agent service'],
          ['platform', 'Tạo internal AI engineering platform']
        ],
        risk: [
          ['low', 'Thấp: prototype hoặc internal tool'],
          ['medium', 'Trung bình: production app'],
          ['high', 'Cao: enterprise, regulated, audit']
        ],
        runtime: [
          ['none', 'Không cần runtime riêng'],
          ['app', 'Cần AI app framework'],
          ['harness', 'Cần agent harness/runtime tự chủ'],
          ['both', 'Cần cả app framework và harness']
        ],
        team: [
          ['solo', 'Solo hoặc team rất nhỏ'],
          ['small', 'Product engineering team'],
          ['enterprise', 'Enterprise/multi-team/platform']
        ],
        artifact: [
          ['spec', 'Spec/plan/task rõ ràng'],
          ['change', 'Change proposal nhẹ'],
          ['audit', 'Audit trail và approval'],
          ['discipline', 'TDD/review discipline'],
          ['context', 'Context dài hạn cho nhiều session']
        ]
      },
      resultTitle: 'Stack khuyến nghị',
      reasonTitle: 'Vì sao',
      primary: 'Primary workflow',
      support: 'Supporting layers',
      artifacts: 'Artifacts cần tạo',
      caution: 'Điểm cần tránh',
      reset: 'Reset về mặc định'
    }
  }

  return {
    labels: {
      goal: 'Primary goal',
      risk: 'Risk level',
      runtime: 'Runtime/agent app need',
      team: 'Team context',
      artifact: 'Preferred source of truth'
    },
    options: {
      goal: [
        ['feature', 'Build a feature in an existing codebase'],
        ['rag', 'Build a RAG or tool-calling app'],
        ['agent', 'Build a stateful agent service'],
        ['platform', 'Create an internal AI engineering platform']
      ],
      risk: [
        ['low', 'Low: prototype or internal utility'],
        ['medium', 'Medium: production app'],
        ['high', 'High: enterprise, regulated, audited']
      ],
      runtime: [
        ['none', 'No separate runtime needed'],
        ['app', 'Need an AI app framework'],
        ['harness', 'Need a self-owned agent harness/runtime'],
        ['both', 'Need both app framework and harness']
      ],
      team: [
        ['solo', 'Solo or very small team'],
        ['small', 'Product engineering team'],
        ['enterprise', 'Enterprise/multi-team/platform']
      ],
      artifact: [
        ['spec', 'Clear specs/plans/tasks'],
        ['change', 'Lightweight change proposals'],
        ['audit', 'Audit trail and approvals'],
        ['discipline', 'TDD/review discipline'],
        ['context', 'Long-lived multi-session context']
      ]
    },
    resultTitle: 'Recommended stack',
    reasonTitle: 'Why',
    primary: 'Primary workflow',
    support: 'Supporting layers',
    artifacts: 'Artifacts to create',
    caution: 'Avoid',
    reset: 'Reset defaults'
  }
})

const result = computed(() => {
  const a = answers.value
  const highControl = a.risk === 'high' || a.team === 'enterprise' || a.artifact === 'audit'
  const needsApp = a.goal === 'rag' || a.runtime === 'app' || a.runtime === 'both'
  const needsState = a.goal === 'agent'
  const needsHarness = a.goal === 'platform' || a.runtime === 'harness' || a.runtime === 'both'

  let primary = 'OpenSpec'
  const support = ['Superpowers']
  const artifacts = ['change proposal', 'acceptance criteria', 'test plan']
  const reasons = []
  const cautions = []

  if (highControl) {
    primary = 'AWS AI-DLC Workflows'
    artifacts.push('risk register', 'approval record', 'AI impact assessment', 'audit log')
    reasons.push('The delivery process needs explicit governance, approvals, NFRs, and traceability.')
    cautions.push('Do not let a coding agent bypass approval gates just because the implementation looks correct.')
  } else if (a.artifact === 'spec') {
    primary = 'GitHub Spec Kit'
    artifacts.push('spec.md', 'plan.md', 'tasks.md')
    reasons.push('The main risk is ambiguous intent, so the spec should become the source of truth before implementation.')
  } else if (a.artifact === 'context') {
    primary = 'GSD / Get Shit Done'
    artifacts.push('phase plan', 'context packet', 'handoff notes')
    reasons.push('The work spans many sessions or agents, so continuity and context packaging matter more than ceremony.')
  } else if (a.artifact === 'discipline') {
    primary = 'Superpowers'
    artifacts.push('design note', 'failing tests', 'review checklist')
    reasons.push('The core problem is engineering discipline: design, TDD, verification, and finishing cleanly.')
  } else {
    reasons.push('A lightweight change proposal is enough when the feature is scoped and the governance risk is moderate.')
  }

  if (needsApp) {
    support.push('LangChain')
    artifacts.push('prompt contract', 'retriever design', 'eval dataset')
    reasons.push('The system needs an app-level framework for model, tool, retriever, and prompt composition.')
  }

  if (needsState) {
    support.push('LangGraph')
    artifacts.push('state schema', 'node contract', 'checkpoint policy', 'human-in-the-loop rule')
    reasons.push('Stateful or long-running agents need explicit state transitions, recovery, and runtime boundaries.')
  }

  if (needsHarness) {
    support.push('Hermes Agent')
    artifacts.push('tool policy', 'agent memory policy', 'subagent contract')
    reasons.push('A self-owned harness is useful when you need to control tools, memory, policies, or local/hosted models.')
  }

  if (!support.includes('Superpowers')) support.push('Superpowers')
  if (!artifacts.includes('review checklist')) artifacts.push('review checklist')
  if (!artifacts.includes('done criteria')) artifacts.push('done criteria')

  if (primary !== 'AWS AI-DLC Workflows' && a.risk === 'medium') {
    cautions.push('Add evals and security checks even if the workflow itself is lightweight.')
  }
  if (needsApp && needsHarness) {
    cautions.push('Keep one source of truth for delivery; do not let LangGraph, Hermes, and the workflow each define separate plans.')
  }

  return { primary, support: Array.from(new Set(support)), artifacts: Array.from(new Set(artifacts)), reasons, cautions }
})

function reset() {
  answers.value = {
    goal: 'feature',
    risk: 'medium',
    runtime: 'none',
    team: 'small',
    artifact: 'spec'
  }
}
</script>

<template>
  <div class="decision-wizard">
    <div class="wizard-panel wizard-questions">
      <label v-for="(label, key) in copy.labels" :key="key">
        <span>{{ label }}</span>
        <select v-model="answers[key as keyof Answers]">
          <option
            v-for="option in copy.options[key as keyof Answers]"
            :key="option[0]"
            :value="option[0]"
          >
            {{ option[1] }}
          </option>
        </select>
      </label>
      <button type="button" @click="reset">{{ copy.reset }}</button>
    </div>

    <div class="wizard-panel wizard-result">
      <p class="eyebrow">{{ copy.resultTitle }}</p>
      <h3>{{ result.primary }}</h3>

      <dl>
        <dt>{{ copy.support }}</dt>
        <dd>{{ result.support.join(' + ') }}</dd>

        <dt>{{ copy.artifacts }}</dt>
        <dd>{{ result.artifacts.join(', ') }}</dd>
      </dl>

      <h4>{{ copy.reasonTitle }}</h4>
      <ul>
        <li v-for="reason in result.reasons" :key="reason">{{ reason }}</li>
      </ul>

      <h4>{{ copy.caution }}</h4>
      <ul>
        <li v-for="caution in result.cautions" :key="caution">{{ caution }}</li>
      </ul>
    </div>
  </div>
</template>
