export const chartingGuidelines = [
  {
    title: "Apple iOS and iPadOS Charting Data Guidelines",
    description:
      "Comprehensive Apple guidelines on designing and presenting data with charts in iOS and iPadOS apps. Covers when to use charts, accessibility, interactivity, descriptive text, consistency, and sizing.",
    prompt: `
Use this prompt to ensure your app follows Apple's Human Interface Guidelines when presenting data through charts in iOS or iPadOS. Charts should support clarity, accessibility, and interactivity while reinforcing the app's voice and visual identity.

---

GENERAL PRINCIPLES

- Charts help users quickly understand complex information and trends.
- They range from **simple, glanceable graphics** to **rich, interactive experiences**.
- Use charts to:
  - Highlight trends (past, current, predicted).
  - Visualize changing systems or quantities.
  - Compare items across categories or time.
- If a chart doesn't add meaningful insight, use a table or list instead.

---

BEST PRACTICES FOR USING CHARTS

1. **Use Charts to Emphasize Key Data**
   - Because charts are visually prominent, only use them to show important, actionable insights.
   - Clearly show what users should take away from the chart.

2. **Keep Charts Simple**
   - Avoid overwhelming users with too much data.
   - Provide ways to **progressively reveal** details (e.g., filters, zoom, toggles).
   - Offer simplified chart versions for quick comprehension and more detailed ones for exploration.

3. **Make Charts Accessible**
   - Provide **accessibility labels** for all chart elements.
   - Ensure charts can be understood and navigated using VoiceOver or assistive tech.
   - Don't rely solely on visual cues. Describe data and components in alternative text.

---

DESIGNING EFFECTIVE CHARTS

4. **Use Familiar Chart Types**
   - Prefer common types (bar, line, pie) for easier recognition.
   - If using novel designs, teach users how to read them (e.g., via animations, tooltips).

5. **Show Data from Multiple Perspectives**
   - High-level: totals, averages.
   - Mid-level: categories, groupings.
   - Micro-level: individual values.
   - Encourage deeper engagement by letting users drill down into the data.

6. **Use Descriptive Text**
   - Add titles, subtitles, and annotations to emphasize key insights.
   - Use headlines or summaries (e.g., "Chance of rain in the next hour") to provide quick value.
   - These DO NOT replace accessibility labels.

7. **Size Charts Appropriately**
   - Large charts: use for exploration and interaction (zooming, time range selection).
   - Small charts: use for glanceable data or previews of detailed views.
   - Always ensure text labels, axes, and annotations are readable.

8. **Stay Consistent Across Charts**
   - Use the same chart type, colors, and styles for related data.
   - Consistency helps users transfer understanding from one chart to another.
   - Only deviate visually when it's meaningful (e.g., highlighting contrast between datasets).

9. **Maintain Continuity Across Chart Views**
   - When showing the same dataset in multiple charts (summary vs expanded), use:
     - Same chart type
     - Same color palette
     - Same annotations and layout structure
   - This reinforces the connection between data views and avoids confusion.

---

WHEN NOT TO USE A CHART

- Don't use charts for raw data that doesn't need analysis.
- Use lists or tables for simple values, searchable records, or sortable items.

---

EXAMPLES (based on Apple apps)

- **Stocks App**: Line chart showing performance over a selected time range.
- **Health Activity**: Triple bar charts for Move, Exercise, and Stand over a day.
- **Weather App**: Summary text paired with hourly data chart — "Chance of rain in next hour".
- **Health Trends**: Mini trend charts expand into full-sized, visually consistent views.

---

ACCESSIBILITY CONSIDERATIONS

- Use \`accessibilityLabel\` to describe what the chart shows.
- Support \`accessibilityElements\` to let users explore data with assistive technologies.
- Don't assume visual-only information will reach all users — always describe key points in plain text.

---

SUMMARY

Use charts to:
- Reveal patterns, support decisions, and enhance understanding.
- Stay consistent, readable, and interactive.
- Guide users through insights, not overwhelm them.
- Reinforce visual identity while remaining accessible and performant.

Reference additional Apple topics:
- Accessibility for Charts
- Data-Driven UI
- Common Chart Types
- Animations for Teaching
- Interactive Data Navigation
    `,
    tags: [
      "iOS",
      "Data Visualization",
      "Charts",
      "Accessibility",
      "User Interface",
      "UX Design",
      "Data Display",
      "Design System",
      "Best Practices",
      "Mobile Design",
    ],
  },
];
