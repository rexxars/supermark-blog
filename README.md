# supermark-blog

Super simple blog built with Supermark

## Important disclaimer

Not production quality in any way. Only does server rendering, and is implemented
in the most naive way possible. Simply polls for documents from the `posts` folder
once every 30 seconds, then uses that to serve requests. No thought have been put
into things like pretty URLs etc.

## Installation and usage

```bash
git clone https://github.com/rexxars/supermark-blog.git
cd supermark-blog
npm install
npm start

# Open browser: http://localhost:3000/
```

## License

MIT-licensed, see LICENSE.
