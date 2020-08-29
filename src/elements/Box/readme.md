#### Usage

```markdown
import Box from 'y-ui-react/dist/elements/Box';
```

or

```markdown
import { Box } from 'y-ui-react/dist/elements';
```

or

```markdown
import { Box } from 'y-ui-react/dist';
```

#### Example

```js
import Box from '../../elements/Box';

<Box>Lorem ipsum, dolor sit amet consectetur adipisicing elit</Box>;
```

#### Example Border

```js
import Box from '../../elements/Box';

<Box
	isBordered
	borderWidth={3}
	borderStyle="dotted"
	borderColor="turquoise"
	borderRadius={20}
	p={6}
>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit
</Box>;
```

#### Example Background

```js
import Box from '../../elements/Box';

<Box bgColor="turquoise" textColor="white" borderRadius={20} p={4}>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit
</Box>;
```
