#### Usage

```markdown
import Container from 'y-ui-react/dist/elements/Container';
```

or

```markdown
import { Container } from 'y-ui-react/dist/elements';
```

or

```markdown
import { Container } from 'y-ui-react/dist';
```

#### Example

```js
import Container from '../../elements/Container';

<Container>Lorem ipsum, dolor sit amet consectetur adipisicing elit</Container>;
```

#### Example Full Width

```js
import Container from '../../elements/Container';

<Container isFluid>
	Lorem ipsum, dolor sit amet consectetur adipisicing elit
</Container>;
```

#### Example Responsive

```js
import Container from '../../elements/Container';

<Container
	css="background: #eee;"
	responsive={{
		sm: {
			m: 5,
			p: 10,
		},
		lg: {
			m: 15,
			p: 20,
		},
	}}
>
	This is container with props
</Container>;
```
