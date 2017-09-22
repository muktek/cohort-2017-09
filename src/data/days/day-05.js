export default {
  day: 5,
  demos: [
    {
      topic: 'Flexbox',
      repoName: false,
      liveDemo: 'https://codepen.io/muktek/pen/gGwZPJ'
    }
  ],
  misc: {
    title: 'Notes',
    html: `
    <ul>
      <li>
        <p><code>display: flex;</code>, <code>justify-content: ...</code> are for the parent element.</p>
      </li>
      <li>
        <p><code>order: ...</code>, <code>flex: ...</code> is for the children elements.</p>
      </li>
      <li>
        <p><strong>Extra reading: </strong><a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/'>A Complete Guide to Flexbox | CSS-Tricks</a></p>
      </li>
      <li>
        <p><strong>Compatibility table to check new features and support from Browsers: </strong><a href="https://caniuse.com/">caniuse.com</a></p>
      </li>
    </ul>
    `
  }
}
