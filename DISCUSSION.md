# Solace Engineering Assignment - Jason Melton

<img width="715" height="368" alt="Screenshot Solace Tech Assessment" src="https://github.com/user-attachments/assets/00fed225-3743-41ba-83a7-fa09e1a52c8e" />

## Approach

- cloned repo, got the dev server and backend running
- noted runtime errors, skimmed code, used Codex AI to generate a report summarizing how everything works, organization, and any glaring issues
- created a Google doc to carve out what I could accomplish in 2 hours, breaking issues into three 'tickets':
  - fix runtime errors, improve TypeScript
  - improve (unfortunately, not perfect) search form logic, fix double fetch onload
  - improve design/styling, add reusable style tokens/classes
- implement this plan with one PR for each 'ticket':
  - https://github.com/cooljasonmelton/solace-candidate-assignment-main/pull/1
  - https://github.com/cooljasonmelton/solace-candidate-assignment-main/pull/2
  - https://github.com/cooljasonmelton/solace-candidate-assignment-main/pull/3

## Going Forward

I considered a lot of potential improvements and picked out what I thought would make a good MVP. Here are some improvements I wish I'd have time for:

### Critical

- <b>Advocate search scalability:</b> Currently the search logic would not do great with "hundreds of thousands of advocates" described in the instructions. Here are some improvements to be made:

  - Expose an endpoint like `/api/advocates/search` where we can more quickly and effectively filter, validate, paginate, and cache search results.
  - Could use a dedicated search index like Elasticsearch/OpenSearch/Algolia (I'd need to research more; I don't have experience with these)
  - On the frontend, add logic for debouncing, loading, and error states

- <b>Better fetch logic:</b> Fetch should be wrapped in a try/catch. There should be better loading and error handling and UI to express these states. Again if this was 100,000s of advocates, we would also want to use pagination as opposed to getting all advocates on load. Caching with React query would be nice as well.

- <b>Testing:</b> Unit tests like React testing library, end-to-end tests with like Cypress, and maybe even Contract tests (currently the frontend assumes Advocates will have every field filled)

- <b>Accessibility:</b>
  - Table needs better a11y: caption, description, `aria-describedby`, and maybe aria alerting/announcing for when data loads / changes
  - Specialties could be list items instead of spans
  - Better focus styles e.g. outline

### Nice-to-have

- <b>Documentation:</b> Someone needs to explain all this stuff, lol
- <b>Sticky search bar:</b> I thought this would be a nice idea, but didn't want to go down a rabbit hole making it look decent.
- <b>Fix annoying warning:</b> Seems to be coming from Tailwind's @base
  `​​Error in parsing value for ‘-webkit-text-size-adjust’.  Declaration dropped.`
- <b>Custom Tailwind Utility Classes:</b> More utility classes to reduce the long tailwind classnames strings
- <b>Nicer table design:</b> I personally think the table is not easy to find information on and has a lot of empty space. A better design would be nice. With more time, I might have mapped the advocates into Cards instead of table rows.
- <b>Explore search styles:</b> maybe users would benefit from a fuzzy search or the ability to search by field instead of searching all fields at once.
