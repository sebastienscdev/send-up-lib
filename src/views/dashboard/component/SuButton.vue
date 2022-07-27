<template>
    <a href="#" type="button" :loading="loading" :disabled="disabled" :width="width" 
    @click="$emit('action');" :class="disabled ? 'gradient-grey':classColor" class="su-btn primary">
        <slot name="title">
            <span :class="uppercase ? 'text-uppercase' : ''">{{ title }}</span>
        </slot>
    </a>
</template>

<script>
export default {
    name: "suBtn",
    components: {},
    props: {
        title: {
            type: String,
            default: ""
        },
        width: {
            type: String,
            default: "85%"
        },
        large: {
            type: Boolean,
            default: true
        },
        color: {
            type: String,
            default: "#51B748"
        },
        loading: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        href: {},
        to: {}
    },
    methods: {
        action() {
            if (this.to) {
                this.$router.push({ name: this.to });
            } else {
                this.$emit("action");
            }
        },
    },
};
</script>