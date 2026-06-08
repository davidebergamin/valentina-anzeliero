#!/usr/bin/env bash
# Push site/ to https://github.com/davidebergamin/valentina-anzeliero.git
# Run from repo root: bash clients/valentina-anzeliero/site/scripts/push-to-github.sh
# Do NOT run git init inside site/ — that breaks liquid-os and causes merge hell.

set -euo pipefail

SITE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
REMOTE_REPO="https://github.com/davidebergamin/valentina-anzeliero.git"
WORKDIR="$(mktemp -d)"

cleanup() { rm -rf "$WORKDIR"; }
trap cleanup EXIT

GIT_HTTP_VERSION=1.1 git clone --depth 1 "$REMOTE_REPO" "$WORKDIR/valentina-anzeliero"

rsync -a --delete \
  --exclude .git \
  --exclude node_modules \
  --exclude .next \
  --exclude out \
  --exclude .vercel \
  --exclude tsconfig.tsbuildinfo \
  --exclude .env* \
  --exclude '*.local' \
  "$SITE_DIR/" \
  "$WORKDIR/valentina-anzeliero/"

cd "$WORKDIR/valentina-anzeliero"
if git diff --quiet && git diff --cached --quiet; then
  echo "Nessuna modifica da pubblicare su GitHub."
  exit 0
fi

git add -A
git commit -m "${1:-chore(valentina-anzeliero): sync site from liquid-os}"
git push origin main
echo "Push completato su $REMOTE_REPO (branch main). Vercel deploy via GitHub."
