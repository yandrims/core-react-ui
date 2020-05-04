Global props are props that are available on every elements.

> | Global props  | Type    | Description        | Example                                   |
> | ------------- | ------- | ------------------ | ----------------------------------------- |
> | css           | Integer | custom css         | "color: blue"                             |
> | dataCustom    | String  | custom data        | "id: 1"                                   |
> | m             | Integer | margin             | 10                                        |
> | my            | Integer | margin top-bottom  | 10                                        |
> | mx            | Integer | margin left-right  | 10                                        |
> | mt            | Integer | margin top         | 10                                        |
> | mb            | Integer | margin bottom      | 10                                        |
> | ml            | Integer | margin left        | 10                                        |
> | mr            | Integer | margin right       | 10                                        |
> | p             | Integer | padding            | 10                                        |
> | py            | Integer | padding top-bottom | 10                                        |
> | px            | Integer | padding left-right | 10                                        |
> | pt            | Integer | padding top        | 10                                        |
> | pb            | Integer | padding bottom     | 10                                        |
> | pl            | Integer | padding left       | 10                                        |
> | pr            | Integer | padding right      | 10                                        |
> | textAlign     | String  | text align         | "center"                                  |
> | verticalAlign | String  | vertical align     | "middle"                                  |
> | position      | String  | position           | "relative"                                |
> | display       | String  | display            | "block"                                   |
> | tabIndex      | Integer | tab index          | 1                                         |
> | responsive    | Object  | responsive layout  | {{sm: { m: 10, p: 10, display: "none" }}} |

HTML attribute props will add attributes to the element.

> | Prop           | Rendered as     |
> | -------------- | --------------- |
> | ariaLabel      | aria-label      |
> | ariaLabelledBy | aria-labelledby |
> | tabIndex       | tabindex        |
> | dataCustom     | data-custom     |
