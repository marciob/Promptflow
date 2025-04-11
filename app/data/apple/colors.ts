import { Tip } from "../tips";

export const colorGuidelines: Tip[] = [
  {
    title: "Apple iOS and iPadOS Color Guidelines",
    description:
      "Official guidelines for color in iOS and iPadOS apps, covering semantic usage, accessibility, Dark Mode support, and exact RGB values for system and accessible colors.",
    prompt: `
This reference follows Apple's official guidelines on color for iOS and iPadOS development. It covers semantic color usage, accessibility requirements, Dark Mode adaptation, RGB values, and system-specific considerations.

---

GENERAL PRINCIPLES

- Color should improve communication, reinforce hierarchy, indicate state, and express branding.
- Use Apple's dynamic system colors whenever possible, as they adapt to light/dark modes, accessibility settings, and user preferences.
- When using custom colors, provide light and dark variants and maintain sufficient contrast.
- Don't rely solely on color to convey meaning. Always provide alternative indicators (icons, shapes, labels).
- Be mindful of cultural differences in color interpretation.

---

BEST PRACTICES

- Use color sparingly, especially in non-game apps.
- Keep color meanings consistent throughout the UI.
- Support light and dark appearances using system dynamic colors or custom variants.
- Test your app under multiple lighting conditions and across different devices.
- Use system color pickers when allowing users to select colors.
- Avoid hardcoding color values. Use semantic APIs like UIColor.label or SwiftUI's Color.primary.
- Don't override the meaning of system semantic colors.
- Avoid replicating or redefining dynamic system colors—they may change across OS versions.

---

SEMANTIC SYSTEM COLORS

Foreground colors:
- Primary text: label / Color.primary
- Secondary text: secondaryLabel / Color.secondary
- Tertiary text: tertiaryLabel
- Quaternary text: quaternaryLabel
- Placeholder text: placeholderText
- Link text: link / Color.blue
- Separator: separator
- Opaque separator: opaqueSeparator

Background colors:
- Primary: systemBackground
- Secondary: secondarySystemBackground
- Tertiary: tertiarySystemBackground
- For grouped views: systemGroupedBackground, secondarySystemGroupedBackground, tertiarySystemGroupedBackground

---

SYSTEM ACCENT COLORS WITH RGB VALUES

Red
- Light: R 255 G 59 B 48
- Dark: R 255 G 69 B 58
- Accessible Light: R 215 G 0 B 21
- Accessible Dark: R 255 G 105 B 97

Orange
- Light: R 255 G 149 B 0
- Dark: R 255 G 159 B 10
- Accessible Light: R 201 G 52 B 0
- Accessible Dark: R 255 G 179 B 64

Yellow
- Light: R 255 G 204 B 0
- Dark: R 255 G 214 B 10
- Accessible Light: R 178 G 80 B 0
- Accessible Dark: R 255 G 212 B 38

Green
- Light: R 52 G 199 B 89
- Dark: R 48 G 209 B 88
- Accessible Light: R 36 G 138 B 61
- Accessible Dark: R 48 G 219 B 91

Mint
- Light: R 0 G 199 B 190
- Dark: R 99 G 230 B 226
- Accessible Light: R 12 G 129 B 123
- Accessible Dark: R 102 G 212 B 207

Teal
- Light: R 48 G 176 B 199
- Dark: R 64 G 200 B 224
- Accessible Light: R 0 G 130 B 153
- Accessible Dark: R 93 G 230 B 255

Cyan
- Light: R 50 G 173 B 230
- Dark: R 100 G 210 B 255
- Accessible Light: R 0 G 113 B 164
- Accessible Dark: R 112 G 215 B 255

Blue
- Light: R 0 G 122 B 255
- Dark: R 10 G 132 B 255
- Accessible Light: R 0 G 64 B 221
- Accessible Dark: R 64 G 156 B 255

Indigo
- Light: R 88 G 86 B 214
- Dark: R 94 G 92 B 230
- Accessible Light: R 54 G 52 B 163
- Accessible Dark: R 125 G 122 B 255

Purple
- Light: R 175 G 82 B 222
- Dark: R 191 G 90 B 242
- Accessible Light: R 137 G 68 B 171
- Accessible Dark: R 218 G 142 B 255

Pink
- Light: R 255 G 45 B 85
- Dark: R 255 G 55 B 95
- Accessible Light: R 211 G 15 B 69
- Accessible Dark: R 255 G 130 B 150

Brown
- Light: R 162 G 132 B 94
- Dark: R 172 G 142 B 104
- Accessible Light: R 127 G 101 B 69
- Accessible Dark: R 181 G 148 B 105

---

SYSTEM GRAY COLORS WITH RGB VALUES

Gray
- Light: R 142 G 142 B 147
- Dark: R 142 G 142 B 147
- Accessible Light: R 108 G 108 B 112
- Accessible Dark: R 174 G 174 B 178

Gray 2
- Light: R 174 G 174 B 178
- Dark: R 99 G 99 B 102
- Accessible Light: R 142 G 142 B 147
- Accessible Dark: R 124 G 124 B 128

Gray 3
- Light: R 199 G 199 B 204
- Dark: R 72 G 72 B 74
- Accessible Light: R 174 G 174 B 178
- Accessible Dark: R 84 G 84 B 86

Gray 4
- Light: R 209 G 209 B 214
- Dark: R 58 G 58 B 60
- Accessible Light: R 188 G 188 B 192
- Accessible Dark: R 68 G 68 B 70

Gray 5
- Light: R 229 G 229 B 234
- Dark: R 44 G 44 B 46
- Accessible Light: R 216 G 216 B 220
- Accessible Dark: R 54 G 54 B 56

Gray 6
- Light: R 242 G 242 B 247
- Dark: R 28 G 28 B 30
- Accessible Light: R 235 G 235 B 240
- Accessible Dark: R 36 G 36 B 38

---

COLOR MANAGEMENT

- sRGB is the most compatible and standard color space.
- Display P3 offers a wider gamut and should be used for richer visuals.
- Always embed color profiles in images.
- Use PNG format for Display P3 images at 16 bits/channel.
- Gradients in P3 may look clipped on sRGB displays; test thoroughly.
- In Xcode, use asset catalogs to manage different versions of images/colors for sRGB and P3.

---

PLATFORM NOTES

- iOS provides system and grouped background colors, each with primary, secondary, and tertiary variants.
- Use systemBackground for main views, secondarySystemBackground for grouped content, and so on.
- visionOS uses "glass" materials that automatically adapt to surroundings.
- True Tone displays adjust the white point based on ambient light—test under various lighting.
- Don't assume color will look the same across displays—test on multiple devices.

    `,
    tags: [
      "iOS",
      "Color",
      "Design System",
      "Accessibility",
      "Dark Mode",
      "RGB Values",
      "UI Design",
      "System Colors",
      "Color Management",
      "Best Practices",
    ],
  },
];
