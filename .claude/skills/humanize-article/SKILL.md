---
name: humanize-article
description: >
  Rewrites AI-generated blog posts and technical dev articles to sound natural, personal, and human-authored.
  Use this skill whenever the user wants to humanize, de-AI, make more natural, or add a personal voice
  to written content — especially Unity/dev blog posts and technical tutorials. Trigger when the user says
  things like "humanize this", "make this sound less AI", "add my voice", "this sounds too robotic",
  "remove the AI smell", "rewrite this more naturally", or pastes an article asking for a tone overhaul.
  Always preserve the original structure — only rewrite tone, language, and voice.
---

# Humanize Article Skill

Turn AI-generated text into writing that sounds like a real person wrote it — with a distinct voice, natural flow, and zero AI padding.

---

## Core Philosophy

AI writing has a recognizable fingerprint: overly formal tone, hollow filler phrases, bullet points where prose would breathe better, perfect predictable structure, and zero personal voice. Humanizing means breaking that fingerprint — not just swapping words, but thinking about how a real person *would* have written this.

**Structure is always preserved.** Don't reorder sections, merge or split major sections, or change the heading hierarchy. Only touch tone, language, phrasing, and how ideas are expressed within each section.

The goal is not to make it messy. It's to make it *alive*.

---

## Step 1: Diagnose the AI Smell

Before rewriting, identify which of the five target patterns are present:

| Pattern | What it looks like |
|---|---|
| **Overly formal tone** | "It is imperative to consider...", "one must ensure...", academic register in casual dev content |
| **Bullet-point overuse** | 4+ bullet lists where a paragraph would read better; ideas that flow naturally chopped into disconnected points |
| **Hollow filler phrases** | "In today's fast-paced world...", "It's important to note that...", "In conclusion,", "Let's dive in!", "As we've seen..." |
| **Perfect robotic structure** | Every section follows the exact same pattern; nothing surprises; reads like a template was filled in |
| **Lack of personal voice/opinion** | States facts but never says what *you* think; no frustration, enthusiasm, or "I've been there" moments |

---

## Step 2: Understand the Author's Voice

**Gal's Voice Profile** (derived from reading the actual blog at bartouv.github.io):

### Structural Signature
- Opens articles with a **scene-setting scenario** the reader has lived: *"You load a scene. It's a small level... But the memory profiler tells a different story."* — drops you into a problem before naming it.
- Uses **short, punchy declarative sentences** right after longer setup sentences. The rhythm oscillates: build tension with length, release with brevity.
- Ends articles with a **"the real takeaway" paragraph** — not a summary, but a widened lens: "The pattern is broader", "This is the real fix".
- Section headers are **plain, functional, no fluff** — "The Problem", "The Fix", "The Takeaway". Never clever for its own sake.

### Tone Signature
- **Peer-to-peer, never preachy.** Writes as someone who hit the same wall and figured it out, not as someone lecturing.
- **Dry wit, used sparingly.** "You're literally being punished for doing what the documentation tells you to do." or "The fix is embarrassingly simple."
- **Comfortable with calling things out.** "This behavior violates one of the most basic expectations we have as developers." Direct, slightly frustrated, not aggressive.
- Blends **first and second person fluidly**: "We hit this in our project" → "You'll see something like this" → "I would have never caught this." All feel natural.
- **Technically confident** — explains internals without over-explaining. Trusts the reader is a developer.

### Language Signature
- Uses **"This is X"** construction to land conclusions: "This is the ghost.", "This is what's actually happening."
- Repeats the problem keyword for emphasis: *"ghost textures... ghost... the ghost."*
- Favors **concrete specifics over abstractions**: "1ms performance gain. That's 6.67% of our frame budget in a 60fps game."
- Uses em-dashes and colons to extend thoughts, not semicolons.
- Code commentary is minimal and precise — no over-explaining obvious code.

### What Gal Never Does
- Never uses "Let's dive in" or "In conclusion"
- Never writes "It's important to note" or "It's worth mentioning"
- Never pads section intros with restating what the previous section just said
- Never writes 5-bullet "best practices" lists without a framing opinion
- Never ends with generic calls to action ("Feel free to share your thoughts!")

### Evolution Note
Earlier articles (2023) are slightly more formal — more structured bullet lists, "let's look at X", explicit SOLID explanations. The 2025–2026 articles (Ghost Textures, RectMask2D) are much tighter, more cinematic in the problem setup. When humanizing, bias toward the newer style.

---

## Step 3: Rewrite Rules

Apply these in order of impact:

### Always Remove
- Opening sentences that state the obvious or are universally true
- "In conclusion" / "To summarize" / "As we've seen" endings
- Phrases: "It's worth noting", "It's important to understand", "Let's dive in", "In today's world"
- Symmetrical bullet lists that could be flowing sentences
- Empty adjectives: "robust", "powerful", "seamless", "cutting-edge", "comprehensive"

### Usually Rewrite
- Turn passive voice → active voice
- Replace hedge chains ("might potentially be able to") → direct statement
- Break "perfectly balanced" paragraphs — vary length intentionally
- Replace abstract nouns with concrete actions ("the implementation of X" → "implementing X")

### Always Add
- At least one moment of personal opinion or experience ("I've wasted hours on this", "This is the approach I now default to")
- At least one moment of directness that an AI would hedge ("Just use X. Don't overthink it.")
- Varied sentence rhythm — mix short punchy sentences with longer explanatory ones
- If relevant: a small admission of a mistake, limitation, or caveat the author actually believes

---

## Step 4: Structural Adjustments (Within Sections Only)

Since structure is always preserved, the only allowed structural changes are *within* sections:

- **Convert bullet lists to prose** if the points flow naturally as sentences
- **Vary paragraph lengths** — break a wall-of-text paragraph or combine two stubby ones
- **Rewrite section openers** — the first sentence of each section is usually the most "AI" part
- **Do NOT**: reorder sections, merge headings, add new sections, or remove sections

---

## Step 5: Final Check

Before returning the result, verify:

- [ ] No hollow filler phrases survive
- [ ] At least one genuine opinion or personal note exists
- [ ] Sentence lengths vary (not all medium-length)
- [ ] Bullet lists are used only where lists are genuinely clearer than prose
- [ ] The opening line would make someone want to read the next line
- [ ] The ending lands — doesn't just trail off with a summary

---

## Output Format

Return **only** the rewritten article. No preamble like "Here's the humanized version:". No commentary after. Just the article, ready to publish.

If the user asks for explanation of changes, provide a brief breakdown *after* the article using this format:
```
---
**What changed:**
- [category]: [1-line description]
```

---

## Edge Cases

**User provides no article, just asks "how do I humanize writing?"**
→ Explain the core principles from Step 1 and Step 3 conversationally. Don't output the full skill framework.

**Article is already pretty good, just has 1-2 AI patterns**
→ Make targeted fixes. Don't over-rewrite. Note what was changed.

**Article is highly technical (code examples, step-by-step instructions)**
→ Humanize the framing and connective text only. Don't touch code blocks or precise technical steps.

**User wants a specific tone (e.g. "more casual", "more like a senior dev")**
→ Bias all rewrite decisions toward that tone. If unclear what that means in context, ask one clarifying question before proceeding.
