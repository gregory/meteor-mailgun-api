meteor-mailgun
===============

Meteor package for Mailgun Node.js helper module mailgun-js
More info about the mailgun-js: https://github.com/1lobby/mailgun-js

Install
-----
```bach
meteor add risul:mailgun
```

Configuration
-----
Add mailgun settings to your settings.json or METEOR_SETTINGS env variable containing all settings as JSON

```json
{
    "mailgun": {
            "key": "key-XXXXXXXXXXXXXXXXXXXXXXX",
            "domain": "example.com"
        }
}
```

Usage
-----
The following example creates a new email for sending with mailgun:

``` javascript
    var data = {
      from: 'Excited User <me@example.com>',
      to: 'customer@company.com',
      subject: 'Hello',
      text: 'Testing some Mailgun awesomness!'
    };

    Mailgun.messages().send(data, function (error, body) {
      console.log(body);
    });
```

Documentation
-----
Please see [Mailgun Documentation](https://documentation.mailgun.com) for full Mailgun API reference.
Detailed documentation for mailgun-js: https://github.com/1lobby/mailgun-js/tree/master/docs