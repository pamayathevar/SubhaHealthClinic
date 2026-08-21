# Content and Design Guide

This guide explains how to update the public content and presentation of the Subha Health ENT Clinic website without breaking its English/Tamil experience, accessibility, or static deployment.

## 1. Where the website content lives

The site is a single bilingual page. Most editable content is in `app/page.tsx`:

| Content | Source |
| --- | --- |
| Headings, buttons, navigation and explanatory copy | `content.en` and `content.ta` |
| Service cards and procedure lists | `services.en` and `services.ta` |
| Conditions and symptoms | `concerns.en` and `concerns.ta` |
| Gallery captions and alternative text | `galleryImages.en` and `galleryImages.ta` |
| Section links | `navTargets` |
| Prefilled WhatsApp messages | `whatsappMessages` |
| Phone, email, address and map links | JSX in the `Home` component |
| Browser title, description, canonical URL and social preview | `app/layout.tsx` |
| Layout, colors and responsive behavior | `app/globals.css` |

The English and Tamil arrays must stay structurally aligned. For example, the first English service and first Tamil service represent the same service and use the same image and number.

## 2. Current clinic details

Treat these as business-owned facts. Confirm changes with the clinic before publishing.

| Detail | Current value |
| --- | --- |
| Clinic | Subha Health ENT Clinic |
| Phone and WhatsApp | `+91 86104 79562` |
| WhatsApp international digits | `918610479562` |
| Email | `subhahealthentdgl@gmail.com` |
| Address | 65, Krishna Rao 3rd Street, Pandian Nagar, Nehruji Nagar, Dindigul, Tamil Nadu 624001 |
| Map search | `Subha Health ENT Clinic Dindigul` |

The phone number appears in multiple `tel:` links and visible labels. The email appears in the contact details and footer. Search the whole repository before considering a contact change complete:

```bash
rg -n "86104|918610479562|subhahealthentdgl|Krishna Rao|Subha.Health.ENT.Clinic.Dindigul" app tests README.md docs
```

Keep `tel:` values in international form without spaces, for example `tel:+918610479562`. Keep the displayed number readable for people.

## 3. English and Tamil language behavior

The page initially renders in English so the static HTML is useful to browsers and search engines. After the page loads:

1. A saved choice is read from browser storage using the key `subha-language`.
2. If there is no saved choice, a Tamil browser locale selects Tamil; otherwise English remains selected.
3. The language buttons save the user’s choice and update the document language.

Do not change the storage key casually; changing it discards returning visitors’ saved preference.

### Tamil editorial standard

Tamil should read as natural, respectful communication used by a contemporary clinic in Tamil Nadu. It must not be a literal word-for-word translation of English.

- Preserve established English medical terms when they are clearer and commonly understood, such as ENT, Endoscopy, FESS, DCR, Septoplasty, Coblation, Video laryngoscopy and Hearing aid.
- Use Tamil for the surrounding explanation so patients understand the purpose and experience of care.
- Avoid wording that suggests low quality. For example, use language meaning accessible or within reach rather than a literal equivalent of “cheap.”
- Avoid guarantees, exaggerated claims, “best doctor,” “100% cure,” or promises of a particular result.
- Ask a fluent Tamil medical communicator or the clinic to review material wording before release.

When adding or removing a label from an English array, make the equivalent structural change in Tamil. Navigation labels must continue to match the positions in `navTargets`.

## 4. Updating services

Each service object has:

```ts
{
  number: "01",
  type: "DIAGNOSTICS",
  image: "/services/diagnostic-endoscopy.jpg",
  title: "Diagnostic endoscopies",
  text: "Patient-friendly explanation.",
  items: ["Video laryngoscopy", "Otoendoscopy"],
}
```

To change services:

1. Update both `services.en` and `services.ta` in the same order.
2. Keep numbering unique and sequential.
3. Use a short service title and one plain-language description.
4. Put procedures or sub-services in `items`.
5. Confirm all medical names and capitalization with the clinic.
6. Add any new image under `public/services/` and use a root-relative path beginning with `/services/`.
7. Check the card layout at desktop and mobile sizes.

The present layout is designed for six service cards. A different number can work, but the `nth-child` grid rules in `app/globals.css` may need adjustment to keep the composition balanced.

## 5. Updating conditions and symptoms

The `concerns` arrays drive the numbered list in the everyday-care section.

- Keep the English and Tamil arrays in the same order.
- Use patient-recognizable terms, not diagnostic claims.
- Do not imply that every listed concern will receive a specific procedure.
- Confirm paediatric, hearing, migraine, sleep and other scope statements with the clinic.

## 6. Updating the gallery

Gallery image files are stored in `public/gallery/`. The current three images are authentic clinic photographs and the page renders them through `galleryImages`.

