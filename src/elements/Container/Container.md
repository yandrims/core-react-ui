```js
import Container from '../../elements/Container';

<Container>This is container</Container>;
```

### With Props

```js
import Container from '../../elements/Container';

<Container
	css="background: #eee;"
	responsive={{
		xxs: {},
		xs: {},
		sm: {
			m: 5,
			p: 10,
		},
		md: {},
		lg: {},
		xl: {},
		xxl: {},
	}}
>
	This is container with props
</Container>;
```
