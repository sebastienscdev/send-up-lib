````
<a href="#" type="button" :loading="loading" :disabled="disabled" :width="width" @click="$emit('action');"
    :class="disabled ? 'gradient-grey':classColor" class="su-btn">
    <slot name="title">
        <span>{{ title }}</span>
    </slot>
</a>
````