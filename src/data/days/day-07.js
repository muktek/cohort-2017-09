export default {
  day: 7,
  demos: [
    {
      topic: 'Scss Warmup',
      repoName: false,
      liveDemo: 'https://codepen.io/muktek/pen/NapKej'
    },
    {
      topic: 'Media Queries - Exercise 1',
      repoName: false,
      liveDemo: 'https://codepen.io/muktek/pen/jGBMVj'
    },
    {
      topic: 'Media Queries - Exercise 2',
      repoName: false,
      liveDemo: 'https://codepen.io/muktek/pen/aLJmJp'
    },
    {
      topic: 'Media Queries - Exercise 3',
      repoName: false,
      liveDemo: 'https://codepen.io/muktek/pen/pWeEro'
    }
  ],
  misc: {
    title: 'Notes',
    html: `
    <ul>
      <li>
        <p>To watch changes on <code>.scss</code> files NEVER forget to run <code>watch-scss</code> inside your project folder.</p>
      </li>
      <li>
        <p>Media queries are instructions that runs only when condition is true.</p>
      </li>
      <li>
        <p>Syntax for a media query: <code>@media screen and (min-width: 500px) { ... }</code></p>
      </li>
      <li>
        <strong>Effective Workflow to use Git and GitHub:</strong>
        <ul>
          <li>Create a repo on GitHub</li>
          <li>Create a repo on local machine</li>
          <li>Run <code>git init</code> inside new folder</li>
          <li>Run <code>git add .</code> to save all files and new changes</li>
          <li>Write a message for those changes: <code>git commit -m "YOUR_MESSAGE"</code></li>
          <li>Add remote url to push changes: <code>git remote add origin URL_TO_LINK_REPO</code> (depends on your account)</li>
          <li><code>git push -u origin master</code> to upload changes to GitHub (cloud)</li>
        </ul>
      </li>
    </ul>
    `
  }
}
