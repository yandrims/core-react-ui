How to Customize?

Default theme:

<pre>
{
  baseStyle: {
    fontFamily:
      '"Lato",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',
    fontSize: 15, // in px
    colorPrimary: '#219191',
    colorPrimaryText: '#ffffff',
    colorDark: '#1e3c3c',
    colorLight: '#caf7f7',
  },
  breakpoints: {
    xxs: 320, // in px
    xs: 386, // in px
    sm: 576, // in px
    md: 768, // in px
    lg: 992, // in px
    xl: 1200, // in px
    xxl: 1500, // in px
  },
  spacing: {
    multiplierFactor: 3,
  },
  container: {
    padding: 15, // in px
    maxWidth: 1366, // in px
  }
}
</pre>

To override the theme, just create a theme file and override with `ThemeProvider`.

```markdown
// import ThemeProvider
import { ThemeProvider } from 'styled-components'

// import theme file
import theme from '../config/theme';

// import ui library
import Row from '{ui_library_package_name}/dist/elements/Row';
import Col from '{ui_library_package_name}/dist/elements/Col';

<ThemeProvider theme={theme}>
  <Row space={5}>
    <Col col={3}>
      <div style={{ background: '#eee' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
        voluptate consequuntur enim perferendis, sapiente aspernatur
        deleniti libero asperiores aut facilis tempora assumenda, eum
        pariatur iusto totam magnam eius debitis dolor.
      </div>
    </Col>
    <Col col={9}>
      <div style={{ background: '#eee' }}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
        voluptate consequuntur enim perferendis, sapiente aspernatur
        deleniti libero asperiores aut facilis tempora assumenda, eum
        pariatur iusto totam magnam eius debitis dolor.
      </div>
    </Col>
  </Row>
</ThemeProvider>
```
