#### Usage

```markdown
import Box from 'y-ui/dist/elements/Box';
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
>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit
</Box>;
```

#### Example Background

```js
import Box from '../../elements/Box';

<Box customBackground="turquoise" customColor="white" borderRadius={20}>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit
</Box>;
```
