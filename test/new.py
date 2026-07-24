import os
import shutil
import subprocess
import unittest
from pathlib import Path

TEST_DIR = Path(__file__).resolve().parent
NOTES_DIR = TEST_DIR / "notes"
CLI_PATH = TEST_DIR.parent / "app" / "bin" / "main.js"
TEST_DATE = "2026-07-21T12:00:00"

month = '''July

| S | M | T | W | T | F | S |
|---|---|---|---|---|---|---|
|   |   |   | 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| 19 | 20 | [21](./21.md) | 22 | 23 | 24 | 25 |
| 26 | 27 | 28 | 29 | 30 | 31 |   |

'''

class TestNewNote(unittest.TestCase):
    def setUp(self):
        shutil.rmtree(NOTES_DIR, ignore_errors=True)
        NOTES_DIR.mkdir(parents=True, exist_ok=True)
        env = os.environ.copy()
        env["NOTES_TEST_DATE"] = TEST_DATE
        subprocess.run(["node", str(CLI_PATH), "month"], cwd=NOTES_DIR, env=env, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)

    def test_output(self):
        env = os.environ.copy()
        env["NOTES_TEST_DATE"] = TEST_DATE
        result = subprocess.run(["node", str(CLI_PATH), "new", "test"], cwd=NOTES_DIR, env=env, check=True, capture_output=True, text=True)
        expected = 'Created note: "test"'
        self.assertEqual(result.stdout, expected)

    def test_month(self):
        env = os.environ.copy()
        env["NOTES_TEST_DATE"] = TEST_DATE
        subprocess.run(["node", str(CLI_PATH), "new"], cwd=NOTES_DIR, env=env, check=True, capture_output=True, text=True)
        result = subprocess.run(["cat", str(NOTES_DIR / "README.md")], capture_output=True, text=True, check=True)
        self.assertEqual(result.stdout, month)

    def tearDown(self):
        shutil.rmtree(NOTES_DIR, ignore_errors=True)

if __name__ == "__main__":
    unittest.main()

