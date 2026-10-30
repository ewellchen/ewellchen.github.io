# Yiwei Chen Academic Homepage

This repository contains the source for Yiwei Chen's academic homepage at
<https://ewellchen.github.io>.

The site is built with [Jekyll](https://jekyllrb.com/) and the
[al-folio](https://github.com/alshedivat/al-folio) academic website theme.

## Local Development

Install Ruby dependencies:

```bash
bundle install
```

Build the site on this Windows setup with the project binstub:

```bash
ruby bin/jekyll build
```

Serve the site locally:

```bash
ruby bin/jekyll serve
```

Main content files:

- `_pages/about.md` for the homepage.
- `_bibliography/papers.bib` for publications.
- `_data/cv.yml` for the CV page.
- `_projects/` for research project cards.
- `_data/repositories.yml` for GitHub profile and repository cards.
