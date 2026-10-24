# Project rules

- Retrieve live press releases from the publisher's dedicated RSS host rather than scraping its company page; the page can return a successful HTTP status containing a bot challenge instead of releases.
- Keep RSS parsing in the feed module and reject empty or invalid upstream responses so feed failures cannot masquerade as an empty archive.