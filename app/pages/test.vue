<script setup lang="ts">
import type { Node, Edge } from "@vue-flow/core"
import { ref } from "vue"
import { VueFlow, useVueFlow } from "@vue-flow/core"
import { Background } from "@vue-flow/background"
import { Controls } from "@vue-flow/controls"
import { MiniMap } from "@vue-flow/minimap"
import "@vue-flow/core/dist/style.css"

const { onInit } = useVueFlow()

const dark: Ref<boolean> = ref(false)
const showControls: Ref<boolean> = ref(false)

const nodes = ref<Node[]>([
  {
    id: "start",
    type: "indicator",
    position: { x: 0, y: 0 },
    data: {}
  },
  {
    id: "response-1",
    type: "response",
    position: { x: 500, y: 50 },
    data: {
      label: "W czym mogę pomóc?",
      buttons: [
        { id: "btn-a", type: "postback", order: 1, title: "Zamówienie" },
        { id: "btn-b", type: "postback", order: 2, title: "Reklamacja" },
        { id: "btn-c", type: "postback", order: 3, title: "Kontakt z obsługą" }
      ]
    }
  },
  {
    id: "response-2a",
    type: "response",
    position: { x: 1050, y: 100 },
    data: {
      label: "Świetnie! Przejdź do formularza zamówienia."
    }
  },
  {
    id: "response-2b",
    type: "response",
    position: { x: 1050, y: 400 },
    data: {
      label: "Opisz swój problem z zamówieniem."
    }
  },
  {
    id: "response-2c",
    type: "response",
    position: { x: 1050, y: 700 },
    data: {
      label: "Połączę Cię z konsultantem."
    }
  }
])

const edges = ref<Edge[]>([
  {
    id: "edge-1",
    source: "start",
    sourceHandle: "indicator-001",
    target: "response-1",
    targetHandle: "tg-response-1",
    zIndex: 1001
  },
  {
    id: "edge-2a",
    source: "response-1",
    sourceHandle: "btn-btn-a", // ← powiązane z "Zamówienie"
    target: "response-2a",
    targetHandle: "tg-response-2a",
    zIndex: 1001
  },
  {
    id: "edge-2b",
    source: "response-1",
    sourceHandle: "btn-btn-b", // ← powiązane z "Reklamacja"
    target: "response-2b",
    targetHandle: "tg-response-2b",
    zIndex: 1001
  },
  {
    id: "edge-2c",
    source: "response-1",
    sourceHandle: "btn-btn-c", // ← powiązane z "Kontakt z obsługą"
    target: "response-2c",
    targetHandle: "tg-response-2c",
    zIndex: 1001
  }
])

onInit(() => {
  showControls.value = true
})
</script>

<template>
  <div class="w-[100vw] h-[100vh]">
    <ClientOnly>
      <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        :min-zoom="0.5"
        :max-zoom="1"
        :class="{ dark }"
        fit-view-on-init
        delete-key-code="true"
      >
        <MiniMap />

        <Background pattern-color="#aaa" :gap="35" :size="2" />

        <Controls
          v-if="showControls"
          class="group"
          position="bottom-center"
          :fit-view-params="{
            maxZoom: 1.6,
            duration: 1000,
            offset: { x: 10, y: 10 }
          }"
        />

        <template #node-indicator="props">
          <NodesIndicator :id="props.id" :data="props.data" />
        </template>

        <template #node-response="props">
          <NodesResponse :id="props.id" :data="props.data" />
        </template>

        <template #edge-button="buttonEdgeProps">
          <EdgeWithButton
            :id="buttonEdgeProps.id"
            :source-x="buttonEdgeProps.sourceX"
            :source-y="buttonEdgeProps.sourceY"
            :target-x="buttonEdgeProps.targetX"
            :target-y="buttonEdgeProps.targetY"
            :source-position="buttonEdgeProps.sourcePosition"
            :target-position="buttonEdgeProps.targetPosition"
            :marker-end="buttonEdgeProps.markerEnd"
            :style="buttonEdgeProps.style"
          />
        </template>
      </VueFlow>
    </ClientOnly>
  </div>
</template>

<style lang="postcss">
.vue-flow__controls {
  display: flex;
  flex-direction: row;
  column-gap: 1rem; /* space-x-4 = 16px odstęp między elementami w poziomie */
  transition-property: all;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.vue-flow__controls-button {
  border: 0 !important;
  background-color: #111827; /* bg-gray-900 */
  border-radius: 0.375rem; /* rounded-md = 6px */
  padding-left: 0.375rem; /* px-1.5 = 6px */
  padding-right: 0.375rem;
  padding-top: 0.375rem; /* py-1.5 = 6px */
  padding-bottom: 0.375rem;
  box-shadow: 0 0 0 2px #1f2937; /* ring-2 ring-gray-800 */
  font-size: 0.875rem; /* text-sm = 14px */
  line-height: 1.25rem; /* 20px */
  transition-property: all;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.vue-flow__controls-button:hover {
  background-color: #374151;
  box-shadow: 0 0 0 2px #615fff;
}

.vue-flow__controls-button:hover svg {
  fill: #615fff;
}

.vue-flow__controls-button svg {
  fill: #ffffff;
  transition-property: fill;
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

.vue-flow__minimap {
  transform: scale(75%);
  transform-origin: bottom right;
}

.vue-flow__handle {
  background: #a1a1aa !important;
  border: 2px solid #3f3f46 !important;
  width: 12px !important;
  height: 12px !important;
}

.vue-flow__handle-right {
  top: 85% !important;
  right: 0;
}

.vue-flow__handle-left {
  top: 45px !important;
  right: 0;
}

.vue-flow__edge-path,
.vue-flow__connection-path {
  stroke: #b1b1b7;
  stroke-width: 2 !important;
  fill: none;
  transition: color;
  transition-duration: 200ms;
}

.vue-flow__edge.selected .vue-flow__edge-path,
.vue-flow__edge:focus .vue-flow__edge-path,
.vue-flow__edge:focus-visible .vue-flow__edge-path {
  stroke: #6366f1 !important;
  transition: color;
  transition-duration: 200ms;
}
</style>
