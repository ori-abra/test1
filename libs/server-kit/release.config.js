module.exports = {
    branches: ['main'],
    tagFormat: 'server-kit@${version}',

    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',

        ['@semantic-release/changelog', {
            changelogFile: 'CHANGELOG.md'
        }],

        ['@semantic-release/npm', {
            npmPublish: true
        }],

        ['@semantic-release/git', {
            assets: ['CHANGELOG.md', 'package.json'],
            message:
                'chore(server-kit): release ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
        }],
        '@semantic-release/github'
    ]
};