export const projects = [
  {
    "slug": "cerno",
    "group": "work",
    "name": "Cerno",
    "title": "c<b>e</b>rno",
    "meta": "Analytics platform · 2026",
    "context": "Digital Advantage Media",
    "video": "cerno",
    "summary": "One place where every client's ad spend, leads and sales outcomes meet. A cloud data pipeline across Meta, Google and client CRMs feeds a dashboard, AI insights, automated monthly reports and alerts.",
    "repo": "thecozycod3r/DAMClaude",
    "links": [],
    "stats": [
      {
        "v": "28",
        "l": "Client accounts"
      },
      {
        "v": "21",
        "l": "Monthly reports"
      },
      {
        "v": "41%",
        "l": "Faster build"
      },
      {
        "v": "100%",
        "l": "Reconciled"
      }
    ],
    "problem": [
      "Account managers at DAM ran close to thirty client accounts. Spend lived in Meta Ads Manager and Google Ads. Leads lived in each client's own Google Sheet, every one with different columns, date formats and status words. Whether a lead was relevant, visited the site or booked lived in a third place again.",
      "So the question every client actually asks — “what did my money buy?” — took an afternoon of copy-paste to answer, and the monthly report was rebuilt by hand every month."
    ],
    "built": [
      {
        "title": "Performance Dashboard",
        "body": "Spend, leads, cost per lead and funnel outcomes per client, with free date-range comparison and creative-level views. Staff and client logins see only what they are scoped to."
      },
      {
        "title": "Insights That Do Arithmetic, Not Guessing",
        "body": "An Insights tab opens on up to four act / watch / working cards computed from plain thresholds — spend with zero results, cost 1.5× the average, an engine 20% cheaper. ‘Ask why’ then hands the card to AI with the right dataset."
      },
      {
        "title": "One-Click Monthly Reports",
        "body": "Generates the client's monthly Word report. The pipeline computes every figure; AI only writes the words, and a check rejects any number the model invents."
      },
      {
        "title": "Overnight Anomaly Alerts",
        "body": "Each campaign is compared with its own trailing 7 days — spend spikes, silent delivery, cost-per-lead jumps — and a Slack digest lands every morning with deep links into the ad account."
      },
      {
        "title": "Access Follows Identity",
        "body": "Any sign-in method works, but agency-level access needs a confirmed address. Each client login is scoped to its own accounts, checked server-side on every request."
      },
      {
        "title": "Self-Serve Onboarding",
        "body": "A business names itself, connects its own Google Ads and Meta accounts through OAuth, and gets the same dashboard the agency uses, filled by the same pipeline."
      },
      {
        "title": "Week on Week",
        "body": "Any campaign, ad set or ad as eight whole Monday-to-Sunday weeks side by side. A client asked for it; it shipped to staff and client views together."
      },
      {
        "title": "SEO Next to Paid",
        "body": "Search Console and GA4 sit beside the ad data, and a panel matches paid search terms to organic rankings to show where SEO would lower the cost of paid."
      }
    ],
    "decisions": [
      "Numbers come from code, words from AI. A model never computes a figure that reaches a client — reports are reconciled against the raw lead data before release (58 of 58 client-months matched exactly).",
      "Alerts tuned on real data, not defaults. DAM campaigns average under one lead a day, so a naive \"spent money, zero leads\" rule fired on most healthy campaigns. Lead-volume gates and a 2× threshold cut noise to about ten alerts a day across fifteen clients.",
      "A green job is not proof. An early cloud run reported success while silently publishing empty data. I added guards that refuse to publish when fewer than half the clients built, and a daily freshness watchdog that judges data age, not run status.",
      "Knowing when not to ship. An ad-level verdict engine works for e-commerce clients but lead-gen data was too thin to judge individual ads — so I scoped it to sales accounts and documented what data would unlock the rest."
    ],
    "stack": [
      "Python + pandas",
      "Parquet",
      "Meta Marketing API",
      "Google Ads API",
      "Google Sheets API",
      "GitHub Actions",
      "Next.js",
      "Vercel",
      "Supabase Storage",
      "Claude + Gemini",
      "Slack Webhooks"
    ],
    "outcomes": [
      "Account managers answer \"what did my money buy?\" from one screen instead of three exports.",
      "Monthly client reports went from a manual rebuild to a button, with numbers that cannot drift from the dashboard.",
      "Broken or runaway campaigns surface the next morning in Slack, not at month end.",
      "Cut the nightly build time by about 40% by fixing the slowest transforms and running clients in parallel — verified byte-identical output before shipping."
    ]
  },
  {
    "slug": "neo",
    "group": "work",
    "name": "Neo",
    "title": "n<b>e</b>o",
    "meta": "SEO + GEO · 2026",
    "context": "Digital Advantage Media",
    "video": "neo",
    "summary": "An SEO and GEO content platform that writes, publishes and tracks client blogs, and measures whether Google and AI assistants actually mention the client. Built to replace a paid subscription, running on the team's own Claude plans.",
    "repo": "thecozycod3r/neo",
    "links": [],
    "stats": [
      {
        "v": "₹0",
        "l": "Per-seat cost"
      },
      {
        "v": "~93%",
        "l": "Feature parity"
      },
      {
        "v": "4",
        "l": "AI engines tracked"
      },
      {
        "v": "5",
        "l": "Clients live"
      }
    ],
    "problem": [
      "DAM sold SEO and GEO (getting cited by ChatGPT, Gemini and Perplexity) on a third-party content tool. It worked, but it was a monthly bill for a tool DAM could not change, and the team needed reports it could edit before they went to a client.",
      "The brief I set myself: match it feature for feature, in DAM's own brand, so anyone with a Claude account can use it and everyone sees every client's work."
    ],
    "built": [
      {
        "title": "Articles, Brief to Draft",
        "body": "Keyword → outline (stops for human review) → article with internal and external links, brand-matched banner image, then a draft straight into the client's Webflow or Squarespace."
      },
      {
        "title": "AI Visibility Tracking",
        "body": "Weekly checks of tracked prompts across ChatGPT, Gemini, Perplexity and Google AI: is the client named, which pages are cited, which competitors keep showing up, and the sentiment of each answer."
      },
      {
        "title": "Rank Tracking + Search Console",
        "body": "Keyword ranks, GSC and GA4 in one Insights view, with alerts when a keyword moves and a weekly owner report scheduled automatically."
      },
      {
        "title": "Audits and Content Refresh",
        "body": "Technical and domain SEO audits turn into a fix list; old posts get a refresh plan built from the page's own text and the keywords it should rank for."
      },
      {
        "title": "Editable Client Reports",
        "body": "Monthly reports are documents the team edits in the browser, then downloads as Word or PDF. Numbers come from the data; AI only writes the commentary."
      },
      {
        "title": "Ask Neo",
        "body": "A chat drawer on every page (⌘K) that answers questions about a client and can start real jobs: write an article, refresh a page, run a report, add keywords."
      }
    ],
    "decisions": [
      "Signed releases. Every runner holds a service key, so runners install only updates signed with a key that never leaves my machine, and refuse downgrades. A forged release was tested and ignored.",
      "Parity measured, not claimed. I surveyed the original tool screen by screen, scored a feature matrix and closed gaps until every must-have was covered (about 93% overall parity).",
      "Better than the original where it was wrong: article extraction picks the real body instead of the first card on the page, and brand searches count knowledge panels and map packs as ranking.",
      "Cheap models for cheap steps. Small labelling steps run on a local model with a Claude fallback; writing always stays on Claude."
    ],
    "stack": [
      "Python",
      "Claude Code",
      "Supabase (Postgres + RLS)",
      "Vanilla JS",
      "Vercel",
      "DataForSEO",
      "Search Console + GA4 APIs",
      "Webflow + Squarespace",
      "Playwright",
      "Ed25519 signing"
    ],
    "outcomes": [
      "The SEO team writes, reviews and publishes from one place, and every teammate sees every client.",
      "Client reports are edited before they are sent, instead of exported and patched by hand.",
      "GEO is measured week to week, so “are we showing up in ChatGPT?” has an answer with sources."
    ]
  },
  {
    "slug": "tempo",
    "group": "work",
    "name": "Tempo",
    "title": "t<b>e</b>mpo",
    "meta": "Task management · 2026",
    "context": "Digital Advantage Media",
    "video": "tempo",
    "summary": "An in-house task manager that replaced Asana for the whole agency: client boards, automatic routing to the right specialist, approval statuses that ping the right Slack channel, and reports on late work, all on a free database tier.",
    "repo": "thecozycod3r/tempo",
    "links": [],
    "stats": [
      {
        "v": "29",
        "l": "Client boards"
      },
      {
        "v": "11",
        "l": "Agency statuses"
      },
      {
        "v": "$0",
        "l": "Monthly database cost"
      },
      {
        "v": "5",
        "l": "Access levels"
      }
    ],
    "problem": [
      "I had already rolled Asana out company-wide (the Asana story), with rules that routed every task to the right person. The rules were tailor-made and the team trusted them. But pricing grew with every seat, and every change meant working around someone else's product.",
      "My first redesign tried to improve the workflow. The team pushed back, so I studied the live Asana rules one by one and rebuilt them as they were. Improvements became opt-in switches, not defaults."
    ],
    "built": [
      {
        "title": "Roster-Driven Routing",
        "body": "Each client has a roster: account manager, Meta, Google, SEO, creative. A task assigned to a role lands on the right person automatically, and edits go back to the client's strategist."
      },
      {
        "title": "Statuses That Talk",
        "body": "The agency's own 11 statuses. Moving a task to Out for Approval notifies the account manager and posts in the client's Slack channel through a Tempo bot."
      },
      {
        "title": "Tidy Up",
        "body": "One page of late work and approvals stuck five working days or more, with one-click Done, New date or On hold, and Undo. Ages count working days and skip holidays."
      },
      {
        "title": "Team Report",
        "body": "Completed work per person and team over time, visible only to founders and the creative lead. Completed tasks are logged before the 15-day auto-bin, so history survives."
      }
    ],
    "decisions": [
      "Five access levels, from founder to team member, enforced by database triggers and row-level security. A member can comment and move status; only managers can reassign or edit.",
      "Copy before you improve. Matching the old tool exactly made the switch a non-event for the team.",
      "Free tier on purpose. About 55 MB of data a year against a 500 MB limit, with creatives kept as Drive links, and a documented path to a paid plan if it ever gets close.",
      "Live Asana boards were imported like-for-like, so the switch-over did not lose open work."
    ],
    "stack": [
      "Next.js 16",
      "Supabase (Postgres, RLS, pg_cron)",
      "Slack API",
      "Vercel",
      "TypeScript",
      "SQL migrations + RLS tests"
    ],
    "outcomes": [
      "The agency runs on a tool it owns, with no per-seat licence.",
      "Late work and stuck approvals surface on one page instead of in a weekly chase.",
      "Feedback from the team ships in days: the creative lead asked for a people view and working-day ages, and both went live the same week."
    ]
  },
  {
    "slug": "creative-studio",
    "group": "work",
    "name": "Creative Studio",
    "title": "creative st<b>u</b>dio",
    "meta": "AI image and video studio · 2026",
    "context": "Digital Advantage Media",
    "video": "studio",
    "summary": "An internal AI image and video studio for the creative team — seven generation models behind one composer, with client projects, spend controls, approvals and a UGC ad workflow. Written from a PRD, shipped to production.",
    "repo": null,
    "links": [],
    "stats": [
      {
        "v": "7",
        "l": "AI models"
      },
      {
        "v": "30",
        "l": "Client workspaces"
      },
      {
        "v": "100%",
        "l": "Spend tracked"
      },
      {
        "v": "~5s",
        "l": "Image turnaround"
      }
    ],
    "problem": [
      "The creative team wanted AI image and video for ad concepts, but using it meant personal logins on consumer apps. Nobody could see what had been spent or for which client, finished assets lived in downloads folders, and there was no step between “generated” and “sent to client”.",
      "Video in particular is expensive per clip — a single long, high-resolution render can cost more than a day's budget — so open access without controls was not an option."
    ],
    "built": [
      {
        "title": "One Composer, Seven Models",
        "body": "Image and video models behind a single interface. Attaching a start or end frame quietly switches a video model to its image-to-video variant, so the team picks a model, not an endpoint."
      },
      {
        "title": "Spend Controls",
        "body": "Every request is priced before it runs — including token-metered video models whose provider returns a formula rather than a price. Costs reserve against a company budget, and anything above a threshold asks for confirmation."
      },
      {
        "title": "Roles and Access",
        "body": "Google Workspace sign-in, invite-only. Admins, creatives and viewers, optionally scoped to named clients. Assets stay hidden from viewers until approved."
      },
      {
        "title": "UGC Ad Workflow",
        "body": "A playbook and script planner that breaks a UGC ad into clips: generate a consistent keyframe for each shot, then animate it — handing each prompt straight into the studio."
      },
      {
        "title": "‘Which Model?’ Guide",
        "body": "A public guide rendered from the same model catalogue the app runs on, so limits and parameters never go stale — only the judgement is hand-written."
      },
      {
        "title": "Edit and Iterate",
        "body": "Any generated image can be reopened as a reference for the next generation, with the original stored byte-for-byte and every output organised by client and project."
      }
    ],
    "decisions": [
      "Simplified the architecture to fit the budget. The original design needed a separate queue server; I replaced it with a database-leased dispatcher so the whole product runs on one hosting platform at near-zero fixed cost.",
      "Tested live, not just in mocks. A paid QA pass across all seven models (about $1.40) caught a dispatcher that stalled under parallel load and a provider that returned receipts from a different host than it accepted jobs on — both fixed before the team relied on it.",
      "Fixed the problem users could not describe. The Generate button was disabled almost all day because it waited on a health signal that only a generation could produce. Redefined \"offline\" and made the button say exactly what was missing.",
      "Changed course when asked. Access went from domain auto-admit back to invite-only, and per-client budgets were removed in favour of one company budget, when the team found them more friction than control."
    ],
    "stack": [
      "Next.js",
      "TypeScript",
      "PostgreSQL (Neon)",
      "Better Auth + Google SSO",
      "Cloudflare R2",
      "Higgsfield API",
      "Vercel",
      "Claude AI"
    ],
    "outcomes": [
      "The creative team generates ad concepts in a company tool instead of personal accounts, with every rupee attributed to a client.",
      "Finished assets live in one private, searchable library rather than on individual laptops.",
      "The team has already used it to produce AI UGC video ads for a live client.",
      "Live at studio.digitaladvantagemedia.com behind company sign-in."
    ]
  },
  {
    "slug": "social-planner",
    "group": "work",
    "name": "Social Media Planner",
    "title": "social media pl<b>a</b>nner",
    "meta": "Content planning · 2025",
    "context": "Digital Advantage Media",
    "video": null,
    "summary": "Replaced a fragmented Slack and WhatsApp approval chain with a structured, end-to-end content platform — built with AI assistance, shipped to production.",
    "repo": "thecozycod3r/social-media-dash",
    "links": [],
    "stats": [
      {
        "v": "0",
        "l": "Lost briefs"
      },
      {
        "v": "100%",
        "l": "Automated posts"
      },
      {
        "v": "6",
        "l": "Approval stages"
      },
      {
        "v": "↓",
        "l": "Missed deadlines"
      }
    ],
    "problem": [
      "The social media team at DAM operated with zero structure. Creating content meant: Social media manager creates a mood board → sends to WhatsApp → manager approves (or forgets) → sends to copywriter → sends to designer → back to manager → finally to the client → someone manually posts it.",
      "Everything lived in Slack threads and WhatsApp messages that scrolled off. Things got lost. Deadlines were missed. Nobody knew where any piece of content was in the pipeline."
    ],
    "built": [
      {
        "title": "Content Calendar",
        "body": "Visual calendar view showing all scheduled, in-review, and published content. Team can see the full month at a glance and spot gaps before they become problems."
      },
      {
        "title": "In-App Mood Board",
        "body": "Creatives can build mood boards directly in the tool instead of sending image dumps over WhatsApp. Everything stays attached to the content brief."
      },
      {
        "title": "Multi-Stage Approval Flow",
        "body": "Structured flow: Manager → Copywriter → Designer → Manager → Client. Each stage has a clear owner. Content can't skip stages or get lost in a thread."
      },
      {
        "title": "Automated Publishing",
        "body": "Once approved, content posts automatically to Instagram and Facebook via the Meta API on the scheduled date. No manual posting, no missed slots."
      }
    ],
    "decisions": [],
    "stack": [
      "Supabase",
      "Vercel",
      "Next.js",
      "Meta API (Instagram + Facebook)",
      "Claude AI",
      "GitHub",
      "TypeScript",
      "PostgreSQL (via Supabase)"
    ],
    "outcomes": [
      "Eliminated fragmented Slack and WhatsApp approval chains — replaced with a single, tracked workflow.",
      "The social media manager no longer manually posts content; the Meta API handles it on schedule.",
      "Every team member can see where every piece of content is in the pipeline at any time.",
      "Mood boards, briefs, and approvals all live in one place — attached to the content, not lost in messages."
    ]
  },
  {
    "slug": "pl-dashboard",
    "group": "work",
    "name": "P&L Dashboard",
    "title": "p&l d<b>a</b>shboard",
    "meta": "Financial dashboard · 2025",
    "context": "Digital Advantage Media",
    "video": null,
    "summary": "Built a live financial intelligence layer for DAM's leadership — replacing manual monthly spreadsheets with a real-time BigQuery + Looker Studio dashboard that compressed the reporting cycle and exposed where money was leaking.",
    "repo": null,
    "links": [],
    "stats": [
      {
        "v": "Monthly → Weekly",
        "l": "Reporting cycle"
      },
      {
        "v": "10%+",
        "l": "Cost optimisation"
      },
      {
        "v": "Live",
        "l": "P&L visibility"
      },
      {
        "v": "0",
        "l": "Manual updates"
      }
    ],
    "problem": [
      "When I joined DAM, the only financial visibility leadership had was a manually compiled spreadsheet — updated once a month, emailed around, and already outdated by the time anyone read it. There was no way to tell actuals from projections, no breakdown of where revenue was coming from, and no visibility into which cost lines were eating margin.",
      "Decisions were being made on gut feel. Cost-sink areas were invisible. The leadership team had no live financial pulse."
    ],
    "built": [
      {
        "title": "Actuals vs. Forecast",
        "body": "Side-by-side view of actual revenue and expenses against projected figures — updated weekly so leadership always knows if they're on track."
      },
      {
        "title": "Revenue Stream Breakdown",
        "body": "Revenue split by client, service type (Google Ads, Meta Ads, SEO, CRO), and geography — identifying which streams were growing and which were flat."
      },
      {
        "title": "Opex Ratio Tracking",
        "body": "Operating expense ratios tracked against revenue benchmarks — flagging when cost lines were growing faster than revenue."
      },
      {
        "title": "Cost-Sink Identification",
        "body": "Drill-down analysis of individual cost lines identified two categories consuming disproportionate margin — informing a 10%+ cost optimisation initiative."
      }
    ],
    "decisions": [],
    "stack": [
      "BigQuery",
      "Looker Studio",
      "SQL",
      "Google Cloud",
      "Scheduled Queries (auto-refresh)"
    ],
    "outcomes": [
      "Reporting cycle compressed from monthly to weekly — leadership now reviews financials every Friday.",
      "Identified two major cost-sink categories consuming disproportionate margin, informing a 10%+ cost optimisation initiative.",
      "Revenue stream breakdown enabled the leadership team to see which service lines were driving growth vs. dragging margin.",
      "Actuals vs. forecast view gave management a live pulse on financial performance — replacing gut-feel decisions with data."
    ]
  },
  {
    "slug": "table-night",
    "group": "side",
    "name": "Table Night",
    "title": "table n<b>i</b>ght",
    "meta": "Multiplayer games · 2026",
    "context": "Personal",
    "video": "tablenight",
    "summary": "Fourteen multiplayer card and party games for a room full of friends. Everyone plays on their own phone, no accounts, no app store, free.",
    "repo": null,
    "links": [
      {
        "label": "Play Table Night, free",
        "href": "https://table-night-games.vercel.app"
      },
      {
        "label": "Source code",
        "href": "https://github.com/thecozycod3r/wizard-online"
      }
    ],
    "stats": [
      {
        "v": "14",
        "l": "Games"
      },
      {
        "v": "2–12",
        "l": "Players"
      },
      {
        "v": "7s",
        "l": "Host failover"
      },
      {
        "v": "Free",
        "l": "To play"
      }
    ],
    "problem": [
      "It started with Wizard, a card game my friends play, and a paper scorebook nobody wanted to keep. Then the box was not always there and people joined late. I wanted a table that lives on everyone's phones and survives all of that."
    ],
    "built": [
      {
        "title": "Your Phone Is Your Hand",
        "body": "Private cards on your screen, the shared table on everyone's. Works on any phone browser, sideways or upright."
      },
      {
        "title": "No Host to Lose",
        "body": "One phone runs the table and broadcasts state. If it goes quiet for seven seconds, the next seat takes over; when it comes back it steps aside."
      },
      {
        "title": "Rejoin From Anywhere",
        "body": "Seats are remembered on the device. A new phone can claim its seat with ‘Which player are you?’ and carry on mid-round."
      },
      {
        "title": "Original Art",
        "body": "Every game has its own illustrated cards and posters, generated and art-directed per game rather than copied from the boxes."
      }
    ],
    "decisions": [
      "Every engine is simulated over thousands of bot games before it ships, to catch deadlocks and rule edge cases.",
      "Real-device testing: headless runs at four and six players, host-failover tests, slow-network and phone-sleep tests, and a pass on a real iPhone.",
      "No backend of my own. A realtime channel per table carries the state, so there is nothing to keep running and nothing to pay for."
    ],
    "stack": [
      "Vanilla JS",
      "Supabase Realtime",
      "Vercel",
      "Playwright tests",
      "AI-generated art"
    ],
    "outcomes": []
  },
  {
    "slug": "arthur",
    "group": "side",
    "name": "A.R.T.H.U.R.",
    "title": "a<b>r</b>thur",
    "meta": "Voice assistant · 2026",
    "context": "Personal",
    "video": "arthur",
    "summary": "A JARVIS-style personal assistant for macOS. Every morning and evening it reads my email, calendar, Slack, WhatsApp and iMessage, works out what actually matters, and briefs me out loud — then answers questions and acts on my behalf by voice, keyboard or click, never sending anything without my explicit yes.",
    "repo": null,
    "links": [
      {
        "label": "Source code",
        "href": "https://github.com/thecozycod3r/arthur"
      }
    ],
    "stats": [
      {
        "v": "3.6s",
        "l": "Median response"
      },
      {
        "v": "80/80",
        "l": "Wake words caught"
      },
      {
        "v": "3.4%",
        "l": "Word error rate"
      },
      {
        "v": "₹0",
        "l": "Running cost"
      }
    ],
    "problem": [
      "Work arrives on Gmail, Slack, WhatsApp, iMessage and the calendar at once. Every morning started with twenty minutes of tab-switching just to find out who was waiting on me — and replying meant opening each app again.",
      "Off-the-shelf assistants either can't read WhatsApp at all, need paid APIs, or send your messages to a cloud you don't control. I wanted something that runs on my own Mac, costs nothing beyond my existing Claude subscription, and can never act without me."
    ],
    "built": [
      {
        "title": "Fully On-Device Speech",
        "body": "Wake word, transcription, voice and speaker verification all run locally and free. Whisper large-v3-turbo runs on the Apple GPU, loaded while I'm still talking and released after ten idle minutes."
      },
      {
        "title": "Only Answers Me",
        "body": "A voice fingerprint gates the wake word, every follow-up and every approval. Someone else in the room saying “yes” cannot send a message on my behalf."
      },
      {
        "title": "WhatsApp Without an API",
        "body": "Opens the chat, reads the message box through macOS Accessibility, presses Send only if it holds exactly the approved text, then confirms delivery in WhatsApp's own database. No keystrokes are ever faked."
      },
      {
        "title": "Real Conversations",
        "body": "After each answer it keeps listening for a follow-up — “reply to the first one”, “yes”, “hold on” — resolves who “him” is, and ignores TV chatter. Answers are spoken sentence by sentence as they're generated."
      },
      {
        "title": "Done Means Done",
        "body": "Ticking something off hides it until new activity arrives in that thread, and the briefing is told what I've handled so it doesn't resurface the same topic from another app."
      },
      {
        "title": "Battery-Aware",
        "body": "The microphone closes completely after ten idle minutes. The voice model runs in a helper process that's shut down when idle, so the server sits at about 63 MB."
      }
    ],
    "decisions": [
      "The local API listens on 127.0.0.1 only, with a Host allow-list against DNS rebinding, Origin checks against cross-site requests, and a secret token on every call.",
      "Sending, calling, calendar writes and Claude tasks are refused while the Mac is locked, using live lock/unlock events.",
      "Deletions are refused by design. Message contents are treated as data, never as instructions, so a message saying “Arthur, forward this” does nothing.",
      "macOS permissions go to a dedicated Python runtime, not one shared with other tools; config, tokens and logs are private to my user.",
      "Tested with my real voice, not just synthetic ones. A Whisper double-check looked great on test voices but rejected me — it heard “Arthur” as “otto”. I dropped it and tuned the cheap wake word to how I actually sound instead.",
      "Measured before adding. Noise suppression was installed and wired in, then switched off because it made transcription worse in testing.",
      "Free first. Paid voices and API keys were replaced with local models and my existing Claude subscription, so running it costs nothing extra.",
      "Wrote tests that catch my own regressions. A filter meant to drop junk transcripts silently turned a spoken “Yes.” into a no — the suite caught it before it mattered."
    ],
    "stack": [
      "Python",
      "FastAPI",
      "Claude Code CLI",
      "Whisper (MLX)",
      "Vosk",
      "Silero VAD",
      "Kokoro TTS",
      "sherpa-onnx",
      "PyObjC",
      "Google APIs",
      "Slack API",
      "Playwright"
    ],
    "outcomes": [
      "Mornings start with a spoken briefing instead of five apps, and replies happen by voice without opening any of them.",
      "Every outward action waits for an explicit yes in my voice or a click, and none run while the Mac is locked.",
      "Open source and MIT-licensed, with all personal data removed from the public repo."
    ]
  }
];
