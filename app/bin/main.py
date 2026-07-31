#!/usr/bin/env python3
import sys
from pathlib import Path


def main():
    args = sys.argv[1:]

    if not args or args[0] in {"-h", "--help"}:
        print("Usage: note new <title>")
        return 0

    if args[0] != "new":
        print("Python entrypoint placeholder: only 'new' is supported for now")
        return 2

    title = " ".join(args[1:]).strip()
    if not title:
        print("Error: title is required")
        return 1

    Path.cwd().joinpath("README.md").write_text("", encoding="utf-8")
    return 0


if __name__ == "__main__":
    sys.exit(main())