<template>
    <TransitionRoot
        :show="openModal"
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
    >
        <Dialog
            as="div"
            class="relative z-[99999]"
            @close="$emit('closeModal')"
        >
            <TransitionChild
                as="template"
                enter="ease-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in duration-200"
                leave-from="opacity-100"
                leave-to="opacity-0"
            >
                <div
                    class="fixed inset-0  backdrop-blur-sm bg-gray-500 bg-opacity-30 transition-opacity"
                />
            </TransitionChild>

            <div class="fixed inset-0 z-10 overflow-y-auto">
                <div
                    class="flex min-h-full justify-center p-4 text-center items-center"
                >
                    <TransitionChild
                        class="modal"
                        as="template"
                        enter="ease-out duration-300"
                        enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        enter-to="opacity-100 translate-y-0 sm:scale-100"
                        leave="ease-in duration-200"
                        leave-from="opacity-100 translate-y-0 sm:scale-100"
                        leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    >
                        <DialogPanel
                            :class="customClass"
                            class="relative transform overflow-hidden rounded-lg dark:bg-gray-800  bg-white px-4 pb-4 pt-5 text-center shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6"
                        >
                            <div
                                class="sm:flex sm:items-start  items-center justify-center"
                            >
                                <div
                                    class="items-center justify-center flex sm:mx-0"
                                >
                                    <slot name="icons"></slot>
                                </div>
                            </div>

                            <div class="text-center sm:mt-0 sm:text-center">
                                <DialogTitle
                                    class="font-medium text-2xl leading-none text-gray-900"
                                >
                                    <slot name="title"></slot>
                                </DialogTitle>
                                <div class="mt-2">
                                    <p class="text-[14px] text-gray-500">
                                        <slot name="message"></slot>
                                    </p>
                                </div>
                            </div>
                            <slot></slot>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/24/outline";
import {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
} from "@headlessui/vue";
export default {
    props: {
        openModal: {
            type: Boolean,
            default: false,
        },
        modalTitle: {
            type: String,
            default: "",
        },
        customClass: {
            type: String,
            default: "", 
        },
    },
    methods: {
        close() {
            this.$emit("closeModal");
        },
    },
    components: {
        Dialog,
        DialogPanel,
        DialogTitle,
        TransitionChild,
        TransitionRoot,
        CheckIcon,
    },
};
</script>
