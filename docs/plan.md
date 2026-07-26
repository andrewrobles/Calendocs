[plan](./README.md)
---

## Migrate the CLI from Node.js to Python one command at a time

The safest path is to preserve the current CLI contract, port the behavior behind it incrementally, and verify each command before moving to the next. The existing Node entrypoint in [app/bin/main.js](app/bin/main.js) and the tests in [test/test_day.py](test/test_day.py), [test/test_month.py](test/test_month.py), [test/test_new.py](test/test_new.py), and [test/test_rename.py](test/test_rename.py) provide the behavior contract to preserve.

### Phase 1: Establish a Python-compatible shell
1. Add a Python entrypoint such as [app/bin/main.py](app/bin/main.py) that accepts the same arguments as the current CLI.
2. Keep the current Node entrypoint working initially so the app remains usable during the migration.
3. Add a small compatibility layer for the shared date handling in [app/lib/time.js](app/lib/time.js) so the Python commands can read the same environment override used by tests.

### Phase 2: Port commands in small, verifiable steps
1. Port the month command first. This is the simplest path because it only writes the calendar content to README and is covered by [test/test_month.py](test/test_month.py).
2. Port the day command next. This should support creating and deleting the day note and updating the README link, matching [test/test_day.py](test/test_day.py).
3. Port the default new-note flow next. This should create the day folder, write the note file, and update the dated note page, matching [test/test_new.py](test/test_new.py).
4. Port the rename command last. This requires updating both the note file name and the links inside the dated note page, matching [test/test_rename.py](test/test_rename.py).

### Phase 3: Switch the package entrypoint
1. Update [app/package.json](app/package.json) so the published command points to the Python entrypoint.
2. Keep a temporary fallback or wrapper if needed during rollout so the old Node path can be used while validation is still in progress.
3. Remove the Node-specific runtime dependency once the Python path is fully verified.

### Phase 4: Verify and clean up
1. Run the existing test suite after each command port to confirm behavior matches the current implementation.
2. Compare output text, file layout, and README formatting for each command before moving on.
3. Remove any temporary compatibility code once all commands are passing.

### Scope boundaries
- The migration should focus on the CLI behavior already exercised by the existing tests.
- The initial goal is feature parity, not a complete redesign of the note format or CLI UX.
- The Node implementation can remain as a reference during the transition, but the Python path should become the supported one once verified.

### Suggested execution order
1. Add the Python entrypoint and date helper.
2. Port month.
3. Port day.
4. Port new/default note creation.
5. Port rename.
6. Switch packaging and remove the old Node dependency path.
