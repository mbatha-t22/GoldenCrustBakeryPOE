GOLDEN CRUSTS BAKERY — WEDE5020 PART 3
======================================

PROJECT CONTENTS
- index.html: Home page and image gallery
- about_us.html: Bakery story, mission, vision and values
- products.html: Product catalogue with live search, sorting and image lightbox
- enquiries.html: Product/custom-order enquiry form
- contact.html: General contact form, FAQ accordion and interactive Pretoria map
- references.html: Website references
- css/style.css: Shared responsive styling and interaction states
- js/script.js: JavaScript enhancements
- robots.txt and sitemap.xml: Search crawler support
- POE_Report_GoldenCrustBakery_WEDE5020.docx: Part 3 implementation report and evidence checklist

HOW TO RUN
1. Extract the ZIP file.
2. Open index.html in a modern browser. For best results, serve the folder using a local web server (for example VS Code Live Server).
3. Internet access is needed for externally hosted Pexels photographs, Leaflet library and OpenStreetMap map tiles.

PART 3 IMPLEMENTATION SUMMARY
- Responsive navigation retained from Part 2.
- Added keyboard-operable image lightbox/gallery and FAQ accordion.
- Added dynamic product filtering, sorting and result count.
- Added Leaflet interactive map centred on Pretoria. It is an approximate city marker because no street address was supplied.
- Added client-side HTML form validation and email-draft processing for both enquiry and contact forms.
- Added page-specific SEO titles, meta descriptions, keyword metadata, image alt text, robots.txt and sitemap.xml.
- Added CSS transitions/hover states and reduced-motion support.

IMPORTANT FUNCTIONAL LIMITATIONS / BEFORE LIVE DEPLOYMENT
- This is a static front-end project. Forms use mailto: to open the visitor's configured email application; they do not send, save or track submissions on a web server. A production deployment should connect a secure form backend and perform server-side validation.
- The bakery address supplied in Part 2 is only “Pretoria, Gauteng”. The map marker is an approximate city-centre marker, not the business premises. Replace it when the exact address is confirmed.
- Official TikTok/Instagram/WhatsApp business profile URLs were not supplied, so no fake profile links have been added. Existing phone/email details remain as provided in Part 2 and should be verified by the business owner before launch.
- Replace example.com in sitemap.xml with the actual deployed domain after publishing.
- No GitHub repository credentials or hosting destination were supplied. The project is packaged for deployment but has not been published online by this deliverable.

CHANGELOG — PART 3
- Preserved the Part 2 colour palette, page structure, navigation and bakery identity.
- Added product sorting, result count, and query-aware enquiry links.
- Added lightbox gallery, FAQ accordion and interactive map.
- Reworked both forms with labels, constraints, validation and email draft output.
- Added SEO metadata, robots.txt, sitemap.xml and project documentation.

SUGGESTED GIT COMMIT MESSAGES
1. “Improve Part 2 pages and metadata for Part 3”
2. “Add interactive gallery, map, product search and sorting”
3. “Add validated enquiry/contact forms and POE documentation”

These are suggested commit messages only; they are not claims that commits were made in a remote repository.

IMAGE DIMENSIONS
All externally hosted Pexels website images are requested at 1500 x 1500 pixels (square crop) using the image CDN parameters. The browser may display them smaller to fit the responsive layout.
