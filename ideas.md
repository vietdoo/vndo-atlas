# VNDO Atlas — Ground-truth design specification

## Reference

The supplied editorial travel reference is the ground truth for this clone. Preserve its warm parchment texture, tiny technical navigation, oversized serif headline, centered architectural cutout, and playful destination switchers. Reinterpret imagery and copy as original editable assets rather than copying source files verbatim.

## Visual analysis

- Full-screen, light parchment canvas with a subtle woven/fibrous texture.
- A sparse technical header sits at the top edge: small monospaced labels, generous horizontal breathing room, and a dark irregular “Play” button.
- The hero uses an asymmetric composition: large architectural image centered high on the page, title block low-left, supporting paragraph low-right, and destination controls on both sides.
- The visual hierarchy is driven by a contrast between a refined serif display face and tiny monospaced utility text.
- The reference combines travel-journal language, hand-made cutout imagery, shadow-like silhouettes, and a restrained brown/olive/ochre palette; the implementation is fully localized in Vietnamese.
- Motion should feel like a paper collage being assembled: gentle rise/fade on load, slow architectural drift, and quick tactile button feedback.

## Chosen direction

### Design Movement

Contemporary editorial collage with Swiss-influenced information design, analog paper ephemera, and East Asian travel-journal references.

### Core Principles

1. **Asymmetry with intention:** align content to a loose vertical editorial axis rather than a centered marketing grid.
2. **Material first:** parchment, ink, paper edges, cutout shadows, and print-like imperfections should be visible but quiet.
3. **Small labels, large statements:** utility text is compact and technical; the hero title is expressive, literary, and confidently oversized.
4. **Quiet interaction:** controls invite exploration without looking like conventional app UI.

### Color Philosophy

The base is an aged rice-paper cream, chosen to make the site feel archival and tactile. Ink brown replaces pure black for softness; muted jade and ochre act as wayfinding accents; cinnabar is reserved for active states and tiny marks so the page retains a travel-journal sense of discovery.

### Layout Paradigm

A full-viewport editorial stage with a 12-column invisible scaffold, but no obvious card grid. The architecture occupies the central vertical axis, while text and controls sit in offset “margin notes” around it. On narrow screens the margins collapse into a vertical reading sequence without losing the collage overlap.

### Signature Elements

- Cinnabar dotted perimeter rule and numbered micro-markers.
- Architectural cutout with a soft cast shadow over a block of Vietnamese marginal-note texture.
- Destination switchers that resemble small paper labels with a hand-drawn flag mark.

### Interaction Philosophy

Interactions should feel like turning a page or nudging a paper label. Hover states slightly lift or rotate the control, active states compress it, and destination switching crossfades the hero architecture and copy while preserving the composition.

### Animation

Use 180–700ms transitions with cubic-bezier easing. Stage entrance: header labels fade in, then the architecture rises 18px, then title and annotations appear with a short stagger. Destination changes crossfade imagery and use a subtle horizontal parallax. Respect `prefers-reduced-motion` by removing transforms and keeping opacity transitions short.

### Typography System

Display: `Cormorant Garamond`, 600–700, tight leading, used for the literary hero title and section titles. Utility: `JetBrains Mono`, 400–500, used for nav, metadata, buttons, labels, and body annotations. Vietnamese fallback uses `Noto Serif` where needed. Never use Inter.

### Brand Essence

VNDO Atlas is an editorial travel atlas for curious people who want place, texture, and cultural context instead of generic itineraries. Personality: **observant, tactile, quietly adventurous**.

### Brand Voice

Headlines are poetic but specific; CTAs are compact verbs; microcopy reads like a marginal note from a field journal. Avoid generic filler.

Example lines:

- “Để những đường mái vẽ lại đường chân trời.”
- “Chọn một câu chuyện kế bên.”

### Wordmark & Logo

The VNDO mark is a compact folded-map seal with a roof eave and one cinnabar fold, suggesting direction, shelter, and a field note without spelling the name. The wordmark uses a custom-tracked serif/mono pairing rather than a default logo font.

### Signature Brand Color

**Cinnabar Thread — `#B33B2E`**, used sparingly for the dotted perimeter, active marker, and a few editorial accents.
