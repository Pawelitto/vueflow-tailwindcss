<script setup lang="ts">
import type { Node, Edge } from "@vue-flow/core";
import { ref } from "vue";
import { VueFlow, useVueFlow } from "@vue-flow/core";
import { Background } from "@vue-flow/background";
import { Controls } from "@vue-flow/controls";
import { MiniMap } from "@vue-flow/minimap";
const { onInit } = useVueFlow();
import "@vue-flow/core/dist/style.css";

const dark: Ref<boolean> = ref(false);
const showControls: Ref<boolean> = ref(false);

const nodes = ref<Node[]>([
  {
    id: "b1b96559b3144eae",
    type: "indicator",
    position: { x: 0, y: 0 },
    data: {},
  },
  {
    id: "7055fd5dafbd4dc1",
    type: "response",
    position: { x: 516.92, y: -50.19 },
    data: { label: "Response #1" },
  },
  {
    id: "a8a77b45a3eb49e6",
    type: "Text",
    position: { x: 10, y: 50 },
    parentNode: "7055fd5dafbd4dc1",
    data: {
      message: "Witamy w naszej pizzeri",
    },
  },
  {
    id: "a9eb1322323d412b",
    type: "postback",
    position: { x: 20, y: 100 },
    parentNode: "a8a77b45a3eb49e6",
    data: { title: "Godziny otwarcia" },
  },
  {
    id: "37166511083943ae",
    type: "postback",
    position: { x: 20, y: 150 },
    parentNode: "a8a77b45a3eb49e6",
    data: { title: "Menu" },
  },
  {
    id: "740a73d8c50a4913",
    type: "postback",
    position: { x: 20, y: 200 },
    parentNode: "a8a77b45a3eb49e6",
    data: { title: "Jak dojechać" },
  },
  {
    id: "fc01a0a044224237",
    type: "Delay",
    position: { x: 10, y: 250 },
    parentNode: "7055fd5dafbd4dc1",
    data: {
      delayTime: 3,
      isShowTyping: true,
    },
  },
  {
    id: "0424bdad18694dec",
    type: "Text",
    position: { x: 10, y: 320 },
    parentNode: "7055fd5dafbd4dc1",
    data: {
      message: "Dzisiaj taka promka 3 + 1",
    },
  },
  {
    id: "49c360c9ff45479c",
    type: "button",
    position: { x: 20, y: 370 },
    parentNode: "0424bdad18694dec",
    data: {
      title: "Button #1",
    },
  },
  {
    id: "017891c8a1b347bc",
    type: "response",
    position: { x: 1029.52, y: 196.76 },
    data: { label: "Response #2" },
  },
  {
    id: "663d7e4c970a4ab2",
    type: "Text",
    position: { x: 10, y: 50 },
    parentNode: "017891c8a1b347bc",
    data: {
      message: "Kolejny krok",
    },
  },
  {
    id: "2776d907dda84c34",
    type: "Image",
    position: { x: 10, y: 120 },
    parentNode: "017891c8a1b347bc",
    data: {
      url: "6ffc9b98-5974-4d8d-9dd6-e356429a98c4/b84fc97c606c4dae.png",
      view_url: "reactflow.png",
    },
  },
]);

const edges = ref<Edge[]>([
  {
    id: "b1b96559b3144eae->7055fd5dafbd4dc1",
    type: "button",
    source: "b1b96559b3144eae",
    target: "7055fd5dafbd4dc1",
  },
  {
    id: "7055fd5dafbd4dc1->017891c8a1b347bc",
    type: "button",
    source: "7055fd5dafbd4dc1",
    target: "017891c8a1b347bc",
  },
]);

onInit(() => {
  showControls.value = true;
});
</script>

<template>
  <div class="w-[100vw] h-[100vh]">
    <ClientOnly>
      <VueFlow
        :nodes="nodes"
        :edges="edges"
        :min-zoom="0.5"
        :max-zoom="1"
        :class="{ dark }"
        fit-view-on-init
        delete-key-code="false"
      >
        <MiniMap :inverse-pan="true" />

        <Background pattern-color="#aaa" :gap="35" :size="2" />

        <Controls
          class="group"
          position="bottom-center"
          :fit-view-params="{
            maxZoom: 1.6,
            duration: 1000,
            offset: { x: 10, y: 10 },
          }"
        />

        <template #node-indicator="props">
          <NodesIndicator :id="props.id" :data="props.data" />
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
.basic-flow .vue-flow__controls {
  @apply flex flex-row space-x-4 transition-all;
}

.basic-flow .vue-flow__controls .vue-flow__controls-button {
  border: 0px !important;
  @apply bg-gray-900 rounded-md px-1.5 py-1.5 ring-2 ring-gray-800 text-sm;
}

.basic-flow .vue-flow__controls .vue-flow__controls-button:hover {
  @apply transition-all bg-gray-700 ring-primary-500;
}

.basic-flow .vue-flow__controls .vue-flow__controls-button:hover svg {
  @apply fill-primary-500;
}

.basic-flow .vue-flow__controls .vue-flow__controls-button svg {
  @apply fill-white;
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
