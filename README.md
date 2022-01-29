# EAI Prompt Gallery

## Description

Showcase for the bests prompt completions generated with various models on EleutherAI Discord. Prompt types include Images, Text, and code.

## How to Run

1. clone the repo
2. `npm install`
3. `npm start`

## To add new content to the gallery

Text

1. Add new item in the `public/api/textPrompts.json`. Use the previous entries as a template
2. Make the PR for the change

Images

1. Download the image to `public/api/art/optimised` (try to optimise image using any optimiser tool)
2. Add new item in the `public/api/artPrompts.json`. Use the previous entries as a template.
3. run `npm resizeImages`. This will create thumbnails for the list of images that will be displayed on the art page.
4. Make the PR for the change

Code

1. ...in progress

## Contact

- contact@eleuther.ai
- janko.prester@gmail.com
