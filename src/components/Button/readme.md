#### Usage

```markdown
import Button from 'y-ui/dist/components/Button';
```

#### Example

```js
import Button from '../../components/Button';
import Row from '../../elements/Row';
import Col from '../../elements/Col';

<Row space={1}>
	<Col isAutoWidth mb={2}>
		<Button>Button</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button isLoading>Button</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button isDisabled>Disabled Button</Button>
	</Col>
	<Col col={12} mb={2}>
		<Button isBlock>Block Button</Button>
	</Col>
</Row>;
```

#### Example Variants

```js
import Button from '../../components/Button';
import Row from '../../elements/Row';
import Col from '../../elements/Col';

<Row space={1}>
	<Col isAutoWidth mb={2}>
		<Button variant="primary">primary</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="success">success</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="info">info</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="warning">warning</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="danger">danger</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="disabled">disabled</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="transparent">transparent</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="light">light</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button variant="dark">dark</Button>
	</Col>
</Row>;
```

#### Example Sizes

```js
import Button from '../../components/Button';
import Row from '../../elements/Row';
import Col from '../../elements/Col';

<Row space={1}>
	<Col isAutoWidth mb={2}>
		<Button size="xxs">xxs</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="xs">xs</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="sm">sm</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="md">md</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="lg">lg</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="xl">xl</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="xxl">xxl</Button>
	</Col>
	<Col isAutoWidth mb={2}>
		<Button size="default">default</Button>
	</Col>
</Row>;
```
