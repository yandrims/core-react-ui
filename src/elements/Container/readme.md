#### Usage

```markdown
import Container from 'y-ui/dist/elements/Container';
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
