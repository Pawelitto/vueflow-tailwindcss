<script setup lang="ts">
import { useVueFlow, Handle, Position } from "@vue-flow/core"

// const { fitView } = useVueFlow();

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  data: {
    type: Object,
    required: true
  }
})

// const isActive: ComputedRef<boolean> = computed(() => {
//   return flowStore.activeResponseId === props.id;
// });

// const goToFirst = () => {
//   fitView({
//     nodes: [flowStore.flow.chat_flow[1].id],
//     padding: 0.25,
//     duration: 1000
//   })
// }
</script>

<template>
  <Handle id="indicator-001" type="source" :position="Position.Right" />
  <UCard
    :ui="{
      base: 'w-[360px] font-light transition-all',
      rounded: 'rounded-2xl',
      ring: 'dark:ring-primary-500'
      // ring: isActive ? 'dark:ring-primary-500' : 'hover:dark:ring-primary-500',
    }"
  >
    <template #header>
      <div class="flex items-center justify-between text-primary-500">
        <icon class="h-6 w-6 mr-2" name="i-ri-messenger-line" />
        <span class="truncate">
          When the user selects
          <span class="font-bold">Nazwa kolejnego</span>
        </span>
      </div>
    </template>

    <p class="truncate">Tytuł</p>

    <template #footer>
      <UButton
        block
        trailing
        truncate
        label="Go to next"
        icon="i-heroicons-arrow-small-right"
        variant="outline"
      />
      <!-- :variant="flowStore.flow.chat_flow.length === 1 ? 'outline' : 'solid'" -->
      <!-- @click="
          flowStore.flow.chat_flow.length === 1
            ? flowStore.addResponse('response', flowStore.nodes[0].id)
            : (goToFirst(),
              (flowStore.activeResponseId = flowStore.flow.chat_flow[1].id))
        " -->
    </template>
  </UCard>
</template>
