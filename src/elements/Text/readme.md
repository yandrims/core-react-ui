#### Usage

```markdown
import Text from 'y-ui-react/dist/elements/Text';
```

or

```markdown
import { Text } from 'y-ui-react/dist/elements';
```

or

```markdown
import { Text } from 'y-ui-react/dist';
```

#### Example

```js
import Text from '../../elements/Text';

<Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit</Text>;
```

#### Example Paragraph

```js
import Text from '../../elements/Text';

<Text as="p">Lorem ipsum, dolor sit amet consectetur adipisicing elit</Text>;
```

#### Example Heading

```js
import Text from '../../elements/Text';

<>
	<Text as="h1">Heading 1</Text>
	<Text as="h2">Heading 2</Text>
	<Text as="h3">Heading 3</Text>
	<Text as="h4">Heading 4</Text>
	<Text as="h5">Heading 5</Text>
	<Text as="h6">Heading 6</Text>
</>;
```

#### Example Small Text

```js
import Text from '../../elements/Text';

<Text as="small">
	Lorem ipsum, dolor sit amet consectetur adipisicing elit
</Text>;
```

#### Example Truncated Text

```js
import Text from '../../elements/Text';

<>
	<Text isTruncated>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor
		sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet
		consectetur adipisicing elit
	</Text>
	<br />
	<br />
	<Text isTruncated truncatedMaxLine={3}>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor
		sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet
		consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur
		adipisicing elit Lorem ipsum, dolor sit amet consectetur adipisicing elit
		Lorem ipsum, dolor sit amet consectetur adipisicing elit Lorem ipsum, dolor
		sit amet consectetur adipisicing elit Lorem ipsum, dolor sit amet
		consectetur adipisicing elit Lorem ipsum, dolor sit amet consectetur
		adipisicing elit
	</Text>
</>;
```