Each language entry needs the same `image` path plus localized `alt`, `title` and `text` fields. Alternative text should briefly describe the meaningful visual content; it should not repeat the caption word for word.

### Privacy and consent

Clinical photographs require special care.

- Use an image only when the clinic has the right to publish it and the people shown have provided appropriate documented permission.
- Do not publish names, case notes, screens, labels, documents or other patient-identifying information.
- Avoid captions that identify a diagnosis or procedure for a recognizable patient unless specifically approved.
- Remove image metadata when it may contain location, device or personal information.
- If permission is uncertain, do not commit or publish the image.

Consent records belong in the clinic’s secure records, not in this public Git repository.

### Image preparation

- Prefer sharp originals instead of images copied from Google search or social-media thumbnails.
- Keep the current portrait composition near the `141:235` aspect ratio or adjust `.gallery-image` in `app/globals.css` deliberately.
- Aim for at least 900 pixels on the long edge when an original is available.
- Optimize an individual gallery image to roughly 500 KB or less without visible quality loss.
- Use descriptive lowercase filenames such as `clinic-endoscopy-room.jpg`; avoid patient names.
- Do not replace a file with a different image while keeping a misleading caption.

After adding a file, add it to both language arrays and to the required-assets test when it must always ship.

## 7. Service images and logo

Service backgrounds are in `public/services/`. The primary clinic logo is `public/subha-health-logo.png`, and `public/og.png` is the social-sharing image.

- Use images that the clinic owns, has licensed, or is legally permitted to publish.
- Do not copy an image merely because it appears in Google Images; Google is a search service, not a usage license.
- Avoid graphic clinical imagery on service cards.
- Preserve sufficient dark overlay and text contrast when replacing a service background.
- Keep a transparent background around the logo when possible.
- When replacing `og.png`, keep the metadata dimensions in `app/layout.tsx` accurate.

## 8. Contact, map and action links

The contact section contains four linked representations that must agree:

1. Visible phone number.
2. `tel:` link.
3. WhatsApp `wa.me` number and localized prefilled message.
4. Address, embedded Google Map and external directions search.

Test on a real mobile device after changing these links. A phone link should open the dialer, WhatsApp should open the correct clinic conversation, email should open the mail app, and directions should resolve to the Dindigul clinic.

The site intentionally has no appointment form, login or patient-data collection. Do not add one without a separate privacy, security, consent and data-retention design.

## 9. SEO and social preview

Edit `app/layout.tsx` for:

- Page title.
- Meta description.
- Canonical URL.
- Open Graph title, description and image.
- X/Twitter card.
- Favicon and app icon.

The canonical production origin is `https://subhahealthclinic.com`. Keep metadata absolute URLs on that origin. After a social-image change, verify the file exists at `https://subhahealthclinic.com/og.png` and remember that social platforms may cache older previews.

Do not add unverified qualifications, awards, review totals, opening hours or prices to metadata or visible copy.

## 10. Layout and responsive design

The main responsive breakpoints in `app/globals.css` are:

| Breakpoint | Primary purpose |
| --- | --- |
| `1050px` | Tablet and narrower desktop layout |
| `760px` | Single-column mobile layout and fixed mobile actions |
| `430px` | Small-phone spacing and controls |

When changing CSS, check at least:

- A wide desktop around 1440 px.
- A tablet around 768 px.
- A common phone around 390 px.
- A small phone around 320–360 px.
- English and Tamil, because Tamil line length differs.

Preserve visible keyboard focus, semantic headings, text contrast, readable tap targets and the reduced-motion rule. Decorative images should remain hidden from assistive technology; informative images require useful alternative text.

## 11. Tests and release checks

`tests/rendered-html.test.mjs` confirms the site exports and that important copy and assets are present. Update the test when an intentional change makes an existing expectation obsolete. Do not delete an assertion just to make an unexplained failure pass.

Before committing:

```bash
npm run lint
npm test
git diff --check
```

Then manually verify:

- English and Tamil switches.
- Navigation anchors.
- Desktop and mobile layouts.
- All gallery and service images.
- Phone, WhatsApp, email and map links.
- No private, temporary or patient-identifiable files are staged.

Use the release and rollback process in [Operations and Deployment Runbook](OPERATIONS.md).

## 12. Safe content-change checklist

- [ ] Business facts were confirmed with the clinic.
- [ ] Medical wording does not promise outcomes or replace clinical advice.
- [ ] English and Tamil structures remain aligned.
- [ ] Tamil was reviewed as natural clinic communication, not literal translation.
- [ ] Image ownership and consent were confirmed.
- [ ] No patient or account secrets are included.
- [ ] Alternative text and captions are meaningful.
- [ ] Mobile and desktop layouts were checked.
- [ ] Lint, build and tests pass.
- [ ] The live site was verified after Netlify published the commit.
