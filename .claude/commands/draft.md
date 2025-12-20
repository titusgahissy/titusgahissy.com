# Create a New Draft

Create a new blog post draft based on the topic: $ARGUMENTS

## Instructions

1. **First, ask the user to share their ideas**:
   - Acknowledge the topic/title they've provided
   - Ask them to share the core idea, key points, or what inspired this post
   - Wait for their response before proceeding - do NOT generate content yet

2. **After receiving their input**, create the draft file at `src/content/drafts/<slug>.mdx` where slug is derived from the topic

3. **Use this frontmatter template**:
```yaml
---
title: <Title Case Title>
publishedAt: <leave empty>
summary: <one-line summary>
category: <one of: AI, Product, Entrepreneurship, Design, Tech>
image: <leave empty for now>
draft: true
---
```

4. **Generate initial content structure** based on the user's input:
   - Start with a hook or provocative opening that draws readers in
   - Outline 4-6 main sections with `##` headers
   - Include placeholder notes for each section: key points to develop, questions to research
   - End with a conclusion section placeholder

5. **Style guidance** (based on existing posts):
   - Conversational but substantive tone
   - Use rhetorical questions to engage readers
   - Include concrete examples and analogies
   - Bold key phrases for emphasis
   - Short paragraphs, often 1-3 sentences
   - Occasional humor and wit, but not forced
   - First person perspective when sharing opinions

6. **After creating**, summarize:
   - The draft location
   - The proposed structure
   - Key research questions to explore before polishing

Use `/polish <slug>` when ready to research and refine the draft.
