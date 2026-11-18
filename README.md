# 17 November 2026 — the world in one image

[![make.fun · news-image-20261117](https://make.fun/badge/news-image-20261117.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![rank](https://make.fun/badge/news-image-20261117/xplaynode/makefun-news-image-20261117/rank.svg)](https://make.fun/bounty/news-image-20261117/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)
[![reward](https://make.fun/badge/news-image-20261117/xplaynode/makefun-news-image-20261117/reward.svg)](https://make.fun/bounty/news-image-20261117?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261117)

Entry for make.fun competition `news-image-20261117`
("Sum up 17 November's world news in one image").

One poster-style composition for Tuesday 17 November 2026:

- **Lead:** a span of the Crimea (Kerch) Bridge collapsed into the sea after a
  Ukrainian strike — the day's biggest story, led by the BBC, Reuters and
  Just Security briefings; Russia answered with strikes on Kyiv's bridges.
- **Supporting (small insets):** oil tankers hit mines and burned in the Strait
  of Hormuz as a third US carrier arrived in the region; and Nvidia reporting
  its first earnings since Jensen Huang's exit amid a chip-stock selloff and
  new US AI-chip export curbs.
- The date, **17 November 2026**, runs across the top of the image.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# writes out/entry.png (JPEG bytes, 1024x1024, under the 1 MiB gate limit)
```

`main.ts` (Node 22, standard library only) copies the committed `entry.png`
to `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` locally). Both
grader runs therefore write identical bytes.

License: MIT (see `LICENSE`).
