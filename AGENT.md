# Your job, in one page

You are entering make.fun's coin bounty `makefun-coin-promo-01`: launch a real coin on
pump.fun that promotes make.fun to pump.fun's traders, and hand in its mint and create
signature. An AI judge compares the coins two at a time on originality, how well they
promote make.fun, and how likely they are to draw buyers. The top 50 share $1,000.

The coin is **Payout Machine ($PAYOUT)**. The idea, in one line: make.fun IS a slot
machine that pays builders — an agent pulls the lever (builds the code), the machine
pays out real USDC. The logo is a gold-and-purple slot machine whose three reels show
`{ }`, `$` and a star, coins bursting from the payout tray. The name, ticker, logo and
story are one concept: every spin is a bounty, every jackpot is real USDC.

## The coin

- **Name:** Payout Machine
- **Ticker:** PAYOUT
- **Website:** https://make.fun/bounty/makefun-coin-promo-01 (required — pump.fun shows
  it as the coin's clickable website button)
- **Description:** "Payout Machine — the slot machine that pays builders. Pull the
  lever, ship the code, win the USDC. Made for the make.fun bounty
  https://make.fun/bounty/makefun-coin-promo-01 — make.fun is a site where people
  and their AI agents build programs, enter them in paid competitions (bounties)
  and are scored and ranked in the open. Every spin is a bounty, every jackpot is
  real USDC. This coin IS the machine: feed it code, it pays out."
- **Logo:** `logo.png` in this repo (drawn by the agent for this entry, 1600x1600
  PNG, sha256 015805aa8f1e34261d1df423c9342c25960ff1bfb9cd04324ec9031445354d81).
  The metadata image is the GitHub raw URL of that file.

## Launch (parent step — do not run from here without the agent wallet)

1. Verify the agent wallet `5Cp6PTGTvV9VEeboGeMY8aQsj5kSL1mFCGQu3Tk6BcAV`
   holds enough SOL. The last launch cost ~0.0104 SOL; the wallet held
   0.013184831 SOL — tight, check the balance live before launching.
2. Confirm `metadata.json` is live at its raw URL (HTTP 200).
3. Run the launch script in `LAUNCH-NOTES.md` (pumpportal `trade-local`, the same
   flow as the proven $GHOST launch): it builds the create transaction, signs it
   with the agent wallet + a fresh mint keypair, simulates it, and sends it.
   pumpportal `trade-local` returns the serialized transaction as RAW BYTES, not
   base64 — the script handles that.
4. Record the mint and the create transaction's base58 signature in `LAUNCH.json`
   (both placeholders replaced), commit, and submit. The coin must be created
   inside the window: opened 2026-11-15T06:00:00Z, closes 2026-11-17T06:00:00Z
   (Nov 17 13:00 WIB).

## The program

`main.ts` (Node 22, standard library only) copies `LAUNCH.json` from the repo root
to `/output/LAUNCH.json`. That is all it does — nothing it writes is judged; the
house reads the coin itself from pump.fun.

Run it locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

`out/LAUNCH.json` is then byte for byte this directory's `LAUNCH.json`.

## Before you submit

From the kit directory, run the site's pre-submit checks on this repository and the
transcripts bundle:

    node cli/makefun.mjs check --kit . --repo <this repository> --transcripts transcripts.tar.gz

The entry is signed by the agent wallet `5Cp6...` (linked to @westi7460). The repo
carries `.makefun/owner.json` naming that wallet, an MIT license, and the three live
make.fun badges in its README.
