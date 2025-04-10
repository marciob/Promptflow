export const writingGuidelines = [
  {
    title: "Apple iOS and iPadOS Writing Guidelines",
    description:
      "Comprehensive guidance on crafting app content that is clear, inclusive, accessible, and consistent across Apple platforms. Covers voice, tone, onboarding, error messages, field hints, and best practices.",
    prompt: `
Use this prompt to ensure all written content in your iOS and iPadOS apps adheres to Apple's official UX writing guidelines. The following principles apply to all copy — from onboarding screens and error messages to settings labels and empty states.

---

VOICE & TONE

- Define your app's **voice**: Consider your audience, your app's personality, and how you want users to feel. Use familiar vocabulary. A banking app may use trustworthy and stable language; a game may use energetic, fun language.
- Maintain a consistent voice throughout all screens and interactions.
- Match your **tone** to the situation:
  - Serious context (e.g. fall detection): Use direct, clear tone.
  - Positive achievement (e.g. fitness goal): Use celebratory tone.
- Adjust tone depending on context (task completion vs error handling).

---

CLARITY & INCLUSIVITY

- Use **clear, simple language** that is easy to understand.
- Cut unnecessary words. Read your writing aloud to test clarity.
- Avoid jargon, slang, or gendered terms.
- Prioritize **accessibility** and **localization readiness**.
- Follow inclusive writing principles and provide descriptive alt text for accessibility (VoiceOver).

---

BEST PRACTICES

1. **Screen Purpose**
   - Put the most important info first.
   - Break long content into multiple screens for readability.
   - Use proper flow across screens.

2. **Action-Oriented Labels**
   - Use **active voice** and start labels with **verbs** (e.g., "Add Photo", "Learn More").
   - Avoid vague labels like "Click here" or "Let's do this!"
   - Use clear progression words like "Next" or "Continue".
   - Be concise — clarity > cleverness.

3. **Build Language Patterns**
   - Choose **title case** (e.g., "Manage Favorites") or **sentence case** (e.g., "Manage favorites") and apply it consistently.
   - Stick to either **first person** ("My List") or **second person** ("Your List") — don't mix them.
   - Be consistent with navigation labels like "Next", "Continue", and "Done".

4. **Device-Appropriate Writing**
   - Use proper interaction terms per device: "tap" for iOS, not "click".
   - On small screens (Apple Watch, iPhone): be extremely brief.
   - On large screens (TV): keep text large and readable from a distance.
   - Consider shared environments (TVs) vs personal ones (phones) when writing tone and content.

5. **Empty States**
   - Use blank screens (e.g., empty to-do list) to explain what the app does or suggest next steps.
   - Keep the message friendly, but always actionable.
   - Avoid putting crucial information in empty states that could disappear quickly.

6. **Error Messages**
   - Help users avoid errors, but when necessary:
     - Show the message close to the problem.
     - Avoid blame or guilt-inducing tone.
     - Focus on the fix: "Use at least 8 characters" > "Password too short".
     - Skip insincere interjections like "Oops!" or "Uh-oh".
   - Use errors as a chance to rethink user flow if common.

7. **Delivery Method**
   - Consider the **urgency and context** before deciding how to show the message:
     - Alerts: For critical info requiring user action.
     - Notifications: For time-sensitive info.
     - Action Sheets: For decisions or confirmations.
   - Match tone to the delivery method and situation.

8. **Settings Labels**
   - Use practical, descriptive labels (e.g., "Handwashing Timer").
   - Add short explanations if needed: describe what happens when the setting is ON.
   - Avoid trying to describe where the setting is — use a direct link if possible.

9. **Text Fields & Hints**
   - Label every field clearly.
   - Use placeholder/hint text like:
     - Example: "name@example.com"
     - Description: "Your name"
   - Show error messages **next to the field**.
   - Say what to do, not what not to do:
     - ✅ "Use only letters"
     - ❌ "Invalid name" or "Don't use numbers"
   - Avoid robotic or technical error messages.

---

WRITING FOR APP PLATFORMS

- No special considerations are required for iOS, iPadOS, macOS, tvOS, visionOS, or watchOS.
- Maintain consistency across platforms but tailor phrasing to the **input method** (touch, remote, keyboard) and **use context** (private vs shared screen).

---

SUMMARY

Use plain, respectful, inclusive language that reflects your app's purpose. Design writing like any other UX element: with clarity, consistency, intent, and empathy. Use verbs for action, avoid confusion, and always consider screen size, context, and accessibility.

For further guidance, reference:
- Accessibility and VoiceOver best practices
- Localization readiness
- Notifications, Alerts, and Action Sheets
- Writing inclusively
- Text fields in form design
    `,
    tags: [
      "iOS",
      "UX Writing",
      "Design System",
      "Accessibility",
      "Plain Language",
      "Error Messages",
      "Text Fields",
      "Inclusive Design",
      "Mobile UX",
      "Apple Guidelines",
    ],
  },
];
