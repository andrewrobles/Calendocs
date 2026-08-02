import os
import shutil
import subprocess
import unittest
from pathlib import Path

TEST_DIR = Path(__file__).resolve().parent
NOTES_DIR = TEST_DIR / "notes"
CLI_PATH = TEST_DIR.parent / "app" / "bin" / "main.js"
TEST_DATE = "2026-07-20T12:00:00"

class TestNotesREADME(unittest.TestCase):
    def setUp(self):
        shutil.rmtree(NOTES_DIR, ignore_errors=True)
        NOTES_DIR.mkdir(parents=True, exist_ok=True)
        subprocess.run(["node", str(CLI_PATH), "month"], cwd=NOTES_DIR, capture_output=True, text=True, check=True)

    def test_month(self):
        env = os.environ.copy()
        env["NOTES_TEST_DATE"] = TEST_DATE
        result = subprocess.run(["node", str(CLI_PATH), "day"], cwd=NOTES_DIR, env=env, capture_output=True, text=True, check=True)
        self.assertEqual(result.stdout, 'Created day: "Monday, July 20"\n')

    def tearDown(self):
        shutil.rmtree(NOTES_DIR, ignore_errors=True)

if __name__ == "__main__":
    unittest.main()

