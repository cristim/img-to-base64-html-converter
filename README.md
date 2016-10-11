# What?

This is a tiny utility built on top of the [gulp tool](http://gulpjs.com/) that
converts an HTML webpage into an equivalent version that embeds all the images
as inlined base64 img HTML tags.

In addition, it also deletes HTML comments and enforces an UTF-8 encoding on the
output file. Your initial encoding may be different, but at the moment
ISO-8859-15 is hardcoded in the script(to be eventually fixed).

# Why?

The use case it was built for is for generating single-file HTML email
signatures that can be used by any email client.

Our company's HTML email signatures contained images that used to be attached
instead of inlined, and they would have to be attached on all the replies. This
was rarely the case, so they would soon be lost when the email was being
forwarded or replied, and the email client would instead show some ugly
placeholders.

# How?

Usage:
- extract a HTML webpage in the current directory, you can also use the
  browser's "Save as" functionality.

    npm install
    gulp

The end result inlined HTML file is generated in the output directory.
