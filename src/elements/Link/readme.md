#### Usage

```markdown
import Link from 'y-ui/dist/elements/Link';
```

#### Example Anchor

```js
import Link from '../../elements/Link';

<Link
	link="https://www.yandrims.com"
	isExternal
	anchorProps={{ target: '_blank' }}
>
	Anchor
</Link>;
```

#### Example Anchor with open in new tab

```js
import Link from '../../elements/Link';

<Link
	link="https://www.yandrims.com"
	isExternal
	anchorProps={{ target: '_blank' }}
>
	Anchor
</Link>;
```

#### Example Next Link

```js
import Link from '../../elements/Link';

<Link
	link={{
		pathname: '/example/exampleDetail',
		query: { id: '123' },
		asPath: '/example-detail/123',
	}}
>
	Next Link
</Link>;
```

#### Example On Click

```js
import Link from '../../elements/Link';

<Link
	onClick={() => {
		console.log('this is link with onClick props');
	}}
>
	On Click
</Link>;
```

#### Example Anchor with Button style

```js
import Link from '../../elements/Link';
import Button from '../../components/Button';

<Button
	link="https://www.yandrims.com"
	isExternal
	anchorProps={{ target: '_blank' }}
	as={Link}
>
	Anchor with Button Style
</Button>;
```
