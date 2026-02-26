#!/bin/bash

# Script to update article placeholders with actual metadata

cd "$(dirname "$0")/articles"

# Article 2: UI Shine Effect
sed -i '' 's/\[TITLE\]/UI Shine Effect/g;s/\[CATEGORY\]/UI Effects/g;s/\[DATE\]/September 2025/g;s/\[X\]/5/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/ui-shine-creating-sweeping-shine-effects-for-unity-ui-0ebca5259174/g;s/\[PREV_SLUG\]/taming-polymorphic-serialization/g;s/\[PREV_TITLE\]/Taming Polymorphic Serialization/g;s/\[NEXT_SLUG\]/rectmask2d-performance/g;s/\[NEXT_TITLE\]/The Hidden Performance Killer: RectMask2D/g' ui-shine-effect.html

# Article 3: RectMask2D Performance
sed -i '' 's/\[TITLE\]/The Hidden Performance Killer: RectMask2D/g;s/\[CATEGORY\]/Performance/g;s/\[DATE\]/September 2025/g;s/\[X\]/5/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/fighting-entropy-in-unity-the-hidden-performance-killer-rectmask2d-1f81e30c1a7f/g;s/\[PREV_SLUG\]/ui-shine-effect/g;s/\[PREV_TITLE\]/UI Shine Effect/g;s/\[NEXT_SLUG\]/input-locks/g;s/\[NEXT_TITLE\]/Input Locks/g' rectmask2d-performance.html

# Article 4: Input Locks
sed -i '' 's/\[TITLE\]/Input Locks/g;s/\[CATEGORY\]/Input Systems/g;s/\[DATE\]/February 2023/g;s/\[X\]/5/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/fighting-entropy-in-unity-input-locks-17bda7b1d844/g;s/\[PREV_SLUG\]/rectmask2d-performance/g;s/\[PREV_TITLE\]/The Hidden Performance Killer: RectMask2D/g;s/\[NEXT_SLUG\]/optimizing-draw-calls/g;s/\[NEXT_TITLE\]/Optimizing Draw Calls/g' input-locks.html

# Article 5: Optimizing Draw Calls
sed -i '' 's/\[TITLE\]/Optimizing Draw Calls/g;s/\[CATEGORY\]/Optimization/g;s/\[DATE\]/February 2023/g;s/\[X\]/6/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/fighting-entropy-in-unity-optimizing-draw-calls-c98230aa9ad3/g;s/\[PREV_SLUG\]/input-locks/g;s/\[PREV_TITLE\]/Input Locks/g;s/\[NEXT_SLUG\]/turning-events-into-commands/g;s/\[NEXT_TITLE\]/Turning Events into Commands/g' optimizing-draw-calls.html

# Article 6: Turning Events into Commands
sed -i '' 's/\[TITLE\]/Turning Events into Commands/g;s/\[CATEGORY\]/Architecture/g;s/\[DATE\]/January 2023/g;s/\[X\]/6/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/fighting-entropy-in-unity-turning-events-into-commands-2cf4be3d85f2/g;s/\[PREV_SLUG\]/optimizing-draw-calls/g;s/\[PREV_TITLE\]/Optimizing Draw Calls/g;s/\[NEXT_SLUG\]/warnings/g;s/\[NEXT_TITLE\]/Warnings/g' turning-events-into-commands.html

# Article 7: Warnings
sed -i '' 's/\[TITLE\]/Warnings/g;s/\[CATEGORY\]/Code Quality/g;s/\[DATE\]/January 2023/g;s/\[X\]/4/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/fighting-entropy-in-unity-warnings-7fdc64c73641/g;s/\[PREV_SLUG\]/turning-events-into-commands/g;s/\[PREV_TITLE\]/Turning Events into Commands/g;s/\[NEXT_SLUG\]/cameras-and-rendering/g;s/\[NEXT_TITLE\]/Cameras and Rendering/g' warnings.html

# Article 8: Cameras and Rendering
sed -i '' 's/\[TITLE\]/Cameras and Rendering/g;s/\[CATEGORY\]/Rendering/g;s/\[DATE\]/January 2023/g;s/\[X\]/5/g;s/\[MEDIUM_URL\]/https:\/\/medium.com\/@galbartouv\/fighting-entropy-in-unity-cameras-and-rendering-d64a7b6509db/g;s/\[PREV_SLUG\]/warnings/g;s/\[PREV_TITLE\]/Warnings/g' cameras-and-rendering.html

echo "All articles updated successfully!"
