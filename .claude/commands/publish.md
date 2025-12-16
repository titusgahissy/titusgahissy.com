# Publish a Draft

Move the draft to published posts: $ARGUMENTS

## Instructions

### Step 1: Pre-publish Checklist
Read the draft from `src/content/drafts/<slug>.mdx` and verify:
- [ ] Title is compelling and accurate
- [ ] Summary is concise (under 150 characters ideally)
- [ ] Category is set (AI, Product, Entrepreneurship, Design, Tech)
- [ ] Content is complete (no placeholders or TODOs)
- [ ] Opening hook is strong
- [ ] Conclusion provides clear takeaway
- [ ] No grammar or spelling issues

### Step 2: Update Frontmatter
- Set `publishedAt` to today's date in `YYYY-MM-DD` format
- Remove `draft: true` field
- Confirm `image` field (leave empty if no banner, or set path like `/img/posts/<slug>/banner.jpg`)

### Step 3: Move the File
- Move from `src/content/drafts/<slug>.mdx` to `src/content/posts/<slug>.mdx`
- Delete the draft file after successful move

### Step 4: Verify
- Confirm the post appears in the posts list by checking `src/content/posts/`
- Remind user to:
  - Add a banner image to `/public/img/posts/<slug>/` if desired
  - Run `bun dev` to preview
  - Commit and deploy when ready

### Step 5: Summary
Provide:
- Published file location
- Final title and summary
- Any follow-up actions needed (images, deployment)
