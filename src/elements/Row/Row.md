```js
import Row from '../../elements/Row';
import Col from '../../elements/Col';

<Row space={5}>
	<Col>Col 1</Col>
	<Col>Col 2</Col>
</Row>;
```

### With Props

```js
import Row from '../../elements/Row';
import Col from '../../elements/Col';

<Row>
	<Col
		responsive={{
			xxs: {},
			xs: {},
			sm: {},
			md: {},
			lg: {
				col: 8,
			},
			xl: {},
			xxl: {},
		}}
	>
		Col 1
	</Col>
	<Col>Col 2</Col>
</Row>;
```
