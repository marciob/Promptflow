export const collaborationGuidelines = [
  {
    title: "Apple iOS and iPadOS Collaboration and Sharing Guidelines",
    description:
      "Comprehensive guide for implementing collaboration and sharing features in iOS and iPadOS apps. Covers system share sheets, collaboration buttons, permissions, CloudKit, iCloud Drive, and universal link support.",
    prompt: `
Use this prompt to follow Apple's official guidelines for building collaboration and sharing features into iOS or iPadOS applications. Focus on providing a consistent, simple, and responsive experience that integrates with system interfaces like the share sheet and Messages.

---

GENERAL PRINCIPLES

- Great collaboration features are **simple, responsive, and contextual**.
- People should be able to share content or start collaborations easily using the system-provided **share sheet** or by dragging files into **Messages**.
- After collaboration starts, users rely on a **Collaboration button** to manage participants and access communication tools.
- These features work with CloudKit, iCloud Drive, or **custom solutions**, as long as **universal links** are supported.
- On visionOS, immersive sharing experiences can be provided using **SharePlay**.

---

BEST PRACTICES

1. **Place Share and Collaboration Buttons Prominently**
   - Locate the **Share button** in a familiar area like a toolbar.
   - Once a collaboration begins, display the **Collaboration button** next to it.
   - The share sheet (iOS 16+, iPadOS 16+, macOS 13+) supports permission setting and collaboration type selection.

2. **Use System Interfaces When Possible**
   - Use the **system share sheet** or **ShareLink** in SwiftUI to trigger sharing.
   - You may customize the share sheet to support your app's file types and share models.
   - Built-in support includes options to **send a copy** or collaborate on a live document.

3. **Support 'Send Copy' Functionality**
   - For CloudKit: Pass both the file and collaboration object to the share sheet.
   - For iCloud Drive: Send copy support is available by default.
   - For custom solutions: Include a file (or plain-text version) in your collaboration object.

4. **Summarize Sharing Permissions Clearly**
   - Display concise labels such as:
     - "Only invited people can edit"
     - "Everyone can make changes"
   - These labels help people quickly understand and control collaboration access.

5. **Offer Streamlined Collaboration Setup**
   - Let users:
     - Choose who can access the document.
     - Define edit vs. view-only permissions.
     - Allow/disallow inviting others.
   - Keep custom options minimal and logically grouped.

6. **Use the Collaboration Button as a Visual Reminder**
   - Signals that content is shared.
   - Helps identify who the content is shared with.
   - Should appear only after collaboration starts and be placed next to the Share button.

---

COLLABORATION POPOVER STRUCTURE

When users tap the **Collaboration button**, the popover should show:

- **Top Section**: List of collaborators and buttons to contact them (e.g., Messages, FaceTime).
- **Middle Section**: Custom app-specific actions (keep these minimal).
- **Bottom Section**: A button labeled "Manage Shared File" (or custom label) to open the collaboration-management modal.

Tips:
- Avoid overwhelming users with too many custom actions.
- Highlight the most recent updates or offer links to see full activity history, like in the Notes app.

---

MANAGE SHARED CONTENT

- If using CloudKit: Apple provides the collaboration-management view.
- If custom infrastructure: Implement your own modal with controls to:
  - Change sharing settings.
  - Add/remove collaborators.
- Label the management button clearly (default: "Manage Shared File").

---

NOTIFICATIONS & UNIVERSAL LINKS

- Post **collaboration event notifications** in Messages when:
  - A participant is mentioned.
  - Someone joins/leaves.
  - Content changes.
- Include a **universal link** in the notification to open the relevant view in your app.

---

TECHNICAL INTEGRATIONS

- **SwiftUI**: Use \`ShareLink\` to integrate the system share sheet.
- **Universal Links**: Required for deep-linking into collaboration views from Messages or notifications.
- **SWHighlightEvent**: Use to trigger collaboration-related updates or highlights.

---

SUMMARY

Your collaboration features should:

- Use familiar Apple interfaces like the share sheet and collaboration buttons.
- Be easy to trigger and easy to manage.
- Provide clear permission summaries and visual cues for shared content.
- Respect user context by minimizing clutter and highlighting only what's essential.
- Support system behaviors (universal links, notifications, FaceTime/Messages integration).
- Work consistently across iOS, iPadOS, macOS, and optionally visionOS via SharePlay.

For deeper technical setup, reference:
- ShareLink (SwiftUI)
- Supporting Universal Links
- SharePlay (visionOS)
- SWHighlightEvent (Messages notifications)
- CloudKit Sharing
- Collaboration object design
    `,
    tags: [
      "iOS",
      "Sharing",
      "Collaboration",
      "Share Sheet",
      "CloudKit",
      "Universal Links",
      "UX Design",
      "System Integration",
      "Apple Guidelines",
      "SwiftUI",
    ],
  },
];
