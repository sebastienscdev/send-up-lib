## Buttons
### composant html
<br/>

```html
<a href="#" type="button" 
    :loading="loading" 
    :disabled="disabled" 
    :width="width" 
    @click="$emit('action');" :class="disabled ? 'gradient-grey':classColor" class="su-btn">
    <slot name="title">
        <span>{{ title }}</span>
    </slot>
</a>
```
<br/>

### composant vue
#### composant outline 

<br/>

```html
<SuButton 
    :title="'primary'" 
    :class="{primary :'primary'}" class="outline-btn large mb-2">
</SuButton>
```

<br />

#### composant primary 

<br />

```html
<SuButton 
    :title="'primary'" 
    :class="{primary :'primary'}" class="primary large mb-2">
</SuButton>
```

<br/>