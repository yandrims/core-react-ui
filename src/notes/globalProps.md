Global props are props that are available on every elements.

> | Global props   | Type   | Description        | Example                                   |
> | -------------- | ------ | ------------------ | ----------------------------------------- |
> | tabIndex       | Number | tab index          | 1                                         |
> | as             | String | html tag           | "span"                                    |
> | css            | String | custom css         | "color: blue"                             |
> | dataCustom     | String | custom data        | "id: 1"                                   |
> | m              | Number | margin             | 10                                        |
> | my             | Number | margin top-bottom  | 10                                        |
> | mx             | Number | margin left-right  | 10                                        |
> | mt             | Number | margin top         | 10                                        |
> | mb             | Number | margin bottom      | 10                                        |
> | ml             | Number | margin left        | 10                                        |
> | mr             | Number | margin right       | 10                                        |
> | p              | Number | padding            | 10                                        |
> | py             | Number | padding top-bottom | 10                                        |
> | px             | Number | padding left-right | 10                                        |
> | pt             | Number | padding top        | 10                                        |
> | pb             | Number | padding bottom     | 10                                        |
> | pl             | Number | padding left       | 10                                        |
> | pr             | Number | padding right      | 10                                        |
> | w              | String | width              | "100%"                                    |
> | maxW           | String | max-width          | "100%"                                    |
> | minW           | String | min-width          | "100%"                                    |
> | h              | String | height             | "100%"                                    |
> | maxH           | String | max-height         | "100%"                                    |
> | minH           | String | min-height         | "100%"                                    |
> | customFontSize | Number | font size          | 10                                        |
> | textAlign      | String | text align         | "center"                                  |
> | verticalAlign  | String | vertical align     | "middle"                                  |
> | position       | String | position           | "relative"                                |
> | display        | String | display            | "block"                                   |
> | responsive     | Object | responsive layout  | {{ xxs: { (anything in global props) } }} |
> |                |        |                    | {{ xs: { (anything in global props) } }}  |
> |                |        |                    | {{ sm: { (anything in global props) } }}  |
> |                |        |                    | {{ md: { (anything in global props) } }}  |
> |                |        |                    | {{ lg: { (anything in global props) } }}  |
> |                |        |                    | {{ xl: { (anything in global props) } }}  |
> |                |        |                    | {{ xxl: { (anything in global props) } }} |

HTML attribute props will add attributes to the element.

> | Prop           | Rendered as     |
> | -------------- | --------------- |
> | ariaLabel      | aria-label      |
> | ariaLabelledBy | aria-labelledby |
> | tabIndex       | tabindex        |
> | dataCustom     | data-custom     |
