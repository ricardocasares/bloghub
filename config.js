module.exports = {
    app: {
        title: process.env.BLOGHUB_TITLE
    },
    github: {
        repo: process.env.GITHUB_REPO,
        user: process.env.GITHUB_USER,
        token: process.env.GITHUB_TOKEN
    },
    settings: {
        debug: process.env.NODE_ENV !== 'production'
    }
};
