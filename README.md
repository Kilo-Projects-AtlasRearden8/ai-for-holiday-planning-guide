# AI for Holiday Planning

A beginner-friendly manual for using AI through the holidays — gift ideas and budgets, travel plans, gathering checklists, meal plans, and post-holiday decluttering. Includes printable planners and copy-and-paste AI prompts.

Written in plain English, step by step, never condescending — like a friend explaining it over coffee.

## About

Created by **Asdale Dynamics, LLC** (Indiana, formed October 2026), the LLC of Dylan Asdale, registered nurse turned AI author and founder. Dylan writes *The Massive AI Manual* and runs the hub site dylanasdale.github.io, explaining AI "like a friend would": plain English, step by step, never condescending.

Asdale Dynamics, LLC publishes beginner-friendly AI education, books, guides, and practical tools — including open-source apps and templates, small-business and author tools, and accessible life-admin helpers.

This manual is part of that mission: practical, low-stress help for real life, open source under the MIT License.

## What's inside

| Section | What it covers |
|---------|----------------|
| Getting started with AI tools | Picking a free AI chat tool, writing your first prompt, privacy reminders, low-stress ground rules |
| Gift ideas and budgets | Gift lists, budgets you can live with, brainstorming prompts, low-cost gift ideas, spending tracker |
| Travel plans | Simple itineraries, packing lists, travel budgets, what to do when plans change |
| Gathering checklists | Guest list and RSVPs, prep timeline, day-of run sheet, low-energy hosting, cleanup |
| Meal plans | Cooking with what you have, meal planning, grocery lists, cooking timelines, leftovers |
| Post-holiday decluttering | One small area at a time, four piles (keep/donate/recycle/trash), ADHD-friendly tips |
| Copy-and-paste AI prompts | Ready-to-use prompt templates for every section above |
| Printable planners | Gift Budget Planner, Travel Planner, Gathering Planner, Meal Planner, Decluttering Planner |

- `docs/` — the beginner manual in Markdown
- `site/` — a static HTML version of the same manual, ready to open in any browser and print
- `LICENSE` — MIT License, Copyright (c) 2026 Asdale Dynamics, LLC

## How to use it

No installation, no accounts, and no API keys required.

1. Read the manual in `docs/`, or open `site/index.html` in your browser for the clickable HTML version.
2. Copy the AI prompts into any free AI chat tool and fill in your details.
3. Print the planner pages from `site/` (they're designed for printing) or fill them out on screen.
4. Take it one step at a time. A gentle holiday is better than a perfect one.

## How to run the static site

The HTML site is generated from the Markdown files with `npm run build`, so you never need to edit `site/` by hand. Requires Node.js.

```bash
cd /workspace/kilo-lab/ai-for-holiday-planning-guide
npm install      # optional; no production dependencies are used
npm run build    # reads docs/ Markdown, writes static HTML to site/
npm test         # verifies the build output
npm run lint     # syntax-checks build.js and tests/build-test.js
```

Then open `site/index.html` in your browser. To print a planner, open its page in `site/` and choose File > Print; print styles hide the navigation, header, and footer.

## License

MIT License. Copyright (c) 2026 Asdale Dynamics, LLC. See `LICENSE` for details.
