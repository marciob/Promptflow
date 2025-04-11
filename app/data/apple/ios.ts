import { Tip } from "../tips";

export const iosGuidelines: Tip[] = [
  {
    title: "Designing for iOS",
    description:
      "People depend on their iPhone to help them stay connected, play games, view media, accomplish tasks, and track personal data in any location and while on the go.",
    prompt: `As you begin designing your app or game for iOS, start by understanding the following fundamental device characteristics and patterns that distinguish the iOS experience. Using these characteristics and patterns to inform your design decisions can help you provide an app or game that iPhone users appreciate.

Display
iPhone has a medium-size, high-resolution display.

Ergonomics
People generally hold their iPhone in one or both hands as they interact with it, switching between landscape and portrait orientations as needed. While people are interacting with the device, their viewing distance tends to be no more than a foot or two.

Inputs
Multi-Touch gestures, virtual keyboards, and voice control let people perform actions and accomplish meaningful tasks while they're on the go. In addition, people often want apps to use their personal data and input from the device's gyroscope and accelerometer, and they may also want to participate in spatial interactions.

App Interactions
Sometimes, people spend just a minute or two checking on event or social media updates, tracking data, or sending messages. At other times, people can spend an hour or more browsing the web, playing games, or enjoying media. People typically have multiple apps open at the same time, and they appreciate switching frequently among them.

System Features
iOS provides several features that help people interact with the system and their apps in familiar, consistent ways:
• Widgets
• Home Screen quick actions
• Spotlight
• Shortcuts
• Activity views`,
    tags: [
      "iOS",
      "UI Design",
      "UX Design",
      "Display",
      "Ergonomics",
      "Interaction",
      "System Features",
      "Best Practices",
      "Device Capabilities",
      "User Experience",
    ],
  },
  {
    title: "Apple iOS and iPadOS Drag and Drop Guidelines",
    description:
      "Guidance for implementing drag and drop interactions in iOS, iPadOS, macOS, and visionOS. Covers gestures, feedback, content fidelity, drop handling, and accessibility support.",
    prompt: `
Using drag and drop, people can move or duplicate selected content such as text, images, or documents by dragging them from a source to a destination. The behavior depends on context: dragging within the same container generally moves content, while dragging between containers or apps copies it. Drag and drop supports various platforms including iOS, iPadOS, macOS, and visionOS — but is not available on tvOS or watchOS.

PLATFORM-SPECIFIC INTERACTIONS

- On iOS/iPadOS: Use touch gestures, pointer devices, and keyboard accessibility.
- On macOS: Support pointer, keyboard, and VoiceOver interactions.
- On visionOS: Drag objects using pinch-and-hold gestures, including along the z-axis.
- With Universal Control: Drag content across Mac and iPad devices.

BEST PRACTICES

- Support drag and drop across your app. Users expect it to work wherever content is movable.
- System components (e.g., text fields/views) have built-in support.
- Offer alternative methods (e.g., copy/move menus) for accessibility or precision.
- Use accessibility APIs such as \`accessibilityDragSourceDescriptors\` and \`accessibilityDropPointDescriptors\` to support assistive drag and drop.

BEHAVIOR RULES

- Default to "move" for dragging within the same container.
- Default to "copy" for dragging across containers or between apps.
- Match behavior to user expectations; prioritize data safety over surprises.
- Let users undo drag-and-drop actions. If undo isn't possible, ask for confirmation before completing destructive actions.
- Example: Finder requests confirmation when dropping into a write-only folder.

MULTI-ITEM SUPPORT

- Allow group drags when practical. All platforms support multi-item drag.
- iPadOS supports adding to an ongoing drag session by continuing to tap items.
- Provide visual feedback for grouped drags using flocking and other indicators.

FEEDBACK AND VISUAL CUES

- Display a drag image once drag begins (typically after a 3-point move).
- Use a translucent version of the dragged item.
- Modify the drag image for clarity, e.g., show default size or arrangement of dropped content.
- Avoid excessive animation or radical changes in drag visuals.

DESTINATION FEEDBACK

- Highlight only valid drop targets (e.g., insertion point, visual cue).
- Show an explicit "not allowed" indicator (e.g., circle.slash) when appropriate.
- When dragging across multiple potential destinations, highlight only one at a time.
- On failed drops, animate the content back to the source or visually "evaporate" it.

DROP HANDLING

- Scroll drop containers automatically when necessary to support full access to destinations.
- Prefer the richest version of content offered (e.g., native chart > image fallback).
- Provide multiple representations in drag metadata (e.g., vector + PNG + JPEG).
- Extract only the necessary portion of a drop (e.g., contact name/email, not full details).
- Support Option key override for copy instead of move (keyboard-enabled platforms).
- Display progress indicators for slow transfers, and show placeholders in destination lists or grids.

INTERACTIVE DROPS

- If dropping content triggers a task (e.g., print), provide clear task-start feedback.
- Apply the correct text styling when both source and destination support it.
- Preserve selection state in the destination. If it's a move, deselect in source.
- If copied across containers, deselect original to reflect duplication.

SPRING LOADING

- Allow drop over segmented controls to trigger transitions (e.g., Calendar view change).
- On Mac, spring load via force-click with Magic Trackpad.
- On iPad, spring load by hovering while holding drag content.

PLATFORM NOTES

- iOS/iPadOS: Allow multiple simultaneous drag sessions.
- iPadOS: Let users initiate a drag and add items without interrupting the drag.
- Accept simultaneous drops and visually group items during collection.

SUMMARY

- Drag and drop must feel responsive, predictable, and forgiving.
- Use rich feedback and platform-native behaviors.
- Provide fallbacks and undo support.
- Respect accessibility and multitouch affordances.
- Adapt to each platform's capabilities without disrupting the user experience.

Relevant developer APIs include:
- UIDragInteraction
- UIDropInteraction
- NSItemProvider
- accessibilityDragSourceDescriptors
- accessibilityDropPointDescriptors
- SharePlay and Universal Control integration (where relevant)
    `,
    tags: [
      "iOS",
      "Drag and Drop",
      "Multitouch",
      "UX Design",
      "Interactivity",
      "Accessibility",
      "macOS",
      "iPadOS",
      "visionOS",
      "Content Transfer",
    ],
  },
  {
    title: "Apple iOS and iPadOS Data Entry Guidelines",
    description:
      "Guidance for designing effective and user-friendly data entry experiences in iOS and iPadOS apps. Covers system integration, input methods, secure fields, validation, and accessibility.",
    prompt: `
When asking people to enter information in your app, design the experience to minimize friction and avoid errors. Data entry is often tedious, so your goal is to reduce the effort required while keeping the process clear, secure, and responsive.

---

GENERAL PRINCIPLES

- Minimize how much data users must enter.
- Use system information and permissions to prefill or autofill wherever possible.
- Let users choose their preferred input method, whether that's keyboard, drag and drop, paste, picker, or dictation.

---

BEST PRACTICES

1. **Gather Data from the System When Possible**
   - Use device settings, user profiles, location services, and calendar access instead of asking users to type redundant info.
   - Request permission when needed, but avoid unnecessary prompts.

2. **Label Fields Clearly**
   - Use prompt text (e.g., "username@company.com") or descriptive labels (e.g., "Email").
   - Prefill reasonable default values to speed up completion and reduce decision fatigue.

3. **Use Secure Entry for Sensitive Fields**
   - For passwords or private data, use secure text fields that obscure input.
   - Never prepopulate password fields — always request re-entry or use biometric or Keychain authentication.
   - In visionOS, secure text fields are visible only to the wearer and blur when streaming via AirPlay.

4. **Offer Choices Instead of Freeform Entry**
   - Use menus, pickers, or segmented controls where appropriate.
   - It's easier and faster to tap than to type — even on a full keyboard.

5. **Support Drag, Drop, and Paste**
   - Let users drag or paste content into fields for more fluid interaction.
   - This helps your app feel like a natural extension of the system.

6. **Validate Input Dynamically**
   - Don't wait until the form is submitted — validate fields as users interact.
   - Provide instant, helpful feedback for errors.
   - Use formatters for specific data types:
     - Numbers
     - Currency
     - Percentages
     - Decimal precision

7. **Use Conditional Actions Based on Completion**
   - Disable "Next" or "Continue" buttons until required fields are completed.
   - Clearly show which fields are required.
   - Guide users through multi-step forms by only advancing when valid data is entered.

---

SECURE DATA ENTRY COMPONENTS

- **SecureField (SwiftUI)** for obscured text input.
- **isSecureDigitEntry (tvOS)** to hide numeric input.
- System-provided fields handle security and privacy visuals automatically, especially in shared or mirrored displays.

---

EXPERIENCE CONSIDERATIONS

- Make input feel rewarding and smooth.
- Don't punish mistakes — help users catch and correct them early.
- Combine clear formatting, instant feedback, and reduced typing for a fast, accurate input flow.

---

SUMMARY

Data entry should be:

- **Efficient**: reduce required typing wherever possible.
- **Secure**: protect sensitive input through obscured fields and no prefilled passwords.
- **Accessible**: support all input methods and technologies.
- **User-friendly**: guide, validate, and adapt as users engage with the form.

For additional developer support:
- \`SecureField\` in SwiftUI
- \`UITextField\` validation and formatters
- Accessibility APIs for data entry
- Managing user credentials securely
    `,
    tags: [
      "iOS",
      "Forms",
      "Data Entry",
      "UX Design",
      "Secure Input",
      "Validation",
      "Accessibility",
      "Form Design",
      "Text Fields",
      "Apple Guidelines",
    ],
  },
  {
    title: "Apple iOS and iPadOS Feedback Guidelines",
    description:
      "Guidance for designing meaningful, accessible, and context-aware feedback in iOS and iPadOS apps. Covers status indicators, alerts, confirmations, warnings, and multi-sensory feedback.",
    prompt: `
Feedback is how your app communicates with users — it keeps them informed, helps them avoid errors, confirms success, and builds trust in the experience. Effective feedback is timely, proportional to the situation, and accessible in multiple formats.

---

CORE PURPOSES OF FEEDBACK

- Indicate current **status** (e.g., loading, offline, unread content).
- Confirm **success** or **failure** of actions.
- Provide **warnings** for destructive or irreversible operations.
- Offer **opportunities** to correct or revise input.

---

BEST PRACTICES

1. **Make Feedback Accessible**
   - Use **multiple modalities**: color, text, sound, and haptics.
   - Ensure screen readers can announce the same information.
   - Design for users who may:
     - Have reduced vision or hearing
     - Use devices in silent mode
     - Be multitasking or looking away from the screen
   - For haptic integration, refer to system guidance on \`Playing haptics\`.

2. **Embed Passive Feedback in Context**
   - Show non-critical status information near relevant UI elements.
   - Example: In Mail, the number of unread messages and sync time appears in the toolbar.
   - Allow users to passively check info without switching views or tapping controls.

3. **Use Alerts Appropriately**
   - Only interrupt users for **critical**, **immediate**, or **actionable** information.
   - Avoid overusing alerts — they lose impact if shown too often or for minor issues.
   - Use \`UIAlertController\` or SwiftUI's alert views for standard implementations.
   - Refer to the **Alerts** HIG section for severity levels and tone.

4. **Warn Only When Needed**
   - Show warnings when the outcome is **unexpected and irreversible**, like unsaved changes.
   - Avoid warnings for expected behaviors (e.g., deleting a file via Trash).

5. **Confirm Only When It Matters**
   - Use confirmations for:
     - Purchases (e.g., Apple Pay)
     - Critical or sensitive data changes
     - High-risk workflows (e.g., system settings)
   - Skip confirmations for routine tasks where users already expect success.

6. **Explain When Commands Fail**
   - If an action can't be completed, tell users:
     - **Why** it failed
     - **How** they can resolve the issue
   - Example: If no destination is entered in Maps, explain that the route can't begin and prompt for valid input.

---

DELIVERY METHODS

- **Text**: Clear and concise messaging (localized and inclusive).
- **Color**: Use for quick differentiation, but always pair with text.
- **Sound**: Provide audible cues when appropriate and not disruptive.
- **Haptics**: Use for physical feedback (taps, success pings, error pulses).

---

CONTEXTUAL EXAMPLES

- **Status**: Passive labels, progress indicators, sync time.
- **Success**: Light haptic + checkmark animation after completing a form.
- **Warning**: Modal dialog before deleting user data.
- **Failure**: Inline error message next to a form field.
- **Actionable feedback**: "Try again," "Check your connection," "Choose a different value."

---

SUMMARY

- Provide feedback that:
  - Matches the **importance** of the action.
  - Respects the **user's focus** and avoids interruption when unnecessary.
  - Offers clarity, not just reaction.
- Design multi-sensory, multi-layered feedback that is:
  - Accessible
  - Actionable
  - Intuitive
- Deliver feedback that builds user confidence without overwhelming them.

For deeper guidance, reference:
- Haptic design: Playing haptics
- Alerts and confirmations
- Accessibility and VoiceOver compatibility
    `,
    tags: [
      "iOS",
      "UX Feedback",
      "Alerts",
      "Accessibility",
      "Status Indicators",
      "Error Handling",
      "Haptics",
      "VoiceOver",
      "Design System",
      "Apple Guidelines",
    ],
  },
  {
    title: "Apple iOS and iPadOS File Management Guidelines",
    description:
      "Guidance on supporting documents and file-based workflows in iOS and iPadOS apps. Covers file creation, browsing, saving, Quick Look, document launchers, file provider extensions, and cross-app access.",
    prompt: `
Some apps allow users to create, open, edit, and manage documents. These document-based workflows should feel consistent with system behaviors across iOS, iPadOS, and macOS. File management should be intuitive, integrated, and support system-level features like the Files app, Finder, and Quick Look.

---

FILE CREATION & OPENING

- Support creation and opening via:
  - **Add (+) button**
  - **App menus**
  - **Keyboard shortcuts** (e.g., holding ⌘ on external keyboard)
- On macOS, use the **File** menu conventions (e.g., New, Open).
- On iPadOS, display commands in the keyboard shortcut overlay when ⌘ is held.

If your app includes a **custom file browser**, make it resemble the layout and behavior of system tools like Finder and Files. Let users:
- Browse the full file system hierarchy.
- Start from a relevant location (e.g., iCloud, Recents), but navigate freely.

---

SAVING & PERSISTENCE

- Automatically save progress during editing and when users switch away from your app.
- Don't require explicit save actions.
- Hide file extensions by default, but allow users to toggle their visibility.

---

QUICK LOOK INTEGRATION

- Use **Quick Look** to preview file contents — even for unsupported formats.
- Enable interaction in previews (e.g., markup photos, rotate 3D files, play audio).
- If your app creates **custom file types**, implement a **Quick Look generator** so previews can show up in Finder, Spotlight, and Files.
- For unsupported files, fallback to Quick Look viewers within your app.

---

DOCUMENT LAUNCHER (iOS 18+ / iPadOS 18+)

- Use \`DocumentGroupLaunchScene\` for a graphical, full-screen file launch interface.
- Launcher includes:
  - **Title card** (app name, two buttons)
  - **Background image**
  - **Accessory images**
  - **File browser sheet** with Recents, Shared, Browse

Customization tips:
- Primary button: start a new document.
- Secondary button: show templates or import actions.
- Use **subtle background images** or gradients.
- Accessories can float in front/behind the title card, but avoid overlap with text or controls.
- Limit accessories to avoid clutter.
- Use **gentle animations** only if needed (e.g., slow breathing effect).

---

FILE PROVIDER EXTENSION

- Use \`FileProvider\` to let users open, export, or move files through a custom interface.
- When loaded in another app (e.g., a PDF editor), only show files relevant to the current task.
- Include metadata such as:
  - Modification date
  - File size
  - Local vs. remote status

Exporting:
- Let users pick destinations unless your app uses a fixed directory.
- Allow users to create new folders if needed.
- Don't add a redundant nav bar — system already provides one in modal context.

---

CROSS-APP FILE ACCESS

- Allow browsing and importing files from other apps.
- For guidance, see: "Adding a document browser to your app."

---

PLATFORM CONSIDERATIONS

- **iOS / iPadOS**: Use Files app or system document launcher.
- **macOS**: Integrate with Finder, standard file menu, and Quick Look.
- **watchOS / tvOS / visionOS**: Do not support document-based file browsing.

---

SUMMARY

- Respect system conventions for file workflows.
- Provide convenient, consistent access to document creation and browsing.
- Use Quick Look for previews — and a generator if needed for custom formats.
- Customize the document launcher thoughtfully to reflect your app's branding.
- Use file provider extensions to enable secure, contextual file sharing with other apps.
- Preserve simplicity: auto-save, avoid clutter, and respect modal UI constraints.

Developer APIs and tools:
- \`UIDocumentPickerViewController\`
- \`QuickLookPreviewController\`
- \`FileProviderExtension\`
- \`DocumentGroupLaunchScene\` (iOS 18+)
- \`Quick Look Generator\`
- \`SecureField\` for protected content
    `,
    tags: [
      "iOS",
      "File Management",
      "Documents",
      "Quick Look",
      "Document Launcher",
      "File Provider",
      "iPadOS",
      "Document Browser",
      "UX Design",
      "Apple Guidelines",
    ],
  },
  {
    title: "Apple iOS and iPadOS Full-Screen Mode Guidelines",
    description:
      "Best practices for implementing full-screen experiences in iOS, iPadOS, and macOS apps. Covers layout behavior, playback controls, Dock access, resuming, and Home Screen indicator handling.",
    prompt: `
Full-screen mode helps people focus on immersive content or detailed tasks by expanding a window to fill the screen and hiding system UI elements. iPhone, iPad, and Mac support full-screen modes. Apple Watch, Apple TV, and visionOS do not support full-screen in the traditional sense, as apps either fill the screen by default or offer immersive alternatives.

---

WHEN TO USE FULL-SCREEN MODE

Offer full-screen mode when the experience benefits from a distraction-free environment, such as:
- Playing games
- Watching video or photo slideshows
- Performing focused tasks (editing, creation, media review)

---

BEHAVIOR & LAYOUT ADJUSTMENTS

- Support full-screen only if it enhances the experience.
- Avoid programmatically resizing windows — let the system control sizing.
- If needed, subtly adjust layout proportions to better utilize screen space, while keeping content and controls familiar and stable.
- Avoid jarring visual transitions between full-screen and windowed modes.

---

ESSENTIAL CONTROLS

- Keep **critical UI elements accessible**:
  - Playback buttons in media apps
  - Navigation or escape affordances in games or readers
- Controls can auto-hide, but must be easily revealable.

---

DOCK VISIBILITY (macOS, iPadOS)

- Preserve access to the Dock during full-screen sessions **except in games**.
- In games:
  - You may hide the Dock (macOS) or suppress initial swipe-up to reveal it (iPadOS).
  - Use:
    - \`preferredScreenEdgesDeferringSystemGestures\` (iPadOS)
    - \`hideDock\` (macOS)

---

HOME SCREEN INDICATOR (iOS, iPadOS)

- Use \`prefersHomeIndicatorAutoHidden\` to auto-hide the indicator during passive media viewing.
- Match the indicator's behavior to interaction style in games:
  - **Gamepad or controller**: Enable auto-hide
  - **Touch-based gameplay or cutscenes**: Use double-swipe to reveal

---

SESSION MANAGEMENT

- When users leave full-screen, **pause** the experience if needed (e.g., in a video or slideshow).
- Let users **resume where they left off** when they return.
- Don't exit full-screen mode automatically unless the user explicitly chooses to.

---

EXITING FULL-SCREEN MODE

- Let users decide when to leave full-screen.
- Don't auto-exit full-screen at the end of content or on focus loss unless absolutely necessary.

---

PLATFORM CONSIDERATIONS

- ✅ **Supported**: iOS, iPadOS, macOS
- ❌ **Not supported**: tvOS, watchOS, visionOS (use immersive or native UI instead)

---

SUMMARY

- Use full-screen when it enhances focus, immersion, or media consumption.
- Respect system conventions for Dock visibility and Home Screen indicator behavior.
- Maintain access to controls and allow seamless transitions between full-screen and normal mode.
- Let users remain in control — avoid forced exits, and restore their session when they return.

Developer APIs:
- \`prefersHomeIndicatorAutoHidden\`
- \`preferredScreenEdgesDeferringSystemGestures\`
- \`hideDock\`
- \`NSWindow.toggleFullScreen(_:)\` (macOS)
    `,
    tags: [
      "iOS",
      "Full Screen",
      "Immersive Mode",
      "UX Design",
      "Media Playback",
      "Games",
      "macOS",
      "iPadOS",
      "User Experience",
      "Apple Guidelines",
    ],
  },
];
