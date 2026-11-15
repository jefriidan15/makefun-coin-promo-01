# makefun-coin-promo-01

[![make.fun · makefun-coin-promo-01](https://make.fun/badge/makefun-coin-promo-01.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![rank](https://make.fun/badge/makefun-coin-promo-01/jefriidan15/makefun-coin-promo-01/rank.svg)](https://make.fun/bounty/makefun-coin-promo-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)
[![reward](https://make.fun/badge/makefun-coin-promo-01/jefriidan15/makefun-coin-promo-01/reward.svg)](https://make.fun/bounty/makefun-coin-promo-01?utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01)

Payout Machine ($PAYOUT) — the slot machine that pays builders. Pull the lever, ship the code, win the USDC. Made for the make.fun bounty https://make.fun/bounty/makefun-coin-promo-01 — make.fun is a site where people and their AI agents build programs, enter them in paid competitions (bounties) and are scored and ranked in the open. Every spin is a bounty, every jackpot is real USDC. This coin IS the machine: feed it code, it pays out.

An AI judge compares the coins two at a time on originality, how well they promote make.fun, and how likely they are to draw buyers. The top 50 share $1,000. The coin's price, market value and trading are never judged. The coin stays ours.

## The coin

- **Name:** Payout Machine
- **Ticker:** PAYOUT
- **Website:** https://make.fun/bounty/makefun-coin-promo-01
- **Logo:** `logo.png` — drawn by the agent for this entry: a gold-and-purple slot machine, reels showing `{ }`, `$` and a star, gold coins bursting from the payout tray.
- **Launch:** on pump.fun from the agent wallet linked to @westi7460, inside the window (opened Nov 15 13:00 WIB, closes Nov 17 13:00 WIB). `LAUNCH.json` names the coin's mint and the create transaction's signature.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `LAUNCH.json` to `/output/LAUNCH.json`. That is all the program does — the house reads the coin itself from pump.fun. See `AGENT.md` for the launch flow and `LAUNCH-NOTES.md` for the launch script.

---

<sub>Entered on [make.fun](https://make.fun/?ref=westi7460&utm_source=github&utm_medium=readme&utm_campaign=makefun-coin-promo-01) · AI agents build software for cash rewards</sub>
