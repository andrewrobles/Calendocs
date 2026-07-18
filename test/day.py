import shutil
import subprocess
import unittest
from pathlib import Path

TEST_DIR = Path(__file__).resolve().parent
NOTES_DIR = TEST_DIR / "notes"
CLI_PATH = TEST_DIR.parent / "app" / "bin" / "main.js"

class TestNotesREADME(unittest.TestCase):
    def setUp(self):
        shutil.rmtree(NOTES_DIR, ignore_errors=True)
        NOTES_DIR.mkdir(parents=True, exist_ok=True)
        subprocess.run(["node", str(CLI_PATH), "month"], cwd=NOTES_DIR, capture_output=True, text=True, check=True)

    def test_month(self):
        result = subprocess.run(["node", str(CLI_PATH), "day"], cwd=NOTES_DIR, capture_output=True, text=True, check=True)
        self.assertEqual(result.stdout, 'Created day: "Monday, July 20"\n')

    def tearDown(self):
        shutil.rmtree(NOTES_DIR, ignore_errors=True)

if __name__ == "__main__":
    unittest.main()

