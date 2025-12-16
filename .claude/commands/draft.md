# Create a New Draft

Create a new blog post draft based on the topic: $ARGUMENTS

## Instructions

1. **Create the draft file** at `src/content/drafts/<slug>.mdx` where slug is derived from the topic
2. **Use this frontmatter template**:
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

3. **Generate initial content structure**:
   - Start with a hook or provocative opening that draws readers in
   - Outline 4-6 main sections with `##` headers
   - Include placeholder notes for each section: key points to develop, questions to research
   - End with a conclusion section placeholder

4. **Style guidance** (based on existing posts):
   - Conversational but substantive tone
   - Use rhetorical questions to engage readers
   - Include concrete examples and analogies
   - Bold key phrases for emphasis
   - Short paragraphs, often 1-3 sentences
   - Occasional humor and wit, but not forced
   - First person perspective when sharing opinions

5. **After creating**, summarize:
   - The draft location
   - The proposed structure
   - Key research questions to explore before polishing

Use `/polish <slug>` when ready to research and refine the draft.
