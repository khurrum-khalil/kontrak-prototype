#!/usr/bin/env python3
"""Rebuild index.html from index.template.html + the screen files in js/.

The screens are embedded into index.html so the page also works when opened
straight from disk (file:// blocks the separate .jsx requests). Edit the files
in js/, then run:  python3 build.py
"""
from pathlib import Path

ROOT = Path(__file__).parent
ORDER = ["chrome", "home", "browse-work", "gig-detail", "sign-up",
         "visa-rules", "for-clients", "pricing"]

blocks = []
for name in ORDER:
    src = (ROOT / "js" / f"{name}.jsx").read_text(encoding="utf-8").strip()
    blocks.append(
        f'<script type="text/babel" data-presets="react" data-src="js/{name}.jsx">\n'
        f"{src}\n</script>"
    )

template = (ROOT / "index.template.html").read_text(encoding="utf-8")
if "<!-- SCREENS -->" not in template:
    raise SystemExit("index.template.html is missing the <!-- SCREENS --> marker")

(ROOT / "index.html").write_text(
    template.replace("<!-- SCREENS -->", "\n".join(blocks)), encoding="utf-8"
)
print(f"index.html rebuilt from {len(ORDER)} screens")
