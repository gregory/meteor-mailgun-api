Package.describe({
    name: 'risul:mailgun',
    summary: 'Meteor package for Mailgun Node.js helper module mailgun-js',
    version: '0.0.2',
    git: 'https://github.com/risul/meteor-mailgun-api'
});

Npm.depends({
    'mailgun.js': '2.0.1'
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@1.0');
    api.export('Mailgun');
    api.addFiles('lib/mailgun.js', 'server');
});
