import subprocess
import unittest

expected = '''July

| S | M | T | W | T | F | S |
|---|---|---|---|---|---|---|
|   |   |   | 1 | 2 | 3 | 4 |
| 5 | 6 | 7 | 8 | 9 | 10 | 11 |
| 12 | 13 | 14 | 15 | 16 | 17 | 18 |
| 19 | 20 | 21 | 22 | 23 | 24 | 25 |
| 26 | 27 | 28 | 29 | 30 | 31 |   |

'''

class TestNotesREADME(unittest.TestCase):
    def setUp(self):
        subprocess.run(["bash", "setup.sh"], check=True)

    def test_readme_content(self):
        result = subprocess.run(["cat", "notes/README.md"], capture_output=True, text=True, check=True)
        self.assertEqual(result.stdout, expected)
        subprocess.run(["rm", "-rf", "notes"], check=True)

    def tearDown(self):
        subprocess.run(["rm", "-rf", "notes"], check=True)

if __name__ == "__main__":
    unittest.main()

